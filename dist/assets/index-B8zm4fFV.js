import{i as m,r as g}from"./echarts-DgUs46N4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const h=`<div id="coeur">
    <h2 class="text-3xl">Cœur</h2>
    <p class="text-xl">
        Le cœur est le moteur principal du corps humain. En pompant le sang à travers un réseau complexe de vaisseaux, 
        il fournit l'oxygène et les nutriments nécessaires à chaque cellule. Sa régularité garantit la vie et la santé.
        <br><br><strong>Parallèle :</strong> Les courants océaniques jouent un rôle similaire, transportant la chaleur, les nutriments, 
        et influençant le climat mondial. Sans ces flux constants, la vie marine ne pourrait prospérer, et les écosystèmes terrestres 
        seraient gravement impactés.
    </p>
</div>`,f=`<div id="poumons">
    <h2 class="text-3xl">Poumons</h2>
    <p class="text-xl">
        Les poumons permettent l'échange vital entre l'oxygène et le dioxyde de carbone. Ils fonctionnent sans relâche pour purifier 
        le sang et maintenir l'équilibre respiratoire. Leur capacité d'absorption et de rejet est essentielle pour la survie.
        <br><br><strong>Parallèle :</strong> L'océan, souvent surnommé "le poumon de la Terre", produit entre 50 et 70 % de l'oxygène mondial 
        grâce aux phytoplanctons. Ces organismes microscopiques absorbent le dioxyde de carbone et rejettent de l'oxygène, 
        contribuant ainsi à l'équilibre atmosphérique.
    </p>
</div>`,b=`<div id="rate">
    <h2 class="text-3xl">Rate</h2>
    <p class="text-xl">
        La rate joue un rôle clé dans le système immunitaire. En filtrant les cellules sanguines endommagées et en produisant 
        des globules blancs, elle aide à combattre les infections et à maintenir un sang sain.
        <br><br><strong>Parallèle :</strong> Les récifs coralliens, véritables trésors des océans, filtrent les impuretés de l'eau 
        tout en abritant une biodiversité exceptionnelle. Ils sont essentiels pour la survie de milliers d'espèces marines 
        et protègent les côtes des érosions.
    </p>
</div>`,v=`<div id="foie">
    <h2 class="text-3xl">Foie</h2>
    <p class="text-xl">
        Le foie est l'organe de détoxification par excellence. Il élimine les toxines du sang, produit la bile pour digérer 
        les graisses et stocke des nutriments essentiels. Il est aussi un régulateur des niveaux de sucre dans le sang.
        <br><br><strong>Parallèle :</strong> Les zones humides côtières, telles que les mangroves, fonctionnent de manière similaire, 
        filtrant les polluants de l'eau et stockant des nutriments. Ces écosystèmes jouent un rôle clé dans la régulation 
        et la protection de l'environnement marin.
    </p>
</div>`,x=`<div id="gros-intestin">
    <h2 class="text-3xl">Gros Intestin</h2>
    <p class="text-xl">
        Le gros intestin est responsable de la réabsorption de l'eau et de la formation des matières fécales. 
        Il joue un rôle crucial dans l'élimination des déchets et le maintien de l'équilibre hydrique.
        <br><br><strong>Parallèle :</strong> Les fonds océaniques agissent comme des réservoirs naturels, stockant des nutriments et 
        régulant les courants profonds qui maintiennent l'équilibre des écosystèmes marins.
    </p>
</div>`,y=`<div id="intestin-grele">
    <h2 class="text-3xl">Intestin Grêle</h2>
    <p class="text-xl">
        L'intestin grêle est l'organe principal de l'absorption des nutriments. Il décompose les aliments digérés et transporte 
        les éléments nécessaires dans le sang pour alimenter le corps en énergie.
        <br><br><strong>Parallèle :</strong> Les estuaires, où l'eau douce rencontre l'eau salée, fonctionnent comme des zones de transition 
        et de transformation des nutriments. Ces régions riches en biodiversité nourrissent de nombreuses espèces marines.
    </p>
</div>`,L=`<div id="rein">
    <h2 class="text-3xl">Reins</h2>
    <p class="text-xl">
        Les reins filtrent les toxines et les déchets du sang, maintiennent l'équilibre hydrique et électrolytique, et régulent 
        la pression artérielle. Leur fonctionnement est essentiel pour l'homéostasie.
        <br><br><strong>Parallèle :</strong> Les marais salants et autres zones de filtration naturelle dans les océans jouent un rôle similaire 
        en éliminant les impuretés, en régulant la salinité et en préservant l'équilibre chimique des eaux marines.
    </p>
</div>`;function w(s){const t=document.getElementById("text_explication");switch(t.innerHTML="",s){case"heart":t.innerHTML=h;break;case"lung":t.innerHTML=f;break;case"spleen":t.innerHTML=b;break;case"liver":t.innerHTML=v;break;case"large-intestine":t.innerHTML=x;break;case"small-intestine":t.innerHTML=y;break;case"kidney":t.innerHTML=L;break;default:t.innerHTML="<p>Organe non reconnu.</p>";break}}const l="/";function I(){const s=document.getElementById("globe-background"),t=m(s),i={backgroundColor:"#031c27",globe:{baseTexture:l+"world.topo.bathy.200401.jpg",heightTexture:l+"world.topo.bathy.200401.jpg",displacementScale:.04,shading:"realistic",realisticMaterial:{roughness:.9},postEffect:{enable:!0},light:{main:{intensity:5,shadow:!0},ambientCubemap:{texture:l+"pisa.hdr",diffuseIntensity:.2}},viewControl:{autoRotate:!0,autoRotateSpeed:10,zoomSensitivity:1,panSensitivity:0,rotateSensitivity:0,distance:150},environment:"#031c27"}};t.setOption(i),document.getElementById("start").addEventListener("click",()=>{document.getElementById("div_start").classList.add("hidden"),document.getElementById("div_medium").classList.remove("hidden"),document.getElementById("name").classList.remove("hidden"),document.getElementById("explication").classList.remove("hidden"),document.getElementById("human").classList.remove("hidden");const e=t.getModel().getComponent("globe").get("viewControl");t.setOption({globe:{viewControl:{distance:e.distance+150}}});let r=document.querySelector("#human").children[1];if(!r){console.error("La deuxième div (children[1]) n’existe pas encore.");return}console.log("Observation permanente activée pour :",r);var d="";new MutationObserver(p=>{for(const u of p)(u.type==="childList"||u.type==="characterData")&&d!=r.textContent&&(d=r.textContent,w(r.textContent))}).observe(r,{childList:!0,subtree:!0,characterData:!0})})}const E="/";function O(){const s=document.getElementById("human"),t=m(s);fetch(`${E}Veins_Medical_Diagram_clip_art.svg`).then(i=>i.text()).then(i=>{g("organ_diagram",{svg:i});const o={tooltip:{show:!0},geo:{left:"-15%",right:"-15%",map:"organ_diagram",emphasis:{focus:"self",itemStyle:{color:null},label:{position:"bottom",distance:0,textBorderColor:"#fff",textBorderWidth:2}},select:{itemStyle:{color:"#ff4500"}}}};t.setOption(o);const e=s.querySelector("canvas");e&&(e.style.width="100%")}).catch(i=>console.error("Erreur lors du chargement du SVG :",i))}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("explication").classList.add("hidden"),document.getElementById("name").classList.add("hidden"),document.getElementById("div_medium").classList.add("hidden"),document.getElementById("human").classList.add("hidden"),I(),O()});var c=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],a=0,q=function(s){if(c.indexOf(s.key)<0||s.key!==c[a]){a=0;return}a++,c.length===a&&(a=0,location.replace(location.href+"tetris"))};document.addEventListener("keydown",q,!1);
