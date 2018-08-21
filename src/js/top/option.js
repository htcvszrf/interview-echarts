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
            type: 'category',
            data: [ '盾构施工', '管片工程', '箱涵工程', '车道板工程',
                '内部结构', '洞门工程', '洞门工程', '地基基础',
                '主题结构', '防水工程' ],
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
            }

            // boundaryGap: [ 20, 20 ]
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        align: 'center'
                    }
                },
                itemStyle: {
                    color: colors[ 0 ]
                },
                barWidth: 14,
                barCategoryGap: 12,
                data: mork[ 0 ]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        align: 'center'
                    }
                },
                itemStyle: {
                    color: colors[ 1 ]
                },
                barWidth: 14,
                barCategoryGap: 12,
                data: mork[ 1 ]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        align: 'center'
                    }
                },
                itemStyle: {
                    color: colors[ 2 ]
                },
                barWidth: 14,
                barCategoryGap: 12,
                data: mork[ 2 ]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        align: 'center'
                    }
                },
                barWidth: 14,
                itemStyle: {
                    color: colors[ 3 ],
                    barBorderRadius: [ 0, 7, 7, 0 ]
                },
                barCategoryGap: 12,
                data: mork[ 3 ]
            }
        ]
    };
} );
