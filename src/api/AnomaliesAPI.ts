import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import { Client } from "../client";
import { Collection } from "../collection";
import { AnomalieDECI } from '../model/AnomalieDECI';

export class AnomaliesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Liste des anomalies.
     * @param page Numéro de page
     * @param perPage Nombre de résultats demandé
     */
    paginateAnomalies(page?: number, perPage?: number): Collection<AnomalieDECI>
    {
        const pathVariable = {  };
        return this.collect<AnomalieDECI>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/anomalies'),
            headers: {  },
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() },
            body: {}
        });
    }
    
}
