$(document).ready(function(){
    $("form").submit(function (e) {
        e.preventDefault();
        numEmpleado = $('#numEmpleado').val();
        alert('Bienvenido '+numEmpleado);
        window.location.replace("pages/inicio.html");
    });
});