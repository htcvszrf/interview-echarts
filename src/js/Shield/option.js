define( [
    './colors',
    './mork'
], function ( colors, mork ) {
    'use strict';

    return {
        colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            top: 30,
            bottom: 30
        },
        xAxis: {
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#666',
                fontSize: 10
            },
            name: '高层偏差',
            nameLocation: 'end',
            nameRotate: -90
        },
        yAxis: [
            {
                type: 'value',
                name: '水量',
                min: -150,
                max: 150,
                interval: 50,

                // 坐标轴
                axisLine: {

                    // show: false,
                    lineStyle: {
                        color: '#dfdfdf'
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
                },
                name: '平面偏差',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#666'
                }
            }
        ],
        series: [ {
            symbolSize: 12,
            data: mork[ 0 ],
            type: 'scatter',
            itemStyle: {
                color: colors.bg[ 0 ]
            },
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 2,
                        borderType: 'solid',
                        borderColor: colors.area[ 2 ]
                    }
                },
                data: [ [ {

                    // name: '女性分布区间',
                    xAxis: -100,
                    yAxis: -100
                }, {
                    xAxis: 100,
                    yAxis: 100
                } ] ]
            }
        },
        {
            symbolSize: 12,
            data: mork[ 1 ],
            type: 'scatter',
            itemStyle: {
                color: colors.bg[ 1 ]
            },
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 2,
                        borderType: 'solid',
                        borderColor: colors.area[ 1 ]
                    }
                },
                data: [ [ {

                    // name: '女性分布区间',
                    xAxis: -75,
                    yAxis: -75
                }, {
                    xAxis: 75,
                    yAxis: 75
                } ] ]
            }
        }, {
            symbolSize: 12,
            data: mork[ 2 ],
            type: 'scatter',
            itemStyle: {
                color: colors.bg[ 1 ]
            },
            markArea: {
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderWidth: 2,
                        borderType: 'solid',
                        borderColor: colors.area[ 0 ]
                    }
                },
                data: [ [ {

                    // name: '女性分布区间',
                    xAxis: -50,
                    yAxis: -50
                }, {
                    xAxis: 50,
                    yAxis: 50
                } ] ]
            }
        } ]
    };
} );
