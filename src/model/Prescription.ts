import { PrescriptionSupportReglementaire } from '../../src/model/PrescriptionSupportReglementaire';

/**
* La prescription réglementaire est une mesure de prévention et de sauvegarde propre à assurer la sécurité des personnes. Elle est décrite à travers un texte libre motivé par un ou des supports réglementaires. Le règlement de sécurité comprend des prescriptions générales communes à tous les établissements et d\'autres particulières à chaque type d\'établissement. Il précise les cas dans lesquels les obligations qu\'il définit s\'imposent à la fois aux constructeurs, propriétaires, installateurs et exploitants ou à certains de ceux-ci seulement.
*/
export type Prescription = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Contenu de la prescription.
    */
    'contenu'?: string;
    /**
    * Classement de la prescription.
    */
    'type'?: TypeEnum;
    /**
    * Les supports réglementaires de la prescription.
    */
    'supports_reglementaires'?: Array<PrescriptionSupportReglementaire>;
    /**
    * Les identifiants des supports réglementaires de la prescription.
    */
    'supports_reglementaires_id'?: Array<string>;
};

export enum TypeEnum {
    LieeALExploitation = 'liee_a_l_exploitation',
    LieeALAmelioration = 'liee_a_l_amelioration',
    RappelReglementaire = 'rappel_reglementaire'
}
