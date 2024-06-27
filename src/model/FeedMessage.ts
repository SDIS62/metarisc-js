import { FeedMessageTexte } from '../../src/model/FeedMessageTexte';

/**
* Message associé à un flux d\'activité.
*/
export type FeedMessage = FeedMessageTexte;

export enum TypeEnum {
    Texte = 'texte',
    ListePei = 'liste_pei'
}
