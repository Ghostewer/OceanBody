import * as echarts from 'echarts'; // Import ECharts de base
import 'echarts-gl'; // Import du module pour le globe 3D
import { renderTextExplication } from './text.js';

const ROOT_PATH = '/'; // Répertoire public

export function renderGlobe() {
    const chartDom = document.getElementById('globe-background');
    const myChart = echarts.init(chartDom);

    const option = {
        backgroundColor: '#031c27', // Fond sombre pour l'environnement
        globe: {
            baseTexture: ROOT_PATH + 'world.topo.bathy.200401.jpg',
            heightTexture: ROOT_PATH + 'world.topo.bathy.200401.jpg',
            displacementScale: 0.04,
            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.9,
            },
            postEffect: {
                enable: true,
            },
            light: {
                main: {
                    intensity: 5,
                    shadow: true,
                },
                ambientCubemap: {
                    texture: ROOT_PATH + 'pisa.hdr',
                    diffuseIntensity: 0.2,
                },
            },
            viewControl: {
                autoRotate: true, // Globe tourne automatiquement
                autoRotateSpeed: 10, // Ajustez la vitesse de rotation
                zoomSensitivity: 1, // Activer le zoom
                panSensitivity: 0, // Désactiver le déplacement
                rotateSensitivity: 0, // Désactiver la rotation manuelle
                distance: 150, // Distance initiale de la caméra
            },
            environment: '#031c27', // Couleur de fond
        },
    };

    myChart.setOption(option);

    // Ajouter un gestionnaire d'événement pour le bouton
    const zoomOutBtn = document.getElementById('start');
    zoomOutBtn.addEventListener('click', () => {
        document.getElementById('div_start').classList.add('hidden')
        document.getElementById('div_medium').classList.remove('hidden')
        document.getElementById('name').classList.remove('hidden')
        document.getElementById('explication').classList.remove('hidden')
        document.getElementById('human').classList.remove('hidden')
        const viewControl = myChart.getModel().getComponent('globe').get('viewControl');

        // Modifier la distance de la caméra pour dézoomer
        myChart.setOption({
            globe: {
                viewControl: {
                    distance: viewControl.distance + 150, // Augmentez la distance pour dézoomer
                },
            },
        });

        const parent = document.querySelector('#human');
        let secondDiv = parent.children[1]; // Sélection initiale de la deuxième div

        // Vérifier si la deuxième div existe avant de continuer
        if (!secondDiv) {
            console.error('La deuxième div (children[1]) n’existe pas encore.');
            return;
        }

        console.log('Observation permanente activée pour :', secondDiv);

        // Création d'un MutationObserver pour observer les changements
        var text = ""
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    if (text != secondDiv.textContent) {
                        text = secondDiv.textContent
                        renderTextExplication(secondDiv.textContent)
                    }
                }
            }
        });

        // Configuration de l'observation
        observer.observe(secondDiv, {
            childList: true, // Observer les modifications des enfants
            subtree: true,   // Inclure les sous-arbres
            characterData: true, // Observer les modifications de texte
        });
    });
}
