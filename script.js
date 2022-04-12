// Line chart for valo Pea

const valoPea = document.getElementById('valoPea').getContext('2d');
let delayedValo;

//Gradient fill
let gradient = valoPea.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213,1');
gradient.addColorStop(1, 'rgba(0,210,255,0.3)');


const labelsValo = [
    '04/04/2022',
    '05/04/2022',
    '06/04/2022',
    '07/04/2022',
    '08/04/2022',
    '09/04/2022',
    '10/04/2022',
];

const dataValo = {
    labels: labelsValo,
    datasets: [
        {
            label: 'Valorisation journalière',
            data: [4741.85, 4741.85, 4741.85, 4741.85, 4741.85, 4741.85, 4704.87],
            hoverBorderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            borderColor: '#000',
            tension: 0.4,
        },
    ],
};

const configDataValo = {
    type: 'line',
    data: dataValo,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        animation: {
            onComplete: () => {
                delayedValo = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayedValo) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + ' €';
                    },
                },
            },
        },
    },
};

const myChartValo = new Chart(valoPea, configDataValo);

// Pie chart for compo Pea

const compoPea = document.getElementById('compoPea');

const labelsPea = [
    'Alstom',
    'Worldline',
    'Carbios',
    'Stellantis',
];

const dataPea = {
    labels: labelsPea,
    datasets: [
        {
            label: 'Composition de mon PEA',
            data: [1142.35, 2431.43, 165, 964.04,],
            backgroundColor: [
                "#7FA5F8",
                '#4982FB',
                '#1F56CA',
                '#0F3EA4',
            ],
            hoverBorderWidth: 5,
            borderColor: '#000',
        }

    ],
};

const configDataPea = {
    type: 'pie',
    data: dataPea,
    options: {
        responsive: true,
    },
};

const myCompoPEA = new Chart(compoPea, configDataPea);

// line chart fees pea

const fraisPea = document.getElementById('fraisPea').getContext('2d');
let delayed;

//Gradient fill
let gradientCout = fraisPea.createLinearGradient(0, 0, 0, 400);
gradientCout.addColorStop(0, 'rgba(58, 123, 213,1');
gradientCout.addColorStop(1, 'rgba(0,210,255,0.3)');

const labelsFraisPea = [
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',

];

const dataFraisPea = {
    labels: labelsFraisPea,
    datasets: [
        {
            label: 'taxes et frais de courtage',
            data: [1142.35, 2431.43, 165, 964.04, 1142.35, 2431.43, 165, 964.04, 125],
            hoverBorderWidth: 5,
            fill: true,
            backgroundColor: gradientCout,
            borderColor: '#000',
            tension: 0.4,
        },

    ],
};

const configDataFrais = {
    type: 'line',
    data: dataFraisPea,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + ' €';
                    },
                },
            },
        },
    },
};

const myChartCout = new Chart(fraisPea, configDataFrais);