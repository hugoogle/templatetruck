
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
                      { name: "ticket", type: "number", width: 120 },
                      { name: "tipo", type: "select", items: db.tipo, valueField: "Id", textField: "Name" },
                      //{ name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                      {
                          type: "control",
                          modeSwitchButton: false,
                          editButton: true,
                          headerTemplate: function() {
                              return $("<button>").attr("type", "button").text("Incluir")
                                  .on("click", function () {
                                      showDetailsDialog("Add", {});
                                  });
                          }
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
                      nome: "required",
//equipe: { required: true, range: [18, 150] },
//                          funcao: { required: true, minlength: 10 },
                      ticket: "required"
                  },
                  messages: {
                      nome: "Please enter name",
                     // equipe: "Please enter valid age",
                     // funcao: "Please enter address (more than 10 chars)",
                      ticket: "Please select country"
                  },
                  submitHandler: function() {
                      formSubmitHandler();
                  }
              });

              var formSubmitHandler = $.noop;

              var showDetailsDialog = function(dialogType, client) {
                  $("#nome").val(client.nome);
                  $("#ticket").val(client.ticket);
                  $("#equipe").val(client.equipe);
                  $("#funcao").val(client.funcao);
                  $("#tipo").val(client.tipo);
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
                      equipe: parseInt($("#equipe").val(),10),
                      funcao: parseInt($("#funcao").val(), 10),
                      tipo: parseInt($("#tipo").val(), 10),
                      //  Married: $("#married").is(":checked")
                 
                    });

                    
              showDetailsDialog("Add", {});
        
                  $("#jsGrid").jsGrid(isNew ? "insertItem" : "updateItem", client);

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
             selectEquipe.options.add(c, 0);


             var selectFuncao =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[3]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
              selectFuncao.options[0].selected = "TODOS";

              
           var selectTipo =  document.evaluate('//*[@id="jsGrid"]/div[1]/table/tbody/tr[2]/td[5]/select', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            selectTipo.options[0].selected = "TODOS";

            var selectEquipes =  document.getElementById('equipe');
            db.equipe.forEach( function( equipe ){
                  let opt = document.createElement("option");
                  opt.innerHTML = equipe.nome;
                  opt.value = equipe.codigo;
                  c.text = "TODOS";
                  selectEquipes.options.add(c, 0);
                  selectEquipes.appendChild(opt);
                  selectEquipes.options[0].selected = "TODOS"; 

              });


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

               











