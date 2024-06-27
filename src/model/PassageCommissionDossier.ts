import { Avis } from '../../src/model/Avis';
import { PassageCommissionDossierDossier } from '../../src/model/PassageCommissionDossierDossier';

export type PassageCommissionDossier = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    'dossier'?: PassageCommissionDossierDossier;
    /**
    * Identifiant du dossier incrit à l\'ordre du jour d\'une date de passage en commission.
    */
    'dossier_id'?: string;
    'avis'?: Avis;
    /**
    * État du dossier au regard de l\'ordre du jour du passage en commission.
    */
    'statut'?: StatutEnum;
};

export enum StatutEnum {
    EnAttenteDeTraitement = 'En attente de traitement',
    PrsenceDunAvisDuRapporteur = 'Présence d\'un avis du rapporteur',
    Valid = 'Validé',
    PrsenceDunAvisDeCommission = 'Présence d\'un avis de commission'
}
