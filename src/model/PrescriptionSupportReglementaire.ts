/**
* Texte réglementaire destiné à assurer la sécurité contre les risques d\'incendie  et de panique dans les établissements recevant du public.
*/
export type PrescriptionSupportReglementaire = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Nature du support réglementaire.
    */
    'nature'?: NatureEnum;
    /**
    * Le CID est l’identifiant commun à l’ensemble des versions d’un objet Legifrance (article, section, texte). Si le CID est renseigné, alors ce support réglementaire est sourcé depuis Legifrance.
    */
    'legifrance_cid'?: string;
    /**
    * Contenu du support régelementaire.
    */
    'contenu'?: string;
    /**
    * Titre du contenu réglementaire.
    */
    'titre'?: string;
    /**
    * Etats juridiques d’un support réglementaire.
    */
    'etat'?: EtatEnum;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs ou la recherche.
    */
    'reference'?: string;
};

export enum NatureEnum {
    Arrete = 'arrete',
    Article = 'article',
    Local = 'local'
}

export enum EtatEnum {
    EnVigueur = 'en_vigueur'
}
