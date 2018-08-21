require.config( {

    baseUrl: './js',

    paths: {

        echarts: '../assets/echarts/echarts'
    }
} );

define( [
    'progress/index',
    'problem/index'
] );
