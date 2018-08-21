define( [
    'echarts',
    './option'
], function ( echarts, option ) {
    'use strict';

    // 初始化
    let chart = echarts.init( document.querySelector( '#transform' ), null, {
        devicePixelRatio: 2
    } );

    chart.setOption( option );
} );
