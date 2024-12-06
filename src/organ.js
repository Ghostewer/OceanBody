import * as echarts from 'echarts';

const ROOT_PATH = '/';

export function renderOrganDiagram() {
    const chartDom = document.getElementById('human');
    const myChart = echarts.init(chartDom);

    fetch(`${ROOT_PATH}Veins_Medical_Diagram_clip_art.svg`)
        .then((response) => response.text())
        .then((svg) => {
            echarts.registerMap('organ_diagram', { svg: svg });

            const option = {
                tooltip: {
                    show: true, // Désactiver les info-bulles
                },
                geo: {
                    left: '-15%',
                    right: '-15%',
                    map: 'organ_diagram',
                    emphasis: {
                        focus: 'self',
                        itemStyle: {
                            color: null,
                        },
                        label: {
                            position: 'bottom',
                            distance: 0,
                            textBorderColor: '#fff',
                            textBorderWidth: 2,
                        },
                    },
                    select: {
                        itemStyle: {
                            color: '#ff4500',
                        },
                    },
                },
            };

            myChart.setOption(option);

            const canvas = chartDom.querySelector('canvas');
            if (canvas) {
                canvas.style.width = '100%';
            }
        })
        .catch((error) => console.error('Erreur lors du chargement du SVG :', error));
}
