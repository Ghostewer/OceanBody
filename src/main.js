import { renderGlobe } from './globe.js';
import { renderOrganDiagram } from './organ.js';

// Assurez-vous que le DOM est prêt avant d'exécuter les fonctions
document.addEventListener('DOMContentLoaded', () => {
    // Masquer initialement certains éléments
    document.getElementById('explication').classList.add('hidden');
    document.getElementById('name').classList.add('hidden');
    document.getElementById('div_medium').classList.add('hidden');
    document.getElementById('human').classList.add('hidden');

    // Rendu des graphiques
    renderGlobe();
    renderOrganDiagram();
});
