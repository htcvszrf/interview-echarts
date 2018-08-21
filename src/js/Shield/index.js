define( [
    'echarts',
    './option'
], function ( echarts, option ) {
    'use strict';

    console.log( 'echarts:', echarts );

    // 初始化
    let chart = echarts.init( document.querySelector( '#shield' ), null, {
        devicePixelRatio: 2
    } );

    chart.setOption( option );
} );
