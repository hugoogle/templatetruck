


var request = new XMLHttpRequest();
colaboradorApi();

function colaboradorApi(){
//    var equipe = document.getElementById("equipeSelect").value;
localStorage.removeItem('colaborador');

//    var x = document.getElementById("equipeSelect").selectedIndex;
  //  var y = document.getElementById("equipeSelect").options;
   // alert("Index: " + y[x].index + " is " + y[x].text + y[x].value);
 //   var equipe = y[x].value;


 //    document.getElementById("demo").innerHTML = "You selected: " + y[x].value + "1 TRUCK 90 e 80";
  
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
           
             var arraycolaborador=[]
             if(JSON.parse(localStorage.getItem("colaborador")) != null){
                arraycolaborador.push(JSON.parse(localStorage.getItem("colaborador")));
                 }

                 arraycolaborador.push(res);
                var colaboradorJson = JSON.stringify(arraycolaborador);
                  localStorage.setItem("colaborador", colaboradorJson);
             
        }
          
         

            
    }

    request.open('GET', 'http://localhost:3000/api/colaborador',false);
    request.send();   

   

}
