equipeApi();
function equipeApi(){
    

    var request = new XMLHttpRequest();
   // localStorage.removeItem('meta');
    
        //var x = document.getElementById("equipeSelect").selectedIndex;
       // var y = document.getElementById("equipeSelect").options;
       // var equipe = y[x].value;
    
       let selEquipe = document.getElementById( 'equipeSelect' );
        
        /// ; Limpa as opçoes
        selEquipe.innerHTML = "";
        
        /// ; Mostra na tela com display:block
     ///   selEquipe.style.display="block";
        
        /// ; pega as cidades disponiveis 
        
      
    
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let res = JSON.parse(this.responseText);
                let equipes = res;
                
            /*    for(let i=0; i < equipe.length; i ++){

                    console.log(equipe[i].codigo);
                    console.log(equipe[i].nome);
            
                }
    */

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