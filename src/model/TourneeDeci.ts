import { TourneeDeciSimpleAllOfModele } from '../../src/model/TourneeDeciSimpleAllOfModele';

/**
* Une tournée de reconnaissance opérationnelle portant sur la visibilité, l’accessibilité,  la signalisation et la manoeuvrabilité (ouverture et fermeture) des PEI.
*/
export type TourneeDeci = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Nom d\'identification de la tournée.
    */
    'libelle'?: string;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs.
    */
    'description'?: string;
    /**
    * Date de création de la tournée.
    */
    'date_de_creation'?: Date;
    /**
    * Type de la tournée.
    */
    'type'?: TypeEnum;
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
