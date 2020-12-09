$(document).ready(function(){

   $('.datepicker').datepicker({
        i18n: {
        months: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
        weekdays: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
        weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"],
        done: 'Aceptar',
        clear: 'Borrar',
        cancel: 'Cerrar',
        },
        format: 'yyyy-mm-dd',
        firstDay: 1,
        showClearBtn: true,
        minDate: new Date("1940-01-01"),
        yearRange: 60,
        maxDate: new Date("2015-01-01"),
        defaultDate: new Date("1980-01-01")
    });
    
    $("#register").submit(function(e){
        e.preventDefault();
        campos = '';
        $('#register input').each(function(){
            valor = $.trim($(this).val());
            id = $(this).attr('id');
            if(valor != '' && id != null && valor != null){
                campos = campos+id+': '+valor+'\n';
            } 
        });
        if(campos != ''){
            alert(campos);
        }
    });

});