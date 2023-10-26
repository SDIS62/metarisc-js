import { AxiosResponse } from "axios";
import { AuthMethod, Client } from "./client";

export interface RequestConfig {
  body?: any;
  headers?: { [name: string]: string | string[] };
  params?: { [param: string]: string | string[] };
  endpoint?: string;
  method?: string;
}

export interface MetariscConfig {
  metarisc_url?: string;
  client_id: string;
  client_secret?: string;
}

export interface OAuth2Options {
  client_id?: string;
  client_secret?: string;
  response_type?: string;
  redirect_uri?: string;
  state?: string;
  code?: string;
  scope?: string;
  [name: string]: string;
}

export interface GrantResponse {
  access_token?: string;
  expires_in?: number;
  id_token?: string;
  refresh_token?: string;
  refresh_expires_in?: number;
  session_state?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
}

export class Core {
  protected client: Client;
  protected config: MetariscConfig;

  constructor(config: MetariscConfig, client?: Client) {
    this.config = config;
    this.client = client ?? new Client(config);
  }

  async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.client.request<T>(config);
  }

  async *autoPagingIterator<T>(
    config: RequestConfig
  ): AsyncGenerator<T, void, unknown> {
    let current_page: number =
      config.params && "page" in config.params
        ? parseInt(config.params["page"].toString())
        : 1;
    const per_page: number =
      config.params && "per_page" in config.params
        ? parseInt(config.params["per_page"].toString())
        : 25;

    while (true) {
      const response = <
        AxiosResponse<{
          data?: Array<T>;
          meta?: {
            pagination?: {
              total?: number;
              count?: number;
              per_page?: number;
              current_page?: number;
              total_pages?: number;
            };
          };
        }>
      >await this.request({ ...config, ...{ params: { page: current_page.toString(), per_page: per_page.toString() } } });

      for (const element of response.data.data) {
        yield element;
      }

      if (
        response.data.meta.pagination.current_page ===
        response.data.meta.pagination.total_pages
      ) {
        break;
      }

      current_page++;
    }
  }

  async authenticate(
    auth_method: AuthMethod,
    options: OAuth2Options
  ): Promise<void> {
    options.client_id = this.config?.client_id;
    options.client_secret = this.config?.client_secret;

    await this.client.authenticate(auth_method, options);
  }

  getConfig(): MetariscConfig {
    return this.config;
  }

  getClient(): Client {
    return this.client;
  }
}
