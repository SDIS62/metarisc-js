/**
* Représente une adresse postale qui est la localisation complète du destinataire d\'un courrier.
*/
export type AdressePostale = {
    /**
    * Le code postal en France est une suite de cinq chiffres dont les deux premiers correspondent au département.
    */
    'code_postal'?: string;
    /**
    * Nom de la commune.
    */
    'commune'?: string;
    /**
    * Libellé de la voie et de son type (exemple : \"rue du point du jour\").
    */
    'voie'?: string;
    /**
    * Code unique attribué à chaque commune de France.
    */
    'code_insee'?: string;
    /**
    * Le \"code arrondissement\" contient un chiffre (à partir de 1). Chaque arrondissement français peut ainsi être identifié par un code unique à 3 (pour la métropole) ou 4 (pour l\'outre-mer) chiffres, dont respectivement les deux ou trois premiers identifient le département.
    */
    'arrondissement'?: number;
    /**
    * La latitude est une coordonnée géographique représentée par une valeur angulaire, expression de la position d\'un point sur Terre, au nord ou au sud de l\'équateur qui est le plan de référence. La latitude est une mesure angulaire ; elle varie entre la valeur 0° à l\'équateur et 90° aux pôles.
    */
    'latitude'?: number;
    /**
    * La longitude d\'un point sur Terre est une coordonnée géographique représentée par une valeur angulaire, expression du positionnement est-ouest du point. Une longitude se mesure par rapport à une référence arbitraire qui, sur Terre, est généralement le méridien de Greenwich.
    */
    'longitude'?: number;
    /**
    * Complément d\'adresse à destination des services de secours.
    */
    'localisation_operationnelle'?: string;
    /**
    * Complément d\'adresse.
    */
    'complement'?: string;
};
