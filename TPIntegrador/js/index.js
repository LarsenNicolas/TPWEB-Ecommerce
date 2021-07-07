$(document).ready(function(){



    
    $("#contador").text(sessionStorage.getItem('carrito'));



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
       e.preventDefault(); 
    });

    $(".inscripcion").click(function(){
      var contador = 0;
        contador++;
      
        $("#contador").text(contador);
        var cantidadCompras = $("#contador").text();
        alert(cantidadCompras);
        sessionStorage.setItem('carrito',cantidadCompras);
     });

    $("#titulo-contendido").click(function(){
        if($("#contendido-oculto").is(':visible')){
            $("#contendido-oculto").hide();
        }else{
            $("#contendido-oculto").show();
        }
        
     });
});