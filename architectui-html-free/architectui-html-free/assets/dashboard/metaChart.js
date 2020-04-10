var teste = 'Hugo';
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
var n = month[d.getMonth()];
new Vue({
  el: '#app',
  components: {
    apexchart: VueApexCharts,
  },
  data: {
    
    series: [
      {
        name: "ATUAL",
        data: [90, 100]
      },
      {
        name: "ANTERIOR",
        data: [10, 30, 50, 60, 80]
      }
    ],
    chartOptions: {
      chart: {
          //show: true,
        height: 200,
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
          text: n
        }
      
    
    
    },

      yaxis: {
        labels: {
      //  formatter: function (val) {
        //  return (val / 1000000).toFixed(0);
       // },
      },
        title: {
          text: 'PERCENTUAL',
          style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:'Helvetica, Arial',
          color:  '#263238'
         },
        },
        //min: 5,
        //max: 100
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -10,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
      }
    },
    
    
  },
  
})
