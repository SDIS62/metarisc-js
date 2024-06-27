import { DescriptifTechniqueERP } from '../model/DescriptifTechniqueERP';

/**
* Descriptif technique actuel de l\'ERP.
*/
export type ERPDescriptifTechnique = DescriptifTechniqueERP & { 
};

export enum StatutErpEnum {
    RepriseDeDonnees = 'reprise_de_donnees',
    Ouvert = 'ouvert',
    Projet = 'projet',
    Ferme = 'ferme'
}

export enum GenreEnum {
    Etablissement = 'etablissement',
    Site = 'site',
    Cellule = 'cellule'
}

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
