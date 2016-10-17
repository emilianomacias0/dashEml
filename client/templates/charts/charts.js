require('echarts/lib/component/title');
require('echarts/theme/macarons');
echarts = require('echarts/lib/echarts');
var echarts = require('echarts/lib/echarts');

Template.charts.onRendered(function(){
	drawChart1();
	drawChart2();

});
Template.charts.helpers({

});




drawChart1 = function(){
var idx = 1;

var elemento = document.getElementById('chart1');
var myChart = echarts.init(elemento);  
	 option = {
    title : {
        text: 'Ventas',
        subtext: '2016'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Iphone 6','Galaxy S6']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} U'
            }
        }
    ],
    series : [
        {
            name:'Iphone 6',
            type:'line',
            data:[35000, 29000, 31000, 45000, 42000, 29000, 41000],
            markPoint : {
                data : [
                    {type : 'max', name: 'Maximo'},
                    {type : 'min', name: 'Minimo'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Promedio'}
                ]
            }
        },
        {
            name:'Galaxy S6',
            type:'line',
            data:[20000, 35000, 32500, 41500, 29000, 51000, 45000],
            markPoint : {
                data : [
                    {name : 'Resumen', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : 'Promedio'}
                ]
            }
        }
    ]
};
myChart.setOption(option);

         
}


drawChart2 = function(){
var idx = 1;

var elemento = document.getElementById('chart2');
var myChart = echarts.init(elemento);  
	 var idx = 1;
option = {
    timeline : {
        data : [
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
            { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
            '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
            { name:'2013-12-01', symbol:'star6', symbolSize:8 }
        ]
    },
    options : [
        {
            title : {
                text: '浏览器占比变化',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data:['Chrome','Firefox','Safari','IE9+','IE8-']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true, 
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1700
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        },
        {
            series : [
                {
                    name:'浏览器（数据纯属虚构）',
                    type:'pie',
                    data:[
                        {value: idx * 128 + 80,  name:'Chrome'},
                        {value: idx * 64  + 160,  name:'Firefox'},
                        {value: idx * 32  + 320,  name:'Safari'},
                        {value: idx * 16  + 640,  name:'IE9+'},
                        {value: idx++ * 8  + 1280, name:'IE8-'}
                    ]
                }
            ]
        }
    ]
};
myChart.setOption(option);

         
}


drawChart3 = function(){
var idx = 1;

var elemento = document.getElementById('chart3');
var myChart = echarts.init(elemento);  
	 option = {
    title : {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
myChart.setOption(option);

         
}