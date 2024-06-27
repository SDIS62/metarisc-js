import { TourneeDeciPeiListeAnomaliesInner } from '../../src/model/TourneeDeciPeiListeAnomaliesInner';
import { TourneeDeciPeiPei } from '../../src/model/TourneeDeciPeiPei';

/**
* Objet de contrôle d\'un PEI dans le cadre d\'une Tournée DECI
*/
export type TourneeDeciPei = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Date à laquelle le contrôle a été effectué.
    */
    'date_du_controle'?: Date;
    /**
    * Liste des anomalies posées ou à lever suite à ce contrôle.
    */
    'liste_anomalies'?: Array<TourneeDeciPeiListeAnomaliesInner>;
    /**
    * Engin utilisé pour les essais hydrauliques.
    */
    'essais_engin_utilise'?: EssaisEnginUtiliseEnum;
    /**
    * Identifiant du PEI à lier au contrôle.
    */
    'pei_id'?: string;
    'pei'?: TourneeDeciPeiPei;
    /**
    * État du contrôle.
    */
    'est_controle'?: boolean;
    /**
    * L\'ordre du contrôle dans le livret de tournée.
    */
    'ordre'?: number;
};

export enum EssaisEnginUtiliseEnum {
    Aucun = 'aucun',
    Fpt = 'fpt',
    Mpr = 'mpr',
    Ccf = 'ccf'
}
