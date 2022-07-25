import { colors } from "./colors";

export const CharttooltipUrls = {
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 12
        }
    }
};

export const ChartseriesUrls = {
    series: [{
        selectedMode: 'single',
        radius: ['100%', '30%'],
        color: colors.allChartPageColors.blueUrl,
        labelLine: {
            normal: {
                show: false
            }
        },
    }],
};

export const shadow = {
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
    scales: {
        y: {
            beginAtZero: true
        }
    },
    lagend: {
        labels: {
            fontSize: 26
        }
    }
};