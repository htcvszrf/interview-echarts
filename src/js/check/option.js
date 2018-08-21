define( [
    './colors',
    './mork'
], function ( colors, mork ) {
    'use strict';

    return {
        colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 10,
            bottom: 30,
            left: 70
        },
        xAxis: {
            type: 'category',
            data: [ '4 8', '4 9', '4 10', '4 11', '4 12', '4 13', '4 14' ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#dfdfdf'
                },
                width: 1
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#666',
                fontSize: 12
            }
        },
        yAxis: {
            axisLine: {

                // show: false,
                lineStyle: {
                    color: '#dfdfdf'
                },
                width: 1
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#666',
                fontSize: 12
            },
            min: 0,
            max: 70,
            interval: 10
        },
        series: [
            {
                name: '01',
                type: 'bar',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [ {
                            offset: 0, color: colors[ 1 ][ 0 ]
                        }, {
                            offset: 1, color: colors[ 1 ][ 1 ]
                        } ],
                        globalCoord: false
                    },
                    barBorderRadius: [ 10, 10, 0, 0 ]
                },
                barGap: '-100%',
                barWidth: 20,
                data: mork[ 0 ]
            },
            {
                name: '02',
                type: 'bar',
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [ {
                            offset: 0, color: colors[ 0 ][ 0 ]
                        }, {
                            offset: 1, color: colors[ 0 ][ 1 ]
                        } ],
                        globalCoord: false
                    },
                    barBorderRadius: [ 10, 10, 0, 0 ]
                },
                barWidth: 20,
                barGap: '-100%',
                data: mork[ 1 ]
            }
        ]
    };
} );
