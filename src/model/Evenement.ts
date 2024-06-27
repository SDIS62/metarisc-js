/**
* Un événement calendaire.
*/
export type Evenement = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Titre de l\'événement.
    */
    'title'?: string;
    /**
    * Type de l\'événement.
    */
    'type'?: TypeEnum;
    /**
    * Description de l\'événement.
    */
    'description'?: string;
    /**
    * Date de début de l\'événement.
    */
    'date_debut'?: Date;
    /**
    * Date de fin de l\'événement.
    */
    'date_fin'?: Date;
};

export enum TypeEnum {
    Defaut = 'DEFAUT',
    ReconnaissanceOperationnelleAnnuelle = 'RECONNAISSANCE_OPERATIONNELLE_ANNUELLE',
    VisitePeriodique = 'VISITE_PERIODIQUE',
    CommissionSecurite = 'COMMISSION_SECURITE'
}
