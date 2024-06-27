/**
* Un ERP est associé à un type d\'activité selon la nature de leur exploitation. Il est codifié par une ou plusieurs lettres, en fonction de la nature et de l\'activité de l\'exploitation.
*/
export type ActiviteErp = {
    /**
    * Le type est désignée par une ou un ensemble de lettres définies par l’article GN 1 du règlement de sécurité  incendie dans les ERP. Voir : https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000045143487
    */
    'type'?: TypeEnum;
    /**
    * Désignation spécifique de l\'exploitation. (exemple : Pour un type R - \"Crèche\")
    */
    'activite'?: string;
};

export enum TypeEnum {
    J = 'J',
    L = 'L',
    M = 'M',
    N = 'N',
    O = 'O',
    P = 'P',
    R = 'R',
    S = 'S',
    T = 'T',
    U = 'U',
    V = 'V',
    W = 'W',
    X = 'X',
    Y = 'Y',
    Pa = 'PA',
    Cts = 'CTS',
    Sg = 'SG',
    Ps = 'PS',
    Ga = 'GA',
    Oa = 'OA',
    Ef = 'EF',
    Ref = 'REF'
}
