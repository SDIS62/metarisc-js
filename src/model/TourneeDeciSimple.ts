import { TourneeDeciSimpleAllOfModele } from '../../src/model/TourneeDeciSimpleAllOfModele';

import { TourneeDeciBase } from '../model/TourneeDeciBase';

/**
* Tournéee DECI déclenchée
*/
export type TourneeDeciSimple = TourneeDeciBase & { 
    /**
    * Pourcentage de complétion de la tournée (en %)
    */
    'pourcentage'?: number;
    /**
    * État de la complétion de la tournée
    */
    'est_terminee'?: boolean;
    /**
    * Date de début de la tournée
    */
    'date_de_debut'?: Date;
    /**
    * Date de fin de la tournée
    */
    'date_de_fin'?: Date;
    'modele'?: TourneeDeciSimpleAllOfModele;
    /**
    * Identifiant de la tournée DECI modèle à utiliser pour la création
    */
    'modele_id'?: string;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
