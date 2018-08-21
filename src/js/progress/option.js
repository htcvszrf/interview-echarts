define( [
    './colors'
], function ( colors ) {
    'use strict';

    return {
        color: [
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [ {
                    offset: 0, color: colors[ 1 ][ 0 ]
                }, {
                    offset: 1, color: colors[ 0 ][ 0 ]
                } ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [ {
                    offset: 0, color: colors[ 1 ][ 1 ]
                }, {
                    offset: 1, color: colors[ 0 ][ 1 ]
                } ],
                globalCoord: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [ {
                    offset: 0, color: colors[ 1 ][ 2 ]
                }, {
                    offset: 1, color: colors[ 0 ][ 2 ]
                } ],
                globalCoord: false // 缺省为 false
            },
            colors[ 0 ][ 3 ]
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },

        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: [ 'line', 'bar' ] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        // legend: {
        //     data: [ '蒸发量', '降水量', '平均温度' ]
        // },
        grid: {
            top: 10,
            bottom: 20
        },
        xAxis: [
            {
                type: 'category',
                data: [ '4 8', '4 9', '4 10', '4 11', '4 12', '4 13', '4 14' ],
                axisPointer: {
                    type: 'shadow'
                },

                // 坐标轴刻度
                axisTick: {
                    show: false
                },

                // 坐标轴
                axisLine: {
                    lineStyle: {
                        color: '#dfdfdf'
                    },
                    width: 1
                },

                axisLabel: {
                    color: '#666',
                    fontSize: 10
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '水量',
                min: 0,
                max: 100,
                interval: 20,

                // 坐标轴
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#dfdfdf',
                        type: 'dashed'
                    },
                    width: 1
                },

                // 坐标轴刻度
                axisTick: {
                    show: false
                },

                axisLabel: {
                    color: '#666',
                    fontSize: 10
                }
            }
        ],
        series: [
            {
                name: '总包单位',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [ 5, 5, 0, 0 ]
                },
                barWidth: 10,
                data: [ 26, 45, 26, 29, 25.6, 41, 47 ]
            },
            {
                name: '监理单位',
                barWidth: 10,
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [ 5, 5, 0, 0 ]
                },
                data: [ 28, 48, 21, 23, 65, 43, 49 ]
            },
            {
                name: '建设单位',
                barWidth: 10,
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [ 5, 5, 0, 0 ]
                },
                data: [ 18, 28, 23, 25, 42, 18, 22 ]
            },
            {
                name: '质量巡查',
                type: 'line',
                symbol: 'circle',
                lineStyle: {
                    width: 2
                },
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#fff'
                },
                symbolSize: 8,
                yAxisIndex: 0,
                data: [ 67, 85, 61, 68, 86.3, 67, 90 ]
            }
        ]
    };
} );
