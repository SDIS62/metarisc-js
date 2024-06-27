import { AdressePostale } from '../../src/model/AdressePostale';
import { DescriptifTechniqueDECI } from '../../src/model/DescriptifTechniqueDECI';
import { PEIReferencesExterieuresInner } from '../../src/model/PEIReferencesExterieuresInner';

/**
* Dispositif de lutte contre l\'incendie.
*/
export type PEI = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Date à laquelle le PEI a intégré Metarisc.
    */
    'date_de_realisation'?: Date;
    /**
    * Date de la dernière mise à jour du PEI.
    */
    'date_de_derniere_mise_a_jour'?: Date;
    /**
    * Ensemble de paires clé-valeur que vous pouvez attacher à un objet. Cela peut être utile pour stocker des informations supplémentaires sur l\'objet dans un format structuré.
    */
    'references_exterieures'?: Array<PEIReferencesExterieuresInner>;
    'descriptif_technique'?: DescriptifTechniqueDECI;
    'implantation'?: AdressePostale;
    'genre'?: GenreEnum;
    /**
    * Identifiant métier unique. Obéit à une convention de nommage.
    */
    'numero'?: string;
    /**
    * Le numéro de série du compteur (PIBI).
    */
    'numero_compteur'?: string;
    /**
    * Numéro de série du PEI (si disponible).
    */
    'numero_serie_appareil'?: string;
};

export enum GenreEnum {
    Pibi = 'PIBI',
    Pena = 'PENA'
}
