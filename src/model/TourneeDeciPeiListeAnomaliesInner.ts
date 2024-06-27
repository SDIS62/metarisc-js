import { TourneeDeciPeiListeAnomaliesInnerAnomalie } from '../../src/model/TourneeDeciPeiListeAnomaliesInnerAnomalie';

export type TourneeDeciPeiListeAnomaliesInner = {
    'anomalie'?: TourneeDeciPeiListeAnomaliesInnerAnomalie;
    /**
    * Code de l\'anomalie.
    */
    'code'?: number;
    /**
    * Si l\'anomalie est à lever.
    */
    'a_lever'?: boolean;
};
