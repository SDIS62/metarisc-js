/**
* Anomalie DECI constatée visuellement. Les anomalies DECI impactent la disponibilité, la conformité ou l\'utilisation d\'un PEI.
*/
export type AnomalieDECI = {
    /**
    * Référence codifiée de l\'anomalie.
    */
    'code'?: number;
    /**
    * Description de l\'anomalie.
    */
    'texte'?: string;
    /**
    * L\'indice de gravité permet de classifier l\'impact d\'une anomalie sur la vie d\'un PEI. Nomenclature de l\'indice de gravité : - 0 : Réserve ; - 1 : Anomalie ; - 2 : Anomalie bloquante.
    */
    'indice_de_gravite'?: IndiceDeGraviteEnum;
};

export enum IndiceDeGraviteEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
