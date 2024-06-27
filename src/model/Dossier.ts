import { DossierCreateur } from '../../src/model/DossierCreateur';
import { ERP } from '../../src/model/ERP';
import { PEI } from '../../src/model/PEI';

/**
* Les dossiers sont un ensemble de documents administratifs et techniques. L\'instruction du dossier suit une logique pré-définie selon le type.
*/
export type Dossier = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Type du dossier.
    */
    'type'?: TypeEnum;
    /**
    * Objet du dossier.
    */
    'objet'?: string;
    /**
    * Date de création du dossier.
    */
    'date_de_creation'?: Date;
    'createur'?: DossierCreateur;
    /**
    * Nom de l\'application / intégration ayant généré le dossier.
    */
    'application_utilisee_nom'?: string;
    /**
    * Indicateur permettant de savoir si le dossier est en cours de traitement.
    */
    'statut'?: StatutEnum;
    'pei'?: PEI;
    'erp'?: ERP;
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
