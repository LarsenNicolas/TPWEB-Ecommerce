$(document).ready(function(){

    if (!sessionStorage.getItem('isStarted')) {
        sessionStorage.setItem('carrito', 0);
    }
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
        sessionStorage.setItem('isStarted', true);
        toastr.success("Curso agregado al carrito de compras!", "Activated", {timeout: 2000});
        let contador = sessionStorage.getItem('carrito');
        console.log("El contador es :" + contador);
        console.log("El contador es :" + contador++);
        sessionStorage.setItem('carrito', contador++);
        $("#contador").text(sessionStorage.getItem('carrito'));
     });


    $(".form-container .add").click(function(e){
      var clonar=$(this).parent().clone(true);      
      $(this).parent().after(clonar); 
      e.preventDefault(); 
    });
    
   
    $(".form-container .delete").click(function(e){
      var cantidad = $(".row-filas").toArray().length;
      if(cantidad>3){
        $(this).parent().remove();
      } 
       e.preventDefault(); 
    });

    $(".inscripcion").click(function(){
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




});