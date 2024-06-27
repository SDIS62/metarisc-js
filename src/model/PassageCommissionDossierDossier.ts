import { Dossier } from '../model/Dossier';

/**
* Dossier incrit à l\'ordre du jour d\'une date de passage en commission.
*/
export type PassageCommissionDossierDossier = Dossier & { 
};

export enum TypeEnum {
    DecideclarationPei = 'deci:declaration_pei',
    ErpautorisationDeTravaux = 'erp:autorisation_de_travaux',
    ErpvisitePeriodique = 'erp:visite_periodique'
}

export enum StatutEnum {
    Ouvert = 'OUVERT',
    Clos = 'CLOS'
}
