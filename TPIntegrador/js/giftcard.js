function setColorFondo(clr) {
    $("#cuadro-previa").css("background", clr);
}

function setColorFuente(clr) {
    $("#cuadro-previa").css("color", clr);
}

function setFuente(fnt) {
    $("#cuadro-previa").css("font-size", fnt);
}

function setAmountUbicationLeft() {
    $("#precio-vista-down").css("visibility", "hidden");
    $("#precio-vista").css("visibility", "visible");
    $("#precio-vista").css("flex-direction", "row");
}

function setAmountUbicationRight() {
    $("#precio-vista-down").css("visibility", "hidden");
    $("#precio-vista").css("visibility", "visible");
    $("#precio-vista").css("flex-direction", "row-reverse");
}

function setAmountUbicationBottom() {
    console.log("entro a ubic")
    $("#precio-vista-down").css("visibility", "visible");
    $("#precio-vista").css("visibility", "hidden");
}

$(document).ready(function () {
    $("#monto-input").keyup(function () {
        var value = $(this).val();
        $("#monto").text( '$ ' + value);
    });
});

//○ Al ingresar el título del curso el mismo se debe mostrar en la previsualización.
// ○ Al seleccionar un color se debe modificar el color del texto del título del evento y la
// fecha y hora de la invitación.
// ○ Al cambiar el tamaño de fuente se debe visualizar dicho cambio sobre la Giftcard.
// ○ Al agregar el monto se debe visualizar en la invitación.
// ○ Al cambiar la ubicación se debe modificar la ubicación de la fecha y hora en la
// invitación.
// ○ Al cambiar el fondo se debe modificar el color de fondo de la invitación.