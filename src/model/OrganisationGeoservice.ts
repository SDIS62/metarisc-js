import { OrganisationGeoserviceOrganisation } from '../../src/model/OrganisationGeoserviceOrganisation';

/**
* Un géoservice est un service web pour représenter des informations géographiques lié à une organisation. Les géoservices sont basés sur les standards OGC (https://www.ogc.org).
*/
export type OrganisationGeoservice = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    'organisation'?: OrganisationGeoserviceOrganisation;
    /**
    * Nom du géoservice.
    */
    'nom'?: string;
    /**
    * Type de la norme utilisée par le géoservice.
    */
    'type'?: TypeEnum;
    /**
    * L\'URL du serveur hébergeant les informations géographiques.
    */
    'url'?: string;
};

export enum TypeEnum {
    Wfs = 'WFS',
    Wms = 'WMS'
}
