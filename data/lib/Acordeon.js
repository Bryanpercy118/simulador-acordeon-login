const Acordeon = (()=>{

    const MANO_IZQUIERDA=0;
    const MANO_DERECHA=1
    let KEYBOARD={}

    var centerX = 0;
    var centerY = 0;
    var radius = 8;
    var startAngle = 0;
    var endAngle = Math.PI;
    const min_rotacion = -16
    const max_rotacion = 16

    const rango_bajos=[[0,6],[6,12]]
    const rango_diapason=[[0,10],[10,21],[21,31]]

    const aplausos=new Tone.Player(new Tone.Buffer(`lib/sonidos/aplausos.mp3`)).toDestination()
    const abucheos=new Tone.Player(new Tone.Buffer(`lib/sonidos/abucheo.mp3`)).toDestination()
  
    let cargando=true
    let acordeon=null
    let diapason=null
    let bajos=null
    let foles=null
    let fuelleAbierto = true; // Variable para controlar si el fuelle está abierto o cerrado

    let     MANO                        =   MANO_DERECHA
    let     reproduciendo               =   false
    let     grabando                    =   false
    let     TONO                        =   'ADG'
    let     tiempo_inicio               =   null
    const   TECLA_CERRAR_ACORDEON       =   'ESCAPE'
    let     ACORDEON_ABIERTO            =   1
    const   teclas_presionadas          =   new Map();  
    let   teclas_sueltas              =   []

    const tecla_has_sonido=new Map([
        [MANO_DERECHA,new Map([
            ['Z','1'],
            ['X','2'],
            ['C','3'],
            ['V','4'],
            ['B','5'],
            ['N','6'],
            ['M','7'],
            [',','8'],
            ['.','9'],
            ['-','10'],
    
            ['A','11'],
            ['S','12'],
            ['D','13'],
            ['F','14'],
            ['G','15'],
            ['H','16'],
            ['J','17'],
            ['K','18'],
            ['L','19'],
            ['Ñ','20'],
            ['{','21'],
    
            ['W','22'],
            ['E','23'],
            ['R','24'],
            ['T','25'],
            ['Y','26'],
            ['U','27'],
            ['I','28'],
            ['O','29'],
            ['P','30'],
            ['´','31']
        ])],
        [MANO_IZQUIERDA,new Map([
            ['K','38'],
            ['J','39'],
            ['H','40'],
            ['G','41'],
            ['F','42'],
            ['D','43'],
            ['I','32'],
            ['U','33'],
            ['Y','34'],
            ['T','35'],
            ['R','36'],
            ['E','37']
        ])]
    ])

    const sonidos = new Map()

    const reproducir=(cancion)=>{
        if(reproduciendo || cargando){
            return
        }
        
        reproduciendo   =   true
        tiempo_inicio   =   new Date().getTime()
     
        const reproductor=[]
    
        cancion.forEach((c)=>{
            reproductor.push(new Promise((resolve)=>{
                setTimeout(()=>{
                    
                    if(c.tecla=='ESCAPE'){
                        cerrarAcordeon()
                    }else{
                        presionar(c.tecla)
                    }
                },c.inicio)
                setTimeout(()=>{
                    if(c.tecla=='ESCAPE'){
                        abrirAcordeon()
                    }else{
                        liberar(c.tecla)
                    }
                    resolve()
                },c.fin)
            })) 
        })

        return Promise.all(reproductor).then(()=>{
            reproduciendo=false
            return true
        })

    }

    const grabar=()=>{
        if(grabando || cargando){
            return
        }
        teclas_sueltas=[]
        tiempo_inicio=new Date().getTime()
        grabando=true
    }

    // const detenerGrabacion=()=>{
    //     grabando=false
    //     return teclas_sueltas
    // }

    const detenerGrabacion = () => {
        grabando = false;
        // Liberar todas las teclas presionadas durante la grabación
        teclas_presionadas.forEach((tiempo, tecla) => {
            liberar(tecla);
        });
        return teclas_sueltas;
    }
    
    const ciclo=(timeStamp)=>{
  
        window.requestAnimationFrame(ciclo)
    }

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

    function  getTween(max,b, e, i) {
        return b + ((i/max) * (e-b));
    }

    // Evaluacion tiempo - teclas

    // const evaluar=(esperado,tocado)=>{
    //     console.log(tocado)
    //     let score=0
        
    //     for(let i=0;i<esperado.length;i++){
    //         const a=esperado[i]
    //         const b=tocado[i]
    //         if(!b){
    //             continue
    //         }
    //         if(a.tecla!=b.tecla){
    //             continue
    //         }

    //         const inicio = Math.abs(a.inicio-b.inicio)
    //         const duracion = Math.abs(a.duracion-b.duracion)

    //         if(inicio<1000 && duracion<1000){
    //             score++
    //         }

            
    //     }

    //     score=Math.round((score/esperado.length)*100)
    
    //     if(score<60){
    //         // abucheos.volume.value=100
    //         abucheos.start()
    //     }
    //     if(score>=60){
    //         aplausos.start()
    //     }
    //     return score
    // }



    // Evaluacion teclas

    const evaluar = (esperado, tocado) => {
        let score = 0;
        const teclasEsperadas = esperado.map(nota => nota.tecla);
        const teclasTocadas = tocado.map(nota => nota.tecla);
    
        for (let i = 0; i < teclasEsperadas.length; i++) {
            const teclaEsperada = teclasEsperadas[i];
            const teclaTocada = teclasTocadas[i];
    
            if (teclaTocada && teclaEsperada === teclaTocada) {
                score++;
            }
        }
    
        const accuracy = Math.round((score / esperado.length) * 100);
    
        if (accuracy < 60) {
            abucheos.start();
        } else {
            aplausos.start();
        }
    
        return accuracy;
    };


    

    
    const botones_diapason=[
        ['1','Z','Do'],
        ['2','X','Do'],
        ['3','C','Mi'],
        ['4','V','Fa'],
        ['5','B','Sol'],
        ['6','N','La'],
        ['7','M','Si'],
        ['8',',','Re'],
        ['9','.','Re'],
        ['10','-','Re'],

        ['11','A','Sol'],
        ['12','S','Do'],
        ['13','D','Do'],
        ['14','F','Do'],
        ['15','G','Do'],
        ['16','H','Do'],
        ['17','J','Do'],
        ['18','K','Do'],
        ['19','L','Re'],
        ['20','Ñ','Do'],
        ['21','{','Do'],

        ['22','W','Do'],
        ['23','E','Do'],
        ['24','R','Do'],
        ['25','T','Do'],
        ['26','Y','Do'],
        ['27','U','Do'],
        ['28','I','Do'],
        ['29','O','Do'],
        ['30','P','Do'],
        ['31','´','Do']
    ]

    const botones_bajos=[
        ['38','K','Do'],
        ['39','J','Do'],
        ['40','H','Do'],
        ['41','G','Do'],
        ['42','F','Do'],
        ['43','D','Do'],
        ['32','I','Do'],
        ['33','U','Do'],
        ['34','Y','Do'],
        ['35','T','Do'],
        ['36','R','Do'],
        ['37','E','Do']
    ]

    function calculateArcPoints(i,centerX, centerY, radius, startAngle, endAngle, numPoints) {
        var angleStep = (endAngle - startAngle) / (numPoints - 1);
    

        var angle = startAngle + i * angleStep;
        var x = centerX + radius * Math.cos(angle);
        var y = centerY + radius * Math.sin(angle);
        
    
        return {x,y};
    }

    const presionar=(tecla)=>{
        if(teclas_presionadas.has(tecla)){
            return
        }

        if(tecla_has_sonido.get(MANO).has(tecla)){
            const nota=tecla_has_sonido.get(MANO).get(tecla)
            document.getElementById(`${MANO}-nota-${nota}`).classList.add('selected')
            sonidos.get(nota)[ACORDEON_ABIERTO].loop=true
            sonidos.get(nota)[ACORDEON_ABIERTO].start()
        } 

        if(reproduciendo){
            return
        }

        if(tecla_has_sonido.get(MANO).has(tecla)){
            teclas_presionadas.set(tecla,new Date().getTime()-tiempo_inicio)
        }
    }

    

    const liberar=(tecla)=>{

        if(tecla_has_sonido.get(MANO).has(tecla)){
            const nota=tecla_has_sonido.get(MANO).get(tecla)
            document.getElementById(`${MANO}-nota-${nota}`).classList.remove('selected')
            sonidos.get(nota)[ACORDEON_ABIERTO].stop()
            
        }
        

        if(reproduciendo){
            return
        }

        if(grabando){
            const inicio = teclas_presionadas.get(tecla)
            const fin = new Date().getTime()-tiempo_inicio
            const duracion = fin-inicio
            teclas_sueltas.push({tecla,inicio,fin,duracion})
        }

        teclas_presionadas.delete(tecla)

        // if(tecla_has_sonido.get(MANO).has(tecla) || tecla=='ESCAPE'){
        //     teclas_presionadas.delete(tecla)
        // }
        
    }

    const cerrarAcordeon=()=>{

        if (fuelleAbierto) {
            teclas_presionadas.set('ESCAPE',new Date().getTime()-tiempo_inicio)
        
            const liberadas=[]
            teclas_presionadas.forEach((tiempo,tecla)=>{
                if(tecla!='ESCAPE'){
                    liberar(tecla)
                    liberadas.push(tecla)
                }
            })
            ACORDEON_ABIERTO=0  
            liberadas.forEach((tecla)=>{
                presionar(tecla)
            })
            acordeon.classList.remove("A")
            acordeon.classList.add("C")
            console.log(teclas_presionadas.get("ESCAPE"))
            
            fuelleAbierto = false; // Actualizar el estado del fuelle a cerrado
        }
        
        
    }

    const abrirAcordeon=()=>{

        if (!fuelleAbierto) {
            if(grabando){
                const inicio = teclas_presionadas.get('ESCAPE')
                const fin = new Date().getTime()-tiempo_inicio
                const duracion = fin-inicio
                teclas_sueltas.push({tecla:'ESCAPE',inicio,fin,duracion})
            }
            teclas_presionadas.delete('ESCAPE')
    
            const liberadas=[]
            teclas_presionadas.forEach((tiempo,tecla)=>{
                if(tecla!='ESCAPE'){
                    liberar(tecla)
                    liberadas.push(tecla)
                }
            })
            ACORDEON_ABIERTO=1 
            liberadas.forEach((tecla)=>{
                presionar(tecla)
            })
            acordeon.classList.remove("C")
            acordeon.classList.add("A")
            
            fuelleAbierto = true; // Actualizar el estado del fuelle a abierto
        }

        
    }

   
    function keyup(event) {
        if (event.defaultPrevented) {
            return;
        }
        let keyValue = event.key.toUpperCase();
        if(keyValue=='DEAD'){
            keyValue='´'
        }
        if (["SPACE",'CONTROL'].includes(keyValue)) {
            return;
        }
        KEYBOARD[keyValue]=false
        if(keyValue ==  TECLA_CERRAR_ACORDEON && ACORDEON_ABIERTO==0){
            abrirAcordeon()
            return
        }
        liberar(keyValue)
    }

    function keydown(event) {
        if (event.defaultPrevented) {
            return;
        }
       
        let keyValue = event.key.toUpperCase();
        if(keyValue=='DEAD'){
            keyValue='´'
        }
        if (["SPACE",'CONTROL'].includes(keyValue)) {
            return;
        }

        KEYBOARD[keyValue]=true

        if(keyValue ==  TECLA_CERRAR_ACORDEON && ACORDEON_ABIERTO==1){
            cerrarAcordeon()
            return
        }
        
        presionar(keyValue)

    }

  
    const tocarConLaDerecha=()=>{
        acordeon.classList.remove(`mano-${MANO}`)
        MANO=MANO_DERECHA
        acordeon.classList.add(`mano-${MANO}`)
        cargarSonidos()
    }

    const tocarConLaIzquierda=()=>{
        acordeon.classList.remove(`mano-${MANO}`)
        MANO=MANO_IZQUIERDA
        acordeon.classList.add(`mano-${MANO}`)
        cargarSonidos()
    }

    const dibujar=()=>{
        //-------reset
        const style = document.getElementById('acordeon-estilos')
        if(style){
            document.body.removeChild(style)
        }
        foles.innerHTML=''
        diapason.querySelector('.hilera-1').innerHTML=''
        diapason.querySelector('.hilera-2').innerHTML=''
        diapason.querySelector('.hilera-3').innerHTML=''
        bajos.querySelector('.hilera-1').innerHTML=''
        bajos.querySelector('.hilera-2').innerHTML=''
        diapason.style.transform=`rotate(${min_rotacion-1}deg)`
        bajos.style.transform=`rotate(14deg)`

        const ancho_fole=foles.offsetWidth/40
        const cantidad_foles = 40
        const clases=[]
        const ancho_bajos = bajos.offsetWidth
        const ancho_poste = foles.offsetWidth*0.050
        const cantidad_postes = (foles.offsetWidth/ancho_poste)
        

        for(let i=0;i<cantidad_foles;i++){
            let color='amarillo'
            if(i>cantidad_foles*.49){
                color='azul'    
            }
            if(i>cantidad_foles*.75){
                color='rojo'    
            }
            const rotacion = getTween(cantidad_foles,min_rotacion,max_rotacion,i)
            const desplazamiento_horizontal = (i*ancho_fole)
            const {y} = calculateArcPoints(i,centerX,centerY,radius,startAngle,endAngle,cantidad_foles)
            clases.push(`.fole-${i}{transform:rotate(${rotacion}deg) translateY(${-y}px);bottom:0px;width:${ancho_fole*4}%;left:${desplazamiento_horizontal}px;}`)
            foles.append(createElementFromHTML(`<div class="fole fole-${i} fole-${color}"></div>`))
        }

        for(let i=0;i<cantidad_postes;i++){
            const rotacion = getTween(cantidad_postes,min_rotacion,max_rotacion,i)
            const x = i*ancho_poste
            const {y} = calculateArcPoints(i,centerX,centerY,radius,-.4,endAngle,cantidad_postes)
            clases.push(`.poste-${i}{transform:rotate(${rotacion}deg) translateY(${-y}px);width:${ancho_poste}px;left:${x}px;}`)
            foles.append(createElementFromHTML(`<div class="poste poste-${i}"></div>`))
        }

        rango_diapason.forEach((rango,i)=>{
            for(let i2=rango[0];i2<rango[1];i2++){
                diapason.querySelector('.hilera-'+(i+1)).append(createElementFromHTML(`
                <div class="nota" data-tecla="${botones_diapason[i2][1]}" id="${MANO_DERECHA}-nota-${botones_diapason[i2][0]}">
                    <span class="modo">${botones_diapason[i2][0]}</span>
                    <span class="modo">${botones_diapason[i2][1]}</span>
                    <span class="modo">${botones_diapason[i2][2]}</span>
                </div>
                `))
            }
        })

        rango_bajos.forEach((rango,i)=>{
            for(let i2=rango[0];i2<rango[1];i2++){
                bajos.querySelector('.hilera-'+(i+1)).append(createElementFromHTML(`
                <div class="nota" id="${MANO_IZQUIERDA}-nota-${botones_bajos[i2][0]}" data-tecla="${botones_bajos[i2][1]}">
                    <span class="modo">${botones_bajos[i2][0]}</span>
                    <span class="modo">${botones_bajos[i2][1]}</span>
                    <span class="modo">${botones_bajos[i2][2]}</span>
                </div>
                `))
            }
        })


        var sheet = document.createElement('style')
        sheet.id='acordeon-estilos'
        sheet.innerHTML = clases.join(' ');
        document.body.appendChild(sheet);

        acordeon.querySelectorAll(".nota").forEach((ele)=>{

            ele.addEventListener('touchstart',(e)=>{
                e.preventDefault()
                var elem = e.changedTouches.item(0);
                presionar(elem.target.dataset.tecla)
            },false)

            ele.addEventListener('touchmove',(e)=>{
                e.preventDefault()
                var elem = e.changedTouches.item(0);
                liberar(elem.target.dataset.tecla)
            },false)

            ele.addEventListener('touchend',(e)=>{
                e.preventDefault()
                var elem = e.changedTouches.item(0);
                liberar(elem.target.dataset.tecla)
            },false)

        })

    }

    const cargarSonidos=async ()=>{
       cargando=true
       let event = new CustomEvent("cargando-sonidos", { detail: true });
       document.body.dispatchEvent(event);

        sonidos.forEach(s=>{
            s[0].stop()
            s[1].stop()
            s[0].dispose()
            s[1].dispose()
        })
     
        sonidos.clear()

        tecla_has_sonido.get(MANO).forEach((value,key)=>{
            const a=new Tone.Player(new Tone.Buffer(`lib/sonidos/tonos/${TONO}/C/${value}.webm`)).toDestination()
            a.loop=true
            const b=new Tone.Player(new Tone.Buffer(`lib/sonidos/tonos/${TONO}/A/${value}.webm`)).toDestination()
            bajos.loop=true

            const _s=[
                a,
                b
            ]
            sonidos.set(value,_s)
        })
        
        Tone.start();
        Tone.context.lookAhead = 0;
        await Tone.loaded();
        console.log("carga completa")
        cargando=false
        event = new CustomEvent("cargando-sonidos", { detail: false });
        document.body.dispatchEvent(event);
    }

    const cambiarModo=(modo)=>{
        acordeon.classList.remove('modo-0')
        acordeon.classList.remove('modo-1')
        acordeon.classList.remove('modo-2')

        acordeon.classList.add('modo-'+modo)
    }

    const cambiarTono=(tono)=>{
        if(tono!=TONO){
            TONO=tono
            cargarSonidos()
        }
    }

    const iniciar=async ()=>{

        document.removeEventListener('keydown',keydown)
        document.removeEventListener('keyup',keyup)

        
        teclas_sueltas=[]

       
        const contenedor=document.querySelector("#acordeon")

        
        contenedor.append(createElementFromHTML(`
            <div class="acordeon C modo-1 mano-${MANO}">
                <div class="diapason">
                    <div class="notas hilera-1"></div>
                    <div class="notas hilera-2"></div>
                    <div class="notas hilera-3"></div>
                </div>
                <div class="foles"></div>
                <div class="bajos bajos-desplazamiento">
                    <div class="notas hilera-1"></div>
                    <div class="notas hilera-2"></div>
                </div>
                <div class="sombra"></div>
            </div>
        `))

        acordeon=contenedor.querySelector(".acordeon")
        acordeon.classList.add("cargando")

        diapason=acordeon.querySelector(".diapason")
        bajos=acordeon.querySelector(".bajos")
        foles=acordeon.querySelector(".foles")

        acordeon.classList.remove("C")
        acordeon.classList.add("A")

        dibujar()
        await cargarSonidos()

       
        document.addEventListener('keydown', keydown, true);
        document.addEventListener('keyup', keyup,true)

        
        // nota.addEventListener('touchstart',(e)=>{
        //     var elem = e.changedTouches.item(0);
        //     this.dispararTecla(elem.target.dataset.tecla)
        //     e.preventDefault()
        // },true)

        // nota.addEventListener('touchend',(e)=>{
        //     var elem = e.changedTouches.item(0);
        //     this.dispararTecla(elem.target.dataset.tecla,'keyup')
        //     e.preventDefault()
        // },true)

        // nota.addEventListener('touchmove',(e)=>{
        //     var elem = e.changedTouches.item(0);
        //     this.dispararTecla(elem.target.dataset.tecla,'keyup')
        //     e.preventDefault()
        // },true)

        window.onresize = function(event) {
            dibujar()
        }

    }

    return {
        evaluar,
        cambiarModo,
        cambiarTono,
        iniciar,
        tocarConLaDerecha,
        tocarConLaIzquierda,
        grabar,
        detenerGrabacion,
        reproducir,
        teclas_presionadas,
        KEYBOARD
    }
})()
