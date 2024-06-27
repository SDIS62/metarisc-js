import { Contact } from '../model/Contact';

/**
* Coordonées de l\'ERP.
*/
export type ERPCoordonnees = Contact & { 
};

export enum CiviliteEnum {
    M = 'M',
    Mme = 'Mme',
    Mx = 'Mx'
}
