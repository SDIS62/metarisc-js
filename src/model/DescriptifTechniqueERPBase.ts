import { ActiviteErp } from '../../src/model/ActiviteErp';
import { Avis } from '../../src/model/Avis';

/**
* Descriptif technique de base pour l\'ensemble des ERP.
*/
export type DescriptifTechniqueERPBase = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Date à laquelle le descriptif technique a été établi.
    */
    'date'?: Date;
    'statut_erp'?: StatutErpEnum;
    'genre'?: GenreEnum;
    'avis_exploitation'?: Avis;
    /**
    * Les établissements sont classés en catégories d\'après l\'effectif du public et du personnel. Voir : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043818977
    */
    'categorie'?: CategorieEnum;
    'type_activite'?: ActiviteErp;
    /**
    * Définition des types d\'activité secondaires d\'un établissement selon la nature de son exploitation. Voir: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043818975
    */
    'types_activites_secondaires'?: Array<ActiviteErp>;
    /**
    * Les établissements des 1re, 2e, 3e et 4e catégories doivent être visités périodiquement par les commissions de sécurité. La fréquence est fixée selon le type et de la catégorie. La périodicité est en mois.
    */
    'periodicite'?: number;
    /**
    * Le nom commercial vise l\'entreprise individuelle, le fonds de commerce ou l\'activité exercée, c\'est le nom sous lequel l\'établissement est connu du grand public.
    */
    'libelle'?: string;
    /**
    * Présence de locaux à sommeil dans l\'établissement.
    */
    'presence_locaux_sommeil'?: boolean;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs.
    */
    'observations_generales'?: string;
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
