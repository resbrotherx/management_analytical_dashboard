
const allChartPageColors = {
    darkcolor: ['#00DDFF', '#0049B9','#0049B9', '#389f99', '#ee1044', '#ff8f00'],
    blueUrl: ['#0049B7','#ff1d58','#f75990','#fff685','#00DDFF','#0049B9'],
    linerUrl: ['linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)', '#000428', '#004e92', '#389f99', '#ee1044', '#ff8f00'],
};


const ChartAnimation = {
    animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
            speed: 1000
        }
    },
    dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
    },
    borderWidth: 1,
    radius: ['100%', '30%'],
};


export const colors = {
    ...{ allChartPageColors, ChartAnimation },
};
