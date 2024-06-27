/**
* Représente une \"carte de visite\" aggrégeant les coordonnées d\'un contact.
*/
export type Contact = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Nom de famille du contact.
    */
    'nom'?: string;
    /**
    * Prénom du contact.
    */
    'prenom'?: string;
    /**
    * La fonction professionnelle d\'un contact.
    */
    'fonction'?: string;
    /**
    * Le numéro de téléphone fixe du contact.
    */
    'telephone_fixe'?: string;
    /**
    * Le numéro de téléphone portable du contact.
    */
    'telephone_portable'?: string;
    /**
    * Le numéro de fax du contact.
    */
    'telephone_fax'?: string;
    /**
    * Adresse complète du contact.
    */
    'adresse'?: string;
    /**
    * Le site internet du contact.
    */
    'site_web_url'?: string;
    /**
    * Le titre de civilité utilisé.
    */
    'civilite'?: CiviliteEnum;
    /**
    * Nom de la société / entreprise liée à ce contact.
    */
    'societe'?: string;
    /**
    * Adresse email du contact.
    */
    'email'?: string;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs.
    */
    'observations'?: string;
};

export enum CiviliteEnum {
    M = 'M',
    Mme = 'Mme',
    Mx = 'Mx'
}
