/**
* Objet Workflow de base.
*/
export type WorkflowBase = {
    /**
    * Identifiant unique de l\'objet.
    */
    'id'?: string;
    /**
    * Titre du workflow.
    */
    'titre'?: string;
    /**
    * Date de création du workflow.
    */
    'date_de_creation'?: Date;
    /**
    * Date du déclenchement du workflow (date à laquelle il est passé actif).
    */
    'date_de_debut'?: Date;
    /**
    * Date de fin de traitement du workflow (date à laquelle il est passé en terminé).
    */
    'date_de_fin'?: Date;
    /**
    * Si le workflow a été géré par un processus automatisé.
    */
    'workflow_automatise'?: boolean;
    /**
    * État du workflow. Le workflow peut être dans 3 états : - En attente : Le workflow est en attente de la complétion d\'autres workflows ; - En cours :Le workflow devient actif pour traitement ; - Validé : Le workflow est vérouillé et débloque d\'autres workflows ou complète le dossier ;
    */
    'etat'?: EtatEnum;
    /**
    * Une chaîne de caractères arbitraire rattachée à l\'objet. Souvent utile pour affichage aux utilisateurs.
    */
    'observations'?: string;
    /**
    * Type du workflow.
    */
    'type'?: string;
};

export enum EtatEnum {
    Valide = 'VALIDE',
    EnCours = 'EN_COURS',
    Attente = 'ATTENTE'
}
