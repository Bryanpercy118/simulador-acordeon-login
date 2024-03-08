
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

    /* 

    a tener en cuenta en la evaluacion
    1. evaluar por tecla  listo
    2. evaluar por proceso de evolucion (pausar y ver cuanto llevo)
    3. con 3 intentos (1 intento, 2 intento, 3 ultimo intento, preparate!!) listo
    4. informe de los resultados
    5. contador 3,2,1...ya!!  listo

    */

    // Lista de canciones
    const defaultCompositions = canciones;

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
                        <button class="practicar" data-index="${index}">Iniciar</button>
                    </div>
                    <div class="progreso">
                        <div class="porcentaje"></div>
                    </div>
                </div>`
            ));
        });
    }

   
    // <span class="borrar material-symbols-outlined" data-index="${index}" title="Eliminar">delete</span>
                                    

    // cargar las canciones
    cargarComposiciones();


    // Reproducir examen
    $("body").on("click", ".acciones .reproducir", function() {
        const ele = this;
        const composicion = composiciones[ele.dataset.index];
        const duracion = composicion.cancion.sort((a, b) => a.inicio - b.inicio);
        const duracionTotal = duracion[duracion.length - 1].inicio + duracion[duracion.length - 1].duracion;
        const porcentaje = $(ele).parent().parent().find(".progreso .porcentaje");
        porcentaje.css({ 'animation-duration': duracionTotal + 'ms' }).addClass("animar-porcentaje");

        // Liberar teclas al finalizar la reproducción
        setTimeout(() => {
            liberarTeclas(composicion.cancion);
        }, duracionTotal);

        Acordeon.reproducir(composiciones[this.dataset.index].cancion);
    });


    // Función para liberar las teclas después de la reproducción
    function liberarTeclas(cancion) {
        cancion.forEach(nota => {
            // Simular el evento de teclado para liberar la tecla
            const eventoTecla = new KeyboardEvent('keyup', { 'key': nota.tecla });
            document.dispatchEvent(eventoTecla);
        });
    }


    // Click iniciar examen
    $("body").on("click", ".acciones .practicar", function() {
        let composicion = composiciones[this.dataset.index];
        let duracion = composicion.cancion.sort((a, b) => a.inicio - b.inicio);
        duracion = duracion[duracion.length - 1].inicio + duracion[duracion.length - 1].duracion;

        const ele = this;
        const porcentaje = $(ele).parent().parent().find(".progreso .porcentaje");

        let intentosRestantes = localStorage.getItem('intentosRestantes'); // Obtener el número de intentos restantes almacenado localmente
        intentosRestantes = intentosRestantes ? parseInt(intentosRestantes) : 3; // Si no hay un valor almacenado, establecer el valor inicial en 3

        // mensaje de intentos al iniciar examen
        function mostrarMensajeIntento() {
            if (intentosRestantes > 0) {
                if (intentosRestantes > 1) {
                    Swal.fire({
                        title: `Intento ${4 - intentosRestantes}`,
                        text: `Te quedan ${intentosRestantes - 1} intentos`,
                        icon: "info",
                        showConfirmButton: true,
                        confirmButtonText: 'Comenzar',
                        allowOutsideClick: false,
                        showClass: {
                            popup: 'animated fadeInDown faster' // Animación de entrada
                        },
                        hideClass: {
                            popup: 'animated fadeOutUp faster' // Animación de salida
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            iniciarExamen();
                        }
                    });
                } else {
                    Swal.fire({
                        title: `Intento ${4 - intentosRestantes}`,
                        text: `Este es tu último intento`,
                        icon: "info",
                        showConfirmButton: true,
                        confirmButtonText: 'Comenzar',
                        allowOutsideClick: false,
                        showClass: {
                            popup: 'animated fadeInDown faster' // Animación de entrada
                        },
                        hideClass: {
                            popup: 'animated fadeOutUp faster' // Animación de salida
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            iniciarExamen();
                        }
                    });
                }
            } else {
                // Si no hay más intentos, mostrar mensaje de alerta
                Swal.fire({
                    title: '¡Sin intentos disponibles!',
                    text: 'Debes esperar 5 minutos antes de intentarlo de nuevo.',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar',
                    allowOutsideClick: false
                });
            }
        }

        // iniciar examen
        function iniciarExamen() {
            
            Swal.fire({
                html: '<div class="countdown">3</div>', // Contador personalizado con el valor inicial
                showConfirmButton: false,
                timer: 3000, // Duración total del contador en milisegundos (3 segundos)
                timerProgressBar: false,
                allowOutsideClick: false,
                customClass: {
                    popup: 'custom-swal-message' // Clase CSS personalizada para el mensaje
                },
                willOpen: () => {

                    // Función para actualizar el contador cada segundo
                    const countdownDiv = document.querySelector('.countdown');
                    const timerInterval = setInterval(() => {
                        const currentValue = parseInt(countdownDiv.textContent);
                        if (currentValue > 1) {
                            countdownDiv.textContent = currentValue - 1; // Disminuir el contador
                        } else {
                            clearInterval(timerInterval); // Detener el intervalo cuando el contador llega a 1
                        }
                    }, 1000);
                }
            }).then(() => {
                Acordeon.grabar(); // Iniciar la grabación después del conteo regresivo
                const porcentaje = $('.progreso .porcentaje'); // Seleccionar el elemento del porcentaje
                porcentaje.css({ 'animation-duration': duracion + 'ms' }).addClass("animar-porcentaje");

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

                // Decrementar el número de intentos restantes después de que se haya confirmado el inicio del examen
                intentosRestantes--;

                // Guardar el número actualizado de intentos restantes en el almacenamiento local
                localStorage.setItem('intentosRestantes', intentosRestantes);

                // Si no hay más intentos, bloquear el botón por 5 minutos
                if (intentosRestantes === 0) {
                    bloquearBotonPorCincoMinutos();
                }
            });
        }

        function bloquearBotonPorCincoMinutos() {
            // Desactivar el botón
            $(".acciones .practicar").prop("disabled", true);

            // Establecer un temporizador de 5 minutos para reactivar el botón y restablecer los intentos
            setTimeout(() => {
                $(".acciones .practicar").prop("disabled", false);
                localStorage.setItem('intentosRestantes', 3); // Restablecer los intentos a 3
            }, 5 * 60 * 1000); // 5 minutos en milisegundos
        }

        mostrarMensajeIntento(); // Mostrar el primer mensaje de intento

        

    });



    

    // Manejar el clic en el botón para reiniciar la página
    $(".reiniciar-pagina").on("click", function() {
        // Recargar la página
        location.reload();
    });



    // // Click en iniciar examen
    // $("body").on("click",".acciones .practicar",function(){
    //     let composicion =   composiciones[this.dataset.index]
    //     let duracion    =   composicion.cancion.sort((a,b)=>a.inicio-b.inicio)
    //     duracion        =   duracion[duracion.length-1].inicio+duracion[duracion.length-1].duracion
        
    //     const ele = this
    //     const porcentaje    =   $(ele).parent().parent().find(".progreso .porcentaje")
        
        
    //     // Mensaje informativo antes del examen
    //     // Swal.fire({
    //     //     title: `Examen de ${composicion.nombre}`,
    //     //     html: `
    //     //     <div>
    //     //         <p>Prepárese para tocar la canción con su teclado.</p>
    //     //     </div>
    //     // `,
    //     // icon: "info",
    //     // showConfirmButton: false,
    //     // timer: 3000, // Tiempo de visualización del mensaje en milisegundos (2 segundos)
    //     // timerProgressBar: true, // Barra de progreso que muestra el tiempo restante
    //     // allowOutsideClick: false, 
            
    //     // }).then(() => {
    //     //     Acordeon.grabar(); // Iniciar la grabación después del conteo regresivo
    //     //     porcentaje.css({'animation-duration': duracion + 'ms'}).addClass("animar-porcentaje");

    //     //     // Mostrar puntaje después de la duración especificada
    //     //     setTimeout(() => {
    //     //         const cancion = Acordeon.detenerGrabacion();
    //     //         const score = Acordeon.evaluar(composicion.cancion, cancion);
    //     //         porcentaje.removeClass("animar-porcentaje");

    //     //         let mensaje;
    //     //         if (score >= 60) {
    //     //             mensaje = '¡Felicidades! Has pasado el examen con un puntaje del ' + score + '%.';
    //     //         } else {
    //     //             mensaje = '¡Sigue practicando! Obtuviste un puntaje del ' + score + '%.';
    //     //         }

    //     //         Swal.fire({
    //     //             title: mensaje,
    //     //             icon: score >= 60 ? 'success' : 'warning',
    //     //             showConfirmButton: true,
    //     //             confirmButtonText: 'Aceptar',
    //     //             showClass: {
    //     //                 popup: 'animated fadeInDown faster' // Animación de entrada
    //     //             },
    //     //             hideClass: {
    //     //                 popup: 'animated fadeOutUp faster' // Animación de salida
    //     //             }
    //     //         });
    //     //     }, duracion + 100);
    //     // });
        
    //     let countdown = 3; // Cuenta regresiva inicial

    //     Swal.fire({
    //         html: '<div class="countdown">3</div>', // Contador personalizado con el valor inicial
    //         showConfirmButton: false,
    //         timer: 3000, // Duración total del contador en milisegundos (3 segundos)
    //         timerProgressBar: false,
    //         allowOutsideClick: false,
    //         customClass: {
    //             popup: 'custom-swal-message' // Clase CSS personalizada para el mensaje
    //         },
    //         willOpen: () => {
    //             // Función para actualizar el contador cada segundo
    //             const countdownDiv = document.querySelector('.countdown');
    //             const timerInterval = setInterval(() => {
    //                 const currentValue = parseInt(countdownDiv.textContent);
    //                 if (currentValue > 1) {
    //                     countdownDiv.textContent = currentValue - 1; // Disminuir el contador
    //                 } else {
    //                     clearInterval(timerInterval); // Detener el intervalo cuando el contador llega a 1
    //                 }
    //             }, 1000);
    //         }
    //     }).then(() => {
    //         // Ejecutar la siguiente acción después de que el contador llegue a 1
    //         Acordeon.grabar(); // Iniciar la grabación después del conteo regresivo
    //         const porcentaje = $('.progreso .porcentaje'); // Seleccionar el elemento del porcentaje
    //         porcentaje.css({'animation-duration': duracion + 'ms'}).addClass("animar-porcentaje");
        
    //         // Mostrar puntaje después de la duración especificada
    //         setTimeout(() => {
    //             const cancion = Acordeon.detenerGrabacion();
    //             const score = Acordeon.evaluar(composicion.cancion, cancion);
    //             porcentaje.removeClass("animar-porcentaje");
        
    //             let mensaje;
    //             if (score >= 60) {
    //                 mensaje = '¡Felicidades! Has pasado el examen con un puntaje del ' + score + '%.';
    //             } else {
    //                 mensaje = '¡Sigue practicando! Obtuviste un puntaje del ' + score + '%.';
    //             }
        
    //             Swal.fire({
    //                 title: mensaje,
    //                 icon: score >= 60 ? 'success' : 'warning',
    //                 showConfirmButton: true,
    //                 confirmButtonText: 'Aceptar',
    //                 showClass: {
    //                     popup: 'animated fadeInDown faster' // Animación de entrada
    //                 },
    //                 hideClass: {
    //                     popup: 'animated fadeOutUp faster' // Animación de salida
    //                 }
    //             });
    //         }, duracion + 100);
    //     });
    // })



    // borrar



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