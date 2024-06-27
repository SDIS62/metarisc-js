/**
* Message de base d\'un flux d\'activité.
*/
export type FeedMessageBase = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Titre du message.
    */
    'titre'?: string;
    /**
    * Date de création du message.
    */
    'date_de_creation'?: Date;
    /**
    * Type du message.
    */
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Texte = 'texte',
    ListePei = 'liste_pei'
}
