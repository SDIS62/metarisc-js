/**
* Document représentant un fichier informatique stocké sur internet.
*/
export type PieceJointe = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Point de stockage du fichier.
    */
    'url'?: string;
    /**
    * Nom du fichier joint.
    */
    'nom'?: string;
    /**
    * Description du fichier joint.
    */
    'description'?: string;
    /**
    * Type de la pièce jointe.
    */
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Photo = 'photo',
    Plan = 'plan',
    Annexe = 'annexe',
    Divers = 'divers'
}
