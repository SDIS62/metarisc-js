import { DescriptifTechniqueDECIBase } from '../model/DescriptifTechniqueDECIBase';

/**
* Descriptif technique d\'un PENA - Point d\'Eau Naturel ou Artificiel.
*/
export type DescriptifTechniquePENA = DescriptifTechniqueDECIBase & { 
    /**
    * Nature du PENA.
    */
    'nature'?: NatureEnum;
    /**
    * Dans le cas d\'une citerne, information sur son volume d\'eau en m3.
    */
    'volume'?: number;
    /**
    * Permet de savoir si le PENA est une citerne.
    */
    'est_citerne'?: boolean;
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

export enum NatureEnum {
    PointAspiration = 'POINT_ASPIRATION',
    CiterneAerienne = 'CITERNE_AERIENNE',
    CiterneEnterree = 'CITERNE_ENTERREE',
    CiterneSemiEnterree = 'CITERNE_SEMI_ENTERREE',
    CiterneSouple = 'CITERNE_SOUPLE',
    ReserveAerienne = 'RESERVE_AERIENNE',
    PoteauRelais = 'POTEAU_RELAIS',
    PuisardAspiration = 'PUISARD_ASPIRATION',
    PriseDeportee = 'PRISE_DEPORTEE',
    PoteauAspiration1x100 = 'POTEAU_ASPIRATION_1x100',
    PoteauAspiration2x100 = 'POTEAU_ASPIRATION_2x100',
    BoucheAspiration1x100 = 'BOUCHE_ASPIRATION_1x100'
}
