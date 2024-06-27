import { ERPCoordonnees } from '../../src/model/ERPCoordonnees';
import { ERPDescriptifTechnique } from '../../src/model/ERPDescriptifTechnique';
import { ERPImplantation } from '../../src/model/ERPImplantation';
import { ERPReferencesExterieuresInner } from '../../src/model/ERPReferencesExterieuresInner';

/**
* Les établissements recevant du public (ERP) sont des bâtiments, des locaux ou des enceintes dans lesquels sont admises des personnes extérieures.
*/
export type ERP = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Date à laquelle l\'ERP a intégré Metarisc.
    */
    'date_de_realisation'?: Date;
    /**
    * Date à laquelle l\'ERP a été mis à jour dans Metarisc.
    */
    'date_de_derniere_mise_a_jour'?: Date;
    /**
    * Ensemble de paires clé-valeur que vous pouvez attacher à un objet. Cela peut être utile pour stocker des informations supplémentaires sur l\'objet dans un format structuré.
    */
    'references_exterieures'?: Array<ERPReferencesExterieuresInner>;
    'implantation'?: ERPImplantation;
    'descriptif_technique'?: ERPDescriptifTechnique;
    'coordonnees'?: ERPCoordonnees;
};
