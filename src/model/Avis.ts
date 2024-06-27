/**
* Objet représentant un avis générique.
*/
export type Avis = {
    /**
    * Type de l\'avis donné.
    */
    'type'?: TypeEnum;
};

export enum TypeEnum {
    Favorable = 'favorable',
    Defavorable = 'defavorable'
}
