/**
* Une commission est un organisme compétent pour donner des avis.
*/
export type Commission = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Type de la commission (peut être une commission de sécurité, un conseil départemental ...).
    */
    'type'?: TypeEnum;
    /**
    * Nom de la commission.
    */
    'libelle'?: string;
};

export enum TypeEnum {
    SousCommissionDpartementale = 'Sous-commission départementale',
    CommissionCommunale = 'Commission communale',
    CommissionIntercommunale = 'Commission intercommunale',
    CommissionDarrondissement = 'Commission d\'arrondissement',
    CoDerst = 'CoDERST'
}
