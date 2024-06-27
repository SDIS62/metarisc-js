import { AnomaliePEI } from '../../src/model/AnomaliePEI';

/**
* Descriptif technique de base pour l\'ensemble des PEI.
*/
export type DescriptifTechniqueDECIBase = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Permet de définir à quelle famille de points d’eau ce descriptif technique se rattache.
    */
    'type'?: TypeEnum;
    'anomalies'?: Array<AnomaliePEI>;
    /**
    * Statut réglementaire calculé à travers le RD-DECI du PEI.
    */
    'est_reglementaire'?: boolean;
    /**
    * Le régime domanial, notamment en ce qui concerne le domaine public, s\'appliquant s\'appliquant au PEI.
    */
    'domanialite'?: DomanialiteEnum;
    /**
    * Résultat de l\'application des règles RD-DECI en vigueur pour déterminer la conformité d\'un PEI.
    */
    'est_conforme_rddeci'?: boolean;
    /**
    * Calcul de la performance opérationnelle théorique du PEI (c\'est à dire sans prendre en compte sa disponibilité). Nomenclature de la performance : - Performance nulle = 0 - Performance restreinte = 1 - Performance bonne = 2 - Performance inconnue = -1
    */
    'performance_theorique'?: number;
    /**
    * Calcul de la performance opérationnelle du PEI en fonction des règles RD-DECI en vigueur. Nomenclature de la performance : - Performance nulle = 0 - Performance restreinte = 1 - Performance bonne = 2 - Performance inconnue = -1
    */
    'performance_reelle'?: number;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs.
    */
    'observations_generales'?: string;
    /**
    * Date à laquelle le descriptif technique a été établi.
    */
    'date'?: Date;
    'statut'?: StatutEnum;
    /**
    * Disponibilité opérationnelle du PEI.
    */
    'est_disponible'?: boolean;
};

export enum TypeEnum {
    Pibi = 'PIBI',
    Pena = 'PENA'
}

export enum DomanialiteEnum {
    Privee = 'privee',
    Publique = 'publique',
    PriveeConventionnee = 'privee_conventionnee'
}

export enum StatutEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    DeclarationEnCours = 'declaration_en_cours',
    ReconnaissanceOperationnelleInitiale = 'reconnaissance_operationnelle_initiale',
    Actif = 'actif',
    Projet = 'projet',
    Reforme = 'reforme'
}
