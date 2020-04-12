

var request = new XMLHttpRequest();
//destroyChart();

montaGrafico();
destroyChart();

function metaApi(){
//    var equipe = document.getElementById("equipeSelect").value;
localStorage.removeItem('meta');

    var x = document.getElementById("equipeSelect").selectedIndex;
    var y = document.getElementById("equipeSelect").options;
   // alert("Index: " + y[x].index + " is " + y[x].text + y[x].value);
    var equipe = y[x].value;


 //    document.getElementById("demo").innerHTML = "You selected: " + y[x].value + "1 TRUCK 90 e 80";
  
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
           
             var arrayMeta=[]
             if(JSON.parse(localStorage.getItem("meta")) != null){
                 arrayMeta.push(JSON.parse(localStorage.getItem("meta")));
                 }

                arrayMeta.push(res);
                var metaJson = JSON.stringify(arrayMeta);
                localStorage.setItem("meta", metaJson);
             
        }
          
         

            
    }

    request.open('GET', 'http://localhost:3000/api/meta/equipe/'+ equipe ,false);
    request.send();   


}

function montaGrafico(){
    metaApi();
    atualizarChart();
   

}



function cria(){
    metaApi();
    criaGrafico()

}