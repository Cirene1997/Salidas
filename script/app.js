const fin = document.getElementById('finalizar')

fin.addEventListener("click", (e) => {
  e.preventDefault();
  terminarProceso();
  screenshot()

})

function terminarProceso() {

  Swal.fire({
    template: '#my-template'
  })
}



const nextDay = document.getElementById('sigDia');
const diasDeSemana = document.getElementById('dias');

let hora = document.getElementById('hora')
let conductor = document.getElementById('conductor')
let territorio = document.getElementById('territorio')
let lugar = document.getElementById('lugar')



nextDay.addEventListener('click', (e) => {
  e.preventDefault();
  elegir();
  valorConductor();
  valorHora();
  valorTerritorio();
  valorLugar();


});


hora.addEventListener('change', (e) => {
  e.preventDefault();
    document.getElementById('hora').style.border = '1px solid black';
    document.getElementById('hora').style.background = '#fff';
    document.getElementById('hora').style.background = '#fff';
    document.getElementById('errorDato').innerText = 'ok';
    document.getElementById('errorDato').classList.add('okDato');
    document.getElementById('errorDato').classList.add('okDatoMedia');
  
   
})


conductor.addEventListener('change', (e) => {
  e.preventDefault();
  document.getElementById('conductor').style.border = '1px solid black';
  document.getElementById('conductor').style.background = '#fff';
  document.getElementById('errorDato2').innerText = 'ok';
  document.getElementById('errorDato2').classList.add('okDato');
})

territorio.addEventListener('change', (e) => {
  e.preventDefault();
  document.getElementById('territorio').style.border = '1px solid black';
  document.getElementById('territorio').style.background = '#fff';
  document.getElementById('errorDato3').innerText = 'ok';
  document.getElementById('errorDato3').classList.add('okDato')
  document.getElementById('errorDato3').classList.add('okDatoMedia')
})


lugar.addEventListener('change', (e) => {
  e.preventDefault();
  document.getElementById('lugar').style.border = '1px solid black';
  document.getElementById('lugar').style.background = '#fff';
  document.getElementById('errorDato4').innerText = 'ok';
  document.getElementById('errorDato4').classList.add('okDato');
})


function valorHora() {
  if (hora.value == '') {
    Swal.fire({
      title: ` Falto algun dato`,
      icon: 'question',
    })
    document.getElementById('hora').style.border = '2px solid red';
    document.getElementById('hora').style.background = '#f3b2b2';
    document.getElementById('errorDato').style.visibility = 'visible';
    document.getElementById('errorDato').innerText = 'X';
    document.getElementById('errorDato').classList.add('errorDato');
    document.getElementById('errorDato').classList.add('errorDatoMedia');
    document.getElementById('errorDato').classList.remove('okDato');
    document.getElementById('errorDato').classList.remove('okDatoMedia');

  } else {
    Swal.fire({
      title: `Excelente trabajo, se coloco correctamente`,
      icon: 'success',
    });

    document.getElementById('hora').style.border = '1px solid black';
    document.getElementById('hora').style.background = '#fff';
    document.getElementById('hora').style.background = '#fff';
    document.getElementById('errorDato').innerText = 'ok';
    document.getElementById('errorDato').classList.add('okDato');
    document.getElementById('errorDato').classList.add('okDatoMedia');
  }
}


function valorConductor() {
  if (conductor.value == '') {
    Swal.fire({
      title: ` Falto algun dato`,
      icon: 'question',
    })
    document.getElementById('conductor').style.border = '2px solid red';
    document.getElementById('conductor').style.background = '#f3b2b2';
    document.getElementById('errorDato2').style.visibility = 'visible';
    document.getElementById('errorDato2').innerText = 'X';
    document.getElementById('errorDato2').classList.add('errorDato');
    document.getElementById('errorDato2').classList.remove('okDato');
  } else {
    Swal.fire({
      title: `Excelente trabajo, se coloco correctamente`,
      icon: 'success',
    });

    document.getElementById('conductor').style.border = '1px solid black';
    document.getElementById('conductor').style.background = '#fff';
    document.getElementById('errorDato2').innerText = 'ok';
    document.getElementById('errorDato2').classList.add('okDato');
    document.getElementById('errorDato2').classList.remove('errorDato');

  }
}

function valorTerritorio() {
  if (territorio.value == '') {
    Swal.fire({
      title: ` Falto algun dato`,
      icon: 'question',
    })
    document.getElementById('territorio').style.border = '2px solid red';
    document.getElementById('territorio').style.background = '#f3b2b2';
    document.getElementById('errorDato3').style.visibility = 'visible';
    document.getElementById('errorDato3').innerText = 'X';
    document.getElementById('errorDato3').classList.add('errorDato');
    document.getElementById('errorDato3').classList.add('errorDatoMedia');
    document.getElementById('errorDato3').classList.remove('okDato');
    document.getElementById('errorDato3').classList.remove('okDatoMedia');
  } else {
    Swal.fire({
      title: `Excelente trabajo, se coloco correctamente`,
      icon: 'success',
    });
    document.getElementById('territorio').style.border = '1px solid black';
    document.getElementById('territorio').style.background = '#fff';
    document.getElementById('errorDato3').innerText = 'ok';
    document.getElementById('errorDato3').classList.add('okDato')
    document.getElementById('errorDato3').classList.add('okDatoMedia')
  }
}




function valorLugar() {
  if (lugar.value == '')  {
    Swal.fire({
      title: ` Falto algun dato`,
      icon: 'question',
    })
    document.getElementById('lugar').style.border = '2px solid red';
    document.getElementById('lugar').style.background = '#f3b2b2';
    document.getElementById('errorDato4').style.visibility = 'visible';
    document.getElementById('errorDato4').classList.add('errorDato');
    document.getElementById('errorDato4').classList.remove('okDato');
    document.getElementById('errorDato4').innerText = 'X';

  } else {
    Swal.fire({
      title: `Excelente trabajo, se coloco correctamente`,
      icon: 'success',
    });
    document.getElementById('lugar').style.border = '1px solid black';
    document.getElementById('lugar').style.background = '#fff';
    document.getElementById('errorDato4').innerText = 'ok';
    document.getElementById('errorDato4').classList.add('okDato');
    document.getElementById('errorDato4').classList.remove('errorDato');


  }
}



function notificacion(){
  Notification.requestPermission().then(resultado=>{
    console.log('Resultado :', resultado)
  })
}

notificacion()


function mostrarNotificacion(nombre){
  nombre = 'Daniel'
  if(Notification.permission === 'granted'){
    const notifcaWeb = new Notification(`Salidas Alcorta`,{
      icon: '../img/terri.png',
      body: `${nombre}, como estas? solo queria comentarte que recuerdes las Salidas, si deseas haz click aqui para abrir la pagina`,
     
    })
    notifcaWeb.onclick = function(){
      window.open('https://cirene1997.github.io/Salidas/src/index.html')
    }
}

}



diasDeSemana.addEventListener('change', elegir2);

function elegir2() {
  Swal.fire({
    title: `${diasDeSemana.value}`,
    footer: '<span style="color:blue">Recuerda tener todos los campos</span>',
  })

}


function semanasFechas() {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const fechaConParametros = new Date()
  const numberOfMlSeconds = fechaConParametros.getTime();
  const addMlSeconds = 60 * 1800000;
  const salidaFecha = new Date(numberOfMlSeconds + addMlSeconds);
  const addMlSeconds2 = 60 * 8000000;
  const salidaFecha2 = new Date(numberOfMlSeconds + addMlSeconds2);
  if (salidaFecha2 >= 1) {
    document.getElementById('semanas').innerHTML = `Semana ${salidaFecha.getDate()} de ${meses[salidaFecha.getMonth()]} al ${salidaFecha2.getDate()} de ${meses[salidaFecha2.getMonth()]}`
  }
  else {
    document.getElementById('semanas').innerHTML = `Semana ${salidaFecha.getDate()} al ${salidaFecha2.getDate()} de ${meses[salidaFecha2.getMonth()]}`
  }
}
semanasFechas()



function screenshot() {

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const fechaConParametros = new Date()
  const numberOfMlSeconds = fechaConParametros.getTime();
  const addMlSeconds = 60 * 1800000;
  const salidaFecha = new Date(numberOfMlSeconds + addMlSeconds);
  const addMlSeconds2 = 60 * 8000000;
  const salidaFecha2 = new Date(numberOfMlSeconds + addMlSeconds2);
  if (salidaFecha2 >= 1) {
    document.getElementById('semanas').innerHTML = `Semana ${salidaFecha.getDate()} de ${meses[salidaFecha.getMonth()]} al ${salidaFecha2.getDate()} de ${meses[salidaFecha2.getMonth()]}`
  }
  else {
    document.getElementById('semanas').innerHTML = `Semana ${salidaFecha.getDate()} al ${salidaFecha2.getDate()} de ${meses[salidaFecha2.getMonth()]}`
  }
  setTimeout(mostrarNotificacion, 60 * 10000000)
  setTimeout(semanasFechas, 60 * 10000000)


  const imprimir = document.querySelector('.tablaValor')
  html2canvas(imprimir, {
    onrendered(canvas) {
      imprimir.fillText = canvas

      var link = document.getElementById('download');
      var image = canvas.toDataURL();
      link.href = image;
      link.download = `Salidas.png`;
      // + ` ${salidaFecha.getDate()} al ${salidaFecha2.getDate()} de ${meses[salidaFecha2.getMonth()]}`;
    }
    
  }
  );


}






function elegir() {
  const diasDeSemana = document.getElementById('dias');

  switch (diasDeSemana.value) {
    //  INICO LUNES
    case 'Lunes':
      let hora = document.getElementById('hora').value
      // document.getElementById('horas').innerText = `${hora} hs`;
      let conductor = document.getElementById('conductor').value
      document.getElementById('conductores').innerText = conductor;
      let lugar = document.getElementById('lugar').value
      document.getElementById('lugares').innerText = lugar;
      let terri = document.getElementById('territorio').value
      document.getElementById('territorios').innerText = terri;
      document.querySelector('.horas').innerText = `${hora} hs`;
      break;
    // FIN LUNES
    // INCIO MARTES
    case 'Martes':
      let horaMartes = document.getElementById('hora').value
      document.querySelector('.horas1').innerText = `${horaMartes} hs`;

      let conductorA = document.getElementById('conductor').value
      document.getElementById('conductoresA').innerText = conductorA;

      let lugar1 = document.getElementById('lugar').value
      document.getElementById('lugares1').innerText = lugar1;


      let terri1 = document.getElementById('territorio').value
      document.getElementById('territorios1').innerText = terri1;
      break;

    case 'Martes-tarde':
      let horaMartesTarde = document.getElementById('hora').value
      document.querySelector('.horas2').innerText = `${horaMartesTarde} hs`;

      let conductorB = document.getElementById('conductor').value
      document.getElementById('conductoresB').innerText = conductorB;

      let lugar2 = document.getElementById('lugar').value
      document.getElementById('lugares2').innerText = lugar2;
      let terri2 = document.getElementById('territorio').value

      document.getElementById('territorios2').innerText = terri2;
      break;
    case 'Martes-tarde2':
      let horaMartesTardeB = document.getElementById('hora').value
      document.querySelector('.horas3').innerText = `${horaMartesTardeB} hs`;

      let conductorC = document.getElementById('conductor').value
      document.getElementById('conductores3').innerText = conductorC;

      let lugar3 = document.getElementById('lugar').value
      document.getElementById('lugares3').innerText = lugar3;
      let terri3 = document.getElementById('territorio').value

      document.getElementById('territorios3').innerText = terri3;
      break;

    // FIN DEL DIA MARTES

    // INICO MIERCOLES

    case 'Miercoles':
      let horaMiercoles = document.getElementById('hora').value
      document.querySelector('.horas4').innerText = `${horaMiercoles} hs`;

      let conductorD = document.getElementById('conductor').value
      document.getElementById('conductores4').innerText = conductorD;

      let lugar4 = document.getElementById('lugar').value
      document.getElementById('lugares4').innerText = lugar4;


      let terri4 = document.getElementById('territorio').value
      document.getElementById('territorios4').innerText = terri4;
      break;

    case 'Miercoles-tarde':
      let horaMiercolesTarde = document.getElementById('hora').value
      document.querySelector('.horas5').innerText = `${horaMiercolesTarde} hs`;

      let conductorE = document.getElementById('conductor').value
      document.getElementById('conductores5').innerText = conductorE;

      let lugar5 = document.getElementById('lugar').value
      document.getElementById('lugares5').innerText = lugar5;
      let terri5 = document.getElementById('territorio').value

      document.getElementById('territorios5').innerText = terri5;
      break;
    case 'Miercoles-tarde2':
      let horaMiercolesTardeB = document.getElementById('hora').value
      document.querySelector('.horas6').innerText = `${horaMiercolesTardeB} hs`;

      let conductorF = document.getElementById('conductor').value
      document.getElementById('conductores6').innerText = conductorF;

      let lugar6 = document.getElementById('lugar').value
      document.getElementById('lugares6').innerText = lugar6;
      let terri6 = document.getElementById('territorio').value

      document.getElementById('territorios6').innerText = terri6;
      break;
    // FIN MIERCOLES

    // INICIO JUEVES
    case 'Jueves':
      let horaJueves = document.getElementById('hora').value
      document.querySelector('.horas7').innerText = `${horaJueves} hs`;

      let conductorG = document.getElementById('conductor').value
      document.getElementById('conductores7').innerText = conductorG;

      let lugar7 = document.getElementById('lugar').value
      document.getElementById('lugares7').innerText = lugar7;


      let terri7 = document.getElementById('territorio').value
      document.getElementById('territorios7').innerText = terri7;
      break;

    case 'Jueves-tarde':
      let horaJuevesTarde = document.getElementById('hora').value
      document.querySelector('.horas8').innerText = `${horaJuevesTarde} hs`;

      let conductorH = document.getElementById('conductor').value
      document.getElementById('conductores8').innerText = conductorH;

      let lugar8 = document.getElementById('lugar').value
      document.getElementById('lugares8').innerText = lugar8;
      let terri8 = document.getElementById('territorio').value

      document.getElementById('territorios8').innerText = terri8;
      break;

    case 'Jueves-tarde2':
      let horaJuevesTardeB = document.getElementById('hora').value
      document.querySelector('.horas9').innerText = `${horaJuevesTardeB} hs`;

      let conductorI = document.getElementById('conductor').value
      document.getElementById('conductores9').innerText = conductorI;

      let lugar9 = document.getElementById('lugar').value
      document.getElementById('lugares9').innerText = lugar9;
      let terri9 = document.getElementById('territorio').value

      document.getElementById('territorios9').innerText = terri9;
      break;
    // FIN DE JUEVES

    // INICIO VIERNES
    case 'Viernes':
      let horaViernes = document.getElementById('hora').value
      document.querySelector('.horas10').innerText = `${horaViernes} hs`;

      let conductorJ = document.getElementById('conductor').value
      document.getElementById('conductores10').innerText = conductorJ;

      let lugar10 = document.getElementById('lugar').value
      document.getElementById('lugares10').innerText = lugar10;


      let terri10 = document.getElementById('territorio').value
      document.getElementById('territorios10').innerText = terri10;
      break;

    case 'Viernes-Tarde':
      let horaViernesTarde = document.getElementById('hora').value
      document.querySelector('.horas11').innerText = `${horaViernesTarde} hs`;

      let conductork = document.getElementById('conductor').value
      document.getElementById('conductores11').innerText = conductork;

      let lugar11 = document.getElementById('lugar').value
      document.getElementById('lugares11').innerText = lugar11;
      let terri11 = document.getElementById('territorio').value

      document.getElementById('territorios11').innerText = terri11;
      break;

    case 'Viernes-Tarde2':
      let horaViernesTarde2 = document.getElementById('hora').value
      document.querySelector('.horas16').innerText = `${horaViernesTarde2} hs`;

      let conductorQ = document.getElementById('conductor').value
      document.getElementById('conductores16').innerText = conductorQ;

      let lugar16 = document.getElementById('lugar').value
      document.getElementById('lugares16').innerText = lugar16;
      let terri16 = document.getElementById('territorio').value

      document.getElementById('territorios16').innerText = terri16;
      break;



    // FIN VIERNES

    // INICIO SABADO
    case 'Sabado':
      let horaViernesTardeB = document.getElementById('hora').value
      document.querySelector('.horas12').innerText = `${horaViernesTardeB} hs`;

      let conductorL = document.getElementById('conductor').value
      document.getElementById('conductores12').innerText = conductorL;

      let lugar12 = document.getElementById('lugar').value
      document.getElementById('lugares12').innerText = lugar12;
      let terri12 = document.getElementById('territorio').value

      document.getElementById('territorios12').innerText = terri12;
      break;

    case 'Sabado-mañana':
      let horaSabado = document.getElementById('hora').value
      document.querySelector('.horas13').innerText = `${horaSabado} hs`;

      let conductorN = document.getElementById('conductor').value
      document.getElementById('conductores13').innerText = conductorN;

      let lugar13 = document.getElementById('lugar').value
      document.getElementById('lugares13').innerText = lugar13;


      let terri13 = document.getElementById('territorio').value
      document.getElementById('territorios13').innerText = terri13;
      break;



    case 'Sabado-tarde':
      let horaSabadoTarde = document.getElementById('hora').value
      document.querySelector('.horas14').innerText = `${horaSabadoTarde} hs`;

      let conductorO = document.getElementById('conductor').value
      document.getElementById('conductores14').innerText = conductorO;

      let lugar14 = document.getElementById('lugar').value
      document.getElementById('lugares14').innerText = lugar14;
      let terri14 = document.getElementById('territorio').value

      document.getElementById('territorios14').innerText = terri14;
      break;

    case 'Sabado-tarde2':
      let horaSabadoTardeB = document.getElementById('hora').value
      document.querySelector('.horas15').innerText = `${horaSabadoTardeB} hs`;

      let conductorP = document.getElementById('conductor').value
      document.getElementById('conductores15').innerText = conductorP;

      let lugar15 = document.getElementById('lugar').value
      document.getElementById('lugares15').innerText = lugar15;
      let terri15 = document.getElementById('territorio').value

      document.getElementById('territorios15').innerText = terri15;
      break;
    // FIN SABADO

    default: Swal.fire({
      title: 'Algo fallo, escribe a soporte por favor',
      icon: 'warning',
    })
  }


}


















