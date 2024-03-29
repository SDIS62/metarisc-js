import { Organisation } from '../../src/model/Organisation';
import { Utilisateur } from '../../src/model/Utilisateur';

export type OrganisationMembre = {
    'organisation'?: Organisation;
    'utilisateur'?: Utilisateur;
    'date_integration'?: Date;
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre'
}
