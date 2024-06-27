import { OrganisationMembreOrganisation } from '../../src/model/OrganisationMembreOrganisation';
import { OrganisationMembreUtilisateur } from '../../src/model/OrganisationMembreUtilisateur';

/**
* Représente un membre d\'une organisation.
*/
export type OrganisationMembre = {
    'organisation'?: OrganisationMembreOrganisation;
    'utilisateur'?: OrganisationMembreUtilisateur;
    /**
    * Identifiant de l\'utilisateur lié.
    */
    'utilisateur_id'?: string;
    /**
    * Date à laquelle l\'utilisateur à rejoint l\'organisation en tant que membre.
    */
    'date_integration'?: Date;
    /**
    * Rôle du membre au sein de l\'organisation.
    */
    'role'?: RoleEnum;
};

export enum RoleEnum {
    Membre = 'membre',
    Invite = 'invite',
    InvitationEnCours = 'invitation_en_cours'
}
