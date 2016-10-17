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
    title : {
        text: 'Ingresos Semanales',
        subtext: 'Abril',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['Lunes','Martes','Miercoles','Jueves','Viernes']
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
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'Ventas al dia',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'Lunes'},
                {value:310, name:'Martes'},
                {value:234, name:'Miercoles'},
                {value:135, name:'Jueves'},
                {value:1548, name:'Viernes'}
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
        text: 'Los cambios de temperatura próxima semana',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['temperatura más alta','La temperatura mínima']
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
            data : ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
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
            name:'temperatura más alta',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: 'Maxima'},
                    {type : 'min', name: 'Minima'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Promedio'}
                ]
            }
        },
        {
            name:'La temperatura mínima',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
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