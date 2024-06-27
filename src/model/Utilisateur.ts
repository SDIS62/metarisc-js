export type Utilisateur = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Prénom de l\'utilisateur.
    */
    'first_name'?: string;
    /**
    * Nom de l\'utilisateur.
    */
    'last_name'?: string;
    /**
    * Date à laquelle l\'utilisateur a été créé.
    */
    'created_at'?: Date;
    /**
    * Date à laquelle l\'utilisateur a été mis à jour.
    */
    'updated_at'?: Date;
    /**
    * Identifiant \'tz database\' du Fuseau horaire de l\'utilisateur. Voir : https://www.iana.org/time-zones Liste des fuseaux horaires : https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    */
    'timezone'?: string;
    /**
    * État d\'activation du compte utilisateur.
    */
    'is_active'?: boolean;
    /**
    * État de vérification du compte utilisateur.
    */
    'is_verified'?: boolean;
    /**
    * Fonction de l\'utilisateur.
    */
    'fonction'?: string;
    /**
    * Lien URL vers l\'avatar de l\'utilisateur.
    */
    'avatar_url'?: string;
};
