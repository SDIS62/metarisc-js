import { AnomalieDECI } from '../../src/model/AnomalieDECI';

/**
* Pose d\'une anomalie DECI sur un PEI.
*/
export type AnomaliePEI = {
    'anomalie'?: AnomalieDECI;
    'date_debut'?: Date;
    'date_fin'?: Date;
    'est_programmee'?: boolean;
    'date_pose'?: Date;
};
