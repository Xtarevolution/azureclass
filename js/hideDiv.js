var params;

function getUrlParams(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function(){

  params = getUrlParams();

  $('.capacitacion').css("display","none");
  $('.actualizacion').css("display","none");
  $('.gestion').css("display","none");
  $('.productos').css("display","none");
  $('.experienciaP').css("display","none");
  $('.experienciaD').css("display","none");
  $('.logros').css("display","none");
  $('.membresia').css("display","none");
  $('.premios').css("display","none");
  $('.participacion').css("display","none");

  desplegarDiv(params.section); 

  $('#a-formacion').on("click", function(){
    desplegarDiv('formacion');
  });

  $('#a-capacitacion').on("click", function(){
    desplegarDiv('capacitacion');
  });

  $('#a-actualizacion').on("click", function(){
    desplegarDiv('actualizacion');
  });

  $('#a-gestion').on("click", function(){
    desplegarDiv('gestion');
  });

  $('#a-productos').on("click", function(){
    desplegarDiv('productos');
  });

  $('#a-experienciaP').on("click", function(){
    desplegarDiv('experienciaP');
  });

  $('#a-experienciaD').on("click", function(){
    desplegarDiv('experienciaD');
  });

  $('#a-logros').on("click", function(){
    desplegarDiv('logros');
  });

  $('#a-membresia').on("click", function(){
    desplegarDiv('membresia');
  });

  $('#a-premios').on("click", function(){
    desplegarDiv('premios');
  });

  $('#a-participacion').on("click", function(){
    desplegarDiv('participacion');
  });
});


function desplegarDiv(div){
  if(div=='formacion'){
    $('.formacion').css("display","inline");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='capacitacion'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","inline");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='actualizacion'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","inline");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='gestion'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","inline");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='productos'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","inline");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='experienciaP'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","inline");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='experienciaD'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","inline");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='logros'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","inline");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='membresia'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","inline");
    $('.premios').css("display","none");
    $('.participacion').css("display","none");
  }

  if(div=='premios'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","inline");
    $('.participacion').css("display","none");
  }

  if(div=='participacion'){
    $('.formacion').css("display","none");
    $('.capacitacion').css("display","none");
    $('.actualizacion').css("display","none");
    $('.gestion').css("display","none");
    $('.productos').css("display","none");
    $('.experienciaP').css("display","none");
    $('.experienciaD').css("display","none");
    $('.logros').css("display","none");
    $('.membresia').css("display","none");
    $('.premios').css("display","none");
    $('.participacion').css("display","inline");
  }
}
