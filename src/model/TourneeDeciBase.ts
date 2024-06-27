/**
* Tournée DECI de base.
*/
export type TourneeDeciBase = {
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
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
