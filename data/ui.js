
        $("#composiciones .contenido").niceScroll({cursorcolor:"#00F",autohidemode:'hover'})

        document.body.addEventListener('cargando-sonidos',({detail})=>{
            console.log({detail})
            if(detail){
                document.getElementById("app-container").classList.add("cargando")
            }else{
                document.getElementById("app-container").classList.remove("cargando")
            }
        },true)

        let composiciones = [];

// Define default compositions
const defaultCompositions = [
  {
    nombre: "Cancion 1",
    cancion: [
      { tecla: "D", inicio: 1093, fin: 2007, duracion: 914 },
      { tecla: "S", inicio: 1944, fin: 2151, duracion: 207 },
      // Add more notes as needed
    ],
  },
  {
    nombre: "Canción 2",
    cancion: [
      { tecla: "S", inicio: 2360, fin: 2471, duracion: 111 },
      { tecla: "D", inicio: 2376, fin: 2552, duracion: 176 },
      // Add more notes as needed
    ],
  },
  
  
  // Add more default compositions as needed
];

function cargarComposiciones() {
  $("#composiciones .contenido").html('');

  // Merge default compositions with local storage compositions
  composiciones = [
    ...defaultCompositions,
    ...Object.keys({ ...localStorage }).filter((l) => l.includes("acordeon")).map(key => ({ nombre: key.split('-')[1], cancion: JSON.parse(localStorage.getItem(key)) }))
  ];

  composiciones.forEach((composicion, index) => {
    $("#composiciones .contenido").append($(
      `<div class="composicion">
          <span class="nombre">${composicion.nombre}</span>
          <div class="acciones">
              <span class="reproducir material-symbols-outlined"  data-index="${index}" title="Reproducir">play_arrow</span>
              <span class="practicar material-symbols-outlined" data-index="${index}" title="Practicar">school</span>
              <span class="borrar material-symbols-outlined" data-index="${index}" title="Eliminar">delete_forever</span>
          </div>
          <div class="progreso">
              <div class="porcentaje"></div>
          </div>
      </div>`
    ));
  });
}

// Call cargarComposiciones to display default and local storage compositions
cargarComposiciones();


        $("body").on("click",".acciones .reproducir",function(){
            const ele = this
            let composicion     =   composiciones[ele.dataset.index]
            let duracion        =   composicion.cancion.sort((a,b)=>a.inicio-b.inicio)
            duracion            =   duracion[duracion.length-1].inicio+duracion[duracion.length-1].duracion
            const porcentaje    =   $(ele).parent().parent().find(".progreso .porcentaje")
            porcentaje.css({'animation-duration':duracion+'ms'}).addClass("animar-porcentaje")

            Acordeon.reproducir(composiciones[this.dataset.index].cancion)
        })

        $("body").on("click",".acciones .borrar",function(){
            let composicion =   composiciones[this.dataset.index]
            localStorage.removeItem(`acordeon-${composicion.nombre}`)
            cargarComposiciones()
        })

        $("body").on("click",".acciones .practicar",function(){
            let composicion =   composiciones[this.dataset.index]
            let duracion    =   composicion.cancion.sort((a,b)=>a.inicio-b.inicio)
            duracion        =   duracion[duracion.length-1].inicio+duracion[duracion.length-1].duracion
            
            const ele = this
            const porcentaje    =   $(ele).parent().parent().find(".progreso .porcentaje")
            
           
            Swal.fire(
                'Practica',
                `Al cerrarse esta ventana, debes tocar ${composicion.nombre}`,
                "info"
            ).then(()=>{
                Acordeon.grabar()

                porcentaje.css({'animation-duration':duracion+'ms'}).addClass("animar-porcentaje")



                setTimeout(()=>{
                    const cancion = Acordeon.detenerGrabacion()
                    const score = Acordeon.evaluar(composicion.cancion,cancion)
                    porcentaje.removeClass("animar-porcentaje")
                    Swal.fire(
                        'Score obtenido!',
                        `${score}%`,
                        score<=30 ? "warning":"success"
                    )
                    
                    
                },duracion+100)
            })

            
            
        })

        document.getElementById("grabar").onclick=function(){
        
            if(this.classList.contains("grabar")){
                Acordeon.grabar()
                this.classList.remove("grabar")
                this.classList.add("grabando")
            }else{
                this.classList.add("grabar")
                this.classList.remove("grabando")
                const cancion = Acordeon.detenerGrabacion()
                const nombre = prompt("Dale un nombre a tu composición")
                if(nombre){
                    localStorage.setItem(`acordeon-${nombre}`,JSON.stringify(cancion))
                    cargarComposiciones()
                }
                // Acordeon.reproducir(cancion).then(()=>{
                //     alert("Reproduccion terminada")
                // })
            }
        }

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

        
        Acordeon.iniciar()