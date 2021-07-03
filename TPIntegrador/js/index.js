$(document).ready(function(){ 

    if(!localStorage.getItem('carrito')){
        $("#contador").text('0');
    }else{
        $("#contador").text(localStorage.getItem('carrito'));
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

    var contador=0;
    $(".button").click(function(){
        toastr.success("Curso agregado al carrito de compras!");
        contador++;
        $("#contador").text(contador);
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
        localStorage.setItem('carrito',cantidadCompras);
     });

    $("#titulo-contendido").click(function(){
        if($("#contendido-oculto").is(':visible')){
            $("#contendido-oculto").hide();
        }else{
            $("#contendido-oculto").show();
        }
        
     });




});