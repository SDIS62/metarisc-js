import { FeedMessageBase } from '../model/FeedMessageBase';

/**
* Message texte d\'un flux d\'activité.
*/
export type FeedMessageTexte = FeedMessageBase & { 
    /**
    * Contenu du message.
    */
    'texte'?: string;
};

export enum TypeEnum {
    Texte = 'texte',
    ListePei = 'liste_pei'
}
