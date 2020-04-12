


var request = new XMLHttpRequest();
var equipe = document.getElementById("equipeSelect").value;
alert(equipe);
myFunction();
function myFunction() {
    var x = document.getElementById("equipeSelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
    equipe = x;



    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
          //  storage.removeItem(metaChart);
           // console.log(this.responseText);  
           // div.innerHTML = this.responseText;
           //div.innerHTML = this.responseXML;
          // myFunction(this);
       


            var res = JSON.parse(this.responseText);
           
            console.log(res);
             var meta = res;
       
       /*      var metaChart = JSON.parse(localStorage.getItem('metaChart-lista') || '[]');
            
             metaChart.push({
                 res
             });
             localStorage.setItem("metaChart-lista", JSON.stringify(metaChart) );
          
        */
             var arrayMeta=[]
             if(JSON.parse(localStorage.getItem("meta")) != null){
                 arrayMeta.push(JSON.parse(localStorage.getItem("meta")));
             }

             arrayMeta.push(res);
             var metaJson = JSON.stringify(arrayMeta);
              localStorage.setItem("meta", metaJson);
             
 








             //    console.log(meta[0].equipe);
            
         //    for(let i=0; i < meta.length; i ++){

           //    console.log(meta[i].equipe);

           // }

      //   var   metaChart ={};
       for(let i=0; i < meta.length; i ++){

         //       console.log("equipe" + meta[i].equipe);
           //     console.log("semana "+ meta[i].semana);
               
               // metaChart = {equipe: meta[i].equipe, semana: meta[i].semana };
               
               var metr = {equipe: meta[i].equipe, semana: meta[i].semana };
            /*    var metaChart = JSON.parse(localStorage.getItem('metaChart-lista') || '[]');
                // Adiciona pessoa ao cadastro
               
                metaChart.push({
                    equipe: meta[i].equipe,
                    semana:  meta[i].semana,
                });
                
             */
                // Salva a lista alterada
        

            }
          
         
        
        }
    };

    request.open('GET', 'http://localhost:3000/api/meta/equipe/'+ equipe,true);

    request.onprogress = function () {
        console.log('LOADING', request.readyState); // readyState will be 3
    };
    
    request.onload = function () {
        console.log('DONE', request.readyState); // readyState will be 4
    };


    request.send();
    var options="chartOptions" 
    var chart = new ApexCharts("chart", options);
    chart.render()


}