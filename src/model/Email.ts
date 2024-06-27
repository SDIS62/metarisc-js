/**
* Email associé à un utilisateur Metarisc.
*/
export type Email = {
    /**
    * Adresse email de l\'utilisateur.
    */
    'email'?: string;
    /**
    * Une adresse email \"primary\" est utilisée pour les notifications, la gestion du compte et les communications.
    */
    'is_primary'?: boolean;
    /**
    * Détermine si l\'adresse email peut être publiée publiquement.
    */
    'is_publicly_visible'?: boolean;
    /**
    * Détermine si l\'adresse email est vérifiée.
    */
    'is_verified'?: boolean;
};
