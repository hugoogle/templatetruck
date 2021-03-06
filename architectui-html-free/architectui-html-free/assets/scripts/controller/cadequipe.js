
          $(function() {

              $("#jsGrid").jsGrid({
                  height: "70%",
                  width: "100%",
                  filtering: true,
                  editing: true,
                  autoload: true,
                  paging: true,
                  deleteConfirm: function(item) {
                      return "The client \"" + item.Name + "\" will be removed. Are you sure?";
                  },
                  rowClick: function(args) {
                      showDetailsDialog("Edit", args.item);
                  },
                  controller: db,
                  fields: [
                      { name: "nome", type: "text", width: 150,   },
                      { name: "equipe", type: "select", items: db.equipe, valueField: "codigo", textField: "nome" },
                      { name: "funcao", type: "select",title: "Função", items: db.funcao, valueField: "Id", textField: "Name" },
                      { name: "ticket", type: "number", width: 120,  },
                      { name: "tipo", type: "select", items: db.tipo, valueField: "Id", textField: "Name" },
                      //{ name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                      {
                          type: "control",
                          modeSwitchButton: false,
                          editButton: true,
                        /*  headerTemplate: function() {
                              return $("<button>").attr("type", "button").text("Incluir")
                                  .on("click", function () {
                                      showDetailsDialog("Add", {});
                                  }); 
                          }*/
                      }
                  ]
              });

              
    //       $("#save").on("click", function() {
      //          showDetailsDialog("Add", {});
        //    });

        /*    $("#save").text("Novo").on("click", function() {
                $("#save").text("novo")
            });

          */  
      
   $("#detailsForm").validate({
    
                  rules: {
                    nome: {
                        required: true,
                        rangelength: [1, 10],
                        minlength: 1,
                      },

                      equipe: {
                        required: true,
                      },
                      funcao: {
                        required: true,
                      },

                      //equipe: { required: true, range: [18, 150] },
//                          funcao: { required: true, minlength: 10 },
                      ticket: { required: true, minlength: 6,
                        },
                        
                      funcao: {
                        required: true,
                      },
                  },
                  highlight: function(element) {
                  var a =  $(element).closest('.form-control').removeClass('is-valid').addClass('is-invalid');
                //    $('#save').attr("disabled", true);
                    
                },
                  unhighlight: function(element) {
                    $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
                  //  $('#save').removeAttr("disabled");
              
                },



                  messages: {
                      nome: "",//"Por favor informe o nome!",
                      equipe: "",//"Selecione uma equipe!",
                      funcao: "",//"Please enter address (more than 10 chars)",
                      ticket: "",//"Nº com 6 digitos!"
                      tipo: "",  
                    },
                  submitHandler: function() {
                      formSubmitHandler();
                  }
              });

              var formSubmitHandler = $.noop;

              var showDetailsDialog = function(dialogType, client) {
                  $("#nome").val(client.nome);
                  $("#ticket").val(client.ticket);
                  $("#equipeSelect").val(client.equipe);
                  $("#funcao").val(client.funcao);
                  $("#tipo").val(client.tipo);


                 

                  // $('.form-control').removeClass('is-invalid').addClass('is-valid');
                  //$("#detailsForm").submit();

                  
                  //    $("#married").prop("checked", client.Married);

                  formSubmitHandler = function() {
                      saveClient(client, dialogType === "Add");
                  };

              
              };

              var saveClient = function(client, isNew) {
        //          alert($("#ticket").val());
                 
        
                  $.extend(client, {
                      nome: $("#nome").val(),
                      ticket: parseInt($("#ticket").val(),10), 
                      equipe: parseInt($("#equipeSelect").val(),10),
                      funcao: parseInt($("#funcao").val(), 10),
                      tipo: parseInt($("#tipo").val(), 10),
                      //  Married: $("#married").is(":checked")
                 
                    });

                    
              showDetailsDialog("Add", {});
              

                  $("#jsGrid").jsGrid(isNew ? "insertItem" : "updateItem", client);

                  resetCadastro();


          // Add the hidden class
         
           // alert( activeDiv.classList);      
       //  activeDiv.classList.remove('needs-validation', 'was-validated');             // Remove the hidden class
            
              };

           /*   //document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[2]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
              GetSelected ();
            function GetSelected () {
              var sel =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[2]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
              var opt;
              for ( var i = 0, len = sel.options.length; i < len; i++ ) {
                      opt = sel.options[i];
                      if ( opt.selected === true ) {
                          break;
                      }
                      alert(opt.value)
                  }
                  return opt;
                 
             }
*/
            var selectEquipe =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[2]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
             var c = document.createElement("option");
             c.text = "TODOS";
             c.value = "";
             selectEquipe.options.add(c, 0);



             
             var selectEquipeNovo =  document.getElementById('equipeSelect');
             var c = document.createElement("option");
             c.text = "TODOS";
             c.value ="";
             selectEquipeNovo.options.add(c, 0);


             var selectFuncao =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[3]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
              selectFuncao.options[0].selected = "TODOS";

              
           var selectTipo =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[5]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            selectTipo.options[0].selected = "TODOS";

         

              var selFuncao =  document.getElementById("funcao")
              db.funcao.forEach( function( funcao ){
                  let opt = document.createElement("option");
                  opt.innerHTML = funcao.Name;
                  opt.value = funcao.Id;
                  selFuncao.appendChild(opt);
                  selFuncao.options[0].selected = "TODOS"; 

              });

              var selTipo =  document.getElementById("tipo")
              db.tipo.forEach( function( tipo ){
                  let opt = document.createElement("option");
                  opt.innerHTML = tipo.Name;
                  opt.value = tipo.Id;
                  selTipo.appendChild(opt);
                  selTipo.options[0].selected = "TODOS"; 

                  
              })

              showDetailsDialog("Add", {});
        

      

          }); 

               


         
          function resetCadastro(){
            $('#save').removeClass('jsgrid-update-button').addClass('jsgrid-insert-button');
            $('#editar').removeClass('jsgrid-cancel-edit-button').addClass('jsgrid-edit-button');
            var form = $("#detailsForm");
            validator = form.validate();
            validator.resetForm();
            form.find(".is-invalid").removeClass("is-invalid");
            form.find(".is-valid").removeClass("is-valid");
            $("#nome").val("");
            $("#ticket").val("");
            $("#equipeSelect").val(0);
            $("#funcao").val(0);
            $("#tipo").val(0);
            $('#nome').prop("disabled", true);
            $('#ticket').prop("disabled", true);
            $('#equipeSelect').prop("disabled", true);
            $('#funcao').prop("disabled", true);
            $('#tipo').prop("disabled", true);
            //$("#GFG :input").prop("disabled", false);

      }












