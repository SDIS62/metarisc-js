import { TourneeDeciModele } from '../model/TourneeDeciModele';

/**
* Si la Tournée DECI a été créé depuis un modèle, son modèle est rattaché
*/
export type TourneeDeciSimpleAllOfModele = TourneeDeciModele & { 
};

export enum TypeEnum {
    Deci = 'tournee_deci',
    DeciModele = 'tournee_deci_modele'
}
