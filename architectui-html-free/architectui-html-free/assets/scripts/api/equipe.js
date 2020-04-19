var request = new XMLHttpRequest();

equipeApi();
function equipeApi(){
    
    localStorage.removeItem('equipe');

   // localStorage.removeItem('meta');
    
        //var x = document.getElementById("equipeSelect").selectedIndex;
       // var y = document.getElementById("equipeSelect").options;
       // var equipe = y[x].value;
    
       let selEquipe = document.getElementById( 'equipeSelect' );
        
        /// ; Limpa as opçoes
    //    selEquipe.innerHTML = "";
        
        /// ; Mostra na tela com display:block
     ///   selEquipe.style.display="block";
        
        /// ; pega as cidades disponiveis 
        
      
    
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let res = JSON.parse(this.responseText);
                let equipes = res;
                



                var arrayEquipe=[]
                if(JSON.parse(localStorage.getItem("equipe")) != null){
                    arrayEquipe.push(JSON.parse(localStorage.getItem("equipe")));
                    }
   
                    arrayEquipe.push(res);
                   var equipeJson = JSON.stringify(arrayEquipe);
                     localStorage.setItem("equipe", equipeJson);


                equipes.forEach( function( equipes ){
                    /// ;  cria elemento option
                    let opt = document.createElement("option");
                    
                    /// ; adiciona nome da cidade
                    opt.innerHTML = equipes.nome;
                    opt.value = equipes.codigo;
                    
                    /// ; adiciona opção no select
                    selEquipe.appendChild(opt);
            
                    /// ; essas linhas de código acima poderiam ser substituídas por:
                    /// ; selCidades.innerHTML += "<option>"+cidade+"</option>";
                    
                });
        









                 
            }
              
             
    
                
        }
    
        request.open('GET', 'http://localhost:3000/api/equipe/' ,false);
        request.send();   
    
    
    }