/**
* Une organisation désigne un ensemble dans lequel les données vont être stockées. Chaque utilisateur Metarisc possède ses propres organisations. L\'organisation joue un rôle central ou l\'ensemble des utilisateurs Metarisc peuvent collaborer, avec des fonctionnalités de sécurité et d\'administration propres.
*/
export type Organisation = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Nom de l\'organisation.
    */
    'nom'?: string;
    /**
    * Lien URL vers le logo représentant l\'organisation.
    */
    'logo_url'?: string;
    /**
    * Type de l\'organisation.
    */
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Sis = 'sis'
}
