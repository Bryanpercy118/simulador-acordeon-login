
// Seleccionamos el botón de menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Agregamos un event listener para el clic en el botón de menú
menuToggle.addEventListener('click', function() {
    // Alternamos la clase para mostrar u ocultar el menú
    menu.classList.toggle('open');
});



// Contenido de la acordeon
$("#composiciones .contenido").niceScroll({cursorcolor:"#00F",autohidemode:'hover'})

// Cargar el sonido del acordeon
document.body.addEventListener('cargando-sonidos',({detail})=>{
    console.log({detail})
    if(detail){
        document.getElementById("app-container").classList.add("cargando")
    }else{
        document.getElementById("app-container").classList.remove("cargando")
    }
},true)

let composiciones = [];


// Lista de canciones
const defaultCompositions = [
  


];

// mostrar las canciones
function cargarComposiciones() {
  $("#composiciones .contenido").html('');

  // Fusionar composiciones predeterminadas con composiciones de almacenamiento local
  composiciones = [
    ...defaultCompositions,
    ...Object.keys({ ...localStorage }).filter((l) => l.includes("acordeon")).map(key => ({ nombre: key.split('-')[1], cancion: JSON.parse(localStorage.getItem(key)) }))
  ];

  
  //   Botones de la cancion
    composiciones.forEach((composicion, index) => {
        $("#composiciones .contenido").append($(
            `<div class="composicion">
                <span class="nombre" title="${composicion.nombre}">${composicion.nombre}</span>
                <div class="acciones">
                    <span class="reproducir material-symbols-outlined" data-index="${index}" title="Escuchar canción">resume</span>
                    <span class="practicar material-symbols-outlined" data-index="${index}" title="Comenzar exámen">stadia_controller</span>
                    <span class="borrar material-symbols-outlined" data-index="${index}" title="Eliminar">delete</span>
                </div>
                <div class="progreso">
                    <div class="porcentaje"></div>
                </div>
            </div>`
        ));
    });




}

// cargar las canciones
cargarComposiciones();


// Reproducir examen
$("body").on("click",".acciones .reproducir",function(){
    const ele = this
    let composicion     =   composiciones[ele.dataset.index]
    let duracion        =   composicion.cancion.sort((a,b)=>a.inicio-b.inicio)
    duracion            =   duracion[duracion.length-1].inicio+duracion[duracion.length-1].duracion
    const porcentaje    =   $(ele).parent().parent().find(".progreso .porcentaje")
    porcentaje.css({'animation-duration':duracion+'ms'}).addClass("animar-porcentaje")

    Acordeon.reproducir(composiciones[this.dataset.index].cancion)
})

// Click en iniciar examen
$("body").on("click",".acciones .practicar",function(){
    let composicion =   composiciones[this.dataset.index]
    let duracion    =   composicion.cancion.sort((a,b)=>a.inicio-b.inicio)
    duracion        =   duracion[duracion.length-1].inicio+duracion[duracion.length-1].duracion
    
    const ele = this
    const porcentaje    =   $(ele).parent().parent().find(".progreso .porcentaje")
    
    
    // Mensaje informativo antes del examen
    Swal.fire({
        title: `Examen de ${composicion.nombre}`,
        html: `
        <div>
            <p>Prepárese para tocar la canción con su teclado.</p>
        </div>
    `,
    icon: "info",
    showConfirmButton: false,
    timer: 3000, // Tiempo de visualización del mensaje en milisegundos (2 segundos)
    timerProgressBar: true, // Barra de progreso que muestra el tiempo restante
    allowOutsideClick: false, 
        
    }).then(() => {
        Acordeon.grabar(); // Iniciar la grabación después del conteo regresivo
        porcentaje.css({'animation-duration': duracion + 'ms'}).addClass("animar-porcentaje");

        // Mostrar puntaje después de la duración especificada
        setTimeout(() => {
            const cancion = Acordeon.detenerGrabacion();
            const score = Acordeon.evaluar(composicion.cancion, cancion);
            porcentaje.removeClass("animar-porcentaje");

            let mensaje;
            if (score >= 60) {
                mensaje = '¡Felicidades! Has pasado el examen con un puntaje del ' + score + '%.';
            } else {
                mensaje = '¡Sigue practicando! Obtuviste un puntaje del ' + score + '%.';
            }

            Swal.fire({
                title: mensaje,
                icon: score >= 60 ? 'success' : 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                showClass: {
                    popup: 'animated fadeInDown faster' // Animación de entrada
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster' // Animación de salida
                }
            });
        }, duracion + 100);
    });
    
    
    
    

})

// Click en borrar examen
$("body").on("click",".acciones .borrar",function(){
    let composicion =   composiciones[this.dataset.index]
    localStorage.removeItem(`acordeon-${composicion.nombre}`)
    cargarComposiciones()
})


// empezar a grabar
document.getElementById("grabar").onclick=function(){

    if(this.classList.contains("grabar")){
        Acordeon.grabar()
        this.classList.remove("grabar")
        this.classList.add("grabando")
    }else{
        this.classList.add("grabar")
        this.classList.remove("grabando")
        const cancion = Acordeon.detenerGrabacion()
        const nombre = prompt("Dale un nombre a tu canción")
        if(nombre){
            localStorage.setItem(`acordeon-${nombre}`,JSON.stringify(cancion))
            cargarComposiciones()
        }
        // Acordeon.reproducir(cancion).then(()=>{
        //     alert("Reproduccion terminada")
        // })
    }
}


// Opciones seleccionadas del menú
document.getElementById("tono-adg").onclick=function(){
    document.querySelectorAll("#cambiar-tono .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarTono('ADG')
    this.classList.add('seleccionada')
}

document.getElementById("tono-5l").onclick=function(){
    document.querySelectorAll("#cambiar-tono .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarTono('5L')
    this.classList.add('seleccionada')
}

document.getElementById("tono-gcf").onclick=function(){
    document.querySelectorAll("#cambiar-tono .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarTono('GCF')
    this.classList.add('seleccionada')
}

document.getElementById("mano-derecha").onclick=function(){
    document.querySelectorAll("#cambiar-mano .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.tocarConLaDerecha()
    this.classList.add('seleccionada')
}

document.getElementById("mano-izquierda").onclick=function(){
    document.querySelectorAll("#cambiar-mano .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.tocarConLaIzquierda()
    this.classList.add('seleccionada')
}

document.getElementById("modo-teclado").onclick=function(){
    document.querySelectorAll("#cambiar-modo .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarModo(1)
    this.classList.add('seleccionada')
}

document.getElementById("modo-notas").onclick=function(){
    document.querySelectorAll("#cambiar-modo .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarModo(2)
    this.classList.add('seleccionada')
}

document.getElementById("modo-numero").onclick=function(){
    document.querySelectorAll("#cambiar-modo .opcion").forEach(e=>{
        e.classList.remove("seleccionada")
    })
    Acordeon.cambiarModo(0)
    this.classList.add('seleccionada')
}

// Iniciar sonido del acordeón
Acordeon.iniciar()