import { Utilisateur } from '../../src/model/Utilisateur';

/**
* Une notification est un objet créé pour avertir ou informer un utilisateur pour un évévemenent spécifique.
*/
export type Notification = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Titre de la notification.
    */
    'title'?: string;
    /**
    * Contenu de la notification.
    */
    'message'?: string;
    /**
    * Ensemble de paires clé-valeur que vous pouvez attacher à un objet. Cela peut être utile pour stocker des informations supplémentaires sur l\'objet dans un format structuré.
    */
    'contexte'?: any;
    'date_creation'?: Date;
    'date_de_lecture'?: Date;
    'utilisateur_id'?: string;
    'utilisateur'?: Utilisateur;
};
