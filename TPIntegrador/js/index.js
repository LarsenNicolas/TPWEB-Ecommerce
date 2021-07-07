$(document).ready(function(){


    if(sessionStorage.getItem('carrito') == null || sessionStorage.getItem('carrito') == ''){
      $("#contador").text(0);
    }else{

       $("#contador").text(sessionStorage.getItem('carrito'));
    }
    
   



    $("a.desplegable").click(function(){
      if($('.menu').is(":visible")){
          $('.menu').slideUp();
      }else{
        $('.menu').slideDown();
      }
    });
    $(window).resize(function(){
        if($(this).width()>768){
            $(".menu").show();
        } else{
            $(".menu").hide();
        }
    });

    $(".button").click(function(){
        
        var carritoActual = $("#contador").text();
        carritoActual++;
        $("#contador").text(carritoActual);
     });


    $(".form-container .add").click(function(e){
       e.preventDefault(); 

      var montoActual = parseInt($("#montoTotal").text());
      montoActual = montoActual +100;
      $("#montoTotal").text(montoActual);
      var clonar=$(this).parent().clone(true);      
      $(this).parent().after(clonar); 
      e.preventDefault();
    });
    
   
    $(".form-container .delete").click(function(e){
      var cantidad = $(".row-filas").toArray().length;
      if(cantidad>3){
        $(this).parent().remove();
        var montoActual = parseInt($("#montoTotal").text());
      montoActual = montoActual - 100;
      $("#montoTotal").text(montoActual);
      } 
       
    });

    $(".inscripcion").click(function(){
      var contador = parseInt($("#contador").text());
        contador++;
      
        $("#contador").text(contador);
        var cantidadCompras = $("#contador").text();
        sessionStorage.setItem('carrito',cantidadCompras);
     });

    $("#titulo-contendido").click(function(){
        if($("#contendido-oculto").is(':visible')){
            $("#contendido-oculto").hide();
        }else{
            $("#contendido-oculto").show();
        }
        
     });


    $("#cerrarPopup").click(function(e){
      e.preventDefault(); 
      $("#popup").hide();
     });

    $("#inscribirseArray").click(function(e){
      e.preventDefault(); 
     /* inscriptosArray = $("[name='nombre[]']").toArray();
      console.log(inscriptosArray);

*/    if($(".primerNombre").val().length > 0 ){
        $("#popup").show();
        $("[name='nombre[]']").map(function(){

                $("#inscriptosNombre").append("<p class='nombrepopup'>" + $(this).val() + "</p> ");
              }).get();
      $("[name='dni[]']").map(function(){
                $("#inscriptosDni").append("<p class='dnipopup'>" + $(this).val() + "</p> ");
              }).get();
      $("[name='mail[]']").map(function(){
                $("#inscriptosMail").append("<p class='mailpopup'>" + $(this).val() + "</p> ");
              }).get();
      }
      
      

    });


          
     


});