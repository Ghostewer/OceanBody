const coeur = `<div id="coeur">
    <h2 class="text-3xl">Cœur</h2>
    <p class="text-xl">
        Le cœur est le moteur principal du corps humain. En pompant le sang à travers un réseau complexe de vaisseaux, 
        il fournit l'oxygène et les nutriments nécessaires à chaque cellule. Sa régularité garantit la vie et la santé.
        <br><br><strong>Parallèle :</strong> Les courants océaniques jouent un rôle similaire, transportant la chaleur, les nutriments, 
        et influençant le climat mondial. Sans ces flux constants, la vie marine ne pourrait prospérer, et les écosystèmes terrestres 
        seraient gravement impactés.
    </p>
</div>`;

const poumons = `<div id="poumons">
    <h2 class="text-3xl">Poumons</h2>
    <p class="text-xl">
        Les poumons permettent l'échange vital entre l'oxygène et le dioxyde de carbone. Ils fonctionnent sans relâche pour purifier 
        le sang et maintenir l'équilibre respiratoire. Leur capacité d'absorption et de rejet est essentielle pour la survie.
        <br><br><strong>Parallèle :</strong> L'océan, souvent surnommé "le poumon de la Terre", produit entre 50 et 70 % de l'oxygène mondial 
        grâce aux phytoplanctons. Ces organismes microscopiques absorbent le dioxyde de carbone et rejettent de l'oxygène, 
        contribuant ainsi à l'équilibre atmosphérique.
    </p>
</div>`;

const rate = `<div id="rate">
    <h2 class="text-3xl">Rate</h2>
    <p class="text-xl">
        La rate joue un rôle clé dans le système immunitaire. En filtrant les cellules sanguines endommagées et en produisant 
        des globules blancs, elle aide à combattre les infections et à maintenir un sang sain.
        <br><br><strong>Parallèle :</strong> Les récifs coralliens, véritables trésors des océans, filtrent les impuretés de l'eau 
        tout en abritant une biodiversité exceptionnelle. Ils sont essentiels pour la survie de milliers d'espèces marines 
        et protègent les côtes des érosions.
    </p>
</div>`;

const foie = `<div id="foie">
    <h2 class="text-3xl">Foie</h2>
    <p class="text-xl">
        Le foie est l'organe de détoxification par excellence. Il élimine les toxines du sang, produit la bile pour digérer 
        les graisses et stocke des nutriments essentiels. Il est aussi un régulateur des niveaux de sucre dans le sang.
        <br><br><strong>Parallèle :</strong> Les zones humides côtières, telles que les mangroves, fonctionnent de manière similaire, 
        filtrant les polluants de l'eau et stockant des nutriments. Ces écosystèmes jouent un rôle clé dans la régulation 
        et la protection de l'environnement marin.
    </p>
</div>`;

const gros_intestin = `<div id="gros-intestin">
    <h2 class="text-3xl">Gros Intestin</h2>
    <p class="text-xl">
        Le gros intestin est responsable de la réabsorption de l'eau et de la formation des matières fécales. 
        Il joue un rôle crucial dans l'élimination des déchets et le maintien de l'équilibre hydrique.
        <br><br><strong>Parallèle :</strong> Les fonds océaniques agissent comme des réservoirs naturels, stockant des nutriments et 
        régulant les courants profonds qui maintiennent l'équilibre des écosystèmes marins.
    </p>
</div>`;

const intestin_grele = `<div id="intestin-grele">
    <h2 class="text-3xl">Intestin Grêle</h2>
    <p class="text-xl">
        L'intestin grêle est l'organe principal de l'absorption des nutriments. Il décompose les aliments digérés et transporte 
        les éléments nécessaires dans le sang pour alimenter le corps en énergie.
        <br><br><strong>Parallèle :</strong> Les estuaires, où l'eau douce rencontre l'eau salée, fonctionnent comme des zones de transition 
        et de transformation des nutriments. Ces régions riches en biodiversité nourrissent de nombreuses espèces marines.
    </p>
</div>`;

const rein = `<div id="rein">
    <h2 class="text-3xl">Reins</h2>
    <p class="text-xl">
        Les reins filtrent les toxines et les déchets du sang, maintiennent l'équilibre hydrique et électrolytique, et régulent 
        la pression artérielle. Leur fonctionnement est essentiel pour l'homéostasie.
        <br><br><strong>Parallèle :</strong> Les marais salants et autres zones de filtration naturelle dans les océans jouent un rôle similaire 
        en éliminant les impuretés, en régulant la salinité et en préservant l'équilibre chimique des eaux marines.
    </p>
</div>`;

export function renderTextExplication(organe) {
    // Sélectionner la div de texte
    const textContainer = document.getElementById('text_explication');

    // Effacer le contenu précédent
    textContainer.innerHTML = '';

    // Ajouter le contenu basé sur l'organe
    switch (organe) {
        case 'heart':
            textContainer.innerHTML = coeur;
            break;
        case 'lung':
            textContainer.innerHTML = poumons;
            break;
        case 'spleen':
            textContainer.innerHTML = rate;
            break;
        case 'liver':
            textContainer.innerHTML = foie;
            break;
        case 'large-intestine':
            textContainer.innerHTML = gros_intestin;
            break;
        case 'small-intestine':
            textContainer.innerHTML = intestin_grele;
            break;
        case 'kidney':
            textContainer.innerHTML = rein;
            break;
        default:
            textContainer.innerHTML = '<p>Organe non reconnu.</p>';
            break;
    }
}
