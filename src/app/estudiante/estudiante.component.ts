// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class EstudianteComponent implements OnInit {
  estaAutenticado: boolean = obtenerEstadoAutenticacion();
  progresoEstudiante: { [key: string]: any } = cargarProgreso();

  ngOnInit() {
    // Angular llama a ngOnInit después de inicializar la directiva/componente.
    // Puedes realizar lógica de inicialización aquí.
    this.mostrarPreguntasProgramacion(preguntasProgramacion);
  }

  onClickEnviarMensajeComunidad(): void {
    if (!this.estaAutenticado) {
      alert("Debes iniciar sesión para realizar esta acción.");
      return;
    }

    const mensaje: string = (<HTMLInputElement>document.getElementById('mensajeComunidad')).value;
    const historialMensajes: HTMLElement | null = document.getElementById('historialMensajes');

    if (historialMensajes) {
      historialMensajes.innerHTML += '<p>' + mensaje + '</p>';
      (<HTMLInputElement>document.getElementById('mensajeComunidad')).value = ''; // Limpia el campo de entrada
    } else {
      console.error('Error: Elemento "historialMensajes" no encontrado.');
    }
  }

  mostrarPreguntasProgramacion(preguntas: PreguntaProgramacion[]): void {
    // Implementa la lógica para mostrar las preguntas en tu interfaz gráfica
    // Puedes usar Angular para manipular el DOM en lugar de acceder directamente a él
  }

  // Otras funciones y métodos según sea necesario
}


// Declara variables con tipos específicos
let estaAutenticado: boolean = obtenerEstadoAutenticacion();
let progresoEstudiante: { [key: string]: any } = cargarProgreso(); // Esto depende de la estructura real de tus datos


// Utiliza tipos específicos para las preguntas de programación
interface PreguntaProgramacion {
  enunciado: string;
  respuesta: string;
}

const preguntasProgramacion: PreguntaProgramacion[] = [
  { enunciado: '¿Qué es HTML?', respuesta: 'HTML es un lenguaje de marcado utilizado para estructurar el contenido en la web.' },
  { enunciado: '¿Cómo se declara una variable en JavaScript?', respuesta: 'En JavaScript, se declara una variable usando la palabra clave "var", "let" o "const".' },
  // Agrega más preguntas según sea necesario
];



document.addEventListener('DOMContentLoaded', function () {
    mostrarPreguntasProgramacion(preguntasProgramacion);
});



// Define funciones con tipos específicos para los parámetros y el valor de retorno
function enviarMensajeComunidad(): void {
    if (!estaAutenticado) {
        alert("Debes iniciar sesión para realizar esta acción.");
        return;
    }

    const mensaje: string = (<HTMLInputElement>document.getElementById('mensajeComunidad')).value;
    const historialMensajes: HTMLElement | null = document.getElementById('historialMensajes');

    if (historialMensajes) {
        historialMensajes.innerHTML += '<p>' + mensaje + '</p>';
        (<HTMLInputElement>document.getElementById('mensajeComunidad')).value = ''; // Limpia el campo de entrada
    } else {
        console.error('Error: Elemento "historialMensajes" no encontrado.');
    }
}


// Función para mostrar preguntas de programación (debe ser definida en tu código)
function mostrarPreguntasProgramacion(preguntas: PreguntaProgramacion[]): void {
    // Implementa la lógica para mostrar las preguntas en tu interfaz gráfica
}

// Asegúrate de que 'historialMensajes' esté definido en tu HTML
// Ejemplo: <div id="historialMensajes"></div>







function actualizarNombre(): void {
    const nombre: string = (<HTMLInputElement>document.getElementById('nombre')).value;
    const nombreEstudiante: HTMLSpanElement | null = <HTMLSpanElement>document.getElementById('nombreEstudiante');

    if (nombreEstudiante) {
        nombreEstudiante.innerText = nombre;
    } else {
        console.error('Error: Elemento "nombreEstudiante" no encontrado.');
    }
}



// Función para verificar respuestas a las preguntas
function verificarRespuestas(): void {
    const respuesta1: HTMLInputElement | null = <HTMLInputElement>document.querySelector('input[name="pregunta1"]:checked');
    const resultado1: HTMLElement | null = document.getElementById('resultado1');

    const respuesta2: HTMLInputElement | null = <HTMLInputElement>document.querySelector('input[name="pregunta2"]:checked');
    const resultado2: HTMLElement | null = document.getElementById('resultado2');

    const respuesta3: HTMLInputElement | null = <HTMLInputElement>document.querySelector('input[name="pregunta3"]:checked');
    const resultado3: HTMLElement | null = document.getElementById('resultado3');

    if (!respuesta1 || !resultado1 || !respuesta2 || !resultado2 || !respuesta3 || !resultado3) {
        console.error('Error: Algunos elementos no fueron encontrados.');
        return;
    }

    if (respuesta1.value === 'A') {
        resultado1.innerHTML = '¡Correcto!';
        resultado1.style.color = '#008000'; // Verde para correcto
    } else {
        resultado1.innerHTML = 'Incorrecto. La respuesta correcta es A.';
        resultado1.style.color = '#FF0000'; // Rojo para incorrecto
    }

    if (respuesta2.value === 'B') {
        resultado2.innerHTML = '¡Correcto!';
        resultado2.style.color = '#008000';
    } else {
        resultado2.innerHTML = 'Incorrecto. La respuesta correcta es B.';
        resultado2.style.color = '#FF0000';
    }

    if (respuesta3.value === 'B') {
        resultado3.innerHTML = '¡Correcto!';
        resultado3.style.color = '#008000';
    } else {
        resultado3.innerHTML = 'Incorrecto. La respuesta correcta es B.';
        resultado3.style.color = '#FF0000';
    }
}




function cambiarTema(): void {
    // Cambiar el tema de la página (aquí puedes agregar lógica más compleja según tus necesidades)
    document.body.classList.toggle('dark-theme');
}

function gestionarSesion(): void {
    if (estaAutenticado) {
        cerrarSesion();
    } else {
        iniciarSesion();
    }
}

function iniciarSesion(): void {
    const usuario: string | null = prompt("Ingresa tu nombre de usuario:");
    const contrasena: string | null = prompt("Ingresa tu contraseña:");

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


function cerrarSesion(): void {
    estaAutenticado = false;
    limpiarProgreso(); // Borra el progreso al cerrar sesión
    borrarEstadoAutenticacion(); // Borra el estado de autenticación
    alert("Sesión cerrada exitosamente.");
    // Puedes redirigir a la página de inicio de sesión o realizar otras acciones al cerrar sesión
}

function cargarProgreso(): any {
    // Simula la carga del progreso desde algún almacenamiento (puede ser local storage, base de datos, etc.)
    const progresoGuardado: string | null = localStorage.getItem("progresoEstudiante");
    return progresoGuardado ? JSON.parse(progresoGuardado) : {};
}

function actualizarProgreso(): void {
    // Actualiza el progreso del estudiante en el almacenamiento
    localStorage.setItem(
        "progresoEstudiante",
        JSON.stringify(progresoEstudiante)
    );
    // También podrías enviar el progreso al servidor si es necesario
}

function limpiarProgreso(): void {
    // Borra el progreso del estudiante
    progresoEstudiante = {};
    localStorage.removeItem("progresoEstudiante");
}


function guardarEstadoAutenticacion(): void {
    // Guarda el estado de autenticación en local storage
    localStorage.setItem("estadoAutenticacion", JSON.stringify(true));
}

function obtenerEstadoAutenticacion(): boolean {
    try {
        const estadoAutenticacionJSON = localStorage.getItem("estadoAutenticacion");
        if (estadoAutenticacionJSON) {
            return JSON.parse(estadoAutenticacionJSON) || false;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al analizar el JSON del estado de autenticación:', error);
        return false;
    }
}


function actualizarEstadisticasProgreso(actividad: string): void {
    const nombreElemento = `progreso${actividad}`;
    const progresoElement: HTMLElement | null = document.getElementById(nombreElemento);

    if (progresoElement) {
        const spanElement: HTMLElement | null = progresoElement.querySelector("span");

        if (spanElement) {
            spanElement.innerText = progresoEstudiante[actividad] ? "Completada" : "No completada";
            verificarLogros(); // Llama a la función para verificar logros al actualizar el progreso
        } else {
            console.error(`Error: Elemento "span" dentro de "${nombreElemento}" no encontrado.`);
        }
    } else {
        console.error(`Error: Elemento "${nombreElemento}" no encontrado.`);
    }
}

// Ejemplo de uso:
document.addEventListener('DOMContentLoaded', function () {
    actualizarEstadisticasProgreso('actividad1');
});








function verificarLogros(actividad: string, idLogro: string): void {
    if (progresoEstudiante[actividad] && !progresoEstudiante[idLogro]) {
        desbloquearLogro(idLogro);
    }
}

// Ejemplo de uso:
verificarLogros('actividad1', 'logroActividad1');





function actualizarLogros(): void {
    const logroElement: HTMLElement | null = document.getElementById("logroActividad1");

    if (logroElement) {
        const spanElement: HTMLElement | null = logroElement.querySelector("span");

        if (spanElement) {
            spanElement.innerText = "Desbloqueado";
        } else {
            console.error('Error: Elemento "span" dentro de "logroActividad1" no encontrado.');
        }
    } else {
        console.error('Error: Elemento "logroActividad1" no encontrado.');
    }
}







function guardarNotas(): void {
    // Guarda las notas del estudiante en el almacenamiento local
    const notas: string = (<HTMLInputElement>document.getElementById("notasEstudiante")).value;
    localStorage.setItem("notasEstudiante", notas);
    alert("Notas guardadas exitosamente.");
}

function limpiarNotas(): void {
    // Limpia las notas del estudiante y actualiza la página
    (<HTMLInputElement>document.getElementById("notasEstudiante")).value = "";
    localStorage.removeItem("notasEstudiante");
    alert("Notas limpiadas exitosamente.");
}




function buscarRecursos(): void {
    const inputBusqueda: string = (<HTMLInputElement>document.getElementById("busquedaRecursos")).value.toLowerCase();
    const listaRecursos: NodeList = document.querySelectorAll("#recursos ul li a");

    listaRecursos.forEach(function (recurso: Node) {
    if (recurso instanceof HTMLElement) {
        const nombreRecurso: string = recurso.innerText.toLowerCase();
        const elementoPadre: HTMLElement | null = recurso.parentElement; // Para mostrar/ocultar el elemento completo

        if (nombreRecurso.includes(inputBusqueda)) {
            if (elementoPadre) {
                elementoPadre.style.display = "block";
            }
        } else {
            if (elementoPadre) {
                elementoPadre.style.display = "none";
            }
        }
    }
});




function abrirRecurso(tipo: string, enlace: string): void {
    if (tipo === "video") {
        abrirVideo(enlace);
    } else if (tipo === "documento") {
        // Lógica para abrir un documento (puedes redirigir a una nueva página o abrir en una ventana modal)
        console.log("Abriendo documento: " + enlace);
    } else {
        console.error("Tipo de recurso no reconocido");
    }
}

function abrirVideo(enlace: string): void {
    // Crear un iframe y asignar la fuente del video
    const iframe: HTMLIFrameElement = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = enlace;
    iframe.frameBorder = "0"; // Cambiado desde frameborder
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true; // Cambiado desde allowfullscreen

    // Mostrar el video en una ventana modal (puedes ajustar esto según tu preferencia)
    const modal: HTMLDivElement = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(iframe);

    // Agregar la ventana modal al cuerpo del documento
    document.body.appendChild(modal);
}



const datosProgreso: any = {
    labels: ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"],
    datasets: [
        {
            label: "Progreso",
            data: [70, 85, 60, 90, 75], // Porcentajes de progreso
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Corregir el cierre de paréntesis
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};


const datosProgreso: any = {
    labels: ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"],
    datasets: [
        {
            label: "Progreso",
            data: [70, 85, 60, 90, 75], // Porcentajes de progreso
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Corregir el cierre de paréntesis
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};


// Puedes simular datos de progreso para esta demostración
const datosDeProgreso: any = {
    porcentajeCompletado: 75,
    leccionesCompletadas: 15,
    totalLecciones: 20,
    tiempoDedicado: '10 horas'
};

document.addEventListener('DOMContentLoaded', function () {
    mostrarEstadisticasDeProgreso(datosDeProgreso);
});

function mostrarEstadisticasDeProgreso(datos: any): void {
    const estadisticasContainer: HTMLElement = document.getElementById('estadisticasContainer');

    // Crear elementos para mostrar las estadísticas
    const porcentajeCompletado: HTMLParagraphElement = document.createElement('p');
    porcentajeCompletado.textContent = `Porcentaje Completado: ${datos.porcentajeCompletado}%`;

    const leccionesCompletadas: HTMLParagraphElement = document.createElement('p');
    leccionesCompletadas.textContent = `Lecciones Completadas: ${datos.leccionesCompletadas}/${datos.totalLecciones}`;

    const tiempoDedicado: HTMLParagraphElement = document.createElement('p');
    tiempoDedicado.textContent = `Tiempo Dedicado: ${datos.tiempoDedicado}`;

    // Agregar elementos al contenedor
    estadisticasContainer.appendChild(porcentajeCompletado);
    estadisticasContainer.appendChild(leccionesCompletadas);
    estadisticasContainer.appendChild(tiempoDedicado);
}

const logrosData: any[] = [
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

const videosRecomendados: any[] = [
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

function mostrarVideosRecomendados(videos: any[]): void {
    const recomendadosContainer: HTMLElement = document.getElementById(
        "recomendadosContainer"
    );

    videos.forEach((video) => {
        const videoRecomendado: HTMLDivElement = document.createElement("div");
        videoRecomendado.classList.add("videoRecomendado");

        const titulo: HTMLParagraphElement = document.createElement("p");
        titulo.textContent = video.titulo;

        // Puedes agregar más detalles o elementos según sea necesario

        const enlace: HTMLAnchorElement = document.createElement("a");
        enlace.href = video.enlace;
        enlace.textContent = "Ver video";

        videoRecomendado.appendChild(titulo);
        videoRecomendado.appendChild(enlace);

        recomendadosContainer.appendChild(videoRecomendado);
    });
}

function cambiarIdioma(): void {
    const idiomaSeleccionado: string = (<HTMLSelectElement>document.getElementById("idioma")).value;

    // Implementa lógica para cambiar el idioma de la página según sea necesario
    // Puedes cargar recursos y mensajes en el idioma seleccionado

    alert("Idioma cambiado a " + idiomaSeleccionado);
    // Puedes agregar más acciones relacionadas con el cambio de idioma
}

// Función para agregar un video a la lista
function agregarVideo(): void {
    // Obtén la URL del video desde el input
    const urlVideo: string = (<HTMLInputElement>document.getElementById('urlVideo')).value;

   // Función para validar la URL del video
function validarURLVideo(url: string): boolean {
    // Expresión regular para validar una URL simple (puedes ajustar según tus necesidades)
    const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)|localhost(\:\d+)?(\/\S*)?$/;

    return urlRegex.test(url);
}

// Resto del código...

// Agregar el event listener para el botón enviarVideo
const enviarVideoButton: HTMLElement | null = document.getElementById("enviarVideo");

if (enviarVideoButton) {
    enviarVideoButton.addEventListener("click", agregarVideo);
} else {
    console.error('Error: Elemento "enviarVideo" no encontrado.');
}

// Función para agregar un video a la lista
function agregarVideo(): void {
    // Obtén la URL del video desde el input
    const urlVideo: string = (<HTMLInputElement>document.getElementById('urlVideo')).value;

    // Validar si la URL es válida y procesarla
    if (validarURLVideo(urlVideo)) {
        // Crea un elemento de imagen y configura su atributo src con la URL
        const imagenElement: HTMLImageElement = document.createElement('img');
        imagenElement
.src = urlVideo;
imagenElement.alt = 'Imagen del Video'; // Puedes establecer un texto alternativo apropiado

// Agrega el elemento de imagen a la lista de videos
const listaVideos: HTMLElement | null = document.getElementById('listaVideos');
if (listaVideos) {
    listaVideos.appendChild(imagenElement);

    // Limpiar el input después de agregar la imagen del video
    (<HTMLInputElement>document.getElementById('urlVideo')).value = '';
} else {
    console.error('Error: Elemento "listaVideos" no encontrado.');
}
} else {
    alert('URL de video no válida. Por favor, ingrese una URL válida.');
}
}




// Función para validar la URL del video (puedes expandir esto según tus necesidades)
function validarURLVideo(url: string): boolean {
    // Expresión regular para validar una URL simple (puedes ajustar según tus necesidades)
    const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)|localhost(\:\d+)?(\/\S*)?$/;

    return urlRegex.test(url);
}
