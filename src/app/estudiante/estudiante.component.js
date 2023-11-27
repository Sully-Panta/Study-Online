var estaAutenticado = obtenerEstadoAutenticacion(); // Utiliza la función para obtener el estado de autenticación
var progresoEstudiante = cargarProgreso(); // Utiliza la función para cargar el progreso del estudiante

// Puedes simular datos de preguntas de programación para esta demostración
const preguntasProgramacion = [
    { enunciado: '¿Qué es HTML?', respuesta: 'HTML es un lenguaje de marcado utilizado para estructurar el contenido en la web.' },
    { enunciado: '¿Cómo se declara una variable en JavaScript?', respuesta: 'En JavaScript, se declara una variable usando la palabra clave "var", "let" o "const".' },
    // Puedes agregar más preguntas según sea necesario
];

document.addEventListener('DOMContentLoaded', function () {
    mostrarPreguntasProgramacion(preguntasProgramacion);
});


function enviarMensajeComunidad() {
    // Verifica si el estudiante está autenticado antes de enviar el mensaje
    if (!estaAutenticado) {
        alert("Debes iniciar sesión para realizar esta acción.");
        return;
    }

    var mensaje = document.getElementById('mensajeComunidad').value;
    var historialMensajes = document.getElementById('historialMensajes');

    // Agrega el mensaje al historial (aquí puedes enviar los mensajes a un servidor, base de datos, etc.)
    historialMensajes.innerHTML += '<p>' + mensaje + '</p>';
    document.getElementById('mensajeComunidad').value = ''; // Limpia el campo de entrada
}







function actualizarNombre() {
    var nombre = document.getElementById('nombre').value;
    document.getElementById('nombreEstudiante').innerText = nombre;
}

// Asegúrate de tener una función actualizarNombre() definida antes de esta sección

// Función para verificar respuestas a las preguntas
function verificarRespuestas() {
    // Pregunta 1
    var respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    var resultado1 = document.getElementById('resultado1');

    // Pregunta 2
    var respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    var resultado2 = document.getElementById('resultado2');

    // Pregunta 3
    var respuesta3 = document.querySelector('input[name="pregunta3"]:checked');
    var resultado3 = document.getElementById('resultado3');

    // Verificar respuestas y proporcionar retroalimentación
    if (respuesta1 && respuesta1.value === 'A') {
        resultado1.innerHTML = '¡Correcto!';
        resultado1.style.color = '#008000'; // Verde para correcto
    } else {
        resultado1.innerHTML = 'Incorrecto. La respuesta correcta es A.';
        resultado1.style.color = '#FF0000'; // Rojo para incorrecto
    }

    if (respuesta2 && respuesta2.value === 'B') {
        resultado2.innerHTML = '¡Correcto!';
        resultado2.style.color = '#008000';
    } else {
        resultado2.innerHTML = 'Incorrecto. La respuesta correcta es B.';
        resultado2.style.color = '#FF0000';
    }

    if (respuesta3 && respuesta3.value === 'B') {
        resultado3.innerHTML = '¡Correcto!';
        resultado3.style.color = '#008000';
    } else {
        resultado3.innerHTML = 'Incorrecto. La respuesta correcta es B.';
        resultado3.style.color = '#FF0000';
    }
}








function cambiarTema() {
    // Cambiar el tema de la página (aquí puedes agregar lógica más compleja según tus necesidades)
    document.body.classList.toggle('dark-theme');
}

function gestionarSesion() {
  if (estaAutenticado) {
    cerrarSesion();
  } else {
    iniciarSesion();
  }
}

function iniciarSesion() {
  var usuario = prompt("Ingresa tu nombre de usuario:");
  var contrasena = prompt("Ingresa tu contraseña:");

  // Verifica las credenciales (puedes implementar un sistema más seguro en un entorno real)
  if (usuario === "estudiante" && contrasena === "12345") {
    alert("¡Inicio de sesión exitoso!");
    estaAutenticado = true;
    guardarEstadoAutenticacion(); // Guarda el estado de autenticación
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
    estaAutenticado = false;
  }
}

function cerrarSesion() {
  estaAutenticado = false;
  limpiarProgreso(); // Borra el progreso al cerrar sesión
  borrarEstadoAutenticacion(); // Borra el estado de autenticación
  alert("Sesión cerrada exitosamente.");
  // Puedes redirigir a la página de inicio de sesión o realizar otras acciones al cerrar sesión
}

function cargarProgreso() {
  // Simula la carga del progreso desde algún almacenamiento (puede ser local storage, base de datos, etc.)
  var progresoGuardado = localStorage.getItem("progresoEstudiante");
  return progresoGuardado ? JSON.parse(progresoGuardado) : {};
}

function actualizarProgreso() {
  // Actualiza el progreso del estudiante en el almacenamiento
  localStorage.setItem(
    "progresoEstudiante",
    JSON.stringify(progresoEstudiante)
  );
  // También podrías enviar el progreso al servidor si es necesario
}

function limpiarProgreso() {
  // Borra el progreso del estudiante
  progresoEstudiante = {};
  localStorage.removeItem("progresoEstudiante");
}

function guardarEstadoAutenticacion() {
  // Guarda el estado de autenticación en local storage
  localStorage.setItem("estadoAutenticacion", JSON.stringify(true));
}

function obtenerEstadoAutenticacion() {
  // Obtiene el estado de autenticación desde local storage
  return JSON.parse(localStorage.getItem("estadoAutenticacion")) || false;
}

function borrarEstadoAutenticacion() {
  // Borra el estado de autenticación de local storage
  localStorage.removeItem("estadoAutenticacion");
}

function actualizarEstadisticasProgreso() {
  // Actualiza las estadísticas de progreso en la página
  var progresoElement = document.getElementById("progresoActividad1");
  progresoElement.querySelector("span").innerText =
    progresoEstudiante.actividad1 ? "Completada" : "No completada";
  // Puedes agregar más lógica para otras actividades según sea necesario
  verificarLogros(); // Llama a la función para verificar logros al actualizar el progreso
}

function verificarLogros() {
  // Verifica si se cumplen ciertos criterios para desbloquear logros
  if (progresoEstudiante.actividad1 && !progresoEstudiante.logroActividad1) {
    desbloquearLogro("logroActividad1"); // Desbloquea el logro si se cumplen las condiciones
  }
  // Puedes agregar más lógica para otros logros según sea necesario
}

function desbloquearLogro(idLogro) {
  // Desbloquea el logro y actualiza la página
  progresoEstudiante[idLogro] = true;
  actualizarProgreso(); // Guarda el progreso actualizado
  alert("¡Logro desbloqueado!");
  // Puedes agregar más acciones relacionadas con el desbloqueo de logros
  actualizarLogros(); // Actualiza la visualización de logros en la página
}

function actualizarLogros() {
  // Actualiza la visualización de logros en la página
  var logroElement = document.getElementById("logroActividad1");
  logroElement.querySelector("span").innerText = "Desbloqueado";
  // Puedes agregar más lógica para otros logros según sea necesario
}

function guardarNotas() {
  // Guarda las notas del estudiante en el almacenamiento local
  var notas = document.getElementById("notasEstudiante").value;
  localStorage.setItem("notasEstudiante", notas);
  alert("Notas guardadas exitosamente.");
}

function limpiarNotas() {
  // Limpia las notas del estudiante y actualiza la página
  document.getElementById("notasEstudiante").value = "";
  localStorage.removeItem("notasEstudiante");
  alert("Notas limpiadas exitosamente.");
}

function buscarRecursos() {
  var inputBusqueda = document
    .getElementById("busquedaRecursos")
    .value.toLowerCase();
  var listaRecursos = document.querySelectorAll("#recursos ul li a");

  listaRecursos.forEach(function (recurso) {
    var nombreRecurso = recurso.innerText.toLowerCase();
    var elementoPadre = recurso.parentElement; // Para mostrar/ocultar el elemento completo

    if (nombreRecurso.includes(inputBusqueda)) {
      elementoPadre.style.display = "block";
    } else {
      elementoPadre.style.display = "none";
    }
  });
}

function abrirRecurso(tipo, enlace) {
  if (tipo === "video") {
    abrirVideo(enlace);
  } else if (tipo === "documento") {
    // Lógica para abrir un documento (puedes redirigir a una nueva página o abrir en una ventana modal)
    console.log("Abriendo documento: " + enlace);
  } else {
    console.error("Tipo de recurso no reconocido");
  }
}

function abrirVideo(enlace) {
  // Crear un iframe y asignar la fuente del video
  var iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = enlace;
  iframe.frameBorder = "0"; // Cambiado desde frameborder
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true; // Cambiado desde allowfullscreen

  // Mostrar el video en una ventana modal (puedes ajustar esto según tu preferencia)
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.appendChild(iframe);

  // Agregar la ventana modal al cuerpo del documento
  document.body.appendChild(modal);
}

// Cerrar la ventana modal al hacer clic fuera del video
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.remove();
  }
});


// Cerrar la ventana modal al hacer clic fuera del video
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.remove();
    }
});


// Cerrar la ventana modal al hacer clic fuera del video
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.remove();
    }
});

var datosProgreso = {
  labels: ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"],
  datasets: [
    {
      label: "Progreso",
      data: [70, 85, 60, 90, 75], // Porcentajes de progreso
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

// Puedes simular datos de progreso para esta demostración
const datosDeProgreso = {
    porcentajeCompletado: 75,
    leccionesCompletadas: 15,
    totalLecciones: 20,
    tiempoDedicado: '10 horas'
};

document.addEventListener('DOMContentLoaded', function () {
    mostrarEstadisticasDeProgreso(datosDeProgreso);
});

function mostrarEstadisticasDeProgreso(datos) {
    const estadisticasContainer = document.getElementById('estadisticasContainer');

    // Crear elementos para mostrar las estadísticas
    const porcentajeCompletado = document.createElement('p');
    porcentajeCompletado.textContent = `Porcentaje Completado: ${datos.porcentajeCompletado}%`;

    const leccionesCompletadas = document.createElement('p');
    leccionesCompletadas.textContent = `Lecciones Completadas: ${datos.leccionesCompletadas}/${datos.totalLecciones}`;

    const tiempoDedicado = document.createElement('p');
    tiempoDedicado.textContent = `Tiempo Dedicado: ${datos.tiempoDedicado}`;

    // Agregar elementos al contenedor
    estadisticasContainer.appendChild(porcentajeCompletado);
    estadisticasContainer.appendChild(leccionesCompletadas);
    estadisticasContainer.appendChild(tiempoDedicado);
}

const logrosData = [
  {
    nombre: "Logro 1",
    descripcion: "Descripción del Logro 1",
    imagen: "url_a_la_imagen_1.jpg",
    obtenido: true,
  },
  {
    nombre: "Logro 2",
    descripcion: "Descripción del Logro 2",
    imagen: "url_a_la_imagen_2.jpg",
    obtenido: false,
  },
  // Puedes agregar más logros según sea necesario
];

document.addEventListener("DOMContentLoaded", function () {
  mostrarLogros(logrosData);
});

const videosRecomendados = [
  {
    titulo: "Introducción a la Física Cuántica",
    enlace: "https://www.youtube.com/watch?v=VIDEO_ID_1",
  },
  {
    titulo: "Historia de la Inteligencia Artificial",
    enlace: "https://www.youtube.com/watch?v=VIDEO_ID_2",
  },
  {
    titulo: "Aprende a Programar en Python",
    enlace: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  mostrarVideosRecomendados(videosRecomendados);
});

function mostrarVideosRecomendados(videos) {
  const recomendadosContainer = document.getElementById(
    "recomendadosContainer"
  );

  videos.forEach((video) => {
    const videoRecomendado = document.createElement("div");
    videoRecomendado.classList.add("videoRecomendado");

    const titulo = document.createElement("p");
    titulo.textContent = video.titulo;

    // Puedes agregar más detalles o elementos según sea necesario

    const enlace = document.createElement("a");
    enlace.href = video.enlace;
    enlace.textContent = "Ver video";

    videoRecomendado.appendChild(titulo);
    videoRecomendado.appendChild(enlace);

    recomendadosContainer.appendChild(videoRecomendado);
  });
}


function cambiarIdioma() {
  var idiomaSeleccionado = document.getElementById("idioma").value;

  // Implementa lógica para cambiar el idioma de la página según sea necesario
  // Puedes cargar recursos y mensajes en el idioma seleccionado

  alert("Idioma cambiado a " + idiomaSeleccionado);
  // Puedes agregar más acciones relacionadas con el cambio de idioma
}




// Función para agregar un video a la lista
function agregarVideo() {
    // Obtén la URL del video desde el input
    const urlVideo = document.getElementById('urlVideo').value;

    // Validar si la URL es válida y procesarla
    if (validarURLVideo(urlVideo)) {
        // Crea un elemento de imagen y configura su atributo src con la URL
        const imagenElement = document.createElement('img');
        imagenElement.src = urlVideo;
        imagenElement.alt = 'Imagen del Video'; // Puedes establecer un texto alternativo apropiado

        // Agrega el elemento de imagen a la lista de videos
        document.getElementById('listaVideos').appendChild(imagenElement);

        // Limpiar el input después de agregar la imagen del video
        document.getElementById('urlVideo').value = '';
    } else {
        alert('URL de imagen del video no válida. Por favor, ingrese una URL válida.');
    }
}

// Función para validar la URL del video (puedes expandir esto según tus necesidades)
function validarURLVideo(url) {
    // Aquí puedes implementar una validación más robusta, como verificar si la URL es válida.
    // Por ahora, simplemente verifica si la cadena no está vacía.
    return url.trim() !== '';
}

// Agrega el event listener para el botón enviarVideo
document.getElementById("enviarVideo").addEventListener("click", agregarVideo);





