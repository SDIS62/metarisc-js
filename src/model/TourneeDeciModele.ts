import { TourneeDeciBase } from '../model/TourneeDeciBase';

/**
* Modèle de tournée DECI permettant une programmation cyclique.
*/
export type TourneeDeciModele = TourneeDeciBase & { 
    /**
    * Numéro du mois de début de la tournéee programmée
    */
    'mois_debut'?: number;
    /**
    * Numéro de mois de fin de la tournéee programmée
    */
    'mois_fin'?: number;
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
