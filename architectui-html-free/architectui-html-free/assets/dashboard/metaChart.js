var strings ="";
var mes ="";


retornaDadosApiMeta();

function retornaDadosApiMeta(){

strings =  JSON.parse(localStorage.getItem("meta")); 
var d = new Date();
var month = new Array();
month[0] = "JANEIRO";
month[1] = "FEVEREIRO";
month[2] = "MARÇO";
month[3] = "ABRIL";
month[4] = "MAIO";
month[5] = "JUNHO";
month[6] = "JULHO";
month[7] = "AGOSTO";
month[8] = "SETEMBRO";
month[9] = "OUTUBRO";
month[10] = "NOVEMBRO";
month[11] = "DEZEMBRO";
mes = month[d.getMonth()];

if (strings == null){

  strings=[
  
    
    [{equipe: 0, semana:0, seg:0, ter:0,qua:0, qui:0 ,sex:0},
    {equipe: 0, semana:0, seg:0, ter:0,qua:0, qui:0 ,sex:0}
    
    ]];

  
}


}
var options = {
  series: [
  {
    name: "ATUAL",
    data:  [strings[0][0].seg, strings[0][0].ter,  strings[0][0].qua, strings[0][0].qui, strings[0][0].sex]

  },
  {
    name: "ANTERIOR",
    data: [strings[0][1].seg, strings[0][1].ter, strings[0][1].qua, strings[0][1].qui, strings[0][1].sex]
     
  }
],
chart: {
  //show: true,
  id: 'chart',
height: 300
,
type: 'line',
dropShadow: {
  enabled: true,
  color: '#000',
  top: 18,
  left: 7,
  blur: 10,
  opacity: 0.2
},
toolbar: {
  show: false
}
},
colors: ['#ff4700', '#545454'],
dataLabels: {
  enabled: true,

},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'META DA SEMANA',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 2
},
xaxis: {
  categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
  title: {
    text: mes
  }
},
yaxis: {
  title: {
    text: 'PERCENTUAL'
  },
 // min: 5,
 // max: 40
},
legend: {
  position: 'top',
  horizontalAlign: 'right',
  floating: true,
  offsetY: -25,
  offsetX: -5
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);




function atualizarChart(){
  
chart.render();



};


function destroyChart(){
  retornaDadosApiMeta();
  ApexCharts.exec('chart', 'updateSeries', [{
 
    name: "ATUAL",
    data: [strings[0][0].seg, strings[0][0].ter,  strings[0][0].qua, strings[0][0].qui, strings[0][0].sex]


  },{
    name: "ANTERIOR",
    data: [strings[0][1].seg, strings[0][1].ter, strings[0][1].qua, strings[0][1].qui, strings[0][1].sex]
 
 
 
  }], true);
  
  
  
  };
  

function criaGrafico(){
  retornaDadosApiMeta();
  chart.updateSeries([{
    name: "ATUAL",
    data: [strings[0][0].seg, strings[0][0].ter,  strings[0][0].qua, strings[0][0].qui, strings[0][0].sex]


  },{
    name: "ANTERIOR",
    data: [strings[0][1].seg, strings[0][1].ter, strings[0][1].qua, strings[0][1].qui, strings[0][1].sex]
     
  }




])

}