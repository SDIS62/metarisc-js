/**
* Représente une date de passage en commission.
*/
export type PassageCommission = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Date de début du passage en commission programmée.
    */
    'date_debut'?: Date;
    /**
    * Date de fin du passage en commission programmée.
    */
    'date_fin'?: Date;
    /**
    * Type du passage en commission.
    */
    'type'?: TypeEnum;
    /**
    * Libellé de la date de passage en commission. Souvent utile pour affichage aux utilisateurs.
    */
    'libelle'?: string;
};

export enum TypeEnum {
    Salle = 'salle',
    VisiteDeSecurite = 'visite_de_securite',
    GroupeDeVisite = 'groupe_de_visite'
}
