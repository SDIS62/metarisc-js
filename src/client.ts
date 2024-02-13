import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import axiosRetry from "axios-retry";
import oauth from "axios-oauth-client";
import { GrantResponse, MetariscConfig, OAuth2Options } from './core';
import { OAuth2 } from "./auth/oauth2";
import { setupCache } from 'axios-cache-interceptor';

interface RequestConfig {
  body?: any;
  headers?: { [name: string]: string | string[] };
  params?: { [param: string]: string | string[] };
  endpoint?: string;
  method?: string;
}

export enum AuthMethod {
  CLIENT_CREDENTIALS,
  AUTHORIZATION_CODE
}

export class Client {

  private axios : AxiosInstance;

  private access_token: string;

  constructor(config : MetariscConfig) {
    this.axios = axios.create({
      baseURL: config.metarisc_url ?? 'https://api.metarisc.fr/',
      'headers': {
        'common': this.getDefaultHeaders()
      }
    });

    // Axios Interceptors
    // Request interceptors are FILO (First In Last Out)
    // Response interceptors are FIFO (First In First Out)

    // Axios interceptor : Enable HTTP Caching
    // When combining axios-cache-interceptors with other interceptors, you may encounter some inconsistences.
    // See : https://github.com/arthurfiorette/axios-cache-interceptor/issues/449#issuecomment-1370327566
    this.axios = setupCache(this.axios);

    // Axios interceptor : Retry strategy
    axiosRetry(this.axios, {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay
    });
  }

  async authenticate(auth_method: AuthMethod, options: OAuth2Options): Promise<GrantResponse> {
    let result;
    switch (auth_method) {
      case AuthMethod.AUTHORIZATION_CODE:
        result = await this.getAuthorizationCode(options);
        break;
      case AuthMethod.CLIENT_CREDENTIALS:
        result = await this.getClientCredentials(options);
        break;
      default:
        return;
    }

    if (result) {
      const token = result.token_type + ' ' + result.access_token;
      this.setAccessToken(token);
    }

    return result;
  }

  async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    config.headers['Authorization'] = this.getAccessToken();
    return this.axios.request<T>({
      method: config.method || 'GET',
      url: config.endpoint || '/',
      params: config.params,
      data: config.body,
      headers: config.headers
    });
  }

  async getAuthorizationCode(options: OAuth2Options): Promise<GrantResponse> {
    const fn = oauth.authorizationCode(
      axios.create(),
      OAuth2.ACCESS_TOKEN_URL,
      options.client_id ?? '',
      options.client_secret ?? '',
      options.redirect_uri ?? '',
      options.code ?? '',
      options.scope ?? ''
    )
    return await fn(options.code ?? '', options.scope ?? '')
  }

  async getClientCredentials(options: OAuth2Options): Promise<GrantResponse> {
    const fn = oauth.clientCredentials(
      axios.create(),
      OAuth2.ACCESS_TOKEN_URL,
      options.client_id ?? '',
      options.client_secret ?? ''
    )
    return await fn(options.scope ?? '');
  }

  setAccessToken(access_token: string): void {
    this.access_token = access_token;
    this.axios.interceptors.request.use(function (config) {
      config.headers['Authorization'] = access_token;
      return config;
    });
  }

  getAccessToken(): string {
    return this.access_token;
  }

  /**
   * Retourne les headers HTTP par défauts devant être présents dans toutes les requêtes Metarisc.
   */
  private getDefaultHeaders() : RawAxiosRequestHeaders
  {
    const headers : RawAxiosRequestHeaders = {};

    // UA Headers
    headers['User-Agent'] = 'MetariscJs/dev'; // Format User-Agent (https://www.rfc-editor.org/rfc/rfc9110#name-user-agent)
    headers['Metarisc-User-Agent'] = JSON.stringify({
      'lang': 'js'
    });

    return headers;
  }
}