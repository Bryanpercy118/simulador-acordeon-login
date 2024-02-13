
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
  
    {
     nombre: "Así fue mi querer",
     cancion: [
         {
             "tecla": "T",
             "inicio": 934,
             "fin": 1079,
             "duracion": 145
         },
         {
             "tecla": "Y",
             "inicio": 1003,
             "fin": 1104,
             "duracion": 101
         },
         {
             "tecla": "T",
             "inicio": 1195,
             "fin": 1277,
             "duracion": 82
         },
         {
             "tecla": "Y",
             "inicio": 1178,
             "fin": 1294,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 1400,
             "fin": 1486,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 1424,
             "fin": 1502,
             "duracion": 78
         },
         {
             "tecla": "T",
             "inicio": 1605,
             "fin": 1709,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 1629,
             "fin": 1733,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 1843,
             "fin": 2047,
             "duracion": 204
         },
         {
             "tecla": "Y",
             "inicio": 1858,
             "fin": 2071,
             "duracion": 213
         },
         {
             "tecla": "ESCAPE",
             "inicio": 488,
             "fin": 2143,
             "duracion": 1655
         },
         {
             "tecla": "R",
             "inicio": 2262,
             "fin": 2365,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 2285,
             "fin": 2381,
             "duracion": 96
         },
         {
             "tecla": "R",
             "inicio": 2517,
             "fin": 2613,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 2533,
             "fin": 2637,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 2898,
             "fin": 3128,
             "duracion": 230
         },
         {
             "tecla": "T",
             "inicio": 2922,
             "fin": 3147,
             "duracion": 225
         },
         {
             "tecla": "ESCAPE",
             "inicio": 2469,
             "fin": 3173,
             "duracion": 704
         },
         {
             "tecla": "R",
             "inicio": 3334,
             "fin": 3454,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 3309,
             "fin": 3471,
             "duracion": 162
         },
         {
             "tecla": "R",
             "inicio": 3573,
             "fin": 3927,
             "duracion": 354
         },
         {
             "tecla": "T",
             "inicio": 3589,
             "fin": 3951,
             "duracion": 362
         },
         {
             "tecla": "R",
             "inicio": 4304,
             "fin": 4437,
             "duracion": 133
         },
         {
             "tecla": "E",
             "inicio": 4290,
             "fin": 4461,
             "duracion": 171
         },
         {
             "tecla": "R",
             "inicio": 4598,
             "fin": 4896,
             "duracion": 298
         },
         {
             "tecla": "T",
             "inicio": 4577,
             "fin": 4935,
             "duracion": 358
         },
         {
             "tecla": "Y",
             "inicio": 5322,
             "fin": 5461,
             "duracion": 139
         },
         {
             "tecla": "T",
             "inicio": 5568,
             "fin": 5670,
             "duracion": 102
         },
         {
             "tecla": "R",
             "inicio": 5808,
             "fin": 5924,
             "duracion": 116
         },
         {
             "tecla": "R",
             "inicio": 6242,
             "fin": 6359,
             "duracion": 117
         },
         {
             "tecla": "M",
             "inicio": 6478,
             "fin": 6582,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 6439,
             "fin": 6598,
             "duracion": 159
         },
         {
             "tecla": "M",
             "inicio": 6718,
             "fin": 6774,
             "duracion": 56
         },
         {
             "tecla": "U",
             "inicio": 6696,
             "fin": 6789,
             "duracion": 93
         },
         {
             "tecla": "M",
             "inicio": 6938,
             "fin": 7032,
             "duracion": 94
         },
         {
             "tecla": "U",
             "inicio": 7215,
             "fin": 7303,
             "duracion": 88
         },
         {
             "tecla": "U",
             "inicio": 7329,
             "fin": 7367,
             "duracion": 38
         },
         {
             "tecla": "M",
             "inicio": 7192,
             "fin": 7399,
             "duracion": 207
         },
         {
             "tecla": "ESCAPE",
             "inicio": 3519,
             "fin": 7550,
             "duracion": 4031
         },
         {
             "tecla": "M",
             "inicio": 7606,
             "fin": 7693,
             "duracion": 87
         },
         {
             "tecla": "U",
             "inicio": 7594,
             "fin": 7717,
             "duracion": 123
         },
         {
             "tecla": "I",
             "inicio": 7862,
             "fin": 8037,
             "duracion": 175
         },
         {
             "tecla": ",",
             "inicio": 7889,
             "fin": 8053,
             "duracion": 164
         },
         {
             "tecla": "M",
             "inicio": 8277,
             "fin": 8373,
             "duracion": 96
         },
         {
             "tecla": "U",
             "inicio": 8254,
             "fin": 8397,
             "duracion": 143
         },
         {
             "tecla": "ESCAPE",
             "inicio": 8237,
             "fin": 8445,
             "duracion": 208
         },
         {
             "tecla": "U",
             "inicio": 8519,
             "fin": 8629,
             "duracion": 110
         },
         {
             "tecla": "M",
             "inicio": 8541,
             "fin": 8645,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 8815,
             "fin": 8878,
             "duracion": 63
         },
         {
             "tecla": "T",
             "inicio": 8793,
             "fin": 8893,
             "duracion": 100
         },
         {
             "tecla": "T",
             "inicio": 9061,
             "fin": 9245,
             "duracion": 184
         },
         {
             "tecla": "Y",
             "inicio": 9038,
             "fin": 9262,
             "duracion": 224
         },
         {
             "tecla": "ESCAPE",
             "inicio": 9021,
             "fin": 9285,
             "duracion": 264
         },
         {
             "tecla": "M",
             "inicio": 9485,
             "fin": 9557,
             "duracion": 72
         },
         {
             "tecla": "U",
             "inicio": 9430,
             "fin": 9597,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 9742,
             "fin": 9927,
             "duracion": 185
         },
         {
             "tecla": "T",
             "inicio": 9717,
             "fin": 9951,
             "duracion": 234
         },
         {
             "tecla": "Y",
             "inicio": 10189,
             "fin": 10333,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 10174,
             "fin": 10357,
             "duracion": 183
         },
         {
             "tecla": "E",
             "inicio": 10526,
             "fin": 10686,
             "duracion": 160
         },
         {
             "tecla": "Y",
             "inicio": 10806,
             "fin": 10974,
             "duracion": 168
         },
         {
             "tecla": "T",
             "inicio": 10790,
             "fin": 10998,
             "duracion": 208
         },
         {
             "tecla": "R",
             "inicio": 11200,
             "fin": 11319,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 11207,
             "fin": 11335,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 10071,
             "fin": 11398,
             "duracion": 1327
         },
         {
             "tecla": "E",
             "inicio": 11478,
             "fin": 11677,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 11493,
             "fin": 11693,
             "duracion": 200
         },
         {
             "tecla": "C",
             "inicio": 11960,
             "fin": 12255,
             "duracion": 295
         },
         {
             "tecla": "V",
             "inicio": 11981,
             "fin": 12270,
             "duracion": 289
         },
         {
             "tecla": "M",
             "inicio": 13035,
             "fin": 13159,
             "duracion": 124
         },
         {
             "tecla": "U",
             "inicio": 13053,
             "fin": 13184,
             "duracion": 131
         },
         {
             "tecla": "U",
             "inicio": 13288,
             "fin": 13374,
             "duracion": 86
         },
         {
             "tecla": "M",
             "inicio": 13274,
             "fin": 13390,
             "duracion": 116
         },
         {
             "tecla": "M",
             "inicio": 13502,
             "fin": 13600,
             "duracion": 98
         },
         {
             "tecla": "U",
             "inicio": 13526,
             "fin": 13618,
             "duracion": 92
         },
         {
             "tecla": "U",
             "inicio": 13728,
             "fin": 13822,
             "duracion": 94
         },
         {
             "tecla": "M",
             "inicio": 13742,
             "fin": 13846,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 14000,
             "fin": 14143,
             "duracion": 143
         },
         {
             "tecla": "M",
             "inicio": 13976,
             "fin": 14167,
             "duracion": 191
         },
         {
             "tecla": "M",
             "inicio": 14457,
             "fin": 14559,
             "duracion": 102
         },
         {
             "tecla": "U",
             "inicio": 14433,
             "fin": 14575,
             "duracion": 142
         },
         {
             "tecla": "M",
             "inicio": 14709,
             "fin": 14900,
             "duracion": 191
         },
         {
             "tecla": "U",
             "inicio": 14694,
             "fin": 14933,
             "duracion": 239
         },
         {
             "tecla": "ESCAPE",
             "inicio": 14646,
             "fin": 14965,
             "duracion": 319
         },
         {
             "tecla": "M",
             "inicio": 15173,
             "fin": 15245,
             "duracion": 72
         },
         {
             "tecla": "U",
             "inicio": 15141,
             "fin": 15269,
             "duracion": 128
         },
         {
             "tecla": "U",
             "inicio": 15398,
             "fin": 15493,
             "duracion": 95
         },
         {
             "tecla": "M",
             "inicio": 15421,
             "fin": 15517,
             "duracion": 96
         },
         {
             "tecla": "M",
             "inicio": 15640,
             "fin": 15759,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 15665,
             "fin": 15774,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 15903,
             "fin": 16133,
             "duracion": 230
         },
         {
             "tecla": "M",
             "inicio": 15879,
             "fin": 16149,
             "duracion": 270
         },
         {
             "tecla": "M",
             "inicio": 16368,
             "fin": 16511,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 16382,
             "fin": 16528,
             "duracion": 146
         },
         {
             "tecla": "ESCAPE",
             "inicio": 16599,
             "fin": 16861,
             "duracion": 262
         },
         {
             "tecla": "M",
             "inicio": 16632,
             "fin": 16861,
             "duracion": 229
         },
         {
             "tecla": "U",
             "inicio": 16646,
             "fin": 16861,
             "duracion": 215
         },
         {
             "tecla": "U",
             "inicio": 16862,
             "fin": 16901,
             "duracion": 39
         },
         {
             "tecla": "M",
             "inicio": 16861,
             "fin": 16916,
             "duracion": 55
         },
         {
             "tecla": "U",
             "inicio": 17101,
             "fin": 17374,
             "duracion": 273
         },
         {
             "tecla": "M",
             "inicio": 17117,
             "fin": 17390,
             "duracion": 273
         },
         {
             "tecla": "M",
             "inicio": 17790,
             "fin": 17977,
             "duracion": 187
         },
         {
             "tecla": "H",
             "inicio": 18259,
             "fin": 18413,
             "duracion": 154
         },
         {
             "tecla": "T",
             "inicio": 18712,
             "fin": 18838,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 18728,
             "fin": 18853,
             "duracion": 125
         },
         {
             "tecla": "T",
             "inicio": 18971,
             "fin": 19069,
             "duracion": 98
         },
         {
             "tecla": "Y",
             "inicio": 18989,
             "fin": 19084,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 19197,
             "fin": 19277,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 19173,
             "fin": 19301,
             "duracion": 128
         },
         {
             "tecla": "M",
             "inicio": 19454,
             "fin": 19565,
             "duracion": 111
         },
         {
             "tecla": "U",
             "inicio": 19440,
             "fin": 19589,
             "duracion": 149
         },
         {
             "tecla": "U",
             "inicio": 19696,
             "fin": 19736,
             "duracion": 40
         },
         {
             "tecla": "M",
             "inicio": 19720,
             "fin": 19736,
             "duracion": 16
         },
         {
             "tecla": "U",
             "inicio": 19738,
             "fin": 19853,
             "duracion": 115
         },
         {
             "tecla": "M",
             "inicio": 19739,
             "fin": 19877,
             "duracion": 138
         },
         {
             "tecla": "M",
             "inicio": 20162,
             "fin": 20302,
             "duracion": 140
         },
         {
             "tecla": "U",
             "inicio": 20184,
             "fin": 20319,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 19735,
             "fin": 20350,
             "duracion": 615
         },
         {
             "tecla": "U",
             "inicio": 20421,
             "fin": 20621,
             "duracion": 200
         },
         {
             "tecla": "M",
             "inicio": 20439,
             "fin": 20661,
             "duracion": 222
         },
         {
             "tecla": "U",
             "inicio": 20938,
             "fin": 21054,
             "duracion": 116
         },
         {
             "tecla": "M",
             "inicio": 20921,
             "fin": 21078,
             "duracion": 157
         },
         {
             "tecla": "M",
             "inicio": 21309,
             "fin": 21429,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 21333,
             "fin": 21453,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 21608,
             "fin": 21767,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 21632,
             "fin": 21793,
             "duracion": 161
         },
         {
             "tecla": "T",
             "inicio": 22025,
             "fin": 22117,
             "duracion": 92
         },
         {
             "tecla": "Y",
             "inicio": 22042,
             "fin": 22133,
             "duracion": 91
         },
         {
             "tecla": "T",
             "inicio": 22311,
             "fin": 22446,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 22318,
             "fin": 22469,
             "duracion": 151
         },
         {
             "tecla": "R",
             "inicio": 22762,
             "fin": 22959,
             "duracion": 197
         },
         {
             "tecla": "T",
             "inicio": 22777,
             "fin": 22975,
             "duracion": 198
         },
         {
             "tecla": "T",
             "inicio": 23502,
             "fin": 23613,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 23525,
             "fin": 23637,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 23762,
             "fin": 23845,
             "duracion": 83
         },
         {
             "tecla": "Y",
             "inicio": 23746,
             "fin": 23861,
             "duracion": 115
         },
         {
             "tecla": "ESCAPE",
             "inicio": 22271,
             "fin": 23885,
             "duracion": 1614
         },
         {
             "tecla": "T",
             "inicio": 24021,
             "fin": 24101,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 24005,
             "fin": 24124,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 24302,
             "fin": 24445,
             "duracion": 143
         },
         {
             "tecla": "M",
             "inicio": 24282,
             "fin": 24461,
             "duracion": 179
         },
         {
             "tecla": "T",
             "inicio": 24705,
             "fin": 24814,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 24720,
             "fin": 24837,
             "duracion": 117
         },
         {
             "tecla": "T",
             "inicio": 24957,
             "fin": 25068,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 24981,
             "fin": 25093,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 24932,
             "fin": 25125,
             "duracion": 193
         },
         {
             "tecla": "T",
             "inicio": 25238,
             "fin": 25357,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 25261,
             "fin": 25372,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 25664,
             "fin": 25749,
             "duracion": 85
         },
         {
             "tecla": "Y",
             "inicio": 25650,
             "fin": 25772,
             "duracion": 122
         },
         {
             "tecla": "ESCAPE",
             "inicio": 25623,
             "fin": 25788,
             "duracion": 165
         },
         {
             "tecla": "R",
             "inicio": 25925,
             "fin": 26077,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 25949,
             "fin": 26101,
             "duracion": 152
         },
         {
             "tecla": "C",
             "inicio": 26360,
             "fin": 26551,
             "duracion": 191
         },
         {
             "tecla": "V",
             "inicio": 26381,
             "fin": 26573,
             "duracion": 192
         },
         {
             "tecla": "R",
             "inicio": 27198,
             "fin": 27352,
             "duracion": 154
         },
         {
             "tecla": "T",
             "inicio": 27174,
             "fin": 27368,
             "duracion": 194
         },
         {
             "tecla": "R",
             "inicio": 27442,
             "fin": 27526,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 27464,
             "fin": 27550,
             "duracion": 86
         },
         {
             "tecla": "T",
             "inicio": 27667,
             "fin": 27773,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 27685,
             "fin": 27789,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 27648,
             "fin": 27812,
             "duracion": 164
         },
         {
             "tecla": "T",
             "inicio": 27949,
             "fin": 28077,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 27926,
             "fin": 28101,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 28328,
             "fin": 28367,
             "duracion": 39
         },
         {
             "tecla": "Y",
             "inicio": 28343,
             "fin": 28367,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 28369,
             "fin": 28437,
             "duracion": 68
         },
         {
             "tecla": "Y",
             "inicio": 28370,
             "fin": 28461,
             "duracion": 91
         },
         {
             "tecla": "Y",
             "inicio": 28597,
             "fin": 28670,
             "duracion": 73
         },
         {
             "tecla": "T",
             "inicio": 28613,
             "fin": 28694,
             "duracion": 81
         },
         {
             "tecla": "T",
             "inicio": 28848,
             "fin": 28951,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 28870,
             "fin": 28976,
             "duracion": 106
         },
         {
             "tecla": "ESCAPE",
             "inicio": 28367,
             "fin": 29199,
             "duracion": 832
         },
         {
             "tecla": "R",
             "inicio": 29293,
             "fin": 29357,
             "duracion": 64
         },
         {
             "tecla": "T",
             "inicio": 29269,
             "fin": 29381,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 29525,
             "fin": 29653,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 29550,
             "fin": 29677,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 30693,
             "fin": 30775,
             "duracion": 82
         },
         {
             "tecla": "Y",
             "inicio": 30670,
             "fin": 30800,
             "duracion": 130
         },
         {
             "tecla": "T",
             "inicio": 30935,
             "fin": 31023,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 30918,
             "fin": 31042,
             "duracion": 124
         },
         {
             "tecla": "ESCAPE",
             "inicio": 29493,
             "fin": 31061,
             "duracion": 1568
         },
         {
             "tecla": "T",
             "inicio": 31101,
             "fin": 31189,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 31086,
             "fin": 31212,
             "duracion": 126
         },
         {
             "tecla": "U",
             "inicio": 31398,
             "fin": 31519,
             "duracion": 121
         },
         {
             "tecla": "M",
             "inicio": 31373,
             "fin": 31543,
             "duracion": 170
         },
         {
             "tecla": "Y",
             "inicio": 31846,
             "fin": 31925,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 31821,
             "fin": 31949,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 32058,
             "fin": 32094,
             "duracion": 36
         },
         {
             "tecla": "Y",
             "inicio": 32074,
             "fin": 32094,
             "duracion": 20
         },
         {
             "tecla": "T",
             "inicio": 32095,
             "fin": 32165,
             "duracion": 70
         },
         {
             "tecla": "Y",
             "inicio": 32096,
             "fin": 32189,
             "duracion": 93
         },
         {
             "tecla": "ESCAPE",
             "inicio": 32094,
             "fin": 32262,
             "duracion": 168
         },
         {
             "tecla": "T",
             "inicio": 32333,
             "fin": 32453,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 32349,
             "fin": 32477,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 32770,
             "fin": 32810,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 32794,
             "fin": 32811,
             "duracion": 17
         },
         {
             "tecla": "Y",
             "inicio": 32813,
             "fin": 32893,
             "duracion": 80
         },
         {
             "tecla": "T",
             "inicio": 32812,
             "fin": 32909,
             "duracion": 97
         },
         {
             "tecla": "ESCAPE",
             "inicio": 32810,
             "fin": 32932,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 33077,
             "fin": 33189,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 33053,
             "fin": 33205,
             "duracion": 152
         },
         {
             "tecla": "C",
             "inicio": 33536,
             "fin": 33720,
             "duracion": 184
         },
         {
             "tecla": "V",
             "inicio": 33522,
             "fin": 33736,
             "duracion": 214
         },
         {
             "tecla": "R",
             "inicio": 34330,
             "fin": 34461,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 34315,
             "fin": 34485,
             "duracion": 170
         },
         {
             "tecla": "T",
             "inicio": 34591,
             "fin": 34662,
             "duracion": 71
         },
         {
             "tecla": "R",
             "inicio": 34574,
             "fin": 34677,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 34802,
             "fin": 34925,
             "duracion": 123
         },
         {
             "tecla": "Y",
             "inicio": 34821,
             "fin": 34962,
             "duracion": 141
         },
         {
             "tecla": "ESCAPE",
             "inicio": 34782,
             "fin": 35012,
             "duracion": 230
         },
         {
             "tecla": "Y",
             "inicio": 35070,
             "fin": 35229,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 35085,
             "fin": 35245,
             "duracion": 160
         },
         {
             "tecla": "T",
             "inicio": 35534,
             "fin": 35645,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 35543,
             "fin": 35669,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 35794,
             "fin": 35877,
             "duracion": 83
         },
         {
             "tecla": "T",
             "inicio": 35768,
             "fin": 35901,
             "duracion": 133
         },
         {
             "tecla": "T",
             "inicio": 36017,
             "fin": 36142,
             "duracion": 125
         },
         {
             "tecla": "Y",
             "inicio": 36042,
             "fin": 36160,
             "duracion": 118
         },
         {
             "tecla": "ESCAPE",
             "inicio": 35504,
             "fin": 36383,
             "duracion": 879
         },
         {
             "tecla": "R",
             "inicio": 36438,
             "fin": 36565,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 36462,
             "fin": 36582,
             "duracion": 120
         },
         {
             "tecla": "R",
             "inicio": 36727,
             "fin": 36846,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 36709,
             "fin": 36869,
             "duracion": 160
         },
         {
             "tecla": "E",
             "inicio": 37515,
             "fin": 37669,
             "duracion": 154
         },
         {
             "tecla": "R",
             "inicio": 37536,
             "fin": 37694,
             "duracion": 158
         },
         {
             "tecla": "R",
             "inicio": 37768,
             "fin": 37966,
             "duracion": 198
         },
         {
             "tecla": "T",
             "inicio": 37790,
             "fin": 37990,
             "duracion": 200
         },
         {
             "tecla": "U",
             "inicio": 38734,
             "fin": 38877,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 38990,
             "fin": 39071,
             "duracion": 81
         },
         {
             "tecla": "Y",
             "inicio": 39136,
             "fin": 39278,
             "duracion": 142
         },
         {
             "tecla": "Y",
             "inicio": 39394,
             "fin": 39496,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 39694,
             "fin": 39942,
             "duracion": 248
         },
         {
             "tecla": "Y",
             "inicio": 40138,
             "fin": 40232,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 40386,
             "fin": 40638,
             "duracion": 252
         },
         {
             "tecla": "T",
             "inicio": 40818,
             "fin": 41060,
             "duracion": 242
         },
         {
             "tecla": "R",
             "inicio": 41221,
             "fin": 41376,
             "duracion": 155
         },
         {
             "tecla": "T",
             "inicio": 41470,
             "fin": 41758,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 41882,
             "fin": 41998,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 42137,
             "fin": 42380,
             "duracion": 243
         },
         {
             "tecla": "T",
             "inicio": 42621,
             "fin": 42832,
             "duracion": 211
         },
         {
             "tecla": "R",
             "inicio": 43042,
             "fin": 43149,
             "duracion": 107
         },
         {
             "tecla": "T",
             "inicio": 43304,
             "fin": 43454,
             "duracion": 150
         },
         {
             "tecla": "Y",
             "inicio": 43678,
             "fin": 43797,
             "duracion": 119
         },
         {
             "tecla": "ESCAPE",
             "inicio": 36677,
             "fin": 43903,
             "duracion": 7226
         },
         {
             "tecla": "T",
             "inicio": 43927,
             "fin": 44213,
             "duracion": 286
         },
         {
             "tecla": "R",
             "inicio": 44360,
             "fin": 44437,
             "duracion": 77
         },
         {
             "tecla": "D",
             "inicio": 44805,
             "fin": 44925,
             "duracion": 120
         },
         {
             "tecla": "H",
             "inicio": 44830,
             "fin": 44949,
             "duracion": 119
         },
         {
             "tecla": "J",
             "inicio": 45070,
             "fin": 45125,
             "duracion": 55
         },
         {
             "tecla": "F",
             "inicio": 45055,
             "fin": 45141,
             "duracion": 86
         },
         {
             "tecla": "G",
             "inicio": 45282,
             "fin": 45360,
             "duracion": 78
         },
         {
             "tecla": "K",
             "inicio": 45295,
             "fin": 45380,
             "duracion": 85
         },
         {
             "tecla": "H",
             "inicio": 45534,
             "fin": 45589,
             "duracion": 55
         },
         {
             "tecla": "L",
             "inicio": 45517,
             "fin": 45605,
             "duracion": 88
         },
         {
             "tecla": "ESCAPE",
             "inicio": 44553,
             "fin": 45717,
             "duracion": 1164
         },
         {
             "tecla": "Y",
             "inicio": 45949,
             "fin": 46062,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 46193,
             "fin": 46279,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 46406,
             "fin": 46486,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 46661,
             "fin": 46765,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 46598,
             "fin": 46965,
             "duracion": 367
         },
         {
             "tecla": "Y",
             "inicio": 46901,
             "fin": 46965,
             "duracion": 64
         },
         {
             "tecla": "Y",
             "inicio": 46966,
             "fin": 47006,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 47310,
             "fin": 47333,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 47334,
             "fin": 47430,
             "duracion": 96
         },
         {
             "tecla": "ESCAPE",
             "inicio": 47333,
             "fin": 47564,
             "duracion": 231
         },
         {
             "tecla": "Y",
             "inicio": 47606,
             "fin": 47732,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 47990,
             "fin": 48119,
             "duracion": 129
         },
         {
             "tecla": "Y",
             "inicio": 48357,
             "fin": 48461,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 48327,
             "fin": 48525,
             "duracion": 198
         },
         {
             "tecla": "Y",
             "inicio": 48654,
             "fin": 48788,
             "duracion": 134
         },
         {
             "tecla": "U",
             "inicio": 49022,
             "fin": 49151,
             "duracion": 129
         },
         {
             "tecla": "U",
             "inicio": 49261,
             "fin": 49430,
             "duracion": 169
         },
         {
             "tecla": "ESCAPE",
             "inicio": 49214,
             "fin": 49533,
             "duracion": 319
         },
         {
             "tecla": "U",
             "inicio": 49685,
             "fin": 49828,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 50090,
             "fin": 50202,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 50347,
             "fin": 50503,
             "duracion": 156
         },
         {
             "tecla": "Y",
             "inicio": 50688,
             "fin": 50789,
             "duracion": 101
         },
         {
             "tecla": "Y",
             "inicio": 50941,
             "fin": 51135,
             "duracion": 194
         },
         {
             "tecla": "T",
             "inicio": 51366,
             "fin": 51471,
             "duracion": 105
         },
         {
             "tecla": "U",
             "inicio": 51769,
             "fin": 51895,
             "duracion": 126
         },
         {
             "tecla": "I",
             "inicio": 51783,
             "fin": 51919,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 51983,
             "fin": 52108,
             "duracion": 125
         },
         {
             "tecla": "Y",
             "inicio": 52207,
             "fin": 52328,
             "duracion": 121
         },
         {
             "tecla": "U",
             "inicio": 52461,
             "fin": 52616,
             "duracion": 155
         },
         {
             "tecla": "R",
             "inicio": 52446,
             "fin": 52639,
             "duracion": 193
         },
         {
             "tecla": "I",
             "inicio": 52485,
             "fin": 52653,
             "duracion": 168
         },
         {
             "tecla": "Y",
             "inicio": 52879,
             "fin": 52999,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 53127,
             "fin": 53207,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 53346,
             "fin": 53428,
             "duracion": 82
         },
         {
             "tecla": "Y",
             "inicio": 53585,
             "fin": 53695,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 53982,
             "fin": 54061,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 54205,
             "fin": 54285,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 54446,
             "fin": 54551,
             "duracion": 105
         },
         {
             "tecla": "T",
             "inicio": 54854,
             "fin": 54949,
             "duracion": 95
         },
         {
             "tecla": "R",
             "inicio": 55298,
             "fin": 55382,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 55529,
             "fin": 55638,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 55888,
             "fin": 56007,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 56157,
             "fin": 56256,
             "duracion": 99
         },
         {
             "tecla": "T",
             "inicio": 56574,
             "fin": 56680,
             "duracion": 106
         },
         {
             "tecla": "R",
             "inicio": 56970,
             "fin": 57069,
             "duracion": 99
         },
         {
             "tecla": "T",
             "inicio": 57209,
             "fin": 57335,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 57571,
             "fin": 57671,
             "duracion": 100
         },
         {
             "tecla": "ESCAPE",
             "inicio": 50897,
             "fin": 57760,
             "duracion": 6863
         },
         {
             "tecla": "T",
             "inicio": 57845,
             "fin": 58037,
             "duracion": 192
         },
         {
             "tecla": "R",
             "inicio": 58274,
             "fin": 58391,
             "duracion": 117
         },
         {
             "tecla": "H",
             "inicio": 58782,
             "fin": 58853,
             "duracion": 71
         },
         {
             "tecla": "D",
             "inicio": 58757,
             "fin": 58869,
             "duracion": 112
         },
         {
             "tecla": "J",
             "inicio": 59018,
             "fin": 59069,
             "duracion": 51
         },
         {
             "tecla": "F",
             "inicio": 58993,
             "fin": 59085,
             "duracion": 92
         },
         {
             "tecla": "K",
             "inicio": 59242,
             "fin": 59294,
             "duracion": 52
         },
         {
             "tecla": "G",
             "inicio": 59226,
             "fin": 59318,
             "duracion": 92
         },
         {
             "tecla": "L",
             "inicio": 59480,
             "fin": 59536,
             "duracion": 56
         },
         {
             "tecla": "H",
             "inicio": 59457,
             "fin": 59558,
             "duracion": 101
         },
         {
             "tecla": "ESCAPE",
             "inicio": 58511,
             "fin": 59621,
             "duracion": 1110
         },
         {
             "tecla": "Y",
             "inicio": 59910,
             "fin": 59997,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 60146,
             "fin": 60230,
             "duracion": 84
         },
         {
             "tecla": "Y",
             "inicio": 60385,
             "fin": 60470,
             "duracion": 85
         },
         {
             "tecla": "Y",
             "inicio": 60613,
             "fin": 60717,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 60601,
             "fin": 60820,
             "duracion": 219
         },
         {
             "tecla": "Y",
             "inicio": 60893,
             "fin": 60981,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 61286,
             "fin": 61367,
             "duracion": 81
         },
         {
             "tecla": "Y",
             "inicio": 61574,
             "fin": 61597,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 61954,
             "fin": 62065,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 62345,
             "fin": 62453,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 62604,
             "fin": 62839,
             "duracion": 235
         },
         {
             "tecla": "U",
             "inicio": 62952,
             "fin": 63109,
             "duracion": 157
         },
         {
             "tecla": "U",
             "inicio": 63245,
             "fin": 63397,
             "duracion": 152
         },
         {
             "tecla": "ESCAPE",
             "inicio": 63216,
             "fin": 63533,
             "duracion": 317
         },
         {
             "tecla": "U",
             "inicio": 63662,
             "fin": 63821,
             "duracion": 159
         },
         {
             "tecla": "U",
             "inicio": 64103,
             "fin": 64213,
             "duracion": 110
         },
         {
             "tecla": "U",
             "inicio": 64378,
             "fin": 64528,
             "duracion": 150
         },
         {
             "tecla": "Y",
             "inicio": 64770,
             "fin": 64879,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 65045,
             "fin": 65237,
             "duracion": 192
         },
         {
             "tecla": "T",
             "inicio": 65490,
             "fin": 65616,
             "duracion": 126
         },
         {
             "tecla": "U",
             "inicio": 65894,
             "fin": 66039,
             "duracion": 145
         },
         {
             "tecla": "I",
             "inicio": 65878,
             "fin": 66058,
             "duracion": 180
         },
         {
             "tecla": "T",
             "inicio": 66126,
             "fin": 66256,
             "duracion": 130
         },
         {
             "tecla": "Y",
             "inicio": 66330,
             "fin": 66471,
             "duracion": 141
         },
         {
             "tecla": "I",
             "inicio": 66607,
             "fin": 66832,
             "duracion": 225
         },
         {
             "tecla": "U",
             "inicio": 66570,
             "fin": 66848,
             "duracion": 278
         },
         {
             "tecla": "R",
             "inicio": 66585,
             "fin": 66871,
             "duracion": 286
         },
         {
             "tecla": "T",
             "inicio": 67242,
             "fin": 67421,
             "duracion": 179
         },
         {
             "tecla": "Y",
             "inicio": 67258,
             "fin": 67437,
             "duracion": 179
         },
         {
             "tecla": "ESCAPE",
             "inicio": 64991,
             "fin": 67476,
             "duracion": 2485
         },
         {
             "tecla": "T",
             "inicio": 67671,
             "fin": 67757,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 67653,
             "fin": 67797,
             "duracion": 144
         },
         {
             "tecla": "M",
             "inicio": 67934,
             "fin": 68093,
             "duracion": 159
         },
         {
             "tecla": "U",
             "inicio": 67918,
             "fin": 68109,
             "duracion": 191
         },
         {
             "tecla": "M",
             "inicio": 68312,
             "fin": 68453,
             "duracion": 141
         },
         {
             "tecla": "U",
             "inicio": 68333,
             "fin": 68469,
             "duracion": 136
         },
         {
             "tecla": "ESCAPE",
             "inicio": 68294,
             "fin": 68509,
             "duracion": 215
         },
         {
             "tecla": "U",
             "inicio": 68589,
             "fin": 68669,
             "duracion": 80
         },
         {
             "tecla": "M",
             "inicio": 68565,
             "fin": 68693,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 68837,
             "fin": 69040,
             "duracion": 203
         },
         {
             "tecla": "Y",
             "inicio": 68854,
             "fin": 69064,
             "duracion": 210
         },
         {
             "tecla": "M",
             "inicio": 69477,
             "fin": 69653,
             "duracion": 176
         },
         {
             "tecla": "U",
             "inicio": 69461,
             "fin": 69677,
             "duracion": 216
         },
         {
             "tecla": "ESCAPE",
             "inicio": 69427,
             "fin": 69749,
             "duracion": 322
         },
         {
             "tecla": "M",
             "inicio": 69925,
             "fin": 70037,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 69901,
             "fin": 70061,
             "duracion": 160
         },
         {
             "tecla": "T",
             "inicio": 70174,
             "fin": 70351,
             "duracion": 177
         },
         {
             "tecla": "Y",
             "inicio": 70151,
             "fin": 70373,
             "duracion": 222
         },
         {
             "tecla": "M",
             "inicio": 70885,
             "fin": 71045,
             "duracion": 160
         },
         {
             "tecla": "U",
             "inicio": 70861,
             "fin": 71062,
             "duracion": 201
         },
         {
             "tecla": "ESCAPE",
             "inicio": 70678,
             "fin": 71165,
             "duracion": 487
         },
         {
             "tecla": "M",
             "inicio": 71325,
             "fin": 71445,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 71301,
             "fin": 71469,
             "duracion": 168
         },
         {
             "tecla": "T",
             "inicio": 71594,
             "fin": 71750,
             "duracion": 156
         },
         {
             "tecla": "Y",
             "inicio": 71569,
             "fin": 71773,
             "duracion": 204
         },
         {
             "tecla": "M",
             "inicio": 72006,
             "fin": 72142,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 71990,
             "fin": 72160,
             "duracion": 170
         },
         {
             "tecla": "T",
             "inicio": 72255,
             "fin": 72342,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 72239,
             "fin": 72359,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 72493,
             "fin": 72629,
             "duracion": 136
         },
         {
             "tecla": "Y",
             "inicio": 72479,
             "fin": 72645,
             "duracion": 166
         },
         {
             "tecla": "ESCAPE",
             "inicio": 72431,
             "fin": 72799,
             "duracion": 368
         },
         {
             "tecla": "U",
             "inicio": 73093,
             "fin": 73287,
             "duracion": 194
         },
         {
             "tecla": "M",
             "inicio": 73118,
             "fin": 73304,
             "duracion": 186
         },
         {
             "tecla": "T",
             "inicio": 73570,
             "fin": 73678,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 73586,
             "fin": 73702,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 73774,
             "fin": 73941,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 73790,
             "fin": 73965,
             "duracion": 175
         },
         {
             "tecla": "ESCAPE",
             "inicio": 73733,
             "fin": 74044,
             "duracion": 311
         },
         {
             "tecla": "M",
             "inicio": 74408,
             "fin": 74533,
             "duracion": 125
         },
         {
             "tecla": "U",
             "inicio": 74382,
             "fin": 74557,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 74846,
             "fin": 74949,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 74825,
             "fin": 74974,
             "duracion": 149
         },
         {
             "tecla": "Y",
             "inicio": 75087,
             "fin": 75213,
             "duracion": 126
         },
         {
             "tecla": "T",
             "inicio": 75074,
             "fin": 75237,
             "duracion": 163
         },
         {
             "tecla": "ESCAPE",
             "inicio": 75047,
             "fin": 75285,
             "duracion": 238
         },
         {
             "tecla": "T",
             "inicio": 75478,
             "fin": 75581,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 75494,
             "fin": 75600,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 75687,
             "fin": 75728,
             "duracion": 41
         },
         {
             "tecla": "Y",
             "inicio": 75711,
             "fin": 75728,
             "duracion": 17
         },
         {
             "tecla": "T",
             "inicio": 75729,
             "fin": 75789,
             "duracion": 60
         },
         {
             "tecla": "Y",
             "inicio": 75730,
             "fin": 75813,
             "duracion": 83
         },
         {
             "tecla": "ESCAPE",
             "inicio": 75728,
             "fin": 75853,
             "duracion": 125
         },
         {
             "tecla": "R",
             "inicio": 75965,
             "fin": 76101,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 75990,
             "fin": 76125,
             "duracion": 135
         },
         {
             "tecla": "H",
             "inicio": 76670,
             "fin": 76733,
             "duracion": 63
         },
         {
             "tecla": "F",
             "inicio": 76694,
             "fin": 76733,
             "duracion": 39
         },
         {
             "tecla": "D",
             "inicio": 76710,
             "fin": 76733,
             "duracion": 23
         },
         {
             "tecla": "D",
             "inicio": 76734,
             "fin": 77456,
             "duracion": 722
         },
         {
             "tecla": "H",
             "inicio": 76734,
             "fin": 77471,
             "duracion": 737
         },
         {
             "tecla": "F",
             "inicio": 76734,
             "fin": 77494,
             "duracion": 760
         },
         {
             "tecla": "ESCAPE",
             "inicio": 76733,
             "fin": 77511,
             "duracion": 778
         },
         {
             "tecla": "R",
             "inicio": 77979,
             "fin": 78133,
             "duracion": 154
         },
         {
             "tecla": "T",
             "inicio": 77994,
             "fin": 78157,
             "duracion": 163
         },
         {
             "tecla": "T",
             "inicio": 78405,
             "fin": 78445,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 78421,
             "fin": 78445,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 78445,
             "fin": 78541,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 78446,
             "fin": 78557,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 78445,
             "fin": 78597,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 78694,
             "fin": 78797,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 78669,
             "fin": 78813,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 79083,
             "fin": 79118,
             "duracion": 35
         },
         {
             "tecla": "Y",
             "inicio": 79095,
             "fin": 79118,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 79119,
             "fin": 79181,
             "duracion": 62
         },
         {
             "tecla": "ESCAPE",
             "inicio": 79118,
             "fin": 79205,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 79119,
             "fin": 79205,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 79205,
             "fin": 79221,
             "duracion": 16
         },
         {
             "tecla": "R",
             "inicio": 79325,
             "fin": 79431,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 79341,
             "fin": 79455,
             "duracion": 114
         },
         {
             "tecla": "R",
             "inicio": 79553,
             "fin": 79566,
             "duracion": 13
         },
         {
             "tecla": "T",
             "inicio": 79590,
             "fin": 79789,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 79566,
             "fin": 79805,
             "duracion": 239
         },
         {
             "tecla": "R",
             "inicio": 80190,
             "fin": 80313,
             "duracion": 123
         },
         {
             "tecla": "T",
             "inicio": 80410,
             "fin": 80512,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 80605,
             "fin": 80741,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 80867,
             "fin": 81013,
             "duracion": 146
         },
         {
             "tecla": "T",
             "inicio": 80850,
             "fin": 81037,
             "duracion": 187
         },
         {
             "tecla": "T",
             "inicio": 81533,
             "fin": 81671,
             "duracion": 138
         },
         {
             "tecla": "Y",
             "inicio": 81522,
             "fin": 81687,
             "duracion": 165
         },
         {
             "tecla": "ESCAPE",
             "inicio": 79565,
             "fin": 81719,
             "duracion": 2154
         },
         {
             "tecla": "T",
             "inicio": 81952,
             "fin": 82030,
             "duracion": 78
         },
         {
             "tecla": "Y",
             "inicio": 81925,
             "fin": 82064,
             "duracion": 139
         },
         {
             "tecla": "M",
             "inicio": 82183,
             "fin": 82361,
             "duracion": 178
         },
         {
             "tecla": "U",
             "inicio": 82167,
             "fin": 82376,
             "duracion": 209
         },
         {
             "tecla": "M",
             "inicio": 82566,
             "fin": 82589,
             "duracion": 23
         },
         {
             "tecla": "M",
             "inicio": 82590,
             "fin": 82669,
             "duracion": 79
         },
         {
             "tecla": "U",
             "inicio": 82607,
             "fin": 82693,
             "duracion": 86
         },
         {
             "tecla": "ESCAPE",
             "inicio": 82589,
             "fin": 82733,
             "duracion": 144
         },
         {
             "tecla": "M",
             "inicio": 82814,
             "fin": 82949,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 82838,
             "fin": 82973,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 83070,
             "fin": 83192,
             "duracion": 122
         },
         {
             "tecla": "Y",
             "inicio": 83046,
             "fin": 83216,
             "duracion": 170
         },
         {
             "tecla": "U",
             "inicio": 83711,
             "fin": 83845,
             "duracion": 134
         },
         {
             "tecla": "M",
             "inicio": 83725,
             "fin": 83861,
             "duracion": 136
         },
         {
             "tecla": "ESCAPE",
             "inicio": 83686,
             "fin": 83884,
             "duracion": 198
         },
         {
             "tecla": "M",
             "inicio": 84101,
             "fin": 84230,
             "duracion": 129
         },
         {
             "tecla": "U",
             "inicio": 84125,
             "fin": 84253,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 84367,
             "fin": 84486,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 84351,
             "fin": 84502,
             "duracion": 151
         },
         {
             "tecla": "U",
             "inicio": 84997,
             "fin": 85037,
             "duracion": 40
         },
         {
             "tecla": "M",
             "inicio": 85021,
             "fin": 85037,
             "duracion": 16
         },
         {
             "tecla": "U",
             "inicio": 85037,
             "fin": 85189,
             "duracion": 152
         },
         {
             "tecla": "M",
             "inicio": 85038,
             "fin": 85213,
             "duracion": 175
         },
         {
             "tecla": "ESCAPE",
             "inicio": 85036,
             "fin": 85229,
             "duracion": 193
         },
         {
             "tecla": "U",
             "inicio": 85461,
             "fin": 85558,
             "duracion": 97
         },
         {
             "tecla": "M",
             "inicio": 85430,
             "fin": 85574,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 85688,
             "fin": 85790,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 85672,
             "fin": 85806,
             "duracion": 134
         },
         {
             "tecla": "M",
             "inicio": 86086,
             "fin": 86181,
             "duracion": 95
         },
         {
             "tecla": "U",
             "inicio": 86062,
             "fin": 86206,
             "duracion": 144
         },
         {
             "tecla": "Y",
             "inicio": 86281,
             "fin": 86390,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 86303,
             "fin": 86406,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 86559,
             "fin": 86621,
             "duracion": 62
         },
         {
             "tecla": "Y",
             "inicio": 86544,
             "fin": 86645,
             "duracion": 101
         },
         {
             "tecla": "ESCAPE",
             "inicio": 86518,
             "fin": 87072,
             "duracion": 554
         },
         {
             "tecla": "U",
             "inicio": 87173,
             "fin": 87325,
             "duracion": 152
         },
         {
             "tecla": "M",
             "inicio": 87197,
             "fin": 87349,
             "duracion": 152
         },
         {
             "tecla": "Y",
             "inicio": 87620,
             "fin": 87709,
             "duracion": 89
         },
         {
             "tecla": "T",
             "inicio": 87602,
             "fin": 87733,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 87824,
             "fin": 87942,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 87846,
             "fin": 87957,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 87806,
             "fin": 88093,
             "duracion": 287
         },
         {
             "tecla": "U",
             "inicio": 88441,
             "fin": 88600,
             "duracion": 159
         },
         {
             "tecla": "M",
             "inicio": 88458,
             "fin": 88619,
             "duracion": 161
         },
         {
             "tecla": "T",
             "inicio": 88818,
             "fin": 88917,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 88792,
             "fin": 88934,
             "duracion": 142
         },
         {
             "tecla": "Y",
             "inicio": 89023,
             "fin": 89062,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 89046,
             "fin": 89062,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 89063,
             "fin": 89165,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 89063,
             "fin": 89181,
             "duracion": 118
         },
         {
             "tecla": "ESCAPE",
             "inicio": 89062,
             "fin": 89261,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 89437,
             "fin": 89541,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 89461,
             "fin": 89565,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 89630,
             "fin": 89670,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 89646,
             "fin": 89670,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 89671,
             "fin": 89719,
             "duracion": 48
         },
         {
             "tecla": "Y",
             "inicio": 89671,
             "fin": 89741,
             "duracion": 70
         },
         {
             "tecla": "ESCAPE",
             "inicio": 89670,
             "fin": 89869,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 89909,
             "fin": 90029,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 89934,
             "fin": 90045,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 90578,
             "fin": 90728,
             "duracion": 150
         },
         {
             "tecla": "Y",
             "inicio": 90598,
             "fin": 90743,
             "duracion": 145
         },
         {
             "tecla": "Y",
             "inicio": 90986,
             "fin": 91029,
             "duracion": 43
         },
         {
             "tecla": "T",
             "inicio": 91006,
             "fin": 91029,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 91030,
             "fin": 91109,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 91030,
             "fin": 91125,
             "duracion": 95
         },
         {
             "tecla": "ESCAPE",
             "inicio": 91029,
             "fin": 91173,
             "duracion": 144
         },
         {
             "tecla": "R",
             "inicio": 91238,
             "fin": 91373,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 91253,
             "fin": 91389,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 91899,
             "fin": 92037,
             "duracion": 138
         },
         {
             "tecla": "Y",
             "inicio": 91919,
             "fin": 92061,
             "duracion": 142
         },
         {
             "tecla": "T",
             "inicio": 92280,
             "fin": 92413,
             "duracion": 133
         },
         {
             "tecla": "Y",
             "inicio": 92301,
             "fin": 92439,
             "duracion": 138
         },
         {
             "tecla": "ESCAPE",
             "inicio": 92262,
             "fin": 92453,
             "duracion": 191
         },
         {
             "tecla": "T",
             "inicio": 92549,
             "fin": 92662,
             "duracion": 113
         },
         {
             "tecla": "R",
             "inicio": 92534,
             "fin": 92677,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 92934,
             "fin": 92950,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 92974,
             "fin": 93062,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 92951,
             "fin": 93077,
             "duracion": 126
         },
         {
             "tecla": "ESCAPE",
             "inicio": 92950,
             "fin": 93100,
             "duracion": 150
         },
         {
             "tecla": "R",
             "inicio": 93189,
             "fin": 93269,
             "duracion": 80
         },
         {
             "tecla": "T",
             "inicio": 93165,
             "fin": 93286,
             "duracion": 121
         },
         {
             "tecla": "R",
             "inicio": 93389,
             "fin": 93405,
             "duracion": 16
         },
         {
             "tecla": "R",
             "inicio": 93406,
             "fin": 93517,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 93429,
             "fin": 93533,
             "duracion": 104
         },
         {
             "tecla": "E",
             "inicio": 94195,
             "fin": 94295,
             "duracion": 100
         },
         {
             "tecla": "R",
             "inicio": 94408,
             "fin": 94486,
             "duracion": 78
         },
         {
             "tecla": "T",
             "inicio": 94617,
             "fin": 94704,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 94832,
             "fin": 94919,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 95054,
             "fin": 95117,
             "duracion": 63
         },
         {
             "tecla": "R",
             "inicio": 95267,
             "fin": 95342,
             "duracion": 75
         },
         {
             "tecla": "U",
             "inicio": 95518,
             "fin": 95622,
             "duracion": 104
         },
         {
             "tecla": "M",
             "inicio": 95503,
             "fin": 95670,
             "duracion": 167
         },
         {
             "tecla": "U",
             "inicio": 95889,
             "fin": 96093,
             "duracion": 204
         },
         {
             "tecla": "M",
             "inicio": 95905,
             "fin": 96118,
             "duracion": 213
         },
         {
             "tecla": "ESCAPE",
             "inicio": 93405,
             "fin": 96191,
             "duracion": 2786
         },
         {
             "tecla": "U",
             "inicio": 96333,
             "fin": 96413,
             "duracion": 80
         },
         {
             "tecla": "M",
             "inicio": 96309,
             "fin": 96437,
             "duracion": 128
         },
         {
             "tecla": "U",
             "inicio": 96590,
             "fin": 96677,
             "duracion": 87
         },
         {
             "tecla": "M",
             "inicio": 96575,
             "fin": 96694,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 96985,
             "fin": 97093,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 96969,
             "fin": 97118,
             "duracion": 149
         },
         {
             "tecla": "E",
             "inicio": 97541,
             "fin": 97645,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 97478,
             "fin": 97716,
             "duracion": 238
         },
         {
             "tecla": "E",
             "inicio": 97790,
             "fin": 97869,
             "duracion": 79
         },
         {
             "tecla": "R",
             "inicio": 98005,
             "fin": 98101,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 98205,
             "fin": 98310,
             "duracion": 105
         },
         {
             "tecla": "R",
             "inicio": 98439,
             "fin": 98518,
             "duracion": 79
         },
         {
             "tecla": "E",
             "inicio": 98648,
             "fin": 98734,
             "duracion": 86
         },
         {
             "tecla": "E",
             "inicio": 98957,
             "fin": 99070,
             "duracion": 113
         },
         {
             "tecla": "U",
             "inicio": 98936,
             "fin": 99103,
             "duracion": 167
         },
         {
             "tecla": "M",
             "inicio": 98913,
             "fin": 99117,
             "duracion": 204
         },
         {
             "tecla": "E",
             "inicio": 99334,
             "fin": 99496,
             "duracion": 162
         },
         {
             "tecla": "U",
             "inicio": 99374,
             "fin": 99509,
             "duracion": 135
         },
         {
             "tecla": "M",
             "inicio": 99358,
             "fin": 99533,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 99752,
             "fin": 99870,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 99774,
             "fin": 99894,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 100030,
             "fin": 100120,
             "duracion": 90
         },
         {
             "tecla": "Y",
             "inicio": 100005,
             "fin": 100143,
             "duracion": 138
         },
         {
             "tecla": "T",
             "inicio": 100461,
             "fin": 100565,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 100438,
             "fin": 100582,
             "duracion": 144
         },
         {
             "tecla": "E",
             "inicio": 101051,
             "fin": 101149,
             "duracion": 98
         },
         {
             "tecla": "R",
             "inicio": 101271,
             "fin": 101367,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 101482,
             "fin": 101574,
             "duracion": 92
         },
         {
             "tecla": "Y",
             "inicio": 101663,
             "fin": 101775,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 101897,
             "fin": 101975,
             "duracion": 78
         },
         {
             "tecla": "R",
             "inicio": 102095,
             "fin": 102183,
             "duracion": 88
         },
         {
             "tecla": "ESCAPE",
             "inicio": 100238,
             "fin": 102263,
             "duracion": 2025
         },
         {
             "tecla": "T",
             "inicio": 102373,
             "fin": 102445,
             "duracion": 72
         },
         {
             "tecla": "Y",
             "inicio": 102357,
             "fin": 102469,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 102745,
             "fin": 102863,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 102766,
             "fin": 102880,
             "duracion": 114
         },
         {
             "tecla": "Y",
             "inicio": 103149,
             "fin": 103245,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 103173,
             "fin": 103261,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 103397,
             "fin": 103503,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 103414,
             "fin": 103529,
             "duracion": 115
         },
         {
             "tecla": "ESCAPE",
             "inicio": 103117,
             "fin": 103830,
             "duracion": 713
         },
         {
             "tecla": "Y",
             "inicio": 103793,
             "fin": 103830,
             "duracion": 37
         },
         {
             "tecla": "T",
             "inicio": 103817,
             "fin": 103830,
             "duracion": 13
         },
         {
             "tecla": "Y",
             "inicio": 103831,
             "fin": 103909,
             "duracion": 78
         },
         {
             "tecla": "T",
             "inicio": 103831,
             "fin": 103949,
             "duracion": 118
         },
         {
             "tecla": "R",
             "inicio": 103973,
             "fin": 104085,
             "duracion": 112
         },
         {
             "tecla": "M",
             "inicio": 104482,
             "fin": 104616,
             "duracion": 134
         },
         {
             "tecla": "U",
             "inicio": 104501,
             "fin": 104640,
             "duracion": 139
         },
         {
             "tecla": "M",
             "inicio": 104749,
             "fin": 104813,
             "duracion": 64
         },
         {
             "tecla": "U",
             "inicio": 104725,
             "fin": 104837,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 104945,
             "fin": 105040,
             "duracion": 95
         },
         {
             "tecla": "M",
             "inicio": 104962,
             "fin": 105063,
             "duracion": 101
         },
         {
             "tecla": "Y",
             "inicio": 105158,
             "fin": 105253,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 105182,
             "fin": 105270,
             "duracion": 88
         },
         {
             "tecla": "T",
             "inicio": 105382,
             "fin": 105477,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 105397,
             "fin": 105501,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 105326,
             "fin": 105702,
             "duracion": 376
         },
         {
             "tecla": "T",
             "inicio": 105942,
             "fin": 106070,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 105965,
             "fin": 106094,
             "duracion": 129
         },
         {
             "tecla": "R",
             "inicio": 106206,
             "fin": 106309,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 106222,
             "fin": 106334,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 106637,
             "fin": 106701,
             "duracion": 64
         },
         {
             "tecla": "Y",
             "inicio": 106605,
             "fin": 106741,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 106822,
             "fin": 106957,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 106846,
             "fin": 106973,
             "duracion": 127
         },
         {
             "tecla": "E",
             "inicio": 107677,
             "fin": 107797,
             "duracion": 120
         },
         {
             "tecla": "R",
             "inicio": 107919,
             "fin": 108031,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 108136,
             "fin": 108246,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 108330,
             "fin": 108461,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 108536,
             "fin": 108656,
             "duracion": 120
         },
         {
             "tecla": "R",
             "inicio": 108746,
             "fin": 108854,
             "duracion": 108
         },
         {
             "tecla": "M",
             "inicio": 109008,
             "fin": 109101,
             "duracion": 93
         },
         {
             "tecla": "U",
             "inicio": 108992,
             "fin": 109117,
             "duracion": 125
         },
         {
             "tecla": "U",
             "inicio": 109415,
             "fin": 109560,
             "duracion": 145
         },
         {
             "tecla": "M",
             "inicio": 109395,
             "fin": 109583,
             "duracion": 188
         },
         {
             "tecla": "ESCAPE",
             "inicio": 106469,
             "fin": 109661,
             "duracion": 3192
         },
         {
             "tecla": "M",
             "inicio": 109813,
             "fin": 109917,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 109797,
             "fin": 109941,
             "duracion": 144
         },
         {
             "tecla": "U",
             "inicio": 110065,
             "fin": 110174,
             "duracion": 109
         },
         {
             "tecla": "M",
             "inicio": 110090,
             "fin": 110190,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 110486,
             "fin": 110671,
             "duracion": 185
         },
         {
             "tecla": "T",
             "inicio": 110509,
             "fin": 110695,
             "duracion": 186
         },
         {
             "tecla": "E",
             "inicio": 111245,
             "fin": 111357,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 111047,
             "fin": 111372,
             "duracion": 325
         },
         {
             "tecla": "R",
             "inicio": 111469,
             "fin": 111574,
             "duracion": 105
         },
         {
             "tecla": "T",
             "inicio": 111678,
             "fin": 111784,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 111953,
             "fin": 111990,
             "duracion": 37
         },
         {
             "tecla": "Y",
             "inicio": 111978,
             "fin": 112094,
             "duracion": 116
         },
         {
             "tecla": "R",
             "inicio": 112231,
             "fin": 112366,
             "duracion": 135
         },
         {
             "tecla": "E",
             "inicio": 112576,
             "fin": 112718,
             "duracion": 142
         },
         {
             "tecla": "U",
             "inicio": 112808,
             "fin": 113030,
             "duracion": 222
         },
         {
             "tecla": "M",
             "inicio": 112831,
             "fin": 113045,
             "duracion": 214
         },
         {
             "tecla": "M",
             "inicio": 113361,
             "fin": 113452,
             "duracion": 91
         },
         {
             "tecla": "U",
             "inicio": 113337,
             "fin": 113468,
             "duracion": 131
         },
         {
             "tecla": "Y",
             "inicio": 113798,
             "fin": 113926,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 113783,
             "fin": 113942,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 114054,
             "fin": 114197,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 114033,
             "fin": 114221,
             "duracion": 188
         },
         {
             "tecla": "Y",
             "inicio": 114517,
             "fin": 114695,
             "duracion": 178
         },
         {
             "tecla": "T",
             "inicio": 114532,
             "fin": 114714,
             "duracion": 182
         },
         {
             "tecla": "E",
             "inicio": 115189,
             "fin": 115318,
             "duracion": 129
         },
         {
             "tecla": "R",
             "inicio": 115426,
             "fin": 115542,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 115644,
             "fin": 115740,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 115845,
             "fin": 115958,
             "duracion": 113
         },
         {
             "tecla": "T",
             "inicio": 116080,
             "fin": 116190,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 116285,
             "fin": 116391,
             "duracion": 106
         },
         {
             "tecla": "ESCAPE",
             "inicio": 114350,
             "fin": 116415,
             "duracion": 2065
         },
         {
             "tecla": "Y",
             "inicio": 116517,
             "fin": 116636,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 116540,
             "fin": 116652,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 116933,
             "fin": 117062,
             "duracion": 129
         },
         {
             "tecla": "T",
             "inicio": 116957,
             "fin": 117078,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 117341,
             "fin": 117460,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 117364,
             "fin": 117477,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 117608,
             "fin": 117750,
             "duracion": 142
         },
         {
             "tecla": "T",
             "inicio": 117594,
             "fin": 117766,
             "duracion": 172
         },
         {
             "tecla": "ESCAPE",
             "inicio": 117198,
             "fin": 117838,
             "duracion": 640
         },
         {
             "tecla": "R",
             "inicio": 118004,
             "fin": 118166,
             "duracion": 162
         },
         {
             "tecla": "T",
             "inicio": 118028,
             "fin": 118198,
             "duracion": 170
         },
         {
             "tecla": "M",
             "inicio": 118622,
             "fin": 118741,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 118598,
             "fin": 118757,
             "duracion": 159
         },
         {
             "tecla": "M",
             "inicio": 118865,
             "fin": 118941,
             "duracion": 76
         },
         {
             "tecla": "U",
             "inicio": 118840,
             "fin": 118965,
             "duracion": 125
         },
         {
             "tecla": "U",
             "inicio": 119065,
             "fin": 119166,
             "duracion": 101
         },
         {
             "tecla": "M",
             "inicio": 119082,
             "fin": 119191,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 119296,
             "fin": 119389,
             "duracion": 93
         },
         {
             "tecla": "T",
             "inicio": 119312,
             "fin": 119413,
             "duracion": 101
         },
         {
             "tecla": "Y",
             "inicio": 119548,
             "fin": 119676,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 119525,
             "fin": 119692,
             "duracion": 167
         },
         {
             "tecla": "ESCAPE",
             "inicio": 119501,
             "fin": 119878,
             "duracion": 377
         },
         {
             "tecla": "Y",
             "inicio": 119948,
             "fin": 120124,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 119972,
             "fin": 120148,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 120413,
             "fin": 120549,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 120393,
             "fin": 120573,
             "duracion": 180
         },
         {
             "tecla": "T",
             "inicio": 120821,
             "fin": 120908,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 120805,
             "fin": 120924,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 121070,
             "fin": 121236,
             "duracion": 166
         },
         {
             "tecla": "T",
             "inicio": 121055,
             "fin": 121253,
             "duracion": 198
         },
         {
             "tecla": "E",
             "inicio": 121813,
             "fin": 121950,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 121829,
             "fin": 121966,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 122071,
             "fin": 122268,
             "duracion": 197
         },
         {
             "tecla": "T",
             "inicio": 122088,
             "fin": 122292,
             "duracion": 204
         },
         {
             "tecla": "T",
             "inicio": 122929,
             "fin": 123053,
             "duracion": 124
         },
         {
             "tecla": "T",
             "inicio": 123176,
             "fin": 123221,
             "duracion": 45
         },
         {
             "tecla": "Y",
             "inicio": 123152,
             "fin": 123269,
             "duracion": 117
         },
         {
             "tecla": "Y",
             "inicio": 123393,
             "fin": 123511,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 123604,
             "fin": 123710,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 123849,
             "fin": 123973,
             "duracion": 124
         },
         {
             "tecla": "ESCAPE",
             "inicio": 120724,
             "fin": 124055,
             "duracion": 3331
         },
         {
             "tecla": "T",
             "inicio": 124260,
             "fin": 124372,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 124524,
             "fin": 124628,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 124953,
             "fin": 125077,
             "duracion": 124
         },
         {
             "tecla": "ESCAPE",
             "inicio": 124468,
             "fin": 125109,
             "duracion": 641
         },
         {
             "tecla": "T",
             "inicio": 125373,
             "fin": 125460,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 125620,
             "fin": 125740,
             "duracion": 120
         },
         {
             "tecla": "E",
             "inicio": 126239,
             "fin": 126374,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 126264,
             "fin": 126398,
             "duracion": 134
         },
         {
             "tecla": "R",
             "inicio": 126511,
             "fin": 126622,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 126488,
             "fin": 126653,
             "duracion": 165
         },
         {
             "tecla": "Y",
             "inicio": 127341,
             "fin": 127462,
             "duracion": 121
         },
         {
             "tecla": "T",
             "inicio": 127569,
             "fin": 127661,
             "duracion": 92
         },
         {
             "tecla": "R",
             "inicio": 127792,
             "fin": 127877,
             "duracion": 85
         },
         {
             "tecla": "R",
             "inicio": 128237,
             "fin": 128349,
             "duracion": 112
         },
         {
             "tecla": "M",
             "inicio": 128479,
             "fin": 128557,
             "duracion": 78
         },
         {
             "tecla": "U",
             "inicio": 128465,
             "fin": 128582,
             "duracion": 117
         },
         {
             "tecla": "U",
             "inicio": 128719,
             "fin": 128781,
             "duracion": 62
         },
         {
             "tecla": "M",
             "inicio": 128695,
             "fin": 128799,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 128924,
             "fin": 129012,
             "duracion": 88
         },
         {
             "tecla": "M",
             "inicio": 128940,
             "fin": 129036,
             "duracion": 96
         },
         {
             "tecla": "U",
             "inicio": 129177,
             "fin": 129280,
             "duracion": 103
         },
         {
             "tecla": "M",
             "inicio": 129190,
             "fin": 129295,
             "duracion": 105
         },
         {
             "tecla": "ESCAPE",
             "inicio": 125575,
             "fin": 129454,
             "duracion": 3879
         },
         {
             "tecla": "M",
             "inicio": 129583,
             "fin": 129708,
             "duracion": 125
         },
         {
             "tecla": "U",
             "inicio": 129605,
             "fin": 129732,
             "duracion": 127
         },
         {
             "tecla": "I",
             "inicio": 129857,
             "fin": 129988,
             "duracion": 131
         },
         {
             "tecla": ",",
             "inicio": 129840,
             "fin": 130005,
             "duracion": 165
         },
         {
             "tecla": "M",
             "inicio": 130236,
             "fin": 130372,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 130260,
             "fin": 130388,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 130157,
             "fin": 130412,
             "duracion": 255
         },
         {
             "tecla": "U",
             "inicio": 130510,
             "fin": 130604,
             "duracion": 94
         },
         {
             "tecla": "M",
             "inicio": 130524,
             "fin": 130628,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 130753,
             "fin": 130844,
             "duracion": 91
         },
         {
             "tecla": "Y",
             "inicio": 130776,
             "fin": 130868,
             "duracion": 92
         },
         {
             "tecla": "T",
             "inicio": 130981,
             "fin": 131100,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 131004,
             "fin": 131124,
             "duracion": 120
         },
         {
             "tecla": "ESCAPE",
             "inicio": 130956,
             "fin": 131228,
             "duracion": 272
         },
         {
             "tecla": "M",
             "inicio": 131413,
             "fin": 131500,
             "duracion": 87
         },
         {
             "tecla": "U",
             "inicio": 131389,
             "fin": 131524,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 131661,
             "fin": 131748,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 131645,
             "fin": 131772,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 132132,
             "fin": 132228,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 132108,
             "fin": 132244,
             "duracion": 136
         },
         {
             "tecla": "E",
             "inicio": 132537,
             "fin": 132677,
             "duracion": 140
         },
         {
             "tecla": "T",
             "inicio": 132807,
             "fin": 132926,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 132783,
             "fin": 132949,
             "duracion": 166
         },
         {
             "tecla": "T",
             "inicio": 133206,
             "fin": 133316,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 133185,
             "fin": 133340,
             "duracion": 155
         },
         {
             "tecla": "ESCAPE",
             "inicio": 131967,
             "fin": 133380,
             "duracion": 1413
         },
         {
             "tecla": "R",
             "inicio": 133476,
             "fin": 133596,
             "duracion": 120
         },
         {
             "tecla": "E",
             "inicio": 133453,
             "fin": 133612,
             "duracion": 159
         },
         {
             "tecla": "C",
             "inicio": 133938,
             "fin": 134093,
             "duracion": 155
         },
         {
             "tecla": "V",
             "inicio": 133961,
             "fin": 134108,
             "duracion": 147
         },
         {
             "tecla": "M",
             "inicio": 135397,
             "fin": 135452,
             "duracion": 55
         },
         {
             "tecla": "U",
             "inicio": 135378,
             "fin": 135484,
             "duracion": 106
         },
         {
             "tecla": "U",
             "inicio": 135588,
             "fin": 135701,
             "duracion": 113
         },
         {
             "tecla": "M",
             "inicio": 135858,
             "fin": 135925,
             "duracion": 67
         },
         {
             "tecla": "U",
             "inicio": 135832,
             "fin": 135940,
             "duracion": 108
         },
         {
             "tecla": "U",
             "inicio": 136063,
             "fin": 136157,
             "duracion": 94
         },
         {
             "tecla": "M",
             "inicio": 136078,
             "fin": 136173,
             "duracion": 95
         },
         {
             "tecla": "M",
             "inicio": 136306,
             "fin": 136413,
             "duracion": 107
         },
         {
             "tecla": "U",
             "inicio": 136288,
             "fin": 136429,
             "duracion": 141
         },
         {
             "tecla": "M",
             "inicio": 136735,
             "fin": 136812,
             "duracion": 77
         },
         {
             "tecla": "U",
             "inicio": 136719,
             "fin": 136836,
             "duracion": 117
         },
         {
             "tecla": "U",
             "inicio": 136949,
             "fin": 137068,
             "duracion": 119
         },
         {
             "tecla": "M",
             "inicio": 136972,
             "fin": 137085,
             "duracion": 113
         },
         {
             "tecla": "ESCAPE",
             "inicio": 136924,
             "fin": 137188,
             "duracion": 264
         },
         {
             "tecla": "U",
             "inicio": 137391,
             "fin": 137477,
             "duracion": 86
         },
         {
             "tecla": "M",
             "inicio": 137373,
             "fin": 137500,
             "duracion": 127
         },
         {
             "tecla": "U",
             "inicio": 137618,
             "fin": 137708,
             "duracion": 90
         },
         {
             "tecla": "M",
             "inicio": 137631,
             "fin": 137732,
             "duracion": 101
         },
         {
             "tecla": "M",
             "inicio": 137853,
             "fin": 137934,
             "duracion": 81
         },
         {
             "tecla": "U",
             "inicio": 137837,
             "fin": 137958,
             "duracion": 121
         },
         {
             "tecla": "U",
             "inicio": 138056,
             "fin": 138173,
             "duracion": 117
         },
         {
             "tecla": "M",
             "inicio": 138079,
             "fin": 138188,
             "duracion": 109
         },
         {
             "tecla": "M",
             "inicio": 138500,
             "fin": 138573,
             "duracion": 73
         },
         {
             "tecla": "U",
             "inicio": 138480,
             "fin": 138597,
             "duracion": 117
         },
         {
             "tecla": "I",
             "inicio": 138758,
             "fin": 138797,
             "duracion": 39
         },
         {
             "tecla": ",",
             "inicio": 138781,
             "fin": 138797,
             "duracion": 16
         },
         {
             "tecla": ",",
             "inicio": 138798,
             "fin": 138828,
             "duracion": 30
         },
         {
             "tecla": "I",
             "inicio": 138797,
             "fin": 138852,
             "duracion": 55
         },
         {
             "tecla": "ESCAPE",
             "inicio": 138797,
             "fin": 139012,
             "duracion": 215
         },
         {
             "tecla": "U",
             "inicio": 139182,
             "fin": 139350,
             "duracion": 168
         },
         {
             "tecla": "M",
             "inicio": 139157,
             "fin": 139375,
             "duracion": 218
         },
         {
             "tecla": "M",
             "inicio": 139860,
             "fin": 140207,
             "duracion": 347
         },
         {
             "tecla": "H",
             "inicio": 140269,
             "fin": 140606,
             "duracion": 337
         },
         {
             "tecla": "T",
             "inicio": 140749,
             "fin": 140861,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 140765,
             "fin": 140885,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 141008,
             "fin": 141118,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 141031,
             "fin": 141134,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 141254,
             "fin": 141326,
             "duracion": 72
         },
         {
             "tecla": "Y",
             "inicio": 141229,
             "fin": 141351,
             "duracion": 122
         },
         {
             "tecla": "U",
             "inicio": 141446,
             "fin": 141614,
             "duracion": 168
         },
         {
             "tecla": "M",
             "inicio": 141470,
             "fin": 141630,
             "duracion": 160
         },
         {
             "tecla": "U",
             "inicio": 141711,
             "fin": 141836,
             "duracion": 125
         },
         {
             "tecla": "M",
             "inicio": 141724,
             "fin": 141852,
             "duracion": 128
         },
         {
             "tecla": "U",
             "inicio": 142141,
             "fin": 142292,
             "duracion": 151
         },
         {
             "tecla": "M",
             "inicio": 142156,
             "fin": 142309,
             "duracion": 153
         },
         {
             "tecla": "ESCAPE",
             "inicio": 141678,
             "fin": 142333,
             "duracion": 655
         },
         {
             "tecla": "M",
             "inicio": 142422,
             "fin": 142556,
             "duracion": 134
         },
         {
             "tecla": "U",
             "inicio": 142437,
             "fin": 142580,
             "duracion": 143
         },
         {
             "tecla": "J",
             "inicio": 142863,
             "fin": 142997,
             "duracion": 134
         },
         {
             "tecla": "U",
             "inicio": 142878,
             "fin": 143013,
             "duracion": 135
         },
         {
             "tecla": "M",
             "inicio": 142901,
             "fin": 143037,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 143335,
             "fin": 143461,
             "duracion": 126
         },
         {
             "tecla": "M",
             "inicio": 143320,
             "fin": 143484,
             "duracion": 164
         },
         {
             "tecla": "Y",
             "inicio": 143593,
             "fin": 143693,
             "duracion": 100
         },
         {
             "tecla": "T",
             "inicio": 143575,
             "fin": 143717,
             "duracion": 142
         },
         {
             "tecla": "T",
             "inicio": 144014,
             "fin": 144101,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 143991,
             "fin": 144125,
             "duracion": 134
         },
         {
             "tecla": "Y",
             "inicio": 144260,
             "fin": 144431,
             "duracion": 171
         },
         {
             "tecla": "T",
             "inicio": 144237,
             "fin": 144444,
             "duracion": 207
         },
         {
             "tecla": "R",
             "inicio": 144657,
             "fin": 144878,
             "duracion": 221
         },
         {
             "tecla": "T",
             "inicio": 144679,
             "fin": 144893,
             "duracion": 214
         },
         {
             "tecla": "T",
             "inicio": 145561,
             "fin": 145679,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 145585,
             "fin": 145703,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 145790,
             "fin": 145886,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 145807,
             "fin": 145909,
             "duracion": 102
         },
         {
             "tecla": "ESCAPE",
             "inicio": 144181,
             "fin": 145926,
             "duracion": 1745
         },
         {
             "tecla": "T",
             "inicio": 146037,
             "fin": 146124,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 146020,
             "fin": 146141,
             "duracion": 121
         },
         {
             "tecla": "U",
             "inicio": 146229,
             "fin": 146381,
             "duracion": 152
         },
         {
             "tecla": "M",
             "inicio": 146253,
             "fin": 146396,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 146686,
             "fin": 146756,
             "duracion": 70
         },
         {
             "tecla": "T",
             "inicio": 146669,
             "fin": 146780,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 146897,
             "fin": 146996,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 146917,
             "fin": 147012,
             "duracion": 95
         },
         {
             "tecla": "ESCAPE",
             "inicio": 146861,
             "fin": 147060,
             "duracion": 199
         },
         {
             "tecla": "T",
             "inicio": 147148,
             "fin": 147252,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 147173,
             "fin": 147276,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 147573,
             "fin": 147684,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 147597,
             "fin": 147708,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 147516,
             "fin": 147724,
             "duracion": 208
         },
         {
             "tecla": "R",
             "inicio": 147845,
             "fin": 147940,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 147861,
             "fin": 147964,
             "duracion": 103
         },
         {
             "tecla": "C",
             "inicio": 148252,
             "fin": 148399,
             "duracion": 147
         },
         {
             "tecla": "V",
             "inicio": 148269,
             "fin": 148415,
             "duracion": 146
         },
         {
             "tecla": "R",
             "inicio": 149074,
             "fin": 149189,
             "duracion": 115
         },
         {
             "tecla": "T",
             "inicio": 149092,
             "fin": 149205,
             "duracion": 113
         },
         {
             "tecla": "R",
             "inicio": 149312,
             "fin": 149415,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 149330,
             "fin": 149430,
             "duracion": 100
         },
         {
             "tecla": "T",
             "inicio": 149540,
             "fin": 149628,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 149525,
             "fin": 149652,
             "duracion": 127
         },
         {
             "tecla": "ESCAPE",
             "inicio": 149500,
             "fin": 149686,
             "duracion": 186
         },
         {
             "tecla": "T",
             "inicio": 149789,
             "fin": 149892,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 149765,
             "fin": 149908,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 150184,
             "fin": 150284,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 150204,
             "fin": 150300,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 150437,
             "fin": 150535,
             "duracion": 98
         },
         {
             "tecla": "T",
             "inicio": 150460,
             "fin": 150559,
             "duracion": 99
         },
         {
             "tecla": "T",
             "inicio": 150705,
             "fin": 150783,
             "duracion": 78
         },
         {
             "tecla": "Y",
             "inicio": 150681,
             "fin": 150797,
             "duracion": 116
         },
         {
             "tecla": "ESCAPE",
             "inicio": 150143,
             "fin": 150884,
             "duracion": 741
         },
         {
             "tecla": "R",
             "inicio": 151068,
             "fin": 151180,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 151093,
             "fin": 151196,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 151370,
             "fin": 151476,
             "duracion": 106
         },
         {
             "tecla": "R",
             "inicio": 151357,
             "fin": 151500,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 152413,
             "fin": 152500,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 152388,
             "fin": 152517,
             "duracion": 129
         },
         {
             "tecla": "T",
             "inicio": 152630,
             "fin": 152734,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 152654,
             "fin": 152749,
             "duracion": 95
         },
         {
             "tecla": "ESCAPE",
             "inicio": 151327,
             "fin": 152773,
             "duracion": 1446
         },
         {
             "tecla": "T",
             "inicio": 152901,
             "fin": 152972,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 152876,
             "fin": 152996,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 153140,
             "fin": 153260,
             "duracion": 120
         },
         {
             "tecla": "M",
             "inicio": 153164,
             "fin": 153277,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 153564,
             "fin": 153655,
             "duracion": 91
         },
         {
             "tecla": "T",
             "inicio": 153549,
             "fin": 153670,
             "duracion": 121
         },
         {
             "tecla": "T",
             "inicio": 153790,
             "fin": 153884,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 153806,
             "fin": 153900,
             "duracion": 94
         },
         {
             "tecla": "ESCAPE",
             "inicio": 153766,
             "fin": 153956,
             "duracion": 190
         },
         {
             "tecla": "T",
             "inicio": 154045,
             "fin": 154148,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 154060,
             "fin": 154177,
             "duracion": 117
         },
         {
             "tecla": "Y",
             "inicio": 154477,
             "fin": 154580,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 154492,
             "fin": 154604,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 154439,
             "fin": 154621,
             "duracion": 182
         },
         {
             "tecla": "R",
             "inicio": 154716,
             "fin": 154844,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 154741,
             "fin": 154869,
             "duracion": 128
         },
         {
             "tecla": "C",
             "inicio": 155174,
             "fin": 155308,
             "duracion": 134
         },
         {
             "tecla": "V",
             "inicio": 155158,
             "fin": 155332,
             "duracion": 174
         },
         {
             "tecla": "R",
             "inicio": 155969,
             "fin": 156086,
             "duracion": 117
         },
         {
             "tecla": "T",
             "inicio": 155989,
             "fin": 156101,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 156237,
             "fin": 156319,
             "duracion": 82
         },
         {
             "tecla": "R",
             "inicio": 156221,
             "fin": 156335,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 156441,
             "fin": 156548,
             "duracion": 107
         },
         {
             "tecla": "Y",
             "inicio": 156461,
             "fin": 156572,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 156415,
             "fin": 156604,
             "duracion": 189
         },
         {
             "tecla": "T",
             "inicio": 156740,
             "fin": 156828,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 156716,
             "fin": 156844,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 157124,
             "fin": 157244,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 157149,
             "fin": 157260,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 157389,
             "fin": 157476,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 157365,
             "fin": 157492,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 157629,
             "fin": 157743,
             "duracion": 114
         },
         {
             "tecla": "Y",
             "inicio": 157612,
             "fin": 157759,
             "duracion": 147
         },
         {
             "tecla": "ESCAPE",
             "inicio": 157071,
             "fin": 157815,
             "duracion": 744
         },
         {
             "tecla": "R",
             "inicio": 158021,
             "fin": 158124,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 158037,
             "fin": 158140,
             "duracion": 103
         },
         {
             "tecla": "R",
             "inicio": 158265,
             "fin": 158396,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 158285,
             "fin": 158412,
             "duracion": 127
         },
         {
             "tecla": "E",
             "inicio": 159041,
             "fin": 159181,
             "duracion": 140
         },
         {
             "tecla": "R",
             "inicio": 159058,
             "fin": 159205,
             "duracion": 147
         },
         {
             "tecla": "T",
             "inicio": 159305,
             "fin": 159494,
             "duracion": 189
         },
         {
             "tecla": "R",
             "inicio": 159289,
             "fin": 159518,
             "duracion": 229
         },
         {
             "tecla": "Y",
             "inicio": 160483,
             "fin": 160620,
             "duracion": 137
         },
         {
             "tecla": "Y",
             "inicio": 160695,
             "fin": 160766,
             "duracion": 71
         },
         {
             "tecla": "T",
             "inicio": 160743,
             "fin": 160862,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 160950,
             "fin": 161103,
             "duracion": 153
         },
         {
             "tecla": "Y",
             "inicio": 161201,
             "fin": 161463,
             "duracion": 262
         },
         {
             "tecla": "Y",
             "inicio": 161655,
             "fin": 161781,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 161908,
             "fin": 162079,
             "duracion": 171
         },
         {
             "tecla": "T",
             "inicio": 162360,
             "fin": 162495,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 162801,
             "fin": 162909,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 163017,
             "fin": 163150,
             "duracion": 133
         },
         {
             "tecla": "Y",
             "inicio": 163408,
             "fin": 163551,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 163689,
             "fin": 163815,
             "duracion": 126
         },
         {
             "tecla": "T",
             "inicio": 164137,
             "fin": 164245,
             "duracion": 108
         },
         {
             "tecla": "R",
             "inicio": 164534,
             "fin": 164661,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 164767,
             "fin": 164918,
             "duracion": 151
         },
         {
             "tecla": "Y",
             "inicio": 165190,
             "fin": 165334,
             "duracion": 144
         },
         {
             "tecla": "ESCAPE",
             "inicio": 158231,
             "fin": 165374,
             "duracion": 7143
         },
         {
             "tecla": "T",
             "inicio": 165501,
             "fin": 165716,
             "duracion": 215
         },
         {
             "tecla": "R",
             "inicio": 165897,
             "fin": 165989,
             "duracion": 92
         },
         {
             "tecla": "D",
             "inicio": 166292,
             "fin": 166437,
             "duracion": 145
         },
         {
             "tecla": "H",
             "inicio": 166308,
             "fin": 166453,
             "duracion": 145
         },
         {
             "tecla": "F",
             "inicio": 166552,
             "fin": 166621,
             "duracion": 69
         },
         {
             "tecla": "J",
             "inicio": 166527,
             "fin": 166636,
             "duracion": 109
         },
         {
             "tecla": "K",
             "inicio": 166765,
             "fin": 166846,
             "duracion": 81
         },
         {
             "tecla": "G",
             "inicio": 166751,
             "fin": 166862,
             "duracion": 111
         },
         {
             "tecla": "H",
             "inicio": 166973,
             "fin": 167078,
             "duracion": 105
         },
         {
             "tecla": "L",
             "inicio": 166989,
             "fin": 167102,
             "duracion": 113
         },
         {
             "tecla": "ESCAPE",
             "inicio": 166054,
             "fin": 167174,
             "duracion": 1120
         },
         {
             "tecla": "Y",
             "inicio": 167429,
             "fin": 167533,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 167673,
             "fin": 167765,
             "duracion": 92
         },
         {
             "tecla": "Y",
             "inicio": 167892,
             "fin": 167980,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 168109,
             "fin": 168204,
             "duracion": 95
         },
         {
             "tecla": "ESCAPE",
             "inicio": 168070,
             "fin": 168333,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 168365,
             "fin": 168460,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 168757,
             "fin": 168797,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 168798,
             "fin": 168868,
             "duracion": 70
         },
         {
             "tecla": "ESCAPE",
             "inicio": 168797,
             "fin": 168972,
             "duracion": 175
         },
         {
             "tecla": "Y",
             "inicio": 169037,
             "fin": 169164,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 169489,
             "fin": 169613,
             "duracion": 124
         },
         {
             "tecla": "Y",
             "inicio": 169829,
             "fin": 169948,
             "duracion": 119
         },
         {
             "tecla": "ESCAPE",
             "inicio": 169798,
             "fin": 169988,
             "duracion": 190
         },
         {
             "tecla": "Y",
             "inicio": 170125,
             "fin": 170252,
             "duracion": 127
         },
         {
             "tecla": "U",
             "inicio": 170513,
             "fin": 170628,
             "duracion": 115
         },
         {
             "tecla": "U",
             "inicio": 170757,
             "fin": 170900,
             "duracion": 143
         },
         {
             "tecla": "ESCAPE",
             "inicio": 170644,
             "fin": 171012,
             "duracion": 368
         },
         {
             "tecla": "U",
             "inicio": 171173,
             "fin": 171308,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 171592,
             "fin": 171677,
             "duracion": 85
         },
         {
             "tecla": "U",
             "inicio": 171821,
             "fin": 171988,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 172200,
             "fin": 172318,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 172462,
             "fin": 172652,
             "duracion": 190
         },
         {
             "tecla": "T",
             "inicio": 172853,
             "fin": 172973,
             "duracion": 120
         },
         {
             "tecla": "I",
             "inicio": 173326,
             "fin": 173423,
             "duracion": 97
         },
         {
             "tecla": "U",
             "inicio": 173305,
             "fin": 173455,
             "duracion": 150
         },
         {
             "tecla": "R",
             "inicio": 173538,
             "fin": 173662,
             "duracion": 124
         },
         {
             "tecla": "T",
             "inicio": 173770,
             "fin": 173892,
             "duracion": 122
         },
         {
             "tecla": "R",
             "inicio": 174021,
             "fin": 174191,
             "duracion": 170
         },
         {
             "tecla": "U",
             "inicio": 173997,
             "fin": 174207,
             "duracion": 210
         },
         {
             "tecla": "I",
             "inicio": 174038,
             "fin": 174230,
             "duracion": 192
         },
         {
             "tecla": "Y",
             "inicio": 174498,
             "fin": 174591,
             "duracion": 93
         },
         {
             "tecla": "Y",
             "inicio": 174719,
             "fin": 174830,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 174944,
             "fin": 175052,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 175165,
             "fin": 175271,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 175577,
             "fin": 175685,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 175808,
             "fin": 175903,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 176045,
             "fin": 176159,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 176464,
             "fin": 176590,
             "duracion": 126
         },
         {
             "tecla": "R",
             "inicio": 176864,
             "fin": 176967,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 177113,
             "fin": 177228,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 177545,
             "fin": 177638,
             "duracion": 93
         },
         {
             "tecla": "Y",
             "inicio": 177789,
             "fin": 177902,
             "duracion": 113
         },
         {
             "tecla": "T",
             "inicio": 178214,
             "fin": 178335,
             "duracion": 121
         },
         {
             "tecla": "R",
             "inicio": 178632,
             "fin": 178725,
             "duracion": 93
         },
         {
             "tecla": "T",
             "inicio": 178882,
             "fin": 178998,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 179257,
             "fin": 179380,
             "duracion": 123
         },
         {
             "tecla": "ESCAPE",
             "inicio": 172391,
             "fin": 179436,
             "duracion": 7045
         },
         {
             "tecla": "T",
             "inicio": 179508,
             "fin": 179708,
             "duracion": 200
         },
         {
             "tecla": "R",
             "inicio": 179912,
             "fin": 180029,
             "duracion": 117
         },
         {
             "tecla": "D",
             "inicio": 180350,
             "fin": 180468,
             "duracion": 118
         },
         {
             "tecla": "H",
             "inicio": 180373,
             "fin": 180484,
             "duracion": 111
         },
         {
             "tecla": "F",
             "inicio": 180610,
             "fin": 180685,
             "duracion": 75
         },
         {
             "tecla": "J",
             "inicio": 180585,
             "fin": 180702,
             "duracion": 117
         },
         {
             "tecla": "G",
             "inicio": 180809,
             "fin": 180887,
             "duracion": 78
         },
         {
             "tecla": "K",
             "inicio": 180824,
             "fin": 180911,
             "duracion": 87
         },
         {
             "tecla": "H",
             "inicio": 181014,
             "fin": 181125,
             "duracion": 111
         },
         {
             "tecla": "L",
             "inicio": 181039,
             "fin": 181141,
             "duracion": 102
         },
         {
             "tecla": "ESCAPE",
             "inicio": 180126,
             "fin": 181197,
             "duracion": 1071
         },
         {
             "tecla": "Y",
             "inicio": 181437,
             "fin": 181548,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 181685,
             "fin": 181783,
             "duracion": 98
         },
         {
             "tecla": "Y",
             "inicio": 181902,
             "fin": 181999,
             "duracion": 97
         },
         {
             "tecla": "Y",
             "inicio": 182129,
             "fin": 182228,
             "duracion": 99
         },
         {
             "tecla": "ESCAPE",
             "inicio": 182101,
             "fin": 182317,
             "duracion": 216
         },
         {
             "tecla": "Y",
             "inicio": 182381,
             "fin": 182470,
             "duracion": 89
         },
         {
             "tecla": "Y",
             "inicio": 182790,
             "fin": 182813,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 182813,
             "fin": 182893,
             "duracion": 80
         },
         {
             "tecla": "ESCAPE",
             "inicio": 182813,
             "fin": 182956,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 183061,
             "fin": 183188,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 183520,
             "fin": 183630,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 183861,
             "fin": 183884,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 183885,
             "fin": 183972,
             "duracion": 87
         },
         {
             "tecla": "ESCAPE",
             "inicio": 183884,
             "fin": 184036,
             "duracion": 152
         },
         {
             "tecla": "Y",
             "inicio": 184157,
             "fin": 184284,
             "duracion": 127
         },
         {
             "tecla": "U",
             "inicio": 184529,
             "fin": 184653,
             "duracion": 124
         },
         {
             "tecla": "U",
             "inicio": 184789,
             "fin": 184924,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 184734,
             "fin": 185044,
             "duracion": 310
         },
         {
             "tecla": "U",
             "inicio": 185245,
             "fin": 185364,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 185649,
             "fin": 185767,
             "duracion": 118
         },
         {
             "tecla": "U",
             "inicio": 185913,
             "fin": 186052,
             "duracion": 139
         },
         {
             "tecla": "Y",
             "inicio": 186289,
             "fin": 186430,
             "duracion": 141
         },
         {
             "tecla": "Y",
             "inicio": 186553,
             "fin": 186740,
             "duracion": 187
         },
         {
             "tecla": "T",
             "inicio": 186969,
             "fin": 187093,
             "duracion": 124
         },
         {
             "tecla": "I",
             "inicio": 187393,
             "fin": 187543,
             "duracion": 150
         },
         {
             "tecla": "U",
             "inicio": 187418,
             "fin": 187558,
             "duracion": 140
         },
         {
             "tecla": "T",
             "inicio": 187622,
             "fin": 187775,
             "duracion": 153
         },
         {
             "tecla": "Y",
             "inicio": 187850,
             "fin": 187974,
             "duracion": 124
         },
         {
             "tecla": "R",
             "inicio": 188095,
             "fin": 188284,
             "duracion": 189
         },
         {
             "tecla": "U",
             "inicio": 188071,
             "fin": 188301,
             "duracion": 230
         },
         {
             "tecla": "I",
             "inicio": 188055,
             "fin": 188327,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 188721,
             "fin": 188901,
             "duracion": 180
         },
         {
             "tecla": "Y",
             "inicio": 188734,
             "fin": 188933,
             "duracion": 199
         },
         {
             "tecla": "ESCAPE",
             "inicio": 186511,
             "fin": 188983,
             "duracion": 2472
         },
         {
             "tecla": "T",
             "inicio": 189149,
             "fin": 189236,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 189133,
             "fin": 189260,
             "duracion": 127
         },
         {
             "tecla": "M",
             "inicio": 189407,
             "fin": 189559,
             "duracion": 152
         },
         {
             "tecla": "U",
             "inicio": 189391,
             "fin": 189581,
             "duracion": 190
         },
         {
             "tecla": "U",
             "inicio": 189797,
             "fin": 189924,
             "duracion": 127
         },
         {
             "tecla": "M",
             "inicio": 189775,
             "fin": 189940,
             "duracion": 165
         },
         {
             "tecla": "ESCAPE",
             "inicio": 189750,
             "fin": 189964,
             "duracion": 214
         },
         {
             "tecla": "M",
             "inicio": 190069,
             "fin": 190148,
             "duracion": 79
         },
         {
             "tecla": "U",
             "inicio": 190053,
             "fin": 190164,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 190324,
             "fin": 190492,
             "duracion": 168
         },
         {
             "tecla": "Y",
             "inicio": 190309,
             "fin": 190508,
             "duracion": 199
         },
         {
             "tecla": "M",
             "inicio": 190965,
             "fin": 191108,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 190952,
             "fin": 191132,
             "duracion": 180
         },
         {
             "tecla": "ESCAPE",
             "inicio": 190917,
             "fin": 191285,
             "duracion": 368
         },
         {
             "tecla": "M",
             "inicio": 191372,
             "fin": 191468,
             "duracion": 96
         },
         {
             "tecla": "U",
             "inicio": 191349,
             "fin": 191484,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 191604,
             "fin": 191765,
             "duracion": 161
         },
         {
             "tecla": "T",
             "inicio": 191622,
             "fin": 191789,
             "duracion": 167
         },
         {
             "tecla": "U",
             "inicio": 192286,
             "fin": 192476,
             "duracion": 190
         },
         {
             "tecla": "M",
             "inicio": 192300,
             "fin": 192492,
             "duracion": 192
         },
         {
             "tecla": "ESCAPE",
             "inicio": 192263,
             "fin": 192516,
             "duracion": 253
         },
         {
             "tecla": "M",
             "inicio": 192695,
             "fin": 192804,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 192670,
             "fin": 192829,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 192925,
             "fin": 193061,
             "duracion": 136
         },
         {
             "tecla": "Y",
             "inicio": 192949,
             "fin": 193085,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 193334,
             "fin": 193484,
             "duracion": 150
         },
         {
             "tecla": "M",
             "inicio": 193359,
             "fin": 193501,
             "duracion": 142
         },
         {
             "tecla": "T",
             "inicio": 193592,
             "fin": 193677,
             "duracion": 85
         },
         {
             "tecla": "Y",
             "inicio": 193568,
             "fin": 193702,
             "duracion": 134
         },
         {
             "tecla": "T",
             "inicio": 193821,
             "fin": 193964,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 193847,
             "fin": 193988,
             "duracion": 141
         },
         {
             "tecla": "ESCAPE",
             "inicio": 193781,
             "fin": 194125,
             "duracion": 344
         },
         {
             "tecla": "M",
             "inicio": 194508,
             "fin": 194636,
             "duracion": 128
         },
         {
             "tecla": "U",
             "inicio": 194485,
             "fin": 194660,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 194977,
             "fin": 195181,
             "duracion": 204
         },
         {
             "tecla": "Y",
             "inicio": 195002,
             "fin": 195181,
             "duracion": 179
         },
         {
             "tecla": "Y",
             "inicio": 195181,
             "fin": 195324,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 195181,
             "fin": 195348,
             "duracion": 167
         },
         {
             "tecla": "ESCAPE",
             "inicio": 195180,
             "fin": 195404,
             "duracion": 224
         },
         {
             "tecla": "M",
             "inicio": 195918,
             "fin": 196054,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 195894,
             "fin": 196078,
             "duracion": 184
         },
         {
             "tecla": "Y",
             "inicio": 196305,
             "fin": 196413,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 196288,
             "fin": 196429,
             "duracion": 141
         },
         {
             "tecla": "T",
             "inicio": 196517,
             "fin": 196684,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 196540,
             "fin": 196700,
             "duracion": 160
         },
         {
             "tecla": "ESCAPE",
             "inicio": 196469,
             "fin": 196783,
             "duracion": 314
         },
         {
             "tecla": "Y",
             "inicio": 196950,
             "fin": 197060,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 196972,
             "fin": 197076,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 197174,
             "fin": 197189,
             "duracion": 15
         },
         {
             "tecla": "Y",
             "inicio": 197214,
             "fin": 197332,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 197190,
             "fin": 197351,
             "duracion": 161
         },
         {
             "tecla": "ESCAPE",
             "inicio": 197189,
             "fin": 197372,
             "duracion": 183
         },
         {
             "tecla": "R",
             "inicio": 197453,
             "fin": 197588,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 197469,
             "fin": 197612,
             "duracion": 143
         },
         {
             "tecla": "V",
             "inicio": 198127,
             "fin": 198510,
             "duracion": 383
         },
         {
             "tecla": "C",
             "inicio": 198102,
             "fin": 198526,
             "duracion": 424
         },
         {
             "tecla": "T",
             "inicio": 199377,
             "fin": 199567,
             "duracion": 190
         },
         {
             "tecla": "R",
             "inicio": 199399,
             "fin": 199584,
             "duracion": 185
         },
         {
             "tecla": "Y",
             "inicio": 199742,
             "fin": 199782,
             "duracion": 40
         },
         {
             "tecla": "T",
             "inicio": 199758,
             "fin": 199782,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 199784,
             "fin": 199884,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 199783,
             "fin": 199908,
             "duracion": 125
         },
         {
             "tecla": "ESCAPE",
             "inicio": 199782,
             "fin": 199924,
             "duracion": 142
         },
         {
             "tecla": "Y",
             "inicio": 200005,
             "fin": 200188,
             "duracion": 183
         },
         {
             "tecla": "T",
             "inicio": 200028,
             "fin": 200204,
             "duracion": 176
         },
         {
             "tecla": "Y",
             "inicio": 200406,
             "fin": 200445,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 200429,
             "fin": 200445,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 200446,
             "fin": 200532,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 200446,
             "fin": 200556,
             "duracion": 110
         },
         {
             "tecla": "ESCAPE",
             "inicio": 200445,
             "fin": 200580,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 200677,
             "fin": 200772,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 200661,
             "fin": 200797,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 200901,
             "fin": 201100,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 200885,
             "fin": 201116,
             "duracion": 231
         },
         {
             "tecla": "U",
             "inicio": 201509,
             "fin": 201652,
             "duracion": 143
         },
         {
             "tecla": "I",
             "inicio": 201525,
             "fin": 201676,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 201717,
             "fin": 201830,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 201901,
             "fin": 202029,
             "duracion": 128
         },
         {
             "tecla": "U",
             "inicio": 202119,
             "fin": 202367,
             "duracion": 248
         },
         {
             "tecla": "I",
             "inicio": 202141,
             "fin": 202386,
             "duracion": 245
         },
         {
             "tecla": "R",
             "inicio": 202157,
             "fin": 202407,
             "duracion": 250
         },
         {
             "tecla": "Y",
             "inicio": 202753,
             "fin": 202941,
             "duracion": 188
         },
         {
             "tecla": "T",
             "inicio": 202771,
             "fin": 202965,
             "duracion": 194
         },
         {
             "tecla": "ESCAPE",
             "inicio": 200860,
             "fin": 203055,
             "duracion": 2195
         },
         {
             "tecla": "T",
             "inicio": 203189,
             "fin": 203276,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 203172,
             "fin": 203300,
             "duracion": 128
         },
         {
             "tecla": "M",
             "inicio": 203438,
             "fin": 203580,
             "duracion": 142
         },
         {
             "tecla": "U",
             "inicio": 203413,
             "fin": 203604,
             "duracion": 191
         },
         {
             "tecla": "M",
             "inicio": 203815,
             "fin": 203948,
             "duracion": 133
         },
         {
             "tecla": "U",
             "inicio": 203829,
             "fin": 203972,
             "duracion": 143
         },
         {
             "tecla": "ESCAPE",
             "inicio": 203790,
             "fin": 203988,
             "duracion": 198
         },
         {
             "tecla": "U",
             "inicio": 204045,
             "fin": 204156,
             "duracion": 111
         },
         {
             "tecla": "M",
             "inicio": 204061,
             "fin": 204172,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 204269,
             "fin": 204397,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 204293,
             "fin": 204413,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 204883,
             "fin": 204920,
             "duracion": 37
         },
         {
             "tecla": "M",
             "inicio": 204907,
             "fin": 204921,
             "duracion": 14
         },
         {
             "tecla": "U",
             "inicio": 204921,
             "fin": 205052,
             "duracion": 131
         },
         {
             "tecla": "M",
             "inicio": 204922,
             "fin": 205070,
             "duracion": 148
         },
         {
             "tecla": "ESCAPE",
             "inicio": 204920,
             "fin": 205094,
             "duracion": 174
         },
         {
             "tecla": "Y",
             "inicio": 205349,
             "fin": 205460,
             "duracion": 111
         },
         {
             "tecla": "U",
             "inicio": 205485,
             "fin": 205662,
             "duracion": 177
         },
         {
             "tecla": "M",
             "inicio": 205519,
             "fin": 205686,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 205764,
             "fin": 205844,
             "duracion": 80
         },
         {
             "tecla": "T",
             "inicio": 205741,
             "fin": 205861,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 206410,
             "fin": 206445,
             "duracion": 35
         },
         {
             "tecla": "M",
             "inicio": 206429,
             "fin": 206445,
             "duracion": 16
         },
         {
             "tecla": "ESCAPE",
             "inicio": 206445,
             "fin": 206580,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 206445,
             "fin": 206580,
             "duracion": 135
         },
         {
             "tecla": "M",
             "inicio": 206445,
             "fin": 206580,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 206581,
             "fin": 206602,
             "duracion": 21
         },
         {
             "tecla": "M",
             "inicio": 206581,
             "fin": 206620,
             "duracion": 39
         },
         {
             "tecla": "U",
             "inicio": 206812,
             "fin": 206967,
             "duracion": 155
         },
         {
             "tecla": "M",
             "inicio": 206837,
             "fin": 206990,
             "duracion": 153
         },
         {
             "tecla": "T",
             "inicio": 207077,
             "fin": 207206,
             "duracion": 129
         },
         {
             "tecla": "Y",
             "inicio": 207056,
             "fin": 207222,
             "duracion": 166
         },
         {
             "tecla": "U",
             "inicio": 207453,
             "fin": 207589,
             "duracion": 136
         },
         {
             "tecla": "M",
             "inicio": 207469,
             "fin": 207604,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 207670,
             "fin": 207775,
             "duracion": 105
         },
         {
             "tecla": "Y",
             "inicio": 207686,
             "fin": 207790,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 207924,
             "fin": 208036,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 207902,
             "fin": 208052,
             "duracion": 150
         },
         {
             "tecla": "ESCAPE",
             "inicio": 207878,
             "fin": 208390,
             "duracion": 512
         },
         {
             "tecla": "U",
             "inicio": 208524,
             "fin": 208685,
             "duracion": 161
         },
         {
             "tecla": "M",
             "inicio": 208541,
             "fin": 208700,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 208929,
             "fin": 209045,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 208949,
             "fin": 209061,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 209173,
             "fin": 209300,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 209153,
             "fin": 209316,
             "duracion": 163
         },
         {
             "tecla": "ESCAPE",
             "inicio": 209127,
             "fin": 209773,
             "duracion": 646
         },
         {
             "tecla": "U",
             "inicio": 209845,
             "fin": 210036,
             "duracion": 191
         },
         {
             "tecla": "M",
             "inicio": 209861,
             "fin": 210060,
             "duracion": 199
         },
         {
             "tecla": "T",
             "inicio": 210221,
             "fin": 210357,
             "duracion": 136
         },
         {
             "tecla": "Y",
             "inicio": 210244,
             "fin": 210373,
             "duracion": 129
         },
         {
             "tecla": "T",
             "inicio": 210445,
             "fin": 210589,
             "duracion": 144
         },
         {
             "tecla": "Y",
             "inicio": 210471,
             "fin": 210612,
             "duracion": 141
         },
         {
             "tecla": "ESCAPE",
             "inicio": 210429,
             "fin": 210828,
             "duracion": 399
         },
         {
             "tecla": "T",
             "inicio": 210901,
             "fin": 210988,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 210877,
             "fin": 211004,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 211077,
             "fin": 211116,
             "duracion": 39
         },
         {
             "tecla": "Y",
             "inicio": 211101,
             "fin": 211116,
             "duracion": 15
         },
         {
             "tecla": "T",
             "inicio": 211117,
             "fin": 211189,
             "duracion": 72
         },
         {
             "tecla": "Y",
             "inicio": 211117,
             "fin": 211213,
             "duracion": 96
         },
         {
             "tecla": "ESCAPE",
             "inicio": 211116,
             "fin": 211292,
             "duracion": 176
         },
         {
             "tecla": "R",
             "inicio": 211341,
             "fin": 211476,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 211364,
             "fin": 211500,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 211959,
             "fin": 212119,
             "duracion": 160
         },
         {
             "tecla": "Y",
             "inicio": 211973,
             "fin": 212143,
             "duracion": 170
         },
         {
             "tecla": "T",
             "inicio": 212380,
             "fin": 212508,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 212366,
             "fin": 212524,
             "duracion": 158
         },
         {
             "tecla": "ESCAPE",
             "inicio": 212340,
             "fin": 212564,
             "duracion": 224
         },
         {
             "tecla": "R",
             "inicio": 212605,
             "fin": 212780,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 212623,
             "fin": 212804,
             "duracion": 181
         },
         {
             "tecla": "T",
             "inicio": 213310,
             "fin": 213447,
             "duracion": 137
         },
         {
             "tecla": "Y",
             "inicio": 213325,
             "fin": 213469,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 213701,
             "fin": 213804,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 213684,
             "fin": 213823,
             "duracion": 139
         },
         {
             "tecla": "ESCAPE",
             "inicio": 213636,
             "fin": 213855,
             "duracion": 219
         },
         {
             "tecla": "R",
             "inicio": 213924,
             "fin": 214044,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 213949,
             "fin": 214060,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 214317,
             "fin": 214396,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 214301,
             "fin": 214436,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 214276,
             "fin": 214452,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 214517,
             "fin": 214620,
             "duracion": 103
         },
         {
             "tecla": "R",
             "inicio": 214532,
             "fin": 214636,
             "duracion": 104
         },
         {
             "tecla": "R",
             "inicio": 214757,
             "fin": 214852,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 214747,
             "fin": 214876,
             "duracion": 129
         },
         {
             "tecla": "E",
             "inicio": 215555,
             "fin": 215638,
             "duracion": 83
         },
         {
             "tecla": "R",
             "inicio": 215760,
             "fin": 215855,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 215965,
             "fin": 216061,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 216177,
             "fin": 216271,
             "duracion": 94
         },
         {
             "tecla": "T",
             "inicio": 216377,
             "fin": 216487,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 216565,
             "fin": 216663,
             "duracion": 98
         },
         {
             "tecla": "M",
             "inicio": 216812,
             "fin": 216917,
             "duracion": 105
         },
         {
             "tecla": "U",
             "inicio": 216796,
             "fin": 216933,
             "duracion": 137
         },
         {
             "tecla": "U",
             "inicio": 217192,
             "fin": 217414,
             "duracion": 222
         },
         {
             "tecla": "M",
             "inicio": 217216,
             "fin": 217430,
             "duracion": 214
         },
         {
             "tecla": "ESCAPE",
             "inicio": 214716,
             "fin": 217510,
             "duracion": 2794
         },
         {
             "tecla": "U",
             "inicio": 217620,
             "fin": 217684,
             "duracion": 64
         },
         {
             "tecla": "M",
             "inicio": 217596,
             "fin": 217708,
             "duracion": 112
         },
         {
             "tecla": "M",
             "inicio": 217893,
             "fin": 217957,
             "duracion": 64
         },
         {
             "tecla": "U",
             "inicio": 217869,
             "fin": 217981,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 218265,
             "fin": 218380,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 218287,
             "fin": 218405,
             "duracion": 118
         },
         {
             "tecla": "E",
             "inicio": 218838,
             "fin": 218940,
             "duracion": 102
         },
         {
             "tecla": "ESCAPE",
             "inicio": 218756,
             "fin": 218988,
             "duracion": 232
         },
         {
             "tecla": "R",
             "inicio": 219052,
             "fin": 219156,
             "duracion": 104
         },
         {
             "tecla": "R",
             "inicio": 219285,
             "fin": 219381,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 219519,
             "fin": 219629,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 219726,
             "fin": 219831,
             "duracion": 105
         },
         {
             "tecla": "E",
             "inicio": 219942,
             "fin": 220053,
             "duracion": 111
         },
         {
             "tecla": "U",
             "inicio": 220168,
             "fin": 220333,
             "duracion": 165
         },
         {
             "tecla": "M",
             "inicio": 220192,
             "fin": 220357,
             "duracion": 165
         },
         {
             "tecla": "U",
             "inicio": 220610,
             "fin": 220757,
             "duracion": 147
         },
         {
             "tecla": "M",
             "inicio": 220585,
             "fin": 220774,
             "duracion": 189
         },
         {
             "tecla": "T",
             "inicio": 220993,
             "fin": 221092,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 221017,
             "fin": 221108,
             "duracion": 91
         },
         {
             "tecla": "T",
             "inicio": 221237,
             "fin": 221324,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 221264,
             "fin": 221348,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 221621,
             "fin": 221740,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 221644,
             "fin": 221757,
             "duracion": 113
         },
         {
             "tecla": "E",
             "inicio": 222361,
             "fin": 222471,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 222578,
             "fin": 222685,
             "duracion": 107
         },
         {
             "tecla": "T",
             "inicio": 222791,
             "fin": 222902,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 222991,
             "fin": 223101,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 223223,
             "fin": 223308,
             "duracion": 85
         },
         {
             "tecla": "R",
             "inicio": 223429,
             "fin": 223501,
             "duracion": 72
         },
         {
             "tecla": "ESCAPE",
             "inicio": 221583,
             "fin": 223582,
             "duracion": 1999
         },
         {
             "tecla": "T",
             "inicio": 223684,
             "fin": 223780,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 223661,
             "fin": 223804,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 224101,
             "fin": 224231,
             "duracion": 130
         },
         {
             "tecla": "Y",
             "inicio": 224085,
             "fin": 224246,
             "duracion": 161
         },
         {
             "tecla": "T",
             "inicio": 224494,
             "fin": 224582,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 224469,
             "fin": 224604,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 224733,
             "fin": 224863,
             "duracion": 130
         },
         {
             "tecla": "Y",
             "inicio": 224709,
             "fin": 224879,
             "duracion": 170
         },
         {
             "tecla": "ESCAPE",
             "inicio": 224391,
             "fin": 224959,
             "duracion": 568
         },
         {
             "tecla": "R",
             "inicio": 225148,
             "fin": 225260,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 225124,
             "fin": 225284,
             "duracion": 160
         },
         {
             "tecla": "U",
             "inicio": 225725,
             "fin": 225847,
             "duracion": 122
         },
         {
             "tecla": "M",
             "inicio": 225701,
             "fin": 225870,
             "duracion": 169
         },
         {
             "tecla": "M",
             "inicio": 225990,
             "fin": 226079,
             "duracion": 89
         },
         {
             "tecla": "U",
             "inicio": 225969,
             "fin": 226093,
             "duracion": 124
         },
         {
             "tecla": "U",
             "inicio": 226201,
             "fin": 226302,
             "duracion": 101
         },
         {
             "tecla": "M",
             "inicio": 226216,
             "fin": 226318,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 226440,
             "fin": 226509,
             "duracion": 69
         },
         {
             "tecla": "T",
             "inicio": 226461,
             "fin": 226525,
             "duracion": 64
         },
         {
             "tecla": "T",
             "inicio": 226653,
             "fin": 226765,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 226668,
             "fin": 226788,
             "duracion": 120
         },
         {
             "tecla": "ESCAPE",
             "inicio": 226622,
             "fin": 227062,
             "duracion": 440
         },
         {
             "tecla": "T",
             "inicio": 227102,
             "fin": 227196,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 227093,
             "fin": 227220,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 227495,
             "fin": 227605,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 227473,
             "fin": 227629,
             "duracion": 156
         },
         {
             "tecla": "T",
             "inicio": 227909,
             "fin": 227980,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 227892,
             "fin": 228020,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 228133,
             "fin": 228364,
             "duracion": 231
         },
         {
             "tecla": "R",
             "inicio": 228156,
             "fin": 228388,
             "duracion": 232
         },
         {
             "tecla": "E",
             "inicio": 229434,
             "fin": 229502,
             "duracion": 68
         },
         {
             "tecla": "E",
             "inicio": 229713,
             "fin": 229789,
             "duracion": 76
         },
         {
             "tecla": "T",
             "inicio": 229769,
             "fin": 229829,
             "duracion": 60
         },
         {
             "tecla": "Y",
             "inicio": 229753,
             "fin": 229852,
             "duracion": 99
         },
         {
             "tecla": "E",
             "inicio": 229909,
             "fin": 230004,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 229957,
             "fin": 230028,
             "duracion": 71
         },
         {
             "tecla": "T",
             "inicio": 229933,
             "fin": 230053,
             "duracion": 120
         },
         {
             "tecla": "E",
             "inicio": 230133,
             "fin": 230221,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 230149,
             "fin": 230244,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 230174,
             "fin": 230260,
             "duracion": 86
         },
         {
             "tecla": "R",
             "inicio": 230361,
             "fin": 230470,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 230381,
             "fin": 230503,
             "duracion": 122
         },
         {
             "tecla": "R",
             "inicio": 230583,
             "fin": 230669,
             "duracion": 86
         },
         {
             "tecla": "U",
             "inicio": 230791,
             "fin": 230927,
             "duracion": 136
         },
         {
             "tecla": "M",
             "inicio": 230808,
             "fin": 230951,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 231051,
             "fin": 231116,
             "duracion": 65
         },
         {
             "tecla": "M",
             "inicio": 231033,
             "fin": 231141,
             "duracion": 108
         },
         {
             "tecla": "U",
             "inicio": 231256,
             "fin": 231342,
             "duracion": 86
         },
         {
             "tecla": "M",
             "inicio": 231240,
             "fin": 231358,
             "duracion": 118
         },
         {
             "tecla": "ESCAPE",
             "inicio": 227764,
             "fin": 231380,
             "duracion": 3616
         },
         {
             "tecla": "T",
             "inicio": 231476,
             "fin": 231580,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 231696,
             "fin": 231805,
             "duracion": 109
         },
         {
             "tecla": "M",
             "inicio": 231720,
             "fin": 231829,
             "duracion": 109
         },
         {
             "tecla": "M",
             "inicio": 231954,
             "fin": 232021,
             "duracion": 67
         },
         {
             "tecla": "U",
             "inicio": 231937,
             "fin": 232037,
             "duracion": 100
         },
         {
             "tecla": "U",
             "inicio": 232148,
             "fin": 232357,
             "duracion": 209
         },
         {
             "tecla": "M",
             "inicio": 232164,
             "fin": 232381,
             "duracion": 217
         },
         {
             "tecla": "E",
             "inicio": 232608,
             "fin": 232693,
             "duracion": 85
         },
         {
             "tecla": "R",
             "inicio": 232630,
             "fin": 232726,
             "duracion": 96
         },
         {
             "tecla": "E",
             "inicio": 232822,
             "fin": 232901,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 233093,
             "fin": 233180,
             "duracion": 87
         },
         {
             "tecla": "E",
             "inicio": 233118,
             "fin": 233196,
             "duracion": 78
         },
         {
             "tecla": "T",
             "inicio": 233133,
             "fin": 233220,
             "duracion": 87
         },
         {
             "tecla": "E",
             "inicio": 233357,
             "fin": 233380,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 233316,
             "fin": 233405,
             "duracion": 89
         },
         {
             "tecla": "T",
             "inicio": 233333,
             "fin": 233421,
             "duracion": 88
         },
         {
             "tecla": "E",
             "inicio": 233537,
             "fin": 233621,
             "duracion": 84
         },
         {
             "tecla": "Y",
             "inicio": 233561,
             "fin": 233645,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 233581,
             "fin": 233661,
             "duracion": 80
         },
         {
             "tecla": "E",
             "inicio": 233791,
             "fin": 233829,
             "duracion": 38
         },
         {
             "tecla": "Y",
             "inicio": 233753,
             "fin": 233845,
             "duracion": 92
         },
         {
             "tecla": "T",
             "inicio": 233777,
             "fin": 233869,
             "duracion": 92
         },
         {
             "tecla": "ESCAPE",
             "inicio": 233076,
             "fin": 233941,
             "duracion": 865
         },
         {
             "tecla": "E",
             "inicio": 233998,
             "fin": 234100,
             "duracion": 102
         },
         {
             "tecla": "R",
             "inicio": 234021,
             "fin": 234156,
             "duracion": 135
         },
         {
             "tecla": "E",
             "inicio": 234221,
             "fin": 234340,
             "duracion": 119
         },
         {
             "tecla": "M",
             "inicio": 234461,
             "fin": 234557,
             "duracion": 96
         },
         {
             "tecla": "U",
             "inicio": 234445,
             "fin": 234581,
             "duracion": 136
         },
         {
             "tecla": "U",
             "inicio": 234687,
             "fin": 234756,
             "duracion": 69
         },
         {
             "tecla": "M",
             "inicio": 234663,
             "fin": 234772,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 234902,
             "fin": 234981,
             "duracion": 79
         },
         {
             "tecla": "M",
             "inicio": 234917,
             "fin": 235000,
             "duracion": 83
         },
         {
             "tecla": "R",
             "inicio": 235150,
             "fin": 235237,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 235404,
             "fin": 235476,
             "duracion": 72
         },
         {
             "tecla": "Y",
             "inicio": 235381,
             "fin": 235501,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 235647,
             "fin": 235718,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 235634,
             "fin": 235734,
             "duracion": 100
         },
         {
             "tecla": "T",
             "inicio": 235850,
             "fin": 236053,
             "duracion": 203
         },
         {
             "tecla": "Y",
             "inicio": 235874,
             "fin": 236077,
             "duracion": 203
         },
         {
             "tecla": "T",
             "inicio": 236308,
             "fin": 236412,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 236284,
             "fin": 236435,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 236743,
             "fin": 236839,
             "duracion": 96
         },
         {
             "tecla": "R",
             "inicio": 236721,
             "fin": 236853,
             "duracion": 132
         },
         {
             "tecla": "R",
             "inicio": 236942,
             "fin": 237053,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 236967,
             "fin": 237077,
             "duracion": 110
         },
         {
             "tecla": "ESCAPE",
             "inicio": 236157,
             "fin": 237101,
             "duracion": 944
         },
         {
             "tecla": "R",
             "inicio": 237172,
             "fin": 237284,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 237189,
             "fin": 237308,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 237420,
             "fin": 237532,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 237404,
             "fin": 237556,
             "duracion": 152
         },
         {
             "tecla": "ESCAPE",
             "inicio": 237372,
             "fin": 237572,
             "duracion": 200
         },
         {
             "tecla": "T",
             "inicio": 237676,
             "fin": 237772,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 237660,
             "fin": 237789,
             "duracion": 129
         },
         {
             "tecla": "T",
             "inicio": 237917,
             "fin": 237991,
             "duracion": 74
         },
         {
             "tecla": "Y",
             "inicio": 237893,
             "fin": 238015,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 238125,
             "fin": 238213,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 238149,
             "fin": 238229,
             "duracion": 80
         },
         {
             "tecla": "T",
             "inicio": 238354,
             "fin": 238437,
             "duracion": 83
         },
         {
             "tecla": "Y",
             "inicio": 238337,
             "fin": 238453,
             "duracion": 116
         },
         {
             "tecla": "U",
             "inicio": 238560,
             "fin": 238668,
             "duracion": 108
         },
         {
             "tecla": "M",
             "inicio": 238582,
             "fin": 238684,
             "duracion": 102
         },
         {
             "tecla": "U",
             "inicio": 238797,
             "fin": 238879,
             "duracion": 82
         },
         {
             "tecla": "M",
             "inicio": 238781,
             "fin": 238895,
             "duracion": 114
         },
         {
             "tecla": "U",
             "inicio": 239030,
             "fin": 239086,
             "duracion": 56
         },
         {
             "tecla": "M",
             "inicio": 239014,
             "fin": 239110,
             "duracion": 96
         },
         {
             "tecla": "U",
             "inicio": 239230,
             "fin": 239324,
             "duracion": 94
         },
         {
             "tecla": "M",
             "inicio": 239207,
             "fin": 239340,
             "duracion": 133
         },
         {
             "tecla": "U",
             "inicio": 239500,
             "fin": 239564,
             "duracion": 64
         },
         {
             "tecla": "M",
             "inicio": 239476,
             "fin": 239580,
             "duracion": 104
         },
         {
             "tecla": "R",
             "inicio": 239770,
             "fin": 239845,
             "duracion": 75
         },
         {
             "tecla": "R",
             "inicio": 239990,
             "fin": 240078,
             "duracion": 88
         },
         {
             "tecla": "T",
             "inicio": 240007,
             "fin": 240094,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 240222,
             "fin": 240327,
             "duracion": 105
         },
         {
             "tecla": "Y",
             "inicio": 240237,
             "fin": 240351,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 240477,
             "fin": 240533,
             "duracion": 56
         },
         {
             "tecla": "Y",
             "inicio": 240462,
             "fin": 240558,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 240720,
             "fin": 240791,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 240697,
             "fin": 240812,
             "duracion": 115
         },
         {
             "tecla": "ESCAPE",
             "inicio": 239381,
             "fin": 240827,
             "duracion": 1446
         },
         {
             "tecla": "T",
             "inicio": 240951,
             "fin": 241020,
             "duracion": 69
         },
         {
             "tecla": "Y",
             "inicio": 240933,
             "fin": 241044,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 241157,
             "fin": 241263,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 241133,
             "fin": 241287,
             "duracion": 154
         },
         {
             "tecla": "R",
             "inicio": 241393,
             "fin": 241500,
             "duracion": 107
         },
         {
             "tecla": "T",
             "inicio": 241414,
             "fin": 241526,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 241624,
             "fin": 241735,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 241647,
             "fin": 241753,
             "duracion": 106
         },
         {
             "tecla": "R",
             "inicio": 241853,
             "fin": 241950,
             "duracion": 97
         },
         {
             "tecla": "T",
             "inicio": 241877,
             "fin": 241966,
             "duracion": 89
         },
         {
             "tecla": "R",
             "inicio": 242072,
             "fin": 242181,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 242096,
             "fin": 242197,
             "duracion": 101
         },
         {
             "tecla": "R",
             "inicio": 242313,
             "fin": 242413,
             "duracion": 100
         },
         {
             "tecla": "T",
             "inicio": 242338,
             "fin": 242436,
             "duracion": 98
         },
         {
             "tecla": "R",
             "inicio": 242526,
             "fin": 242629,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 242542,
             "fin": 242645,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 242795,
             "fin": 242868,
             "duracion": 73
         },
         {
             "tecla": "Y",
             "inicio": 242782,
             "fin": 242884,
             "duracion": 102
         },
         {
             "tecla": "T",
             "inicio": 242997,
             "fin": 243076,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 242980,
             "fin": 243100,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 243253,
             "fin": 243439,
             "duracion": 186
         },
         {
             "tecla": "R",
             "inicio": 243229,
             "fin": 243465,
             "duracion": 236
         },
         {
             "tecla": "E",
             "inicio": 243945,
             "fin": 244064,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 243960,
             "fin": 244086,
             "duracion": 126
         },
         {
             "tecla": "R",
             "inicio": 244198,
             "fin": 244349,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 244214,
             "fin": 244372,
             "duracion": 158
         },
         {
             "tecla": "R",
             "inicio": 245293,
             "fin": 245380,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 245268,
             "fin": 245404,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 245518,
             "fin": 245589,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 245502,
             "fin": 245614,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 245712,
             "fin": 245814,
             "duracion": 102
         },
         {
             "tecla": "U",
             "inicio": 245736,
             "fin": 245838,
             "duracion": 102
         },
         {
             "tecla": "I",
             "inicio": 245975,
             "fin": 246149,
             "duracion": 174
         },
         {
             "tecla": "U",
             "inicio": 245959,
             "fin": 246164,
             "duracion": 205
         },
         {
             "tecla": "I",
             "inicio": 246361,
             "fin": 246453,
             "duracion": 92
         },
         {
             "tecla": "U",
             "inicio": 246345,
             "fin": 246470,
             "duracion": 125
         },
         {
             "tecla": "ESCAPE",
             "inicio": 242751,
             "fin": 246517,
             "duracion": 3766
         },
         {
             "tecla": "I",
             "inicio": 246637,
             "fin": 246796,
             "duracion": 159
         },
         {
             "tecla": "U",
             "inicio": 246621,
             "fin": 246821,
             "duracion": 200
         },
         {
             "tecla": "M",
             "inicio": 247032,
             "fin": 247292,
             "duracion": 260
         },
         {
             "tecla": ",",
             "inicio": 247053,
             "fin": 247317,
             "duracion": 264
         },
         {
             "tecla": "M",
             "inicio": 248053,
             "fin": 248173,
             "duracion": 120
         },
         {
             "tecla": ",",
             "inicio": 248032,
             "fin": 248196,
             "duracion": 164
         },
         {
             "tecla": "I",
             "inicio": 248328,
             "fin": 248470,
             "duracion": 142
         },
         {
             "tecla": "U",
             "inicio": 248305,
             "fin": 248500,
             "duracion": 195
         },
         {
             "tecla": "M",
             "inicio": 248664,
             "fin": 248846,
             "duracion": 182
         },
         {
             "tecla": ",",
             "inicio": 248680,
             "fin": 248862,
             "duracion": 182
         },
         {
             "tecla": ",",
             "inicio": 249073,
             "fin": 249174,
             "duracion": 101
         },
         {
             "tecla": "M",
             "inicio": 249049,
             "fin": 249198,
             "duracion": 149
         },
         {
             "tecla": "T",
             "inicio": 249320,
             "fin": 249478,
             "duracion": 158
         },
         {
             "tecla": "Y",
             "inicio": 249335,
             "fin": 249494,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 249684,
             "fin": 249813,
             "duracion": 129
         },
         {
             "tecla": "Y",
             "inicio": 249700,
             "fin": 249828,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 249964,
             "fin": 250100,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 249942,
             "fin": 250116,
             "duracion": 174
         },
         {
             "tecla": "R",
             "inicio": 250352,
             "fin": 250525,
             "duracion": 173
         },
         {
             "tecla": "T",
             "inicio": 250368,
             "fin": 250548,
             "duracion": 180
         },
         {
             "tecla": "Y",
             "inicio": 251025,
             "fin": 251133,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 251232,
             "fin": 251357,
             "duracion": 125
         },
         {
             "tecla": "R",
             "inicio": 251456,
             "fin": 251591,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 252198,
             "fin": 252343,
             "duracion": 145
         },
         {
             "tecla": "T",
             "inicio": 252222,
             "fin": 252359,
             "duracion": 137
         },
         {
             "tecla": "T",
             "inicio": 252417,
             "fin": 252500,
             "duracion": 83
         },
         {
             "tecla": "Y",
             "inicio": 252441,
             "fin": 252541,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 252634,
             "fin": 252733,
             "duracion": 99
         },
         {
             "tecla": "U",
             "inicio": 252647,
             "fin": 252757,
             "duracion": 110
         },
         {
             "tecla": "I",
             "inicio": 252905,
             "fin": 253045,
             "duracion": 140
         },
         {
             "tecla": "U",
             "inicio": 252889,
             "fin": 253061,
             "duracion": 172
         },
         {
             "tecla": "I",
             "inicio": 253278,
             "fin": 253383,
             "duracion": 105
         },
         {
             "tecla": "U",
             "inicio": 253294,
             "fin": 253406,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 249886,
             "fin": 253437,
             "duracion": 3551
         },
         {
             "tecla": "I",
             "inicio": 253541,
             "fin": 253644,
             "duracion": 103
         },
         {
             "tecla": "U",
             "inicio": 253556,
             "fin": 253692,
             "duracion": 136
         },
         {
             "tecla": ",",
             "inicio": 253957,
             "fin": 254140,
             "duracion": 183
         },
         {
             "tecla": "M",
             "inicio": 253934,
             "fin": 254164,
             "duracion": 230
         },
         {
             "tecla": ",",
             "inicio": 254885,
             "fin": 255023,
             "duracion": 138
         },
         {
             "tecla": "M",
             "inicio": 254874,
             "fin": 255039,
             "duracion": 165
         },
         {
             "tecla": "I",
             "inicio": 255174,
             "fin": 255276,
             "duracion": 102
         },
         {
             "tecla": "U",
             "inicio": 255151,
             "fin": 255292,
             "duracion": 141
         },
         {
             "tecla": ",",
             "inicio": 255574,
             "fin": 255717,
             "duracion": 143
         },
         {
             "tecla": "M",
             "inicio": 255558,
             "fin": 255733,
             "duracion": 175
         },
         {
             "tecla": "M",
             "inicio": 255986,
             "fin": 256105,
             "duracion": 119
         },
         {
             "tecla": ",",
             "inicio": 256000,
             "fin": 256124,
             "duracion": 124
         },
         {
             "tecla": "T",
             "inicio": 256231,
             "fin": 256405,
             "duracion": 174
         },
         {
             "tecla": "Y",
             "inicio": 256244,
             "fin": 256420,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 256633,
             "fin": 256751,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 256657,
             "fin": 256775,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 256917,
             "fin": 257100,
             "duracion": 183
         },
         {
             "tecla": "T",
             "inicio": 256892,
             "fin": 257116,
             "duracion": 224
         },
         {
             "tecla": "R",
             "inicio": 257337,
             "fin": 257487,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 257359,
             "fin": 257503,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 258039,
             "fin": 258141,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 258018,
             "fin": 258165,
             "duracion": 147
         },
         {
             "tecla": "T",
             "inicio": 258247,
             "fin": 258374,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 258477,
             "fin": 258621,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 258500,
             "fin": 258645,
             "duracion": 145
         },
         {
             "tecla": "T",
             "inicio": 259137,
             "fin": 259252,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 259152,
             "fin": 259277,
             "duracion": 125
         },
         {
             "tecla": "ESCAPE",
             "inicio": 256855,
             "fin": 259301,
             "duracion": 2446
         },
         {
             "tecla": "R",
             "inicio": 259356,
             "fin": 259468,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 259372,
             "fin": 259493,
             "duracion": 121
         },
         {
             "tecla": "T",
             "inicio": 259612,
             "fin": 259700,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 259598,
             "fin": 259724,
             "duracion": 126
         },
         {
             "tecla": "ESCAPE",
             "inicio": 259556,
             "fin": 259740,
             "duracion": 184
         },
         {
             "tecla": "T",
             "inicio": 259860,
             "fin": 260044,
             "duracion": 184
         },
         {
             "tecla": "Y",
             "inicio": 259836,
             "fin": 260060,
             "duracion": 224
         },
         {
             "tecla": "T",
             "inicio": 260253,
             "fin": 260350,
             "duracion": 97
         },
         {
             "tecla": "ESCAPE",
             "inicio": 260213,
             "fin": 260372,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 260232,
             "fin": 260372,
             "duracion": 140
         },
         {
             "tecla": "Y",
             "inicio": 260373,
             "fin": 260388,
             "duracion": 15
         },
         {
             "tecla": "U",
             "inicio": 260492,
             "fin": 260732,
             "duracion": 240
         },
         {
             "tecla": "M",
             "inicio": 260526,
             "fin": 260756,
             "duracion": 230
         },
         {
             "tecla": "M",
             "inicio": 261557,
             "fin": 261694,
             "duracion": 137
         },
         {
             "tecla": "U",
             "inicio": 261547,
             "fin": 261719,
             "duracion": 172
         },
         {
             "tecla": "T",
             "inicio": 261918,
             "fin": 262045,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 261942,
             "fin": 262060,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 262149,
             "fin": 262317,
             "duracion": 168
         },
         {
             "tecla": "Y",
             "inicio": 262165,
             "fin": 262340,
             "duracion": 175
         },
         {
             "tecla": "ESCAPE",
             "inicio": 262125,
             "fin": 262758,
             "duracion": 633
         },
         {
             "tecla": "T",
             "inicio": 262988,
             "fin": 263119,
             "duracion": 131
         },
         {
             "tecla": "Y",
             "inicio": 263016,
             "fin": 263143,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 263245,
             "fin": 263380,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 263224,
             "fin": 263406,
             "duracion": 182
         },
         {
             "tecla": "T",
             "inicio": 263629,
             "fin": 263732,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 263609,
             "fin": 263748,
             "duracion": 139
         },
         {
             "tecla": "R",
             "inicio": 263853,
             "fin": 264014,
             "duracion": 161
         },
         {
             "tecla": "T",
             "inicio": 263869,
             "fin": 264031,
             "duracion": 162
         },
         {
             "tecla": "E",
             "inicio": 264872,
             "fin": 264965,
             "duracion": 93
         },
         {
             "tecla": "Y",
             "inicio": 264894,
             "fin": 264981,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 264849,
             "fin": 265005,
             "duracion": 156
         },
         {
             "tecla": "E",
             "inicio": 265093,
             "fin": 265188,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 265116,
             "fin": 265205,
             "duracion": 89
         },
         {
             "tecla": "T",
             "inicio": 265132,
             "fin": 265232,
             "duracion": 100
         },
         {
             "tecla": "E",
             "inicio": 265287,
             "fin": 265372,
             "duracion": 85
         },
         {
             "tecla": "Y",
             "inicio": 265309,
             "fin": 265396,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 265333,
             "fin": 265412,
             "duracion": 79
         },
         {
             "tecla": "E",
             "inicio": 265528,
             "fin": 265560,
             "duracion": 32
         },
         {
             "tecla": "Y",
             "inicio": 265489,
             "fin": 265581,
             "duracion": 92
         },
         {
             "tecla": "T",
             "inicio": 265504,
             "fin": 265597,
             "duracion": 93
         },
         {
             "tecla": "R",
             "inicio": 265743,
             "fin": 265838,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 265767,
             "fin": 265870,
             "duracion": 103
         },
         {
             "tecla": "R",
             "inicio": 265967,
             "fin": 266062,
             "duracion": 95
         },
         {
             "tecla": "M",
             "inicio": 266240,
             "fin": 266309,
             "duracion": 69
         },
         {
             "tecla": "U",
             "inicio": 266217,
             "fin": 266324,
             "duracion": 107
         },
         {
             "tecla": "U",
             "inicio": 266423,
             "fin": 266526,
             "duracion": 103
         },
         {
             "tecla": "M",
             "inicio": 266447,
             "fin": 266541,
             "duracion": 94
         },
         {
             "tecla": "M",
             "inicio": 266663,
             "fin": 266733,
             "duracion": 70
         },
         {
             "tecla": "U",
             "inicio": 266639,
             "fin": 266749,
             "duracion": 110
         },
         {
             "tecla": "ESCAPE",
             "inicio": 263591,
             "fin": 266774,
             "duracion": 3183
         },
         {
             "tecla": "T",
             "inicio": 266860,
             "fin": 266980,
             "duracion": 120
         },
         {
             "tecla": "U",
             "inicio": 267101,
             "fin": 267188,
             "duracion": 87
         },
         {
             "tecla": "M",
             "inicio": 267117,
             "fin": 267204,
             "duracion": 87
         },
         {
             "tecla": "U",
             "inicio": 267325,
             "fin": 267388,
             "duracion": 63
         },
         {
             "tecla": "M",
             "inicio": 267308,
             "fin": 267412,
             "duracion": 104
         },
         {
             "tecla": "U",
             "inicio": 267520,
             "fin": 267782,
             "duracion": 262
         },
         {
             "tecla": "M",
             "inicio": 267545,
             "fin": 267803,
             "duracion": 258
         },
         {
             "tecla": "E",
             "inicio": 267920,
             "fin": 267996,
             "duracion": 76
         },
         {
             "tecla": "R",
             "inicio": 267944,
             "fin": 268020,
             "duracion": 76
         },
         {
             "tecla": "E",
             "inicio": 268121,
             "fin": 268221,
             "duracion": 100
         },
         {
             "tecla": "E",
             "inicio": 268388,
             "fin": 268428,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 268350,
             "fin": 268452,
             "duracion": 102
         },
         {
             "tecla": "T",
             "inicio": 268372,
             "fin": 268476,
             "duracion": 104
         },
         {
             "tecla": "E",
             "inicio": 268580,
             "fin": 268669,
             "duracion": 89
         },
         {
             "tecla": "Y",
             "inicio": 268621,
             "fin": 268693,
             "duracion": 72
         },
         {
             "tecla": "T",
             "inicio": 268605,
             "fin": 268717,
             "duracion": 112
         },
         {
             "tecla": "E",
             "inicio": 268814,
             "fin": 268861,
             "duracion": 47
         },
         {
             "tecla": "T",
             "inicio": 268791,
             "fin": 268885,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 268831,
             "fin": 268902,
             "duracion": 71
         },
         {
             "tecla": "E",
             "inicio": 269006,
             "fin": 269053,
             "duracion": 47
         },
         {
             "tecla": "Y",
             "inicio": 269022,
             "fin": 269077,
             "duracion": 55
         },
         {
             "tecla": "T",
             "inicio": 268982,
             "fin": 269093,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 268316,
             "fin": 269158,
             "duracion": 842
         },
         {
             "tecla": "E",
             "inicio": 269214,
             "fin": 269308,
             "duracion": 94
         },
         {
             "tecla": "R",
             "inicio": 269237,
             "fin": 269364,
             "duracion": 127
         },
         {
             "tecla": "E",
             "inicio": 269429,
             "fin": 269540,
             "duracion": 111
         },
         {
             "tecla": "U",
             "inicio": 269693,
             "fin": 269773,
             "duracion": 80
         },
         {
             "tecla": "M",
             "inicio": 269669,
             "fin": 269789,
             "duracion": 120
         },
         {
             "tecla": "M",
             "inicio": 269918,
             "fin": 269990,
             "duracion": 72
         },
         {
             "tecla": "U",
             "inicio": 269895,
             "fin": 270014,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 270103,
             "fin": 270231,
             "duracion": 128
         },
         {
             "tecla": "M",
             "inicio": 270128,
             "fin": 270244,
             "duracion": 116
         },
         {
             "tecla": "R",
             "inicio": 270342,
             "fin": 270454,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 270592,
             "fin": 270660,
             "duracion": 68
         },
         {
             "tecla": "Y",
             "inicio": 270569,
             "fin": 270677,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 270799,
             "fin": 270868,
             "duracion": 69
         },
         {
             "tecla": "Y",
             "inicio": 270775,
             "fin": 270884,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 270991,
             "fin": 271286,
             "duracion": 295
         },
         {
             "tecla": "T",
             "inicio": 271016,
             "fin": 271310,
             "duracion": 294
         },
         {
             "tecla": "T",
             "inicio": 271436,
             "fin": 271516,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 271416,
             "fin": 271540,
             "duracion": 124
         },
         {
             "tecla": "E",
             "inicio": 271857,
             "fin": 271948,
             "duracion": 91
         },
         {
             "tecla": "Y",
             "inicio": 271878,
             "fin": 271973,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 271901,
             "fin": 271989,
             "duracion": 88
         },
         {
             "tecla": "E",
             "inicio": 272089,
             "fin": 272175,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 272112,
             "fin": 272197,
             "duracion": 85
         },
         {
             "tecla": "T",
             "inicio": 272126,
             "fin": 272214,
             "duracion": 88
         },
         {
             "tecla": "E",
             "inicio": 272286,
             "fin": 272381,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 272334,
             "fin": 272398,
             "duracion": 64
         },
         {
             "tecla": "Y",
             "inicio": 272310,
             "fin": 272421,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 272517,
             "fin": 272565,
             "duracion": 48
         },
         {
             "tecla": "E",
             "inicio": 272477,
             "fin": 272582,
             "duracion": 105
         },
         {
             "tecla": "Y",
             "inicio": 272501,
             "fin": 272605,
             "duracion": 104
         },
         {
             "tecla": "R",
             "inicio": 272711,
             "fin": 272797,
             "duracion": 86
         },
         {
             "tecla": "T",
             "inicio": 272735,
             "fin": 272846,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 271366,
             "fin": 273038,
             "duracion": 1672
         },
         {
             "tecla": "R",
             "inicio": 272919,
             "fin": 273038,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 273039,
             "fin": 273061,
             "duracion": 22
         },
         {
             "tecla": "T",
             "inicio": 273156,
             "fin": 273252,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 273141,
             "fin": 273276,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 273365,
             "fin": 273468,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 273382,
             "fin": 273485,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 273576,
             "fin": 273654,
             "duracion": 78
         },
         {
             "tecla": "Y",
             "inicio": 273592,
             "fin": 273654,
             "duracion": 62
         },
         {
             "tecla": "Y",
             "inicio": 273656,
             "fin": 273677,
             "duracion": 21
         },
         {
             "tecla": "T",
             "inicio": 273655,
             "fin": 273692,
             "duracion": 37
         },
         {
             "tecla": "R",
             "inicio": 273788,
             "fin": 273900,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 273805,
             "fin": 273916,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 274047,
             "fin": 274117,
             "duracion": 70
         },
         {
             "tecla": "Y",
             "inicio": 274021,
             "fin": 274133,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 274216,
             "fin": 274302,
             "duracion": 86
         },
         {
             "tecla": "ESCAPE",
             "inicio": 273653,
             "fin": 274350,
             "duracion": 697
         },
         {
             "tecla": "R",
             "inicio": 274445,
             "fin": 274758,
             "duracion": 313
         },
         {
             "tecla": "T",
             "inicio": 274461,
             "fin": 274782,
             "duracion": 321
         },
         {
             "tecla": "E",
             "inicio": 274903,
             "fin": 275140,
             "duracion": 237
         },
         {
             "tecla": "R",
             "inicio": 274926,
             "fin": 275156,
             "duracion": 230
         },
         {
             "tecla": "ESCAPE",
             "inicio": 275527,
             "fin": 275668,
             "duracion": 141
         },
         {
             "tecla": "Y",
             "inicio": 275550,
             "fin": 275668,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 275669,
             "fin": 275687,
             "duracion": 18
         },
         {
             "tecla": "U",
             "inicio": 275764,
             "fin": 275852,
             "duracion": 88
         },
         {
             "tecla": "I",
             "inicio": 275956,
             "fin": 276116,
             "duracion": 160
         },
         {
             "tecla": "ESCAPE",
             "inicio": 276165,
             "fin": 276559,
             "duracion": 394
         },
         {
             "tecla": "I",
             "inicio": 276181,
             "fin": 276559,
             "duracion": 378
         },
         {
             "tecla": "Y",
             "inicio": 276204,
             "fin": 276559,
             "duracion": 355
         },
         {
             "tecla": "O",
             "inicio": 276220,
             "fin": 276559,
             "duracion": 339
         },
         {
             "tecla": "Y",
             "inicio": 276562,
             "fin": 276581,
             "duracion": 19
         },
         {
             "tecla": "O",
             "inicio": 276563,
             "fin": 276596,
             "duracion": 33
         },
         {
             "tecla": "I",
             "inicio": 276561,
             "fin": 276620,
             "duracion": 59
         },
         {
             "tecla": "I",
             "inicio": 276780,
             "fin": 276951,
             "duracion": 171
         },
         {
             "tecla": "U",
             "inicio": 276765,
             "fin": 276974,
             "duracion": 209
         },
         {
             "tecla": "M",
             "inicio": 277057,
             "fin": 277380,
             "duracion": 323
         },
         {
             "tecla": ",",
             "inicio": 277079,
             "fin": 277404,
             "duracion": 325
         },
         {
             "tecla": ",",
             "inicio": 277638,
             "fin": 277741,
             "duracion": 103
         },
         {
             "tecla": "M",
             "inicio": 277614,
             "fin": 277758,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 277885,
             "fin": 278439,
             "duracion": 554
         },
         {
             "tecla": "U",
             "inicio": 277868,
             "fin": 278463,
             "duracion": 595
         },
         {
             "tecla": "ESCAPE",
             "inicio": 277813,
             "fin": 278605,
             "duracion": 792
         }
     ]
   },
 
   {
     nombre: "Diana",
     cancion: [
         {
             "tecla": "E",
             "inicio": 1362,
             "fin": 1548,
             "duracion": 186
         },
         {
             "tecla": "ESCAPE",
             "inicio": 690,
             "fin": 1877,
             "duracion": 1187
         },
         {
             "tecla": "R",
             "inicio": 1637,
             "fin": 1877,
             "duracion": 240
         },
         {
             "tecla": "T",
             "inicio": 1661,
             "fin": 1877,
             "duracion": 216
         },
         {
             "tecla": "R",
             "inicio": 1878,
             "fin": 2052,
             "duracion": 174
         },
         {
             "tecla": "T",
             "inicio": 1878,
             "fin": 2077,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 2157,
             "fin": 2284,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 2181,
             "fin": 2308,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 2428,
             "fin": 2653,
             "duracion": 225
         },
         {
             "tecla": "T",
             "inicio": 2405,
             "fin": 2677,
             "duracion": 272
         },
         {
             "tecla": "R",
             "inicio": 2816,
             "fin": 2966,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 2832,
             "fin": 2982,
             "duracion": 150
         },
         {
             "tecla": "ESCAPE",
             "inicio": 2092,
             "fin": 3038,
             "duracion": 946
         },
         {
             "tecla": "T",
             "inicio": 3069,
             "fin": 3364,
             "duracion": 295
         },
         {
             "tecla": "R",
             "inicio": 3085,
             "fin": 3389,
             "duracion": 304
         },
         {
             "tecla": "R",
             "inicio": 3517,
             "fin": 3644,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 3494,
             "fin": 3661,
             "duracion": 167
         },
         {
             "tecla": "T",
             "inicio": 3779,
             "fin": 4057,
             "duracion": 278
         },
         {
             "tecla": "Y",
             "inicio": 3798,
             "fin": 4072,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 4213,
             "fin": 4488,
             "duracion": 275
         },
         {
             "tecla": "Y",
             "inicio": 4229,
             "fin": 4505,
             "duracion": 276
         },
         {
             "tecla": "R",
             "inicio": 4646,
             "fin": 4788,
             "duracion": 142
         },
         {
             "tecla": "T",
             "inicio": 4633,
             "fin": 4812,
             "duracion": 179
         },
         {
             "tecla": "ESCAPE",
             "inicio": 3404,
             "fin": 4828,
             "duracion": 1424
         },
         {
             "tecla": "T",
             "inicio": 4893,
             "fin": 5444,
             "duracion": 551
         },
         {
             "tecla": "R",
             "inicio": 4909,
             "fin": 5444,
             "duracion": 535
         },
         {
             "tecla": "R",
             "inicio": 5446,
             "fin": 5461,
             "duracion": 15
         },
         {
             "tecla": "T",
             "inicio": 5445,
             "fin": 5484,
             "duracion": 39
         },
         {
             "tecla": "R",
             "inicio": 5581,
             "fin": 5716,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 5605,
             "fin": 5733,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 5852,
             "fin": 6193,
             "duracion": 341
         },
         {
             "tecla": "Y",
             "inicio": 5874,
             "fin": 6216,
             "duracion": 342
         },
         {
             "tecla": "T",
             "inicio": 6301,
             "fin": 6633,
             "duracion": 332
         },
         {
             "tecla": "R",
             "inicio": 6286,
             "fin": 6650,
             "duracion": 364
         },
         {
             "tecla": "R",
             "inicio": 6997,
             "fin": 7113,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 7233,
             "fin": 7349,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 7439,
             "fin": 7593,
             "duracion": 154
         },
         {
             "tecla": "T",
             "inicio": 7717,
             "fin": 8007,
             "duracion": 290
         },
         {
             "tecla": "R",
             "inicio": 7700,
             "fin": 8032,
             "duracion": 332
         },
         {
             "tecla": "E",
             "inicio": 8806,
             "fin": 8921,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 9022,
             "fin": 9189,
             "duracion": 167
         },
         {
             "tecla": "T",
             "inicio": 9036,
             "fin": 9205,
             "duracion": 169
         },
         {
             "tecla": "ESCAPE",
             "inicio": 5444,
             "fin": 9228,
             "duracion": 3784
         },
         {
             "tecla": "R",
             "inicio": 9302,
             "fin": 9420,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 9285,
             "fin": 9444,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 9541,
             "fin": 9676,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 9518,
             "fin": 9700,
             "duracion": 182
         },
         {
             "tecla": "Y",
             "inicio": 9821,
             "fin": 10057,
             "duracion": 236
         },
         {
             "tecla": "T",
             "inicio": 9797,
             "fin": 10081,
             "duracion": 284
         },
         {
             "tecla": "R",
             "inicio": 10217,
             "fin": 10366,
             "duracion": 149
         },
         {
             "tecla": "T",
             "inicio": 10192,
             "fin": 10389,
             "duracion": 197
         },
         {
             "tecla": "ESCAPE",
             "inicio": 9500,
             "fin": 10413,
             "duracion": 913
         },
         {
             "tecla": "R",
             "inicio": 10485,
             "fin": 10757,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 10470,
             "fin": 10780,
             "duracion": 310
         },
         {
             "tecla": "ESCAPE",
             "inicio": 10817,
             "fin": 11036,
             "duracion": 219
         },
         {
             "tecla": "T",
             "inicio": 10860,
             "fin": 11037,
             "duracion": 177
         },
         {
             "tecla": "Y",
             "inicio": 10872,
             "fin": 11037,
             "duracion": 165
         },
         {
             "tecla": "Y",
             "inicio": 11037,
             "fin": 11060,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 11037,
             "fin": 11076,
             "duracion": 39
         },
         {
             "tecla": "Y",
             "inicio": 11181,
             "fin": 11444,
             "duracion": 263
         },
         {
             "tecla": "T",
             "inicio": 11141,
             "fin": 11469,
             "duracion": 328
         },
         {
             "tecla": "T",
             "inicio": 11583,
             "fin": 11847,
             "duracion": 264
         },
         {
             "tecla": "Y",
             "inicio": 11600,
             "fin": 11866,
             "duracion": 266
         },
         {
             "tecla": "ESCAPE",
             "inicio": 11925,
             "fin": 12132,
             "duracion": 207
         },
         {
             "tecla": "T",
             "inicio": 11967,
             "fin": 12132,
             "duracion": 165
         },
         {
             "tecla": "Y",
             "inicio": 11989,
             "fin": 12132,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 12133,
             "fin": 12148,
             "duracion": 15
         },
         {
             "tecla": "Y",
             "inicio": 12133,
             "fin": 12174,
             "duracion": 41
         },
         {
             "tecla": "T",
             "inicio": 12245,
             "fin": 12688,
             "duracion": 443
         },
         {
             "tecla": "R",
             "inicio": 12269,
             "fin": 12705,
             "duracion": 436
         },
         {
             "tecla": "R",
             "inicio": 12885,
             "fin": 12996,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 12733,
             "fin": 13020,
             "duracion": 287
         },
         {
             "tecla": "T",
             "inicio": 12869,
             "fin": 13021,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 13021,
             "fin": 13036,
             "duracion": 15
         },
         {
             "tecla": "E",
             "inicio": 13133,
             "fin": 13516,
             "duracion": 383
         },
         {
             "tecla": "R",
             "inicio": 13150,
             "fin": 13532,
             "duracion": 382
         },
         {
             "tecla": "ESCAPE",
             "inicio": 13695,
             "fin": 14175,
             "duracion": 480
         },
         {
             "tecla": "E",
             "inicio": 13975,
             "fin": 14175,
             "duracion": 200
         },
         {
             "tecla": "E",
             "inicio": 14177,
             "fin": 14260,
             "duracion": 83
         },
         {
             "tecla": "R",
             "inicio": 14397,
             "fin": 14517,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 14611,
             "fin": 14760,
             "duracion": 149
         },
         {
             "tecla": "R",
             "inicio": 14869,
             "fin": 15086,
             "duracion": 217
         },
         {
             "tecla": "E",
             "inicio": 14845,
             "fin": 15286,
             "duracion": 441
         },
         {
             "tecla": "R",
             "inicio": 15112,
             "fin": 15309,
             "duracion": 197
         },
         {
             "tecla": "E",
             "inicio": 15928,
             "fin": 16065,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 16139,
             "fin": 16270,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 16162,
             "fin": 16295,
             "duracion": 133
         },
         {
             "tecla": "ESCAPE",
             "inicio": 16310,
             "fin": 16540,
             "duracion": 230
         },
         {
             "tecla": "T",
             "inicio": 16373,
             "fin": 16541,
             "duracion": 168
         },
         {
             "tecla": "Y",
             "inicio": 16389,
             "fin": 16541,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 16542,
             "fin": 16588,
             "duracion": 46
         },
         {
             "tecla": "Y",
             "inicio": 16542,
             "fin": 16604,
             "duracion": 62
         },
         {
             "tecla": "T",
             "inicio": 16709,
             "fin": 16804,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 16685,
             "fin": 16820,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 16910,
             "fin": 17196,
             "duracion": 286
         },
         {
             "tecla": "Y",
             "inicio": 16935,
             "fin": 17214,
             "duracion": 279
         },
         {
             "tecla": "Y",
             "inicio": 17279,
             "fin": 17460,
             "duracion": 181
         },
         {
             "tecla": "T",
             "inicio": 17293,
             "fin": 17484,
             "duracion": 191
         },
         {
             "tecla": "ESCAPE",
             "inicio": 17252,
             "fin": 17500,
             "duracion": 248
         },
         {
             "tecla": "R",
             "inicio": 17565,
             "fin": 17860,
             "duracion": 295
         },
         {
             "tecla": "T",
             "inicio": 17589,
             "fin": 17876,
             "duracion": 287
         },
         {
             "tecla": "T",
             "inicio": 17965,
             "fin": 18117,
             "duracion": 152
         },
         {
             "tecla": "Y",
             "inicio": 17989,
             "fin": 18133,
             "duracion": 144
         },
         {
             "tecla": "ESCAPE",
             "inicio": 17949,
             "fin": 18156,
             "duracion": 207
         },
         {
             "tecla": "T",
             "inicio": 18229,
             "fin": 18516,
             "duracion": 287
         },
         {
             "tecla": "Y",
             "inicio": 18245,
             "fin": 18541,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 18661,
             "fin": 18921,
             "duracion": 260
         },
         {
             "tecla": "Y",
             "inicio": 18685,
             "fin": 18941,
             "duracion": 256
         },
         {
             "tecla": "Y",
             "inicio": 19101,
             "fin": 19252,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 19125,
             "fin": 19269,
             "duracion": 144
         },
         {
             "tecla": "ESCAPE",
             "inicio": 19040,
             "fin": 19292,
             "duracion": 252
         },
         {
             "tecla": "R",
             "inicio": 19389,
             "fin": 19558,
             "duracion": 169
         },
         {
             "tecla": "T",
             "inicio": 19373,
             "fin": 19670,
             "duracion": 297
         },
         {
             "tecla": "R",
             "inicio": 19598,
             "fin": 19694,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 20045,
             "fin": 20189,
             "duracion": 144
         },
         {
             "tecla": "Y",
             "inicio": 20061,
             "fin": 20221,
             "duracion": 160
         },
         {
             "tecla": "ESCAPE",
             "inicio": 19783,
             "fin": 20245,
             "duracion": 462
         },
         {
             "tecla": "Y",
             "inicio": 20309,
             "fin": 20776,
             "duracion": 467
         },
         {
             "tecla": "T",
             "inicio": 20325,
             "fin": 20796,
             "duracion": 471
         },
         {
             "tecla": "C",
             "inicio": 20987,
             "fin": 21614,
             "duracion": 627
         },
         {
             "tecla": "V",
             "inicio": 21003,
             "fin": 21694,
             "duracion": 691
         },
         {
             "tecla": "ESCAPE",
             "inicio": 22292,
             "fin": 22864,
             "duracion": 572
         },
         {
             "tecla": "E",
             "inicio": 22700,
             "fin": 22864,
             "duracion": 164
         },
         {
             "tecla": "E",
             "inicio": 22866,
             "fin": 23076,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 23240,
             "fin": 23302,
             "duracion": 62
         },
         {
             "tecla": "R",
             "inicio": 23215,
             "fin": 23318,
             "duracion": 103
         },
         {
             "tecla": "M",
             "inicio": 23430,
             "fin": 23622,
             "duracion": 192
         },
         {
             "tecla": "U",
             "inicio": 23453,
             "fin": 23638,
             "duracion": 185
         },
         {
             "tecla": "U",
             "inicio": 23709,
             "fin": 24000,
             "duracion": 291
         },
         {
             "tecla": "M",
             "inicio": 23726,
             "fin": 24025,
             "duracion": 299
         },
         {
             "tecla": "T",
             "inicio": 24112,
             "fin": 24246,
             "duracion": 134
         },
         {
             "tecla": "Y",
             "inicio": 24088,
             "fin": 24270,
             "duracion": 182
         },
         {
             "tecla": "U",
             "inicio": 24352,
             "fin": 24653,
             "duracion": 301
         },
         {
             "tecla": "M",
             "inicio": 24368,
             "fin": 24670,
             "duracion": 302
         },
         {
             "tecla": "T",
             "inicio": 24777,
             "fin": 24927,
             "duracion": 150
         },
         {
             "tecla": "Y",
             "inicio": 24761,
             "fin": 24951,
             "duracion": 190
         },
         {
             "tecla": "U",
             "inicio": 25031,
             "fin": 25286,
             "duracion": 255
         },
         {
             "tecla": "M",
             "inicio": 25047,
             "fin": 25310,
             "duracion": 263
         },
         {
             "tecla": "T",
             "inicio": 25477,
             "fin": 25752,
             "duracion": 275
         },
         {
             "tecla": "Y",
             "inicio": 25461,
             "fin": 25777,
             "duracion": 316
         },
         {
             "tecla": "ESCAPE",
             "inicio": 25430,
             "fin": 25792,
             "duracion": 362
         },
         {
             "tecla": "M",
             "inicio": 25925,
             "fin": 26181,
             "duracion": 256
         },
         {
             "tecla": "U",
             "inicio": 25942,
             "fin": 26198,
             "duracion": 256
         },
         {
             "tecla": "Y",
             "inicio": 26318,
             "fin": 26357,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 26341,
             "fin": 26357,
             "duracion": 16
         },
         {
             "tecla": "ESCAPE",
             "inicio": 26357,
             "fin": 26620,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 26358,
             "fin": 26620,
             "duracion": 262
         },
         {
             "tecla": "T",
             "inicio": 26358,
             "fin": 26620,
             "duracion": 262
         },
         {
             "tecla": "Y",
             "inicio": 26621,
             "fin": 26638,
             "duracion": 17
         },
         {
             "tecla": "T",
             "inicio": 26622,
             "fin": 26660,
             "duracion": 38
         },
         {
             "tecla": "R",
             "inicio": 26780,
             "fin": 26876,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 26757,
             "fin": 26892,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 27021,
             "fin": 27477,
             "duracion": 456
         },
         {
             "tecla": "R",
             "inicio": 27038,
             "fin": 27493,
             "duracion": 455
         },
         {
             "tecla": "T",
             "inicio": 27875,
             "fin": 27990,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 27891,
             "fin": 28015,
             "duracion": 124
         },
         {
             "tecla": "R",
             "inicio": 28112,
             "fin": 28221,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 28329,
             "fin": 28439,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 28538,
             "fin": 28728,
             "duracion": 190
         },
         {
             "tecla": "R",
             "inicio": 28773,
             "fin": 28892,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 28797,
             "fin": 28908,
             "duracion": 111
         },
         {
             "tecla": "M",
             "inicio": 29255,
             "fin": 29541,
             "duracion": 286
         },
         {
             "tecla": "U",
             "inicio": 29216,
             "fin": 29557,
             "duracion": 341
         },
         {
             "tecla": "M",
             "inicio": 29708,
             "fin": 29984,
             "duracion": 276
         },
         {
             "tecla": "U",
             "inicio": 29683,
             "fin": 30008,
             "duracion": 325
         },
         {
             "tecla": "ESCAPE",
             "inicio": 26976,
             "fin": 30045,
             "duracion": 3069
         },
         {
             "tecla": "T",
             "inicio": 30189,
             "fin": 30287,
             "duracion": 98
         },
         {
             "tecla": "Y",
             "inicio": 30165,
             "fin": 30308,
             "duracion": 143
         },
         {
             "tecla": "M",
             "inicio": 30422,
             "fin": 30678,
             "duracion": 256
         },
         {
             "tecla": "U",
             "inicio": 30397,
             "fin": 30702,
             "duracion": 305
         },
         {
             "tecla": "M",
             "inicio": 30854,
             "fin": 31052,
             "duracion": 198
         },
         {
             "tecla": "U",
             "inicio": 30831,
             "fin": 31068,
             "duracion": 237
         },
         {
             "tecla": "T",
             "inicio": 31238,
             "fin": 31405,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 31253,
             "fin": 31430,
             "duracion": 177
         },
         {
             "tecla": "ESCAPE",
             "inicio": 31188,
             "fin": 31444,
             "duracion": 256
         },
         {
             "tecla": "T",
             "inicio": 31517,
             "fin": 32168,
             "duracion": 651
         },
         {
             "tecla": "Y",
             "inicio": 31533,
             "fin": 32186,
             "duracion": 653
         },
         {
             "tecla": "T",
             "inicio": 32412,
             "fin": 32541,
             "duracion": 129
         },
         {
             "tecla": "R",
             "inicio": 32432,
             "fin": 32557,
             "duracion": 125
         },
         {
             "tecla": "T",
             "inicio": 32857,
             "fin": 33038,
             "duracion": 181
         },
         {
             "tecla": "Y",
             "inicio": 32874,
             "fin": 33062,
             "duracion": 188
         },
         {
             "tecla": "Y",
             "inicio": 33269,
             "fin": 33566,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 33293,
             "fin": 33591,
             "duracion": 298
         },
         {
             "tecla": "T",
             "inicio": 33757,
             "fin": 34058,
             "duracion": 301
         },
         {
             "tecla": "Y",
             "inicio": 33741,
             "fin": 34077,
             "duracion": 336
         },
         {
             "tecla": "ESCAPE",
             "inicio": 33679,
             "fin": 34094,
             "duracion": 415
         },
         {
             "tecla": "T",
             "inicio": 34189,
             "fin": 34437,
             "duracion": 248
         },
         {
             "tecla": "R",
             "inicio": 34165,
             "fin": 34461,
             "duracion": 296
         },
         {
             "tecla": "E",
             "inicio": 35014,
             "fin": 35037,
             "duracion": 23
         },
         {
             "tecla": "ESCAPE",
             "inicio": 35037,
             "fin": 35284,
             "duracion": 247
         },
         {
             "tecla": "E",
             "inicio": 35037,
             "fin": 35284,
             "duracion": 247
         },
         {
             "tecla": "E",
             "inicio": 35285,
             "fin": 35412,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 35525,
             "fin": 35613,
             "duracion": 88
         },
         {
             "tecla": "T",
             "inicio": 35696,
             "fin": 35871,
             "duracion": 175
         },
         {
             "tecla": "E",
             "inicio": 35945,
             "fin": 36047,
             "duracion": 102
         },
         {
             "tecla": "R",
             "inicio": 35961,
             "fin": 36079,
             "duracion": 118
         },
         {
             "tecla": "M",
             "inicio": 36405,
             "fin": 36584,
             "duracion": 179
         },
         {
             "tecla": "U",
             "inicio": 36381,
             "fin": 36600,
             "duracion": 219
         },
         {
             "tecla": "M",
             "inicio": 36789,
             "fin": 37037,
             "duracion": 248
         },
         {
             "tecla": "U",
             "inicio": 36805,
             "fin": 37062,
             "duracion": 257
         },
         {
             "tecla": "T",
             "inicio": 37210,
             "fin": 37227,
             "duracion": 17
         },
         {
             "tecla": "T",
             "inicio": 37230,
             "fin": 37375,
             "duracion": 145
         },
         {
             "tecla": "Y",
             "inicio": 37255,
             "fin": 37396,
             "duracion": 141
         },
         {
             "tecla": "ESCAPE",
             "inicio": 37227,
             "fin": 37412,
             "duracion": 185
         },
         {
             "tecla": "Y",
             "inicio": 37461,
             "fin": 37700,
             "duracion": 239
         },
         {
             "tecla": "T",
             "inicio": 37485,
             "fin": 37716,
             "duracion": 231
         },
         {
             "tecla": "T",
             "inicio": 37891,
             "fin": 38101,
             "duracion": 210
         },
         {
             "tecla": "Y",
             "inicio": 37914,
             "fin": 38141,
             "duracion": 227
         },
         {
             "tecla": "T",
             "inicio": 38314,
             "fin": 38431,
             "duracion": 117
         },
         {
             "tecla": "R",
             "inicio": 38291,
             "fin": 38455,
             "duracion": 164
         },
         {
             "tecla": "Y",
             "inicio": 38565,
             "fin": 38935,
             "duracion": 370
         },
         {
             "tecla": "T",
             "inicio": 38592,
             "fin": 38967,
             "duracion": 375
         },
         {
             "tecla": "T",
             "inicio": 39536,
             "fin": 39763,
             "duracion": 227
         },
         {
             "tecla": "R",
             "inicio": 39505,
             "fin": 39786,
             "duracion": 281
         },
         {
             "tecla": "T",
             "inicio": 39949,
             "fin": 40190,
             "duracion": 241
         },
         {
             "tecla": "Y",
             "inicio": 39973,
             "fin": 40206,
             "duracion": 233
         },
         {
             "tecla": "T",
             "inicio": 40399,
             "fin": 40684,
             "duracion": 285
         },
         {
             "tecla": "Y",
             "inicio": 40424,
             "fin": 40709,
             "duracion": 285
         },
         {
             "tecla": "ESCAPE",
             "inicio": 38527,
             "fin": 40727,
             "duracion": 2200
         },
         {
             "tecla": "R",
             "inicio": 40821,
             "fin": 41044,
             "duracion": 223
         },
         {
             "tecla": "T",
             "inicio": 40845,
             "fin": 41069,
             "duracion": 224
         },
         {
             "tecla": "R",
             "inicio": 41259,
             "fin": 41590,
             "duracion": 331
         },
         {
             "tecla": "T",
             "inicio": 41271,
             "fin": 41607,
             "duracion": 336
         },
         {
             "tecla": "T",
             "inicio": 42165,
             "fin": 42304,
             "duracion": 139
         },
         {
             "tecla": "Y",
             "inicio": 42181,
             "fin": 42327,
             "duracion": 146
         },
         {
             "tecla": "R",
             "inicio": 42409,
             "fin": 42550,
             "duracion": 141
         },
         {
             "tecla": "Y",
             "inicio": 42848,
             "fin": 43071,
             "duracion": 223
         },
         {
             "tecla": "R",
             "inicio": 43114,
             "fin": 43265,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 43132,
             "fin": 43288,
             "duracion": 156
         },
         {
             "tecla": "M",
             "inicio": 43566,
             "fin": 43872,
             "duracion": 306
         },
         {
             "tecla": "U",
             "inicio": 43590,
             "fin": 43896,
             "duracion": 306
         },
         {
             "tecla": "M",
             "inicio": 44018,
             "fin": 44309,
             "duracion": 291
         },
         {
             "tecla": "U",
             "inicio": 44001,
             "fin": 44340,
             "duracion": 339
         },
         {
             "tecla": "T",
             "inicio": 44483,
             "fin": 44678,
             "duracion": 195
         },
         {
             "tecla": "Y",
             "inicio": 44500,
             "fin": 44694,
             "duracion": 194
         },
         {
             "tecla": "ESCAPE",
             "inicio": 41231,
             "fin": 44717,
             "duracion": 3486
         },
         {
             "tecla": "T",
             "inicio": 44789,
             "fin": 44980,
             "duracion": 191
         },
         {
             "tecla": "Y",
             "inicio": 44773,
             "fin": 45053,
             "duracion": 280
         },
         {
             "tecla": "K",
             "inicio": 45021,
             "fin": 45068,
             "duracion": 47
         },
         {
             "tecla": "M",
             "inicio": 45093,
             "fin": 45264,
             "duracion": 171
         },
         {
             "tecla": "U",
             "inicio": 45005,
             "fin": 45282,
             "duracion": 277
         },
         {
             "tecla": "M",
             "inicio": 45393,
             "fin": 45662,
             "duracion": 269
         },
         {
             "tecla": "U",
             "inicio": 45368,
             "fin": 45686,
             "duracion": 318
         },
         {
             "tecla": "ESCAPE",
             "inicio": 45749,
             "fin": 46012,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 45769,
             "fin": 46012,
             "duracion": 243
         },
         {
             "tecla": "T",
             "inicio": 45790,
             "fin": 46012,
             "duracion": 222
         },
         {
             "tecla": "T",
             "inicio": 46013,
             "fin": 46766,
             "duracion": 753
         },
         {
             "tecla": "Y",
             "inicio": 46013,
             "fin": 46789,
             "duracion": 776
         },
         {
             "tecla": "T",
             "inicio": 46893,
             "fin": 47024,
             "duracion": 131
         },
         {
             "tecla": "R",
             "inicio": 46877,
             "fin": 47040,
             "duracion": 163
         },
         {
             "tecla": "T",
             "inicio": 47370,
             "fin": 47621,
             "duracion": 251
         },
         {
             "tecla": "Y",
             "inicio": 47354,
             "fin": 47646,
             "duracion": 292
         },
         {
             "tecla": "Y",
             "inicio": 47818,
             "fin": 48142,
             "duracion": 324
         },
         {
             "tecla": "T",
             "inicio": 47802,
             "fin": 48165,
             "duracion": 363
         },
         {
             "tecla": "T",
             "inicio": 48256,
             "fin": 48596,
             "duracion": 340
         },
         {
             "tecla": "Y",
             "inicio": 48277,
             "fin": 48620,
             "duracion": 343
         },
         {
             "tecla": "ESCAPE",
             "inicio": 48228,
             "fin": 48644,
             "duracion": 416
         },
         {
             "tecla": "R",
             "inicio": 48701,
             "fin": 49152,
             "duracion": 451
         },
         {
             "tecla": "T",
             "inicio": 48725,
             "fin": 49167,
             "duracion": 442
         },
         {
             "tecla": "ESCAPE",
             "inicio": 49285,
             "fin": 49767,
             "duracion": 482
         },
         {
             "tecla": "E",
             "inicio": 49525,
             "fin": 49767,
             "duracion": 242
         },
         {
             "tecla": "E",
             "inicio": 49769,
             "fin": 49853,
             "duracion": 84
         },
         {
             "tecla": "R",
             "inicio": 49949,
             "fin": 50077,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 50177,
             "fin": 50345,
             "duracion": 168
         },
         {
             "tecla": "E",
             "inicio": 50394,
             "fin": 50513,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 50415,
             "fin": 50537,
             "duracion": 122
         },
         {
             "tecla": "M",
             "inicio": 50861,
             "fin": 51087,
             "duracion": 226
         },
         {
             "tecla": "U",
             "inicio": 50837,
             "fin": 51111,
             "duracion": 274
         },
         {
             "tecla": "U",
             "inicio": 51283,
             "fin": 51550,
             "duracion": 267
         },
         {
             "tecla": "M",
             "inicio": 51304,
             "fin": 51567,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 51662,
             "fin": 51701,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 51685,
             "fin": 51701,
             "duracion": 16
         },
         {
             "tecla": "Y",
             "inicio": 51701,
             "fin": 51900,
             "duracion": 199
         },
         {
             "tecla": "T",
             "inicio": 51702,
             "fin": 51924,
             "duracion": 222
         },
         {
             "tecla": "ESCAPE",
             "inicio": 51701,
             "fin": 51941,
             "duracion": 240
         },
         {
             "tecla": "T",
             "inicio": 51983,
             "fin": 52261,
             "duracion": 278
         },
         {
             "tecla": "Y",
             "inicio": 52005,
             "fin": 52277,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 52387,
             "fin": 52687,
             "duracion": 300
         },
         {
             "tecla": "Y",
             "inicio": 52411,
             "fin": 52701,
             "duracion": 290
         },
         {
             "tecla": "T",
             "inicio": 52819,
             "fin": 52927,
             "duracion": 108
         },
         {
             "tecla": "R",
             "inicio": 52799,
             "fin": 52942,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 53061,
             "fin": 53645,
             "duracion": 584
         },
         {
             "tecla": "T",
             "inicio": 53077,
             "fin": 53662,
             "duracion": 585
         },
         {
             "tecla": "T",
             "inicio": 53929,
             "fin": 54085,
             "duracion": 156
         },
         {
             "tecla": "R",
             "inicio": 53907,
             "fin": 54109,
             "duracion": 202
         },
         {
             "tecla": "T",
             "inicio": 54363,
             "fin": 54569,
             "duracion": 206
         },
         {
             "tecla": "Y",
             "inicio": 54377,
             "fin": 54585,
             "duracion": 208
         },
         {
             "tecla": "T",
             "inicio": 54791,
             "fin": 55046,
             "duracion": 255
         },
         {
             "tecla": "Y",
             "inicio": 54767,
             "fin": 55062,
             "duracion": 295
         },
         {
             "tecla": "ESCAPE",
             "inicio": 52996,
             "fin": 55094,
             "duracion": 2098
         },
         {
             "tecla": "R",
             "inicio": 55213,
             "fin": 55445,
             "duracion": 232
         },
         {
             "tecla": "T",
             "inicio": 55198,
             "fin": 55470,
             "duracion": 272
         },
         {
             "tecla": "R",
             "inicio": 55653,
             "fin": 56055,
             "duracion": 402
         },
         {
             "tecla": "T",
             "inicio": 55629,
             "fin": 56079,
             "duracion": 450
         },
         {
             "tecla": "T",
             "inicio": 56493,
             "fin": 56599,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 56477,
             "fin": 56623,
             "duracion": 146
         },
         {
             "tecla": "R",
             "inicio": 56704,
             "fin": 56821,
             "duracion": 117
         },
         {
             "tecla": "T",
             "inicio": 56931,
             "fin": 57039,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 57121,
             "fin": 57287,
             "duracion": 166
         },
         {
             "tecla": "R",
             "inicio": 57376,
             "fin": 57460,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 57360,
             "fin": 57477,
             "duracion": 117
         },
         {
             "tecla": "ESCAPE",
             "inicio": 55590,
             "fin": 57532,
             "duracion": 1942
         },
         {
             "tecla": "T",
             "inicio": 57829,
             "fin": 57977,
             "duracion": 148
         },
         {
             "tecla": "Y",
             "inicio": 57813,
             "fin": 58001,
             "duracion": 188
         },
         {
             "tecla": "T",
             "inicio": 58248,
             "fin": 58408,
             "duracion": 160
         },
         {
             "tecla": "Y",
             "inicio": 58224,
             "fin": 58430,
             "duracion": 206
         },
         {
             "tecla": "T",
             "inicio": 58653,
             "fin": 58734,
             "duracion": 81
         },
         {
             "tecla": "Y",
             "inicio": 58638,
             "fin": 58765,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 58904,
             "fin": 59121,
             "duracion": 217
         },
         {
             "tecla": "Y",
             "inicio": 58928,
             "fin": 59138,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 59360,
             "fin": 59524,
             "duracion": 164
         },
         {
             "tecla": "Y",
             "inicio": 59337,
             "fin": 59541,
             "duracion": 204
         },
         {
             "tecla": "T",
             "inicio": 59702,
             "fin": 59829,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 59717,
             "fin": 59852,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 59629,
             "fin": 59884,
             "duracion": 255
         },
         {
             "tecla": "M",
             "inicio": 59997,
             "fin": 60287,
             "duracion": 290
         },
         {
             "tecla": "U",
             "inicio": 59957,
             "fin": 60304,
             "duracion": 347
         },
         {
             "tecla": "Y",
             "inicio": 60400,
             "fin": 60774,
             "duracion": 374
         },
         {
             "tecla": "T",
             "inicio": 60424,
             "fin": 60790,
             "duracion": 366
         },
         {
             "tecla": "R",
             "inicio": 61405,
             "fin": 61641,
             "duracion": 236
         },
         {
             "tecla": "T",
             "inicio": 61385,
             "fin": 61665,
             "duracion": 280
         },
         {
             "tecla": "R",
             "inicio": 61837,
             "fin": 62113,
             "duracion": 276
         },
         {
             "tecla": "T",
             "inicio": 61813,
             "fin": 62128,
             "duracion": 315
         },
         {
             "tecla": "D",
             "inicio": 62249,
             "fin": 62553,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 62218,
             "fin": 62577,
             "duracion": 359
         },
         {
             "tecla": "D",
             "inicio": 62694,
             "fin": 63226,
             "duracion": 532
         },
         {
             "tecla": "Y",
             "inicio": 62717,
             "fin": 63257,
             "duracion": 540
         },
         {
             "tecla": "ESCAPE",
             "inicio": 60829,
             "fin": 63759,
             "duracion": 2930
         },
         {
             "tecla": "E",
             "inicio": 63546,
             "fin": 63760,
             "duracion": 214
         },
         {
             "tecla": "E",
             "inicio": 63761,
             "fin": 63876,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 63965,
             "fin": 64076,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 64166,
             "fin": 64335,
             "duracion": 169
         },
         {
             "tecla": "E",
             "inicio": 64400,
             "fin": 64511,
             "duracion": 111
         },
         {
             "tecla": "R",
             "inicio": 64417,
             "fin": 64527,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 64813,
             "fin": 65061,
             "duracion": 248
         },
         {
             "tecla": "T",
             "inicio": 64829,
             "fin": 65077,
             "duracion": 248
         },
         {
             "tecla": "T",
             "inicio": 65266,
             "fin": 65472,
             "duracion": 206
         },
         {
             "tecla": "Y",
             "inicio": 65278,
             "fin": 65504,
             "duracion": 226
         },
         {
             "tecla": "T",
             "inicio": 65733,
             "fin": 65797,
             "duracion": 64
         },
         {
             "tecla": "Y",
             "inicio": 65709,
             "fin": 65837,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 64725,
             "fin": 65895,
             "duracion": 1170
         },
         {
             "tecla": "M",
             "inicio": 65942,
             "fin": 66172,
             "duracion": 230
         },
         {
             "tecla": "U",
             "inicio": 65933,
             "fin": 66197,
             "duracion": 264
         },
         {
             "tecla": "U",
             "inicio": 66365,
             "fin": 66590,
             "duracion": 225
         },
         {
             "tecla": "M",
             "inicio": 66389,
             "fin": 66607,
             "duracion": 218
         },
         {
             "tecla": "T",
             "inicio": 66781,
             "fin": 66901,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 66797,
             "fin": 66917,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 67062,
             "fin": 67336,
             "duracion": 274
         },
         {
             "tecla": "Y",
             "inicio": 67045,
             "fin": 67359,
             "duracion": 314
         },
         {
             "tecla": "T",
             "inicio": 67493,
             "fin": 67797,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 67477,
             "fin": 67814,
             "duracion": 337
         },
         {
             "tecla": "T",
             "inicio": 68384,
             "fin": 68639,
             "duracion": 255
         },
         {
             "tecla": "Y",
             "inicio": 68397,
             "fin": 68665,
             "duracion": 268
         },
         {
             "tecla": "Y",
             "inicio": 68842,
             "fin": 69109,
             "duracion": 267
         },
         {
             "tecla": "T",
             "inicio": 68825,
             "fin": 69134,
             "duracion": 309
         },
         {
             "tecla": "ESCAPE",
             "inicio": 67392,
             "fin": 69207,
             "duracion": 1815
         },
         {
             "tecla": "T",
             "inicio": 69293,
             "fin": 69509,
             "duracion": 216
         },
         {
             "tecla": "R",
             "inicio": 69272,
             "fin": 69534,
             "duracion": 262
         },
         {
             "tecla": "T",
             "inicio": 69759,
             "fin": 70020,
             "duracion": 261
         },
         {
             "tecla": "R",
             "inicio": 69746,
             "fin": 70232,
             "duracion": 486
         },
         {
             "tecla": "T",
             "inicio": 70637,
             "fin": 70733,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 70621,
             "fin": 70765,
             "duracion": 144
         },
         {
             "tecla": "R",
             "inicio": 70861,
             "fin": 70975,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 71076,
             "fin": 71182,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 71277,
             "fin": 71439,
             "duracion": 162
         },
         {
             "tecla": "R",
             "inicio": 71488,
             "fin": 71600,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 71512,
             "fin": 71640,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 69720,
             "fin": 71845,
             "duracion": 2125
         },
         {
             "tecla": "T",
             "inicio": 71965,
             "fin": 72217,
             "duracion": 252
         },
         {
             "tecla": "Y",
             "inicio": 71991,
             "fin": 72232,
             "duracion": 241
         },
         {
             "tecla": "T",
             "inicio": 72403,
             "fin": 72641,
             "duracion": 238
         },
         {
             "tecla": "Y",
             "inicio": 72422,
             "fin": 72665,
             "duracion": 243
         },
         {
             "tecla": "T",
             "inicio": 72877,
             "fin": 72997,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 72853,
             "fin": 73013,
             "duracion": 160
         },
         {
             "tecla": "Y",
             "inicio": 73203,
             "fin": 73393,
             "duracion": 190
         },
         {
             "tecla": "T",
             "inicio": 73180,
             "fin": 73416,
             "duracion": 236
         },
         {
             "tecla": "Y",
             "inicio": 73619,
             "fin": 73821,
             "duracion": 202
         },
         {
             "tecla": "T",
             "inicio": 73635,
             "fin": 73845,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 74014,
             "fin": 74148,
             "duracion": 134
         },
         {
             "tecla": "Y",
             "inicio": 74037,
             "fin": 74172,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 73961,
             "fin": 74213,
             "duracion": 252
         },
         {
             "tecla": "M",
             "inicio": 74303,
             "fin": 74585,
             "duracion": 282
         },
         {
             "tecla": "U",
             "inicio": 74277,
             "fin": 74599,
             "duracion": 322
         },
         {
             "tecla": "T",
             "inicio": 74737,
             "fin": 74983,
             "duracion": 246
         },
         {
             "tecla": "Y",
             "inicio": 74713,
             "fin": 75004,
             "duracion": 291
         },
         {
             "tecla": "R",
             "inicio": 75568,
             "fin": 75836,
             "duracion": 268
         },
         {
             "tecla": "T",
             "inicio": 75584,
             "fin": 75853,
             "duracion": 269
         },
         {
             "tecla": "R",
             "inicio": 76035,
             "fin": 76327,
             "duracion": 292
         },
         {
             "tecla": "T",
             "inicio": 76003,
             "fin": 76343,
             "duracion": 340
         },
         {
             "tecla": "D",
             "inicio": 76464,
             "fin": 76752,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 76424,
             "fin": 76781,
             "duracion": 357
         },
         {
             "tecla": "D",
             "inicio": 76998,
             "fin": 77365,
             "duracion": 367
         },
         {
             "tecla": "Y",
             "inicio": 76901,
             "fin": 77381,
             "duracion": 480
         },
         {
             "tecla": "ESCAPE",
             "inicio": 75164,
             "fin": 77949,
             "duracion": 2785
         },
         {
             "tecla": "E",
             "inicio": 77767,
             "fin": 77949,
             "duracion": 182
         },
         {
             "tecla": "E",
             "inicio": 77950,
             "fin": 78100,
             "duracion": 150
         },
         {
             "tecla": "R",
             "inicio": 78189,
             "fin": 78305,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 78386,
             "fin": 78552,
             "duracion": 166
         },
         {
             "tecla": "E",
             "inicio": 78616,
             "fin": 78736,
             "duracion": 120
         },
         {
             "tecla": "R",
             "inicio": 78639,
             "fin": 78752,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 79037,
             "fin": 79252,
             "duracion": 215
         },
         {
             "tecla": "T",
             "inicio": 79053,
             "fin": 79268,
             "duracion": 215
         },
         {
             "tecla": "T",
             "inicio": 79469,
             "fin": 79640,
             "duracion": 171
         },
         {
             "tecla": "Y",
             "inicio": 79453,
             "fin": 79657,
             "duracion": 204
         },
         {
             "tecla": "T",
             "inicio": 79870,
             "fin": 79958,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 79846,
             "fin": 79982,
             "duracion": 136
         },
         {
             "tecla": "ESCAPE",
             "inicio": 78930,
             "fin": 80066,
             "duracion": 1136
         },
         {
             "tecla": "U",
             "inicio": 80133,
             "fin": 80376,
             "duracion": 243
         },
         {
             "tecla": "M",
             "inicio": 80117,
             "fin": 80389,
             "duracion": 272
         },
         {
             "tecla": "M",
             "inicio": 80560,
             "fin": 80797,
             "duracion": 237
         },
         {
             "tecla": "U",
             "inicio": 80536,
             "fin": 80821,
             "duracion": 285
         },
         {
             "tecla": "T",
             "inicio": 80933,
             "fin": 81072,
             "duracion": 139
         },
         {
             "tecla": "Y",
             "inicio": 80957,
             "fin": 81097,
             "duracion": 140
         },
         {
             "tecla": "Y",
             "inicio": 81216,
             "fin": 81513,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 81239,
             "fin": 81529,
             "duracion": 290
         },
         {
             "tecla": "T",
             "inicio": 81629,
             "fin": 82006,
             "duracion": 377
         },
         {
             "tecla": "Y",
             "inicio": 81645,
             "fin": 82030,
             "duracion": 385
         },
         {
             "tecla": "T",
             "inicio": 82528,
             "fin": 82719,
             "duracion": 191
         },
         {
             "tecla": "Y",
             "inicio": 82512,
             "fin": 82736,
             "duracion": 224
         },
         {
             "tecla": "Y",
             "inicio": 82918,
             "fin": 83192,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 82935,
             "fin": 83216,
             "duracion": 281
         },
         {
             "tecla": "ESCAPE",
             "inicio": 81551,
             "fin": 83231,
             "duracion": 1680
         },
         {
             "tecla": "R",
             "inicio": 83357,
             "fin": 83657,
             "duracion": 300
         },
         {
             "tecla": "T",
             "inicio": 83374,
             "fin": 83681,
             "duracion": 307
         },
         {
             "tecla": "R",
             "inicio": 83782,
             "fin": 84175,
             "duracion": 393
         },
         {
             "tecla": "T",
             "inicio": 83805,
             "fin": 84192,
             "duracion": 387
         },
         {
             "tecla": "ESCAPE",
             "inicio": 83753,
             "fin": 84279,
             "duracion": 526
         },
         {
             "tecla": "Y",
             "inicio": 84717,
             "fin": 84846,
             "duracion": 129
         },
         {
             "tecla": "T",
             "inicio": 84685,
             "fin": 84870,
             "duracion": 185
         },
         {
             "tecla": "Y",
             "inicio": 84975,
             "fin": 85054,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 84950,
             "fin": 85070,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 85152,
             "fin": 85247,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 85176,
             "fin": 85271,
             "duracion": 95
         },
         {
             "tecla": "ESCAPE",
             "inicio": 85286,
             "fin": 85492,
             "duracion": 206
         },
         {
             "tecla": "Y",
             "inicio": 85400,
             "fin": 85492,
             "duracion": 92
         },
         {
             "tecla": "T",
             "inicio": 85413,
             "fin": 85492,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 85493,
             "fin": 85540,
             "duracion": 47
         },
         {
             "tecla": "T",
             "inicio": 85493,
             "fin": 85565,
             "duracion": 72
         },
         {
             "tecla": "R",
             "inicio": 85677,
             "fin": 85805,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 85646,
             "fin": 85829,
             "duracion": 183
         },
         {
             "tecla": "ESCAPE",
             "inicio": 86100,
             "fin": 86237,
             "duracion": 137
         },
         {
             "tecla": "E",
             "inicio": 86173,
             "fin": 86237,
             "duracion": 64
         },
         {
             "tecla": "E",
             "inicio": 86237,
             "fin": 86260,
             "duracion": 23
         },
         {
             "tecla": "E",
             "inicio": 86405,
             "fin": 86606,
             "duracion": 201
         },
         {
             "tecla": "R",
             "inicio": 86381,
             "fin": 86639,
             "duracion": 258
         },
         {
             "tecla": "R",
             "inicio": 86798,
             "fin": 86893,
             "duracion": 95
         },
         {
             "tecla": "E",
             "inicio": 86784,
             "fin": 86917,
             "duracion": 133
         },
         {
             "tecla": "T",
             "inicio": 87033,
             "fin": 87321,
             "duracion": 288
         },
         {
             "tecla": "R",
             "inicio": 87017,
             "fin": 87337,
             "duracion": 320
         },
         {
             "tecla": "ESCAPE",
             "inicio": 86989,
             "fin": 87358,
             "duracion": 369
         },
         {
             "tecla": "R",
             "inicio": 87469,
             "fin": 87736,
             "duracion": 267
         },
         {
             "tecla": "T",
             "inicio": 87485,
             "fin": 87757,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 87923,
             "fin": 88039,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 87948,
             "fin": 88063,
             "duracion": 115
         },
         {
             "tecla": "M",
             "inicio": 88454,
             "fin": 88541,
             "duracion": 87
         },
         {
             "tecla": "U",
             "inicio": 88434,
             "fin": 88566,
             "duracion": 132
         },
         {
             "tecla": "M",
             "inicio": 88675,
             "fin": 88728,
             "duracion": 53
         },
         {
             "tecla": "U",
             "inicio": 88652,
             "fin": 88757,
             "duracion": 105
         },
         {
             "tecla": "M",
             "inicio": 88905,
             "fin": 88996,
             "duracion": 91
         },
         {
             "tecla": "U",
             "inicio": 88882,
             "fin": 89012,
             "duracion": 130
         },
         {
             "tecla": "Y",
             "inicio": 89093,
             "fin": 89215,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 89117,
             "fin": 89234,
             "duracion": 117
         },
         {
             "tecla": "Y",
             "inicio": 89338,
             "fin": 89598,
             "duracion": 260
         },
         {
             "tecla": "T",
             "inicio": 89358,
             "fin": 89624,
             "duracion": 266
         },
         {
             "tecla": "E",
             "inicio": 89765,
             "fin": 89897,
             "duracion": 132
         },
         {
             "tecla": "R",
             "inicio": 90014,
             "fin": 90304,
             "duracion": 290
         },
         {
             "tecla": "T",
             "inicio": 89999,
             "fin": 90320,
             "duracion": 321
         },
         {
             "tecla": "ESCAPE",
             "inicio": 89261,
             "fin": 90556,
             "duracion": 1295
         },
         {
             "tecla": "T",
             "inicio": 90414,
             "fin": 90556,
             "duracion": 142
         },
         {
             "tecla": "R",
             "inicio": 90429,
             "fin": 90557,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 90557,
             "fin": 90701,
             "duracion": 144
         },
         {
             "tecla": "R",
             "inicio": 90557,
             "fin": 90725,
             "duracion": 168
         },
         {
             "tecla": "R",
             "inicio": 90797,
             "fin": 91065,
             "duracion": 268
         },
         {
             "tecla": "T",
             "inicio": 90813,
             "fin": 91065,
             "duracion": 252
         },
         {
             "tecla": "R",
             "inicio": 91067,
             "fin": 91382,
             "duracion": 315
         },
         {
             "tecla": "T",
             "inicio": 91069,
             "fin": 91407,
             "duracion": 338
         },
         {
             "tecla": "T",
             "inicio": 91528,
             "fin": 91640,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 91544,
             "fin": 91666,
             "duracion": 122
         },
         {
             "tecla": "ESCAPE",
             "inicio": 91064,
             "fin": 91729,
             "duracion": 665
         },
         {
             "tecla": "Y",
             "inicio": 91982,
             "fin": 92101,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 92005,
             "fin": 92118,
             "duracion": 113
         },
         {
             "tecla": "Y",
             "inicio": 92221,
             "fin": 92305,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 92203,
             "fin": 92328,
             "duracion": 125
         },
         {
             "tecla": "Y",
             "inicio": 92423,
             "fin": 92510,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 92401,
             "fin": 92527,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 92645,
             "fin": 92764,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 92630,
             "fin": 92781,
             "duracion": 151
         },
         {
             "tecla": "ESCAPE",
             "inicio": 92558,
             "fin": 92813,
             "duracion": 255
         },
         {
             "tecla": "T",
             "inicio": 92893,
             "fin": 93191,
             "duracion": 298
         },
         {
             "tecla": "R",
             "inicio": 92917,
             "fin": 93208,
             "duracion": 291
         },
         {
             "tecla": "E",
             "inicio": 93329,
             "fin": 93353,
             "duracion": 24
         },
         {
             "tecla": "E",
             "inicio": 93354,
             "fin": 93436,
             "duracion": 82
         },
         {
             "tecla": "ESCAPE",
             "inicio": 93353,
             "fin": 93469,
             "duracion": 116
         },
         {
             "tecla": "R",
             "inicio": 93589,
             "fin": 93846,
             "duracion": 257
         },
         {
             "tecla": "E",
             "inicio": 93573,
             "fin": 93862,
             "duracion": 289
         },
         {
             "tecla": "E",
             "inicio": 93982,
             "fin": 94064,
             "duracion": 82
         },
         {
             "tecla": "R",
             "inicio": 93998,
             "fin": 94086,
             "duracion": 88
         },
         {
             "tecla": "T",
             "inicio": 94192,
             "fin": 94230,
             "duracion": 38
         },
         {
             "tecla": "R",
             "inicio": 94207,
             "fin": 94230,
             "duracion": 23
         },
         {
             "tecla": "R",
             "inicio": 94232,
             "fin": 94500,
             "duracion": 268
         },
         {
             "tecla": "T",
             "inicio": 94231,
             "fin": 94517,
             "duracion": 286
         },
         {
             "tecla": "ESCAPE",
             "inicio": 94230,
             "fin": 94566,
             "duracion": 336
         },
         {
             "tecla": "R",
             "inicio": 94677,
             "fin": 94942,
             "duracion": 265
         },
         {
             "tecla": "T",
             "inicio": 94661,
             "fin": 94965,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 95094,
             "fin": 95214,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 95119,
             "fin": 95238,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 95570,
             "fin": 95653,
             "duracion": 83
         },
         {
             "tecla": "Y",
             "inicio": 95590,
             "fin": 95678,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 95792,
             "fin": 95878,
             "duracion": 86
         },
         {
             "tecla": "T",
             "inicio": 95809,
             "fin": 95902,
             "duracion": 93
         },
         {
             "tecla": "T",
             "inicio": 96014,
             "fin": 96085,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 95991,
             "fin": 96101,
             "duracion": 110
         },
         {
             "tecla": "U",
             "inicio": 96187,
             "fin": 96300,
             "duracion": 113
         },
         {
             "tecla": "M",
             "inicio": 96215,
             "fin": 96325,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 96454,
             "fin": 96574,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 96440,
             "fin": 96588,
             "duracion": 148
         },
         {
             "tecla": "T",
             "inicio": 96689,
             "fin": 96870,
             "duracion": 181
         },
         {
             "tecla": "Y",
             "inicio": 96669,
             "fin": 96886,
             "duracion": 217
         },
         {
             "tecla": "ESCAPE",
             "inicio": 96416,
             "fin": 96910,
             "duracion": 494
         },
         {
             "tecla": "T",
             "inicio": 97133,
             "fin": 97213,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 97109,
             "fin": 97237,
             "duracion": 128
         },
         {
             "tecla": "R",
             "inicio": 97336,
             "fin": 97479,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 97363,
             "fin": 97503,
             "duracion": 140
         },
         {
             "tecla": "R",
             "inicio": 97586,
             "fin": 97796,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 97601,
             "fin": 97813,
             "duracion": 212
         },
         {
             "tecla": "T",
             "inicio": 98078,
             "fin": 98165,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 98053,
             "fin": 98190,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 98271,
             "fin": 98575,
             "duracion": 304
         },
         {
             "tecla": "T",
             "inicio": 98294,
             "fin": 98599,
             "duracion": 305
         },
         {
             "tecla": "E",
             "inicio": 98696,
             "fin": 99054,
             "duracion": 358
         },
         {
             "tecla": "R",
             "inicio": 98721,
             "fin": 99079,
             "duracion": 358
         },
         {
             "tecla": "R",
             "inicio": 99160,
             "fin": 99740,
             "duracion": 580
         },
         {
             "tecla": "T",
             "inicio": 99144,
             "fin": 99773,
             "duracion": 629
         },
         {
             "tecla": "R",
             "inicio": 100181,
             "fin": 100512,
             "duracion": 331
         },
         {
             "tecla": "U",
             "inicio": 100197,
             "fin": 100537,
             "duracion": 340
         },
         {
             "tecla": "R",
             "inicio": 100633,
             "fin": 100920,
             "duracion": 287
         },
         {
             "tecla": "U",
             "inicio": 100658,
             "fin": 100944,
             "duracion": 286
         },
         {
             "tecla": "T",
             "inicio": 101049,
             "fin": 101157,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 101283,
             "fin": 101590,
             "duracion": 307
         },
         {
             "tecla": "R",
             "inicio": 101680,
             "fin": 101999,
             "duracion": 319
         },
         {
             "tecla": "U",
             "inicio": 101705,
             "fin": 102021,
             "duracion": 316
         },
         {
             "tecla": "ESCAPE",
             "inicio": 97861,
             "fin": 102045,
             "duracion": 4184
         },
         {
             "tecla": "R",
             "inicio": 102101,
             "fin": 102421,
             "duracion": 320
         },
         {
             "tecla": "I",
             "inicio": 102117,
             "fin": 102446,
             "duracion": 329
         },
         {
             "tecla": "I",
             "inicio": 102549,
             "fin": 102848,
             "duracion": 299
         },
         {
             "tecla": "T",
             "inicio": 102529,
             "fin": 102863,
             "duracion": 334
         },
         {
             "tecla": "T",
             "inicio": 102953,
             "fin": 103297,
             "duracion": 344
         },
         {
             "tecla": "I",
             "inicio": 102973,
             "fin": 103318,
             "duracion": 345
         },
         {
             "tecla": "ESCAPE",
             "inicio": 102477,
             "fin": 103334,
             "duracion": 857
         },
         {
             "tecla": "O",
             "inicio": 103677,
             "fin": 103928,
             "duracion": 251
         },
         {
             "tecla": "T",
             "inicio": 103653,
             "fin": 103941,
             "duracion": 288
         },
         {
             "tecla": "O",
             "inicio": 104037,
             "fin": 104345,
             "duracion": 308
         },
         {
             "tecla": "T",
             "inicio": 104062,
             "fin": 104368,
             "duracion": 306
         },
         {
             "tecla": "T",
             "inicio": 104495,
             "fin": 104558,
             "duracion": 63
         },
         {
             "tecla": "O",
             "inicio": 104478,
             "fin": 104582,
             "duracion": 104
         },
         {
             "tecla": "O",
             "inicio": 104712,
             "fin": 104958,
             "duracion": 246
         },
         {
             "tecla": "T",
             "inicio": 104695,
             "fin": 104998,
             "duracion": 303
         },
         {
             "tecla": "R",
             "inicio": 105141,
             "fin": 105413,
             "duracion": 272
         },
         {
             "tecla": "I",
             "inicio": 105117,
             "fin": 105437,
             "duracion": 320
         },
         {
             "tecla": "R",
             "inicio": 105561,
             "fin": 105773,
             "duracion": 212
         },
         {
             "tecla": "I",
             "inicio": 105545,
             "fin": 105788,
             "duracion": 243
         },
         {
             "tecla": "T",
             "inicio": 105973,
             "fin": 106077,
             "duracion": 104
         },
         {
             "tecla": "I",
             "inicio": 105989,
             "fin": 106341,
             "duracion": 352
         },
         {
             "tecla": "U",
             "inicio": 106368,
             "fin": 106742,
             "duracion": 374
         },
         {
             "tecla": "ESCAPE",
             "inicio": 105812,
             "fin": 106780,
             "duracion": 968
         },
         {
             "tecla": "O",
             "inicio": 107037,
             "fin": 107312,
             "duracion": 275
         },
         {
             "tecla": "T",
             "inicio": 107054,
             "fin": 107329,
             "duracion": 275
         },
         {
             "tecla": "O",
             "inicio": 107448,
             "fin": 107712,
             "duracion": 264
         },
         {
             "tecla": "T",
             "inicio": 107432,
             "fin": 107736,
             "duracion": 304
         },
         {
             "tecla": "T",
             "inicio": 107840,
             "fin": 107917,
             "duracion": 77
         },
         {
             "tecla": "O",
             "inicio": 107857,
             "fin": 107933,
             "duracion": 76
         },
         {
             "tecla": "O",
             "inicio": 108037,
             "fin": 108345,
             "duracion": 308
         },
         {
             "tecla": "T",
             "inicio": 108061,
             "fin": 108384,
             "duracion": 323
         },
         {
             "tecla": "I",
             "inicio": 108480,
             "fin": 108800,
             "duracion": 320
         },
         {
             "tecla": "R",
             "inicio": 108504,
             "fin": 108817,
             "duracion": 313
         },
         {
             "tecla": "R",
             "inicio": 108918,
             "fin": 109181,
             "duracion": 263
         },
         {
             "tecla": "I",
             "inicio": 108902,
             "fin": 109198,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 109309,
             "fin": 109412,
             "duracion": 103
         },
         {
             "tecla": "I",
             "inicio": 109324,
             "fin": 109677,
             "duracion": 353
         },
         {
             "tecla": "U",
             "inicio": 109726,
             "fin": 110188,
             "duracion": 462
         },
         {
             "tecla": "R",
             "inicio": 110373,
             "fin": 110662,
             "duracion": 289
         },
         {
             "tecla": "U",
             "inicio": 110398,
             "fin": 110686,
             "duracion": 288
         },
         {
             "tecla": "R",
             "inicio": 110791,
             "fin": 111057,
             "duracion": 266
         },
         {
             "tecla": "U",
             "inicio": 110816,
             "fin": 111100,
             "duracion": 284
         },
         {
             "tecla": "R",
             "inicio": 111173,
             "fin": 111346,
             "duracion": 173
         },
         {
             "tecla": "ESCAPE",
             "inicio": 109222,
             "fin": 111416,
             "duracion": 2194
         },
         {
             "tecla": "U",
             "inicio": 111197,
             "fin": 111416,
             "duracion": 219
         },
         {
             "tecla": "U",
             "inicio": 111418,
             "fin": 111837,
             "duracion": 419
         },
         {
             "tecla": "Y",
             "inicio": 111815,
             "fin": 112174,
             "duracion": 359
         },
         {
             "tecla": "T",
             "inicio": 112246,
             "fin": 112612,
             "duracion": 366
         },
         {
             "tecla": "R",
             "inicio": 112683,
             "fin": 113030,
             "duracion": 347
         },
         {
             "tecla": "U",
             "inicio": 112666,
             "fin": 113046,
             "duracion": 380
         },
         {
             "tecla": "T",
             "inicio": 113093,
             "fin": 113569,
             "duracion": 476
         },
         {
             "tecla": "Y",
             "inicio": 113109,
             "fin": 113584,
             "duracion": 475
         },
         {
             "tecla": "R",
             "inicio": 113722,
             "fin": 114016,
             "duracion": 294
         },
         {
             "tecla": "R",
             "inicio": 114138,
             "fin": 114453,
             "duracion": 315
         },
         {
             "tecla": "T",
             "inicio": 114543,
             "fin": 114660,
             "duracion": 117
         },
         {
             "tecla": "ESCAPE",
             "inicio": 113069,
             "fin": 115157,
             "duracion": 2088
         },
         {
             "tecla": "Y",
             "inicio": 114749,
             "fin": 115157,
             "duracion": 408
         },
         {
             "tecla": "Y",
             "inicio": 115157,
             "fin": 115460,
             "duracion": 303
         },
         {
             "tecla": "T",
             "inicio": 115568,
             "fin": 115935,
             "duracion": 367
         },
         {
             "tecla": "R",
             "inicio": 116009,
             "fin": 116352,
             "duracion": 343
         },
         {
             "tecla": "U",
             "inicio": 115994,
             "fin": 116376,
             "duracion": 382
         },
         {
             "tecla": "Y",
             "inicio": 116438,
             "fin": 116844,
             "duracion": 406
         },
         {
             "tecla": "T",
             "inicio": 116420,
             "fin": 116860,
             "duracion": 440
         },
         {
             "tecla": "T",
             "inicio": 117082,
             "fin": 117345,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 117065,
             "fin": 117361,
             "duracion": 296
         },
         {
             "tecla": "Y",
             "inicio": 117482,
             "fin": 117711,
             "duracion": 229
         },
         {
             "tecla": "T",
             "inicio": 117467,
             "fin": 117729,
             "duracion": 262
         },
         {
             "tecla": "ESCAPE",
             "inicio": 116398,
             "fin": 118056,
             "duracion": 1658
         },
         {
             "tecla": "T",
             "inicio": 117857,
             "fin": 118056,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 117872,
             "fin": 118056,
             "duracion": 184
         },
         {
             "tecla": "T",
             "inicio": 118058,
             "fin": 118364,
             "duracion": 306
         },
         {
             "tecla": "Y",
             "inicio": 118059,
             "fin": 118388,
             "duracion": 329
         },
         {
             "tecla": "R",
             "inicio": 118455,
             "fin": 118752,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 118479,
             "fin": 118768,
             "duracion": 289
         },
         {
             "tecla": "R",
             "inicio": 118862,
             "fin": 119172,
             "duracion": 310
         },
         {
             "tecla": "T",
             "inicio": 118847,
             "fin": 119197,
             "duracion": 350
         },
         {
             "tecla": "T",
             "inicio": 119301,
             "fin": 119584,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 119277,
             "fin": 119606,
             "duracion": 329
         },
         {
             "tecla": "R",
             "inicio": 119703,
             "fin": 120143,
             "duracion": 440
         },
         {
             "tecla": "T",
             "inicio": 119687,
             "fin": 120157,
             "duracion": 470
         },
         {
             "tecla": "R",
             "inicio": 120385,
             "fin": 120704,
             "duracion": 319
         },
         {
             "tecla": "R",
             "inicio": 120810,
             "fin": 121104,
             "duracion": 294
         },
         {
             "tecla": "T",
             "inicio": 121189,
             "fin": 121324,
             "duracion": 135
         },
         {
             "tecla": "ESCAPE",
             "inicio": 119212,
             "fin": 121815,
             "duracion": 2603
         },
         {
             "tecla": "Y",
             "inicio": 121433,
             "fin": 121815,
             "duracion": 382
         },
         {
             "tecla": "Y",
             "inicio": 121817,
             "fin": 122164,
             "duracion": 347
         },
         {
             "tecla": "T",
             "inicio": 122261,
             "fin": 122615,
             "duracion": 354
         },
         {
             "tecla": "U",
             "inicio": 122712,
             "fin": 123001,
             "duracion": 289
         },
         {
             "tecla": "R",
             "inicio": 122697,
             "fin": 123024,
             "duracion": 327
         },
         {
             "tecla": "Y",
             "inicio": 123125,
             "fin": 123484,
             "duracion": 359
         },
         {
             "tecla": "T",
             "inicio": 123106,
             "fin": 123508,
             "duracion": 402
         },
         {
             "tecla": "T",
             "inicio": 123731,
             "fin": 124000,
             "duracion": 269
         },
         {
             "tecla": "Y",
             "inicio": 123746,
             "fin": 124024,
             "duracion": 278
         },
         {
             "tecla": "T",
             "inicio": 124131,
             "fin": 124392,
             "duracion": 261
         },
         {
             "tecla": "Y",
             "inicio": 124153,
             "fin": 124418,
             "duracion": 265
         },
         {
             "tecla": "ESCAPE",
             "inicio": 123086,
             "fin": 124768,
             "duracion": 1682
         },
         {
             "tecla": "T",
             "inicio": 124538,
             "fin": 124769,
             "duracion": 231
         },
         {
             "tecla": "Y",
             "inicio": 124554,
             "fin": 124769,
             "duracion": 215
         },
         {
             "tecla": "T",
             "inicio": 124771,
             "fin": 125068,
             "duracion": 297
         },
         {
             "tecla": "Y",
             "inicio": 124772,
             "fin": 125084,
             "duracion": 312
         },
         {
             "tecla": "T",
             "inicio": 125198,
             "fin": 125510,
             "duracion": 312
         },
         {
             "tecla": "R",
             "inicio": 125175,
             "fin": 125527,
             "duracion": 352
         },
         {
             "tecla": "R",
             "inicio": 125613,
             "fin": 125878,
             "duracion": 265
         },
         {
             "tecla": "T",
             "inicio": 125637,
             "fin": 125893,
             "duracion": 256
         },
         {
             "tecla": "T",
             "inicio": 126045,
             "fin": 126333,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 126032,
             "fin": 126357,
             "duracion": 325
         },
         {
             "tecla": "T",
             "inicio": 126464,
             "fin": 126656,
             "duracion": 192
         },
         {
             "tecla": "R",
             "inicio": 126442,
             "fin": 126696,
             "duracion": 254
         },
         {
             "tecla": "U",
             "inicio": 126862,
             "fin": 126990,
             "duracion": 128
         },
         {
             "tecla": "I",
             "inicio": 126886,
             "fin": 127006,
             "duracion": 120
         },
         {
             "tecla": "I",
             "inicio": 127078,
             "fin": 127167,
             "duracion": 89
         },
         {
             "tecla": "U",
             "inicio": 127062,
             "fin": 127183,
             "duracion": 121
         },
         {
             "tecla": "R",
             "inicio": 127309,
             "fin": 127431,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 127506,
             "fin": 127632,
             "duracion": 126
         },
         {
             "tecla": "I",
             "inicio": 127756,
             "fin": 128037,
             "duracion": 281
         },
         {
             "tecla": "U",
             "inicio": 127735,
             "fin": 128061,
             "duracion": 326
         },
         {
             "tecla": "ESCAPE",
             "inicio": 125976,
             "fin": 128078,
             "duracion": 2102
         },
         {
             "tecla": "O",
             "inicio": 128149,
             "fin": 128567,
             "duracion": 418
         },
         {
             "tecla": "I",
             "inicio": 128165,
             "fin": 128567,
             "duracion": 402
         },
         {
             "tecla": "O",
             "inicio": 128568,
             "fin": 128828,
             "duracion": 260
         },
         {
             "tecla": "I",
             "inicio": 128569,
             "fin": 128844,
             "duracion": 275
         },
         {
             "tecla": "U",
             "inicio": 129037,
             "fin": 129116,
             "duracion": 79
         },
         {
             "tecla": "I",
             "inicio": 129022,
             "fin": 129173,
             "duracion": 151
         },
         {
             "tecla": "U",
             "inicio": 129216,
             "fin": 129341,
             "duracion": 125
         },
         {
             "tecla": "ESCAPE",
             "inicio": 128567,
             "fin": 129366,
             "duracion": 799
         },
         {
             "tecla": "P",
             "inicio": 129448,
             "fin": 129756,
             "duracion": 308
         },
         {
             "tecla": "O",
             "inicio": 129429,
             "fin": 129772,
             "duracion": 343
         },
         {
             "tecla": "I",
             "inicio": 129846,
             "fin": 130200,
             "duracion": 354
         },
         {
             "tecla": "ESCAPE",
             "inicio": 129813,
             "fin": 130225,
             "duracion": 412
         },
         {
             "tecla": "O",
             "inicio": 129861,
             "fin": 130225,
             "duracion": 364
         },
         {
             "tecla": "O",
             "inicio": 130227,
             "fin": 130242,
             "duracion": 15
         },
         {
             "tecla": "U",
             "inicio": 130284,
             "fin": 130405,
             "duracion": 121
         },
         {
             "tecla": "I",
             "inicio": 130309,
             "fin": 130452,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 130477,
             "fin": 130633,
             "duracion": 156
         },
         {
             "tecla": "M",
             "inicio": 130722,
             "fin": 131093,
             "duracion": 371
         },
         {
             "tecla": ",",
             "inicio": 131167,
             "fin": 131719,
             "duracion": 552
         },
         {
             "tecla": "M",
             "inicio": 131184,
             "fin": 131741,
             "duracion": 557
         },
         {
             "tecla": "C",
             "inicio": 131696,
             "fin": 132340,
             "duracion": 644
         },
         {
             "tecla": ",",
             "inicio": 132365,
             "fin": 132656,
             "duracion": 291
         },
         {
             "tecla": "M",
             "inicio": 132381,
             "fin": 132674,
             "duracion": 293
         },
         {
             "tecla": "T",
             "inicio": 132793,
             "fin": 132981,
             "duracion": 188
         },
         {
             "tecla": "Y",
             "inicio": 132816,
             "fin": 132981,
             "duracion": 165
         },
         {
             "tecla": "T",
             "inicio": 132982,
             "fin": 133349,
             "duracion": 367
         },
         {
             "tecla": "Y",
             "inicio": 132982,
             "fin": 133365,
             "duracion": 383
         },
         {
             "tecla": "R",
             "inicio": 133445,
             "fin": 133560,
             "duracion": 115
         },
         {
             "tecla": "T",
             "inicio": 133469,
             "fin": 133632,
             "duracion": 163
         },
         {
             "tecla": "R",
             "inicio": 133666,
             "fin": 133808,
             "duracion": 142
         },
         {
             "tecla": "I",
             "inicio": 133920,
             "fin": 134311,
             "duracion": 391
         },
         {
             "tecla": "U",
             "inicio": 133896,
             "fin": 134327,
             "duracion": 431
         },
         {
             "tecla": "I",
             "inicio": 134453,
             "fin": 134533,
             "duracion": 80
         },
         {
             "tecla": "U",
             "inicio": 134420,
             "fin": 134549,
             "duracion": 129
         },
         {
             "tecla": "E",
             "inicio": 135076,
             "fin": 135222,
             "duracion": 146
         },
         {
             "tecla": "ESCAPE",
             "inicio": 132981,
             "fin": 135446,
             "duracion": 2465
         },
         {
             "tecla": "T",
             "inicio": 135279,
             "fin": 135446,
             "duracion": 167
         },
         {
             "tecla": "R",
             "inicio": 135301,
             "fin": 135446,
             "duracion": 145
         },
         {
             "tecla": "R",
             "inicio": 135448,
             "fin": 135655,
             "duracion": 207
         },
         {
             "tecla": "T",
             "inicio": 135447,
             "fin": 135676,
             "duracion": 229
         },
         {
             "tecla": "T",
             "inicio": 135741,
             "fin": 135884,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 135765,
             "fin": 135900,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 135981,
             "fin": 136241,
             "duracion": 260
         },
         {
             "tecla": "T",
             "inicio": 135997,
             "fin": 136263,
             "duracion": 266
         },
         {
             "tecla": "R",
             "inicio": 136342,
             "fin": 136527,
             "duracion": 185
         },
         {
             "tecla": "T",
             "inicio": 136365,
             "fin": 136548,
             "duracion": 183
         },
         {
             "tecla": "ESCAPE",
             "inicio": 135692,
             "fin": 136564,
             "duracion": 872
         },
         {
             "tecla": "R",
             "inicio": 136629,
             "fin": 136951,
             "duracion": 322
         },
         {
             "tecla": "T",
             "inicio": 136605,
             "fin": 136977,
             "duracion": 372
         },
         {
             "tecla": "T",
             "inicio": 136979,
             "fin": 136998,
             "duracion": 19
         },
         {
             "tecla": "R",
             "inicio": 137037,
             "fin": 137165,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 137054,
             "fin": 137188,
             "duracion": 134
         },
         {
             "tecla": "Y",
             "inicio": 137306,
             "fin": 137543,
             "duracion": 237
         },
         {
             "tecla": "T",
             "inicio": 137287,
             "fin": 137559,
             "duracion": 272
         },
         {
             "tecla": "Y",
             "inicio": 137744,
             "fin": 137965,
             "duracion": 221
         },
         {
             "tecla": "T",
             "inicio": 137761,
             "fin": 137981,
             "duracion": 220
         },
         {
             "tecla": "R",
             "inicio": 138117,
             "fin": 138249,
             "duracion": 132
         },
         {
             "tecla": "T",
             "inicio": 138102,
             "fin": 138272,
             "duracion": 170
         },
         {
             "tecla": "ESCAPE",
             "inicio": 136977,
             "fin": 138286,
             "duracion": 1309
         },
         {
             "tecla": "R",
             "inicio": 138373,
             "fin": 138852,
             "duracion": 479
         },
         {
             "tecla": "T",
             "inicio": 138357,
             "fin": 138868,
             "duracion": 511
         },
         {
             "tecla": "T",
             "inicio": 138869,
             "fin": 138894,
             "duracion": 25
         },
         {
             "tecla": "R",
             "inicio": 139029,
             "fin": 139124,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 139013,
             "fin": 139148,
             "duracion": 135
         },
         {
             "tecla": "Y",
             "inicio": 139266,
             "fin": 139568,
             "duracion": 302
         },
         {
             "tecla": "T",
             "inicio": 139242,
             "fin": 139600,
             "duracion": 358
         },
         {
             "tecla": "R",
             "inicio": 139720,
             "fin": 140088,
             "duracion": 368
         },
         {
             "tecla": "T",
             "inicio": 139695,
             "fin": 140105,
             "duracion": 410
         },
         {
             "tecla": "R",
             "inicio": 140419,
             "fin": 140558,
             "duracion": 139
         },
         {
             "tecla": "T",
             "inicio": 140624,
             "fin": 140742,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 140815,
             "fin": 140991,
             "duracion": 176
         },
         {
             "tecla": "R",
             "inicio": 141061,
             "fin": 141461,
             "duracion": 400
         },
         {
             "tecla": "T",
             "inicio": 141085,
             "fin": 141493,
             "duracion": 408
         },
         {
             "tecla": "E",
             "inicio": 142081,
             "fin": 142232,
             "duracion": 151
         },
         {
             "tecla": "R",
             "inicio": 142303,
             "fin": 142414,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 142291,
             "fin": 142438,
             "duracion": 147
         },
         {
             "tecla": "ESCAPE",
             "inicio": 138868,
             "fin": 142454,
             "duracion": 3586
         },
         {
             "tecla": "R",
             "inicio": 142502,
             "fin": 142620,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 142525,
             "fin": 142644,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 142725,
             "fin": 142884,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 142741,
             "fin": 142908,
             "duracion": 167
         },
         {
             "tecla": "Y",
             "inicio": 143008,
             "fin": 143229,
             "duracion": 221
         },
         {
             "tecla": "T",
             "inicio": 142992,
             "fin": 143252,
             "duracion": 260
         },
         {
             "tecla": "R",
             "inicio": 143349,
             "fin": 143504,
             "duracion": 155
         },
         {
             "tecla": "T",
             "inicio": 143365,
             "fin": 143529,
             "duracion": 164
         },
         {
             "tecla": "ESCAPE",
             "inicio": 142668,
             "fin": 143558,
             "duracion": 890
         },
         {
             "tecla": "R",
             "inicio": 143605,
             "fin": 143901,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 143629,
             "fin": 143917,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 144005,
             "fin": 144220,
             "duracion": 215
         },
         {
             "tecla": "ESCAPE",
             "inicio": 143949,
             "fin": 144236,
             "duracion": 287
         },
         {
             "tecla": "T",
             "inicio": 143990,
             "fin": 144236,
             "duracion": 246
         },
         {
             "tecla": "T",
             "inicio": 144237,
             "fin": 144272,
             "duracion": 35
         },
         {
             "tecla": "T",
             "inicio": 144317,
             "fin": 144593,
             "duracion": 276
         },
         {
             "tecla": "Y",
             "inicio": 144341,
             "fin": 144616,
             "duracion": 275
         },
         {
             "tecla": "T",
             "inicio": 144727,
             "fin": 144999,
             "duracion": 272
         },
         {
             "tecla": "Y",
             "inicio": 144745,
             "fin": 145016,
             "duracion": 271
         },
         {
             "tecla": "ESCAPE",
             "inicio": 145040,
             "fin": 145309,
             "duracion": 269
         },
         {
             "tecla": "T",
             "inicio": 145101,
             "fin": 145309,
             "duracion": 208
         },
         {
             "tecla": "Y",
             "inicio": 145125,
             "fin": 145309,
             "duracion": 184
         },
         {
             "tecla": "T",
             "inicio": 145309,
             "fin": 145325,
             "duracion": 16
         },
         {
             "tecla": "Y",
             "inicio": 145309,
             "fin": 145349,
             "duracion": 40
         },
         {
             "tecla": "R",
             "inicio": 145397,
             "fin": 145905,
             "duracion": 508
         },
         {
             "tecla": "T",
             "inicio": 145412,
             "fin": 145906,
             "duracion": 494
         },
         {
             "tecla": "R",
             "inicio": 145908,
             "fin": 145925,
             "duracion": 17
         },
         {
             "tecla": "T",
             "inicio": 145909,
             "fin": 145944,
             "duracion": 35
         },
         {
             "tecla": "R",
             "inicio": 146037,
             "fin": 146164,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 146021,
             "fin": 146180,
             "duracion": 159
         },
         {
             "tecla": "ESCAPE",
             "inicio": 145905,
             "fin": 146204,
             "duracion": 299
         },
         {
             "tecla": "E",
             "inicio": 146285,
             "fin": 146863,
             "duracion": 578
         },
         {
             "tecla": "R",
             "inicio": 146301,
             "fin": 146886,
             "duracion": 585
         },
         {
             "tecla": "ESCAPE",
             "inicio": 147038,
             "fin": 147365,
             "duracion": 327
         },
         {
             "tecla": "E",
             "inicio": 147141,
             "fin": 147365,
             "duracion": 224
         },
         {
             "tecla": "E",
             "inicio": 147365,
             "fin": 147500,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 147589,
             "fin": 147700,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 147781,
             "fin": 147926,
             "duracion": 145
         },
         {
             "tecla": "R",
             "inicio": 148040,
             "fin": 148543,
             "duracion": 503
         },
         {
             "tecla": "E",
             "inicio": 148016,
             "fin": 148558,
             "duracion": 542
         },
         {
             "tecla": "E",
             "inicio": 149038,
             "fin": 149204,
             "duracion": 166
         },
         {
             "tecla": "R",
             "inicio": 149293,
             "fin": 149381,
             "duracion": 88
         },
         {
             "tecla": "T",
             "inicio": 149277,
             "fin": 149406,
             "duracion": 129
         },
         {
             "tecla": "ESCAPE",
             "inicio": 149430,
             "fin": 149661,
             "duracion": 231
         },
         {
             "tecla": "T",
             "inicio": 149477,
             "fin": 149661,
             "duracion": 184
         },
         {
             "tecla": "Y",
             "inicio": 149503,
             "fin": 149661,
             "duracion": 158
         },
         {
             "tecla": "T",
             "inicio": 149661,
             "fin": 149836,
             "duracion": 175
         },
         {
             "tecla": "Y",
             "inicio": 149661,
             "fin": 149861,
             "duracion": 200
         },
         {
             "tecla": "Y",
             "inicio": 149965,
             "fin": 150228,
             "duracion": 263
         },
         {
             "tecla": "T",
             "inicio": 149948,
             "fin": 150252,
             "duracion": 304
         },
         {
             "tecla": "T",
             "inicio": 150327,
             "fin": 150485,
             "duracion": 158
         },
         {
             "tecla": "Y",
             "inicio": 150341,
             "fin": 150500,
             "duracion": 159
         },
         {
             "tecla": "ESCAPE",
             "inicio": 150292,
             "fin": 150524,
             "duracion": 232
         },
         {
             "tecla": "T",
             "inicio": 150573,
             "fin": 150869,
             "duracion": 296
         },
         {
             "tecla": "R",
             "inicio": 150598,
             "fin": 150892,
             "duracion": 294
         },
         {
             "tecla": "T",
             "inicio": 150977,
             "fin": 151000,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 151019,
             "fin": 151125,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 151001,
             "fin": 151149,
             "duracion": 148
         },
         {
             "tecla": "ESCAPE",
             "inicio": 150999,
             "fin": 151188,
             "duracion": 189
         },
         {
             "tecla": "T",
             "inicio": 151237,
             "fin": 151540,
             "duracion": 303
         },
         {
             "tecla": "Y",
             "inicio": 151260,
             "fin": 151558,
             "duracion": 298
         },
         {
             "tecla": "Y",
             "inicio": 151674,
             "fin": 151949,
             "duracion": 275
         },
         {
             "tecla": "T",
             "inicio": 151690,
             "fin": 151973,
             "duracion": 283
         },
         {
             "tecla": "ESCAPE",
             "inicio": 152029,
             "fin": 152220,
             "duracion": 191
         },
         {
             "tecla": "T",
             "inicio": 152077,
             "fin": 152220,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 152101,
             "fin": 152220,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 152221,
             "fin": 152245,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 152221,
             "fin": 152268,
             "duracion": 47
         },
         {
             "tecla": "T",
             "inicio": 152364,
             "fin": 152806,
             "duracion": 442
         },
         {
             "tecla": "R",
             "inicio": 152349,
             "fin": 152822,
             "duracion": 473
         },
         {
             "tecla": "Y",
             "inicio": 153045,
             "fin": 153156,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 153021,
             "fin": 153180,
             "duracion": 159
         },
         {
             "tecla": "ESCAPE",
             "inicio": 152918,
             "fin": 153206,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 153294,
             "fin": 153769,
             "duracion": 475
         },
         {
             "tecla": "T",
             "inicio": 153269,
             "fin": 153789,
             "duracion": 520
         },
         {
             "tecla": "C",
             "inicio": 153968,
             "fin": 154069,
             "duracion": 101
         },
         {
             "tecla": "C",
             "inicio": 154098,
             "fin": 155096,
             "duracion": 998
         },
         {
             "tecla": "V",
             "inicio": 153944,
             "fin": 155112,
             "duracion": 1168
         },
         {
             "tecla": "E",
             "inicio": 155911,
             "fin": 155933,
             "duracion": 22
         },
         {
             "tecla": "ESCAPE",
             "inicio": 155933,
             "fin": 156148,
             "duracion": 215
         },
         {
             "tecla": "E",
             "inicio": 155934,
             "fin": 156148,
             "duracion": 214
         },
         {
             "tecla": "E",
             "inicio": 156148,
             "fin": 156340,
             "duracion": 192
         },
         {
             "tecla": "R",
             "inicio": 156414,
             "fin": 156532,
             "duracion": 118
         },
         {
             "tecla": "M",
             "inicio": 156667,
             "fin": 156772,
             "duracion": 105
         },
         {
             "tecla": "U",
             "inicio": 156651,
             "fin": 156791,
             "duracion": 140
         },
         {
             "tecla": "U",
             "inicio": 156862,
             "fin": 157167,
             "duracion": 305
         },
         {
             "tecla": "M",
             "inicio": 156878,
             "fin": 157182,
             "duracion": 304
         },
         {
             "tecla": "T",
             "inicio": 157264,
             "fin": 157397,
             "duracion": 133
         },
         {
             "tecla": "Y",
             "inicio": 157280,
             "fin": 157414,
             "duracion": 134
         },
         {
             "tecla": "M",
             "inicio": 157528,
             "fin": 157790,
             "duracion": 262
         },
         {
             "tecla": "U",
             "inicio": 157512,
             "fin": 157811,
             "duracion": 299
         },
         {
             "tecla": "T",
             "inicio": 157920,
             "fin": 157997,
             "duracion": 77
         },
         {
             "tecla": "Y",
             "inicio": 157908,
             "fin": 158037,
             "duracion": 129
         },
         {
             "tecla": "U",
             "inicio": 158147,
             "fin": 158431,
             "duracion": 284
         },
         {
             "tecla": "M",
             "inicio": 158157,
             "fin": 158447,
             "duracion": 290
         },
         {
             "tecla": "T",
             "inicio": 158597,
             "fin": 158868,
             "duracion": 271
         },
         {
             "tecla": "Y",
             "inicio": 158581,
             "fin": 158886,
             "duracion": 305
         },
         {
             "tecla": "ESCAPE",
             "inicio": 158556,
             "fin": 158927,
             "duracion": 371
         },
         {
             "tecla": "U",
             "inicio": 159005,
             "fin": 159301,
             "duracion": 296
         },
         {
             "tecla": "M",
             "inicio": 159028,
             "fin": 159325,
             "duracion": 297
         },
         {
             "tecla": "Y",
             "inicio": 159415,
             "fin": 159725,
             "duracion": 310
         },
         {
             "tecla": "T",
             "inicio": 159437,
             "fin": 159749,
             "duracion": 312
         },
         {
             "tecla": "ESCAPE",
             "inicio": 159397,
             "fin": 159766,
             "duracion": 369
         },
         {
             "tecla": "R",
             "inicio": 159829,
             "fin": 159924,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 159853,
             "fin": 159948,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 160077,
             "fin": 160599,
             "duracion": 522
         },
         {
             "tecla": "R",
             "inicio": 160063,
             "fin": 160622,
             "duracion": 559
         },
         {
             "tecla": "T",
             "inicio": 160893,
             "fin": 160972,
             "duracion": 79
         },
         {
             "tecla": "Y",
             "inicio": 160869,
             "fin": 161005,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 161098,
             "fin": 161193,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 161315,
             "fin": 161422,
             "duracion": 107
         },
         {
             "tecla": "Y",
             "inicio": 161509,
             "fin": 161657,
             "duracion": 148
         },
         {
             "tecla": "R",
             "inicio": 161762,
             "fin": 161829,
             "duracion": 67
         },
         {
             "tecla": "T",
             "inicio": 161738,
             "fin": 161845,
             "duracion": 107
         },
         {
             "tecla": "M",
             "inicio": 162172,
             "fin": 162457,
             "duracion": 285
         },
         {
             "tecla": "U",
             "inicio": 162181,
             "fin": 162472,
             "duracion": 291
         },
         {
             "tecla": "U",
             "inicio": 162583,
             "fin": 162912,
             "duracion": 329
         },
         {
             "tecla": "M",
             "inicio": 162606,
             "fin": 162931,
             "duracion": 325
         },
         {
             "tecla": "ESCAPE",
             "inicio": 160005,
             "fin": 162951,
             "duracion": 2946
         },
         {
             "tecla": "T",
             "inicio": 163037,
             "fin": 163164,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 163021,
             "fin": 163180,
             "duracion": 159
         },
         {
             "tecla": "U",
             "inicio": 163277,
             "fin": 163532,
             "duracion": 255
         },
         {
             "tecla": "M",
             "inicio": 163293,
             "fin": 163556,
             "duracion": 263
         },
         {
             "tecla": "M",
             "inicio": 163739,
             "fin": 163950,
             "duracion": 211
         },
         {
             "tecla": "U",
             "inicio": 163723,
             "fin": 163966,
             "duracion": 243
         },
         {
             "tecla": "Y",
             "inicio": 164126,
             "fin": 164295,
             "duracion": 169
         },
         {
             "tecla": "T",
             "inicio": 164108,
             "fin": 164316,
             "duracion": 208
         },
         {
             "tecla": "ESCAPE",
             "inicio": 164078,
             "fin": 164332,
             "duracion": 254
         },
         {
             "tecla": "T",
             "inicio": 164389,
             "fin": 165120,
             "duracion": 731
         },
         {
             "tecla": "Y",
             "inicio": 164405,
             "fin": 165142,
             "duracion": 737
         },
         {
             "tecla": "R",
             "inicio": 165221,
             "fin": 165381,
             "duracion": 160
         },
         {
             "tecla": "T",
             "inicio": 165245,
             "fin": 165397,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 165661,
             "fin": 165989,
             "duracion": 328
         },
         {
             "tecla": "Y",
             "inicio": 165687,
             "fin": 166013,
             "duracion": 326
         },
         {
             "tecla": "T",
             "inicio": 166106,
             "fin": 166497,
             "duracion": 391
         },
         {
             "tecla": "Y",
             "inicio": 166122,
             "fin": 166497,
             "duracion": 375
         },
         {
             "tecla": "T",
             "inicio": 166499,
             "fin": 166856,
             "duracion": 357
         },
         {
             "tecla": "Y",
             "inicio": 166500,
             "fin": 166872,
             "duracion": 372
         },
         {
             "tecla": "ESCAPE",
             "inicio": 166497,
             "fin": 166894,
             "duracion": 397
         },
         {
             "tecla": "R",
             "inicio": 166965,
             "fin": 167428,
             "duracion": 463
         },
         {
             "tecla": "T",
             "inicio": 166989,
             "fin": 167444,
             "duracion": 455
         },
         {
             "tecla": "E",
             "inicio": 167754,
             "fin": 167777,
             "duracion": 23
         },
         {
             "tecla": "ESCAPE",
             "inicio": 167777,
             "fin": 167996,
             "duracion": 219
         },
         {
             "tecla": "E",
             "inicio": 167778,
             "fin": 167996,
             "duracion": 218
         },
         {
             "tecla": "E",
             "inicio": 167996,
             "fin": 168132,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 168238,
             "fin": 168333,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 168398,
             "fin": 168565,
             "duracion": 167
         },
         {
             "tecla": "E",
             "inicio": 168615,
             "fin": 168725,
             "duracion": 110
         },
         {
             "tecla": "R",
             "inicio": 168639,
             "fin": 168749,
             "duracion": 110
         },
         {
             "tecla": "M",
             "inicio": 169073,
             "fin": 169256,
             "duracion": 183
         },
         {
             "tecla": "U",
             "inicio": 169095,
             "fin": 169272,
             "duracion": 177
         },
         {
             "tecla": "U",
             "inicio": 169523,
             "fin": 169800,
             "duracion": 277
         },
         {
             "tecla": "M",
             "inicio": 169545,
             "fin": 169824,
             "duracion": 279
         },
         {
             "tecla": "ESCAPE",
             "inicio": 169905,
             "fin": 170125,
             "duracion": 220
         },
         {
             "tecla": "T",
             "inicio": 169934,
             "fin": 170125,
             "duracion": 191
         },
         {
             "tecla": "Y",
             "inicio": 169949,
             "fin": 170125,
             "duracion": 176
         },
         {
             "tecla": "Y",
             "inicio": 170126,
             "fin": 170357,
             "duracion": 231
         },
         {
             "tecla": "T",
             "inicio": 170125,
             "fin": 170381,
             "duracion": 256
         },
         {
             "tecla": "Y",
             "inicio": 170543,
             "fin": 170838,
             "duracion": 295
         },
         {
             "tecla": "T",
             "inicio": 170523,
             "fin": 170853,
             "duracion": 330
         },
         {
             "tecla": "R",
             "inicio": 170960,
             "fin": 171111,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 170937,
             "fin": 171135,
             "duracion": 198
         },
         {
             "tecla": "Y",
             "inicio": 171205,
             "fin": 171918,
             "duracion": 713
         },
         {
             "tecla": "T",
             "inicio": 171221,
             "fin": 171933,
             "duracion": 712
         },
         {
             "tecla": "T",
             "inicio": 172123,
             "fin": 172398,
             "duracion": 275
         },
         {
             "tecla": "R",
             "inicio": 172139,
             "fin": 172422,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 172536,
             "fin": 172817,
             "duracion": 281
         },
         {
             "tecla": "T",
             "inicio": 172512,
             "fin": 172833,
             "duracion": 321
         },
         {
             "tecla": "T",
             "inicio": 172960,
             "fin": 173281,
             "duracion": 321
         },
         {
             "tecla": "Y",
             "inicio": 172981,
             "fin": 173304,
             "duracion": 323
         },
         {
             "tecla": "ESCAPE",
             "inicio": 171151,
             "fin": 173318,
             "duracion": 2167
         },
         {
             "tecla": "T",
             "inicio": 173382,
             "fin": 173661,
             "duracion": 279
         },
         {
             "tecla": "R",
             "inicio": 173398,
             "fin": 173694,
             "duracion": 296
         },
         {
             "tecla": "R",
             "inicio": 173854,
             "fin": 174320,
             "duracion": 466
         },
         {
             "tecla": "T",
             "inicio": 173829,
             "fin": 174333,
             "duracion": 504
         },
         {
             "tecla": "T",
             "inicio": 174710,
             "fin": 174825,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 174687,
             "fin": 174841,
             "duracion": 154
         },
         {
             "tecla": "R",
             "inicio": 174930,
             "fin": 175048,
             "duracion": 118
         },
         {
             "tecla": "T",
             "inicio": 175150,
             "fin": 175258,
             "duracion": 108
         },
         {
             "tecla": "Y",
             "inicio": 175331,
             "fin": 175512,
             "duracion": 181
         },
         {
             "tecla": "R",
             "inicio": 175578,
             "fin": 175679,
             "duracion": 101
         },
         {
             "tecla": "T",
             "inicio": 175561,
             "fin": 175696,
             "duracion": 135
         },
         {
             "tecla": "M",
             "inicio": 176013,
             "fin": 176285,
             "duracion": 272
         },
         {
             "tecla": "U",
             "inicio": 175997,
             "fin": 176309,
             "duracion": 312
         },
         {
             "tecla": "U",
             "inicio": 176435,
             "fin": 176774,
             "duracion": 339
         },
         {
             "tecla": "M",
             "inicio": 176460,
             "fin": 176789,
             "duracion": 329
         },
         {
             "tecla": "ESCAPE",
             "inicio": 173785,
             "fin": 176813,
             "duracion": 3028
         },
         {
             "tecla": "T",
             "inicio": 176901,
             "fin": 177021,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 176878,
             "fin": 177045,
             "duracion": 167
         },
         {
             "tecla": "M",
             "inicio": 177144,
             "fin": 177430,
             "duracion": 286
         },
         {
             "tecla": "U",
             "inicio": 177128,
             "fin": 177456,
             "duracion": 328
         },
         {
             "tecla": "U",
             "inicio": 177543,
             "fin": 177833,
             "duracion": 290
         },
         {
             "tecla": "M",
             "inicio": 177568,
             "fin": 177849,
             "duracion": 281
         },
         {
             "tecla": "Y",
             "inicio": 177949,
             "fin": 178117,
             "duracion": 168
         },
         {
             "tecla": "T",
             "inicio": 177925,
             "fin": 178143,
             "duracion": 218
         },
         {
             "tecla": "ESCAPE",
             "inicio": 177885,
             "fin": 178157,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 178222,
             "fin": 178905,
             "duracion": 683
         },
         {
             "tecla": "Y",
             "inicio": 178207,
             "fin": 178926,
             "duracion": 719
         },
         {
             "tecla": "R",
             "inicio": 179102,
             "fin": 179320,
             "duracion": 218
         },
         {
             "tecla": "T",
             "inicio": 179119,
             "fin": 179342,
             "duracion": 223
         },
         {
             "tecla": "T",
             "inicio": 179569,
             "fin": 179790,
             "duracion": 221
         },
         {
             "tecla": "Y",
             "inicio": 179545,
             "fin": 179822,
             "duracion": 277
         },
         {
             "tecla": "T",
             "inicio": 180010,
             "fin": 180265,
             "duracion": 255
         },
         {
             "tecla": "Y",
             "inicio": 179993,
             "fin": 180288,
             "duracion": 295
         },
         {
             "tecla": "T",
             "inicio": 180381,
             "fin": 180693,
             "duracion": 312
         },
         {
             "tecla": "Y",
             "inicio": 180406,
             "fin": 180709,
             "duracion": 303
         },
         {
             "tecla": "ESCAPE",
             "inicio": 180337,
             "fin": 180749,
             "duracion": 412
         },
         {
             "tecla": "R",
             "inicio": 180837,
             "fin": 181194,
             "duracion": 357
         },
         {
             "tecla": "T",
             "inicio": 180856,
             "fin": 181218,
             "duracion": 362
         },
         {
             "tecla": "ESCAPE",
             "inicio": 181566,
             "fin": 181845,
             "duracion": 279
         },
         {
             "tecla": "E",
             "inicio": 181605,
             "fin": 181845,
             "duracion": 240
         },
         {
             "tecla": "E",
             "inicio": 181846,
             "fin": 181965,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 182053,
             "fin": 182151,
             "duracion": 98
         },
         {
             "tecla": "T",
             "inicio": 182231,
             "fin": 182401,
             "duracion": 170
         },
         {
             "tecla": "E",
             "inicio": 182448,
             "fin": 182550,
             "duracion": 102
         },
         {
             "tecla": "R",
             "inicio": 182465,
             "fin": 182575,
             "duracion": 110
         },
         {
             "tecla": "M",
             "inicio": 182894,
             "fin": 183183,
             "duracion": 289
         },
         {
             "tecla": "U",
             "inicio": 182877,
             "fin": 183207,
             "duracion": 330
         },
         {
             "tecla": "M",
             "inicio": 183328,
             "fin": 183582,
             "duracion": 254
         },
         {
             "tecla": "U",
             "inicio": 183304,
             "fin": 183598,
             "duracion": 294
         },
         {
             "tecla": "Y",
             "inicio": 183686,
             "fin": 183861,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 183701,
             "fin": 183877,
             "duracion": 176
         },
         {
             "tecla": "ESCAPE",
             "inicio": 183662,
             "fin": 183901,
             "duracion": 239
         },
         {
             "tecla": "Y",
             "inicio": 183965,
             "fin": 184261,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 183981,
             "fin": 184277,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 184419,
             "fin": 184670,
             "duracion": 251
         },
         {
             "tecla": "Y",
             "inicio": 184396,
             "fin": 184694,
             "duracion": 298
         },
         {
             "tecla": "R",
             "inicio": 184790,
             "fin": 184906,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 184806,
             "fin": 184918,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 185030,
             "fin": 185761,
             "duracion": 731
         },
         {
             "tecla": "Y",
             "inicio": 185045,
             "fin": 185781,
             "duracion": 736
         },
         {
             "tecla": "T",
             "inicio": 185906,
             "fin": 186032,
             "duracion": 126
         },
         {
             "tecla": "R",
             "inicio": 185891,
             "fin": 186058,
             "duracion": 167
         },
         {
             "tecla": "T",
             "inicio": 186313,
             "fin": 186592,
             "duracion": 279
         },
         {
             "tecla": "Y",
             "inicio": 186331,
             "fin": 186608,
             "duracion": 277
         },
         {
             "tecla": "T",
             "inicio": 186753,
             "fin": 187045,
             "duracion": 292
         },
         {
             "tecla": "Y",
             "inicio": 186773,
             "fin": 187071,
             "duracion": 298
         },
         {
             "tecla": "ESCAPE",
             "inicio": 184989,
             "fin": 187103,
             "duracion": 2114
         },
         {
             "tecla": "T",
             "inicio": 187198,
             "fin": 187397,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 187174,
             "fin": 187422,
             "duracion": 248
         },
         {
             "tecla": "R",
             "inicio": 187621,
             "fin": 188033,
             "duracion": 412
         },
         {
             "tecla": "T",
             "inicio": 187595,
             "fin": 188058,
             "duracion": 463
         },
         {
             "tecla": "T",
             "inicio": 188496,
             "fin": 188606,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 188480,
             "fin": 188622,
             "duracion": 142
         },
         {
             "tecla": "R",
             "inicio": 188706,
             "fin": 188822,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 188915,
             "fin": 189030,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 189104,
             "fin": 189282,
             "duracion": 178
         },
         {
             "tecla": "R",
             "inicio": 189323,
             "fin": 189413,
             "duracion": 90
         },
         {
             "tecla": "T",
             "inicio": 189335,
             "fin": 189429,
             "duracion": 94
         },
         {
             "tecla": "ESCAPE",
             "inicio": 187578,
             "fin": 189453,
             "duracion": 1875
         },
         {
             "tecla": "T",
             "inicio": 189782,
             "fin": 190062,
             "duracion": 280
         },
         {
             "tecla": "Y",
             "inicio": 189806,
             "fin": 190079,
             "duracion": 273
         },
         {
             "tecla": "T",
             "inicio": 190208,
             "fin": 190457,
             "duracion": 249
         },
         {
             "tecla": "Y",
             "inicio": 190193,
             "fin": 190473,
             "duracion": 280
         },
         {
             "tecla": "T",
             "inicio": 190614,
             "fin": 190696,
             "duracion": 82
         },
         {
             "tecla": "Y",
             "inicio": 190630,
             "fin": 190710,
             "duracion": 80
         },
         {
             "tecla": "T",
             "inicio": 190846,
             "fin": 191119,
             "duracion": 273
         },
         {
             "tecla": "Y",
             "inicio": 190862,
             "fin": 191136,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 191277,
             "fin": 191497,
             "duracion": 220
         },
         {
             "tecla": "Y",
             "inicio": 191262,
             "fin": 191521,
             "duracion": 259
         },
         {
             "tecla": "T",
             "inicio": 191694,
             "fin": 191797,
             "duracion": 103
         },
         {
             "tecla": "ESCAPE",
             "inicio": 191597,
             "fin": 191813,
             "duracion": 216
         },
         {
             "tecla": "Y",
             "inicio": 191677,
             "fin": 191813,
             "duracion": 136
         },
         {
             "tecla": "Y",
             "inicio": 191814,
             "fin": 191838,
             "duracion": 24
         },
         {
             "tecla": "U",
             "inicio": 191941,
             "fin": 192238,
             "duracion": 297
         },
         {
             "tecla": "M",
             "inicio": 191959,
             "fin": 192254,
             "duracion": 295
         },
         {
             "tecla": "Y",
             "inicio": 192354,
             "fin": 192575,
             "duracion": 221
         },
         {
             "tecla": "T",
             "inicio": 192340,
             "fin": 192591,
             "duracion": 251
         },
         {
             "tecla": "T",
             "inicio": 193168,
             "fin": 193438,
             "duracion": 270
         },
         {
             "tecla": "R",
             "inicio": 193155,
             "fin": 193463,
             "duracion": 308
         },
         {
             "tecla": "R",
             "inicio": 193564,
             "fin": 193837,
             "duracion": 273
         },
         {
             "tecla": "T",
             "inicio": 193579,
             "fin": 193885,
             "duracion": 306
         },
         {
             "tecla": "D",
             "inicio": 194008,
             "fin": 194297,
             "duracion": 289
         },
         {
             "tecla": "Y",
             "inicio": 193983,
             "fin": 194325,
             "duracion": 342
         },
         {
             "tecla": "D",
             "inicio": 194468,
             "fin": 194912,
             "duracion": 444
         },
         {
             "tecla": "Y",
             "inicio": 194453,
             "fin": 194935,
             "duracion": 482
         },
         {
             "tecla": "ESCAPE",
             "inicio": 192797,
             "fin": 195455,
             "duracion": 2658
         },
         {
             "tecla": "E",
             "inicio": 195242,
             "fin": 195455,
             "duracion": 213
         },
         {
             "tecla": "E",
             "inicio": 195456,
             "fin": 195701,
             "duracion": 245
         },
         {
             "tecla": "R",
             "inicio": 195677,
             "fin": 195781,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 195822,
             "fin": 196013,
             "duracion": 191
         },
         {
             "tecla": "E",
             "inicio": 196046,
             "fin": 196198,
             "duracion": 152
         },
         {
             "tecla": "R",
             "inicio": 196070,
             "fin": 196222,
             "duracion": 152
         },
         {
             "tecla": "T",
             "inicio": 196533,
             "fin": 196781,
             "duracion": 248
         },
         {
             "tecla": "Y",
             "inicio": 196517,
             "fin": 196805,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 196958,
             "fin": 197234,
             "duracion": 276
         },
         {
             "tecla": "T",
             "inicio": 196975,
             "fin": 197257,
             "duracion": 282
         },
         {
             "tecla": "T",
             "inicio": 197380,
             "fin": 197481,
             "duracion": 101
         },
         {
             "tecla": "Y",
             "inicio": 197363,
             "fin": 197506,
             "duracion": 143
         },
         {
             "tecla": "ESCAPE",
             "inicio": 196329,
             "fin": 197544,
             "duracion": 1215
         },
         {
             "tecla": "U",
             "inicio": 197622,
             "fin": 197882,
             "duracion": 260
         },
         {
             "tecla": "M",
             "inicio": 197598,
             "fin": 197904,
             "duracion": 306
         },
         {
             "tecla": "M",
             "inicio": 198064,
             "fin": 198349,
             "duracion": 285
         },
         {
             "tecla": "U",
             "inicio": 198085,
             "fin": 198365,
             "duracion": 280
         },
         {
             "tecla": "T",
             "inicio": 198495,
             "fin": 198623,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 198518,
             "fin": 198639,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 198751,
             "fin": 199029,
             "duracion": 278
         },
         {
             "tecla": "T",
             "inicio": 198735,
             "fin": 199045,
             "duracion": 310
         },
         {
             "tecla": "T",
             "inicio": 199144,
             "fin": 199553,
             "duracion": 409
         },
         {
             "tecla": "Y",
             "inicio": 199165,
             "fin": 199569,
             "duracion": 404
         },
         {
             "tecla": "ESCAPE",
             "inicio": 199104,
             "fin": 199590,
             "duracion": 486
         },
         {
             "tecla": "Y",
             "inicio": 200075,
             "fin": 200329,
             "duracion": 254
         },
         {
             "tecla": "T",
             "inicio": 200088,
             "fin": 200352,
             "duracion": 264
         },
         {
             "tecla": "ESCAPE",
             "inicio": 199638,
             "fin": 200854,
             "duracion": 1216
         },
         {
             "tecla": "Y",
             "inicio": 200525,
             "fin": 200854,
             "duracion": 329
         },
         {
             "tecla": "T",
             "inicio": 200541,
             "fin": 200854,
             "duracion": 313
         },
         {
             "tecla": "T",
             "inicio": 200855,
             "fin": 200878,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 200855,
             "fin": 200893,
             "duracion": 38
         },
         {
             "tecla": "R",
             "inicio": 200989,
             "fin": 201287,
             "duracion": 298
         },
         {
             "tecla": "T",
             "inicio": 201007,
             "fin": 201304,
             "duracion": 297
         },
         {
             "tecla": "ESCAPE",
             "inicio": 201383,
             "fin": 202198,
             "duracion": 815
         },
         {
             "tecla": "R",
             "inicio": 201431,
             "fin": 202198,
             "duracion": 767
         },
         {
             "tecla": "T",
             "inicio": 201453,
             "fin": 202198,
             "duracion": 745
         },
         {
             "tecla": "T",
             "inicio": 202202,
             "fin": 202217,
             "duracion": 15
         },
         {
             "tecla": "R",
             "inicio": 202201,
             "fin": 202230,
             "duracion": 29
         },
         {
             "tecla": "R",
             "inicio": 202445,
             "fin": 202854,
             "duracion": 409
         },
         {
             "tecla": "ESCAPE",
             "inicio": 202397,
             "fin": 202869,
             "duracion": 472
         },
         {
             "tecla": "T",
             "inicio": 202429,
             "fin": 202870,
             "duracion": 441
         },
         {
             "tecla": "T",
             "inicio": 202870,
             "fin": 202894,
             "duracion": 24
         },
         {
             "tecla": "R",
             "inicio": 203270,
             "fin": 203448,
             "duracion": 178
         },
         {
             "tecla": "T",
             "inicio": 203295,
             "fin": 203464,
             "duracion": 169
         },
         {
             "tecla": "T",
             "inicio": 203721,
             "fin": 203822,
             "duracion": 101
         },
         {
             "tecla": "Y",
             "inicio": 203700,
             "fin": 203854,
             "duracion": 154
         },
         {
             "tecla": "I",
             "inicio": 204098,
             "fin": 204440,
             "duracion": 342
         },
         {
             "tecla": ",",
             "inicio": 204075,
             "fin": 204457,
             "duracion": 382
         },
         {
             "tecla": "R",
             "inicio": 204886,
             "fin": 205096,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 204910,
             "fin": 205120,
             "duracion": 210
         },
         {
             "tecla": "T",
             "inicio": 205441,
             "fin": 205574,
             "duracion": 133
         },
         {
             "tecla": "Y",
             "inicio": 205466,
             "fin": 205598,
             "duracion": 132
         },
         {
             "tecla": "M",
             "inicio": 205739,
             "fin": 206105,
             "duracion": 366
         },
         {
             "tecla": "U",
             "inicio": 205721,
             "fin": 206120,
             "duracion": 399
         },
         {
             "tecla": "ESCAPE",
             "inicio": 204506,
             "fin": 206192,
             "duracion": 1686
         },
         {
             "tecla": "R",
             "inicio": 206619,
             "fin": 206810,
             "duracion": 191
         },
         {
             "tecla": "T",
             "inicio": 206643,
             "fin": 206825,
             "duracion": 182
         },
         {
             "tecla": "T",
             "inicio": 207061,
             "fin": 207209,
             "duracion": 148
         },
         {
             "tecla": "Y",
             "inicio": 207038,
             "fin": 207232,
             "duracion": 194
         },
         {
             "tecla": "M",
             "inicio": 207511,
             "fin": 207910,
             "duracion": 399
         },
         {
             "tecla": "U",
             "inicio": 207487,
             "fin": 207934,
             "duracion": 447
         },
         {
             "tecla": "R",
             "inicio": 208326,
             "fin": 208526,
             "duracion": 200
         },
         {
             "tecla": "T",
             "inicio": 208343,
             "fin": 208549,
             "duracion": 206
         },
         {
             "tecla": "T",
             "inicio": 208935,
             "fin": 209065,
             "duracion": 130
         },
         {
             "tecla": "Y",
             "inicio": 208950,
             "fin": 209081,
             "duracion": 131
         },
         {
             "tecla": "U",
             "inicio": 209173,
             "fin": 209634,
             "duracion": 461
         },
         {
             "tecla": "M",
             "inicio": 209189,
             "fin": 209662,
             "duracion": 473
         },
         {
             "tecla": "ESCAPE",
             "inicio": 207991,
             "fin": 209718,
             "duracion": 1727
         },
         {
             "tecla": "T",
             "inicio": 210029,
             "fin": 210184,
             "duracion": 155
         },
         {
             "tecla": "R",
             "inicio": 210006,
             "fin": 210200,
             "duracion": 194
         },
         {
             "tecla": "T",
             "inicio": 210444,
             "fin": 210535,
             "duracion": 91
         },
         {
             "tecla": "Y",
             "inicio": 210425,
             "fin": 210567,
             "duracion": 142
         },
         {
             "tecla": "U",
             "inicio": 210863,
             "fin": 211281,
             "duracion": 418
         },
         {
             "tecla": "M",
             "inicio": 210960,
             "fin": 211298,
             "duracion": 338
         },
         {
             "tecla": "R",
             "inicio": 211722,
             "fin": 211902,
             "duracion": 180
         },
         {
             "tecla": "T",
             "inicio": 211738,
             "fin": 211917,
             "duracion": 179
         },
         {
             "tecla": "T",
             "inicio": 212311,
             "fin": 212425,
             "duracion": 114
         },
         {
             "tecla": "Y",
             "inicio": 212291,
             "fin": 212457,
             "duracion": 166
         },
         {
             "tecla": "U",
             "inicio": 212562,
             "fin": 212833,
             "duracion": 271
         },
         {
             "tecla": "M",
             "inicio": 212582,
             "fin": 212847,
             "duracion": 265
         },
         {
             "tecla": "T",
             "inicio": 212947,
             "fin": 213080,
             "duracion": 133
         },
         {
             "tecla": "Y",
             "inicio": 212925,
             "fin": 213096,
             "duracion": 171
         },
         {
             "tecla": "ESCAPE",
             "inicio": 211318,
             "fin": 213128,
             "duracion": 1810
         },
         {
             "tecla": "R",
             "inicio": 213182,
             "fin": 213469,
             "duracion": 287
         },
         {
             "tecla": "T",
             "inicio": 213205,
             "fin": 213485,
             "duracion": 280
         },
         {
             "tecla": "E",
             "inicio": 213573,
             "fin": 213886,
             "duracion": 313
         },
         {
             "tecla": "E",
             "inicio": 213999,
             "fin": 214070,
             "duracion": 71
         },
         {
             "tecla": "R",
             "inicio": 214015,
             "fin": 214137,
             "duracion": 122
         },
         {
             "tecla": "E",
             "inicio": 214176,
             "fin": 214273,
             "duracion": 97
         },
         {
             "tecla": "Y",
             "inicio": 214416,
             "fin": 214541,
             "duracion": 125
         },
         {
             "tecla": "ESCAPE",
             "inicio": 214377,
             "fin": 214557,
             "duracion": 180
         },
         {
             "tecla": "U",
             "inicio": 214614,
             "fin": 214733,
             "duracion": 119
         },
         {
             "tecla": "I",
             "inicio": 214821,
             "fin": 214990,
             "duracion": 169
         },
         {
             "tecla": "Y",
             "inicio": 215077,
             "fin": 215433,
             "duracion": 356
         },
         {
             "tecla": "I",
             "inicio": 215055,
             "fin": 215462,
             "duracion": 407
         },
         {
             "tecla": "O",
             "inicio": 215094,
             "fin": 215478,
             "duracion": 384
         },
         {
             "tecla": "ESCAPE",
             "inicio": 215022,
             "fin": 215502,
             "duracion": 480
         },
         {
             "tecla": "U",
             "inicio": 215678,
             "fin": 215829,
             "duracion": 151
         },
         {
             "tecla": "I",
             "inicio": 215661,
             "fin": 215845,
             "duracion": 184
         },
         {
             "tecla": "M",
             "inicio": 215967,
             "fin": 216393,
             "duracion": 426
         },
         {
             "tecla": ",",
             "inicio": 215944,
             "fin": 216410,
             "duracion": 466
         },
         {
             "tecla": "M",
             "inicio": 216576,
             "fin": 216688,
             "duracion": 112
         },
         {
             "tecla": ",",
             "inicio": 216593,
             "fin": 216712,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 216837,
             "fin": 217688,
             "duracion": 851
         },
         {
             "tecla": "U",
             "inicio": 216862,
             "fin": 217712,
             "duracion": 850
         },
         {
             "tecla": "ESCAPE",
             "inicio": 216735,
             "fin": 217783,
             "duracion": 1048
         }
     ]
 
     },
 
     {
     nombre: "Brindo con el alma",
     cancion: [
         {
             "tecla": "T",
             "inicio": 1081,
             "fin": 1190,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 1094,
             "fin": 1206,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 1323,
             "fin": 1434,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 1344,
             "fin": 1457,
             "duracion": 113
         },
         {
             "tecla": "T",
             "inicio": 1582,
             "fin": 1679,
             "duracion": 97
         },
         {
             "tecla": "Y",
             "inicio": 1600,
             "fin": 1703,
             "duracion": 103
         },
         {
             "tecla": "U",
             "inicio": 1786,
             "fin": 2030,
             "duracion": 244
         },
         {
             "tecla": "M",
             "inicio": 1803,
             "fin": 2030,
             "duracion": 227
         },
         {
             "tecla": "U",
             "inicio": 2031,
             "fin": 2133,
             "duracion": 102
         },
         {
             "tecla": "M",
             "inicio": 2031,
             "fin": 2157,
             "duracion": 126
         },
         {
             "tecla": "ESCAPE",
             "inicio": 2030,
             "fin": 2455,
             "duracion": 425
         },
         {
             "tecla": "U",
             "inicio": 2262,
             "fin": 2456,
             "duracion": 194
         },
         {
             "tecla": "M",
             "inicio": 2286,
             "fin": 2456,
             "duracion": 170
         },
         {
             "tecla": "U",
             "inicio": 2457,
             "fin": 2670,
             "duracion": 213
         },
         {
             "tecla": "M",
             "inicio": 2458,
             "fin": 2686,
             "duracion": 228
         },
         {
             "tecla": "Y",
             "inicio": 2742,
             "fin": 2975,
             "duracion": 233
         },
         {
             "tecla": "T",
             "inicio": 2758,
             "fin": 2975,
             "duracion": 217
         },
         {
             "tecla": "T",
             "inicio": 2976,
             "fin": 3102,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 2976,
             "fin": 3126,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 3238,
             "fin": 3342,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 3254,
             "fin": 3360,
             "duracion": 106
         },
         {
             "tecla": "ESCAPE",
             "inicio": 2974,
             "fin": 3656,
             "duracion": 682
         },
         {
             "tecla": "T",
             "inicio": 3457,
             "fin": 3656,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 3481,
             "fin": 3656,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 3658,
             "fin": 3821,
             "duracion": 163
         },
         {
             "tecla": "Y",
             "inicio": 3659,
             "fin": 3870,
             "duracion": 211
         },
         {
             "tecla": "U",
             "inicio": 3897,
             "fin": 4026,
             "duracion": 129
         },
         {
             "tecla": "M",
             "inicio": 3918,
             "fin": 4049,
             "duracion": 131
         },
         {
             "tecla": "U",
             "inicio": 4137,
             "fin": 4341,
             "duracion": 204
         },
         {
             "tecla": "M",
             "inicio": 4163,
             "fin": 4366,
             "duracion": 203
         },
         {
             "tecla": "T",
             "inicio": 4382,
             "fin": 4563,
             "duracion": 181
         },
         {
             "tecla": "Y",
             "inicio": 4406,
             "fin": 4563,
             "duracion": 157
         },
         {
             "tecla": "T",
             "inicio": 4567,
             "fin": 4782,
             "duracion": 215
         },
         {
             "tecla": "Y",
             "inicio": 4569,
             "fin": 4801,
             "duracion": 232
         },
         {
             "tecla": "ESCAPE",
             "inicio": 4562,
             "fin": 4821,
             "duracion": 259
         },
         {
             "tecla": "R",
             "inicio": 4870,
             "fin": 4982,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 4856,
             "fin": 4998,
             "duracion": 142
         },
         {
             "tecla": "R",
             "inicio": 5070,
             "fin": 5193,
             "duracion": 123
         },
         {
             "tecla": "T",
             "inicio": 5086,
             "fin": 5209,
             "duracion": 123
         },
         {
             "tecla": "R",
             "inicio": 5319,
             "fin": 5398,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 5292,
             "fin": 5424,
             "duracion": 132
         },
         {
             "tecla": "ESCAPE",
             "inicio": 5513,
             "fin": 5741,
             "duracion": 228
         },
         {
             "tecla": "Y",
             "inicio": 5543,
             "fin": 5742,
             "duracion": 199
         },
         {
             "tecla": "T",
             "inicio": 5552,
             "fin": 5742,
             "duracion": 190
         },
         {
             "tecla": "Y",
             "inicio": 5742,
             "fin": 5917,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 5743,
             "fin": 5942,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 6006,
             "fin": 6249,
             "duracion": 243
         },
         {
             "tecla": "T",
             "inicio": 6023,
             "fin": 6250,
             "duracion": 227
         },
         {
             "tecla": "T",
             "inicio": 6252,
             "fin": 6349,
             "duracion": 97
         },
         {
             "tecla": "Y",
             "inicio": 6252,
             "fin": 6373,
             "duracion": 121
         },
         {
             "tecla": "ESCAPE",
             "inicio": 6249,
             "fin": 6413,
             "duracion": 164
         },
         {
             "tecla": "R",
             "inicio": 6438,
             "fin": 6734,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 6462,
             "fin": 6734,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 6735,
             "fin": 7106,
             "duracion": 371
         },
         {
             "tecla": "R",
             "inicio": 6734,
             "fin": 7130,
             "duracion": 396
         },
         {
             "tecla": "W",
             "inicio": 7356,
             "fin": 8079,
             "duracion": 723
         },
         {
             "tecla": "Y",
             "inicio": 7375,
             "fin": 8103,
             "duracion": 728
         },
         {
             "tecla": "ESCAPE",
             "inicio": 6734,
             "fin": 8304,
             "duracion": 1570
         },
         {
             "tecla": "T",
             "inicio": 8438,
             "fin": 8567,
             "duracion": 129
         },
         {
             "tecla": "Y",
             "inicio": 8462,
             "fin": 8582,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 8686,
             "fin": 8835,
             "duracion": 149
         },
         {
             "tecla": "Y",
             "inicio": 8702,
             "fin": 8858,
             "duracion": 156
         },
         {
             "tecla": "T",
             "inicio": 8934,
             "fin": 9038,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 8911,
             "fin": 9054,
             "duracion": 143
         },
         {
             "tecla": "U",
             "inicio": 9124,
             "fin": 9346,
             "duracion": 222
         },
         {
             "tecla": "M",
             "inicio": 9144,
             "fin": 9346,
             "duracion": 202
         },
         {
             "tecla": "U",
             "inicio": 9348,
             "fin": 9510,
             "duracion": 162
         },
         {
             "tecla": "M",
             "inicio": 9350,
             "fin": 9534,
             "duracion": 184
         },
         {
             "tecla": "ESCAPE",
             "inicio": 9346,
             "fin": 9832,
             "duracion": 486
         },
         {
             "tecla": "M",
             "inicio": 9590,
             "fin": 9832,
             "duracion": 242
         },
         {
             "tecla": "U",
             "inicio": 9614,
             "fin": 9832,
             "duracion": 218
         },
         {
             "tecla": "U",
             "inicio": 9835,
             "fin": 9982,
             "duracion": 147
         },
         {
             "tecla": "M",
             "inicio": 9834,
             "fin": 10070,
             "duracion": 236
         },
         {
             "tecla": "T",
             "inicio": 10030,
             "fin": 10303,
             "duracion": 273
         },
         {
             "tecla": "Y",
             "inicio": 10054,
             "fin": 10303,
             "duracion": 249
         },
         {
             "tecla": "Y",
             "inicio": 10304,
             "fin": 10398,
             "duracion": 94
         },
         {
             "tecla": "T",
             "inicio": 10303,
             "fin": 10413,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 10510,
             "fin": 10638,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 10534,
             "fin": 10662,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 10302,
             "fin": 10922,
             "duracion": 620
         },
         {
             "tecla": "Y",
             "inicio": 10742,
             "fin": 10922,
             "duracion": 180
         },
         {
             "tecla": "T",
             "inicio": 10758,
             "fin": 10923,
             "duracion": 165
         },
         {
             "tecla": "T",
             "inicio": 10926,
             "fin": 11189,
             "duracion": 263
         },
         {
             "tecla": "Y",
             "inicio": 10925,
             "fin": 11230,
             "duracion": 305
         },
         {
             "tecla": "U",
             "inicio": 11174,
             "fin": 11311,
             "duracion": 137
         },
         {
             "tecla": "M",
             "inicio": 11214,
             "fin": 11335,
             "duracion": 121
         },
         {
             "tecla": "M",
             "inicio": 11431,
             "fin": 11602,
             "duracion": 171
         },
         {
             "tecla": "U",
             "inicio": 11407,
             "fin": 11663,
             "duracion": 256
         },
         {
             "tecla": "Y",
             "inicio": 11627,
             "fin": 11824,
             "duracion": 197
         },
         {
             "tecla": "T",
             "inicio": 11641,
             "fin": 11824,
             "duracion": 183
         },
         {
             "tecla": "T",
             "inicio": 11826,
             "fin": 11998,
             "duracion": 172
         },
         {
             "tecla": "Y",
             "inicio": 11825,
             "fin": 12013,
             "duracion": 188
         },
         {
             "tecla": "ESCAPE",
             "inicio": 11823,
             "fin": 12037,
             "duracion": 214
         },
         {
             "tecla": "R",
             "inicio": 12110,
             "fin": 12189,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 12086,
             "fin": 12221,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 12302,
             "fin": 12410,
             "duracion": 108
         },
         {
             "tecla": "T",
             "inicio": 12319,
             "fin": 12433,
             "duracion": 114
         },
         {
             "tecla": "R",
             "inicio": 12501,
             "fin": 12610,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 12524,
             "fin": 12626,
             "duracion": 102
         },
         {
             "tecla": "T",
             "inicio": 12732,
             "fin": 12772,
             "duracion": 40
         },
         {
             "tecla": "Y",
             "inicio": 12757,
             "fin": 12772,
             "duracion": 15
         },
         {
             "tecla": "ESCAPE",
             "inicio": 12771,
             "fin": 12949,
             "duracion": 178
         },
         {
             "tecla": "T",
             "inicio": 12773,
             "fin": 12949,
             "duracion": 176
         },
         {
             "tecla": "Y",
             "inicio": 12774,
             "fin": 12950,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 12950,
             "fin": 13093,
             "duracion": 143
         },
         {
             "tecla": "Y",
             "inicio": 12951,
             "fin": 13110,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 13174,
             "fin": 13407,
             "duracion": 233
         },
         {
             "tecla": "T",
             "inicio": 13198,
             "fin": 13407,
             "duracion": 209
         },
         {
             "tecla": "T",
             "inicio": 13409,
             "fin": 13502,
             "duracion": 93
         },
         {
             "tecla": "Y",
             "inicio": 13408,
             "fin": 13526,
             "duracion": 118
         },
         {
             "tecla": "ESCAPE",
             "inicio": 13407,
             "fin": 13558,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 13607,
             "fin": 13846,
             "duracion": 239
         },
         {
             "tecla": "R",
             "inicio": 13630,
             "fin": 13846,
             "duracion": 216
         },
         {
             "tecla": "R",
             "inicio": 13847,
             "fin": 14354,
             "duracion": 507
         },
         {
             "tecla": "T",
             "inicio": 13847,
             "fin": 14392,
             "duracion": 545
         },
         {
             "tecla": "E",
             "inicio": 14524,
             "fin": 14638,
             "duracion": 114
         },
         {
             "tecla": "Y",
             "inicio": 14547,
             "fin": 14655,
             "duracion": 108
         },
         {
             "tecla": "U",
             "inicio": 14774,
             "fin": 14848,
             "duracion": 74
         },
         {
             "tecla": "R",
             "inicio": 14762,
             "fin": 14873,
             "duracion": 111
         },
         {
             "tecla": "E",
             "inicio": 14962,
             "fin": 15072,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 14986,
             "fin": 15095,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 15191,
             "fin": 15271,
             "duracion": 80
         },
         {
             "tecla": "R",
             "inicio": 15174,
             "fin": 15294,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 15408,
             "fin": 15494,
             "duracion": 86
         },
         {
             "tecla": "E",
             "inicio": 15376,
             "fin": 15510,
             "duracion": 134
         },
         {
             "tecla": "R",
             "inicio": 15620,
             "fin": 15735,
             "duracion": 115
         },
         {
             "tecla": "U",
             "inicio": 15644,
             "fin": 15751,
             "duracion": 107
         },
         {
             "tecla": "E",
             "inicio": 15836,
             "fin": 15953,
             "duracion": 117
         },
         {
             "tecla": "R",
             "inicio": 16048,
             "fin": 16145,
             "duracion": 97
         },
         {
             "tecla": "T",
             "inicio": 16258,
             "fin": 16385,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 16463,
             "fin": 16811,
             "duracion": 348
         },
         {
             "tecla": "ESCAPE",
             "inicio": 13846,
             "fin": 16865,
             "duracion": 3019
         },
         {
             "tecla": "T",
             "inicio": 16902,
             "fin": 17110,
             "duracion": 208
         },
         {
             "tecla": "T",
             "inicio": 17110,
             "fin": 17502,
             "duracion": 392
         },
         {
             "tecla": "ESCAPE",
             "inicio": 17110,
             "fin": 17526,
             "duracion": 416
         },
         {
             "tecla": "R",
             "inicio": 17568,
             "fin": 17862,
             "duracion": 294
         },
         {
             "tecla": "R",
             "inicio": 17863,
             "fin": 17926,
             "duracion": 63
         },
         {
             "tecla": "D",
             "inicio": 18022,
             "fin": 18166,
             "duracion": 144
         },
         {
             "tecla": "H",
             "inicio": 18046,
             "fin": 18182,
             "duracion": 136
         },
         {
             "tecla": "F",
             "inicio": 18261,
             "fin": 18360,
             "duracion": 99
         },
         {
             "tecla": "J",
             "inicio": 18283,
             "fin": 18376,
             "duracion": 93
         },
         {
             "tecla": "D",
             "inicio": 18464,
             "fin": 18575,
             "duracion": 111
         },
         {
             "tecla": "H",
             "inicio": 18480,
             "fin": 18593,
             "duracion": 113
         },
         {
             "tecla": "F",
             "inicio": 18682,
             "fin": 18798,
             "duracion": 116
         },
         {
             "tecla": "J",
             "inicio": 18707,
             "fin": 18814,
             "duracion": 107
         },
         {
             "tecla": "D",
             "inicio": 18925,
             "fin": 19032,
             "duracion": 107
         },
         {
             "tecla": "H",
             "inicio": 18947,
             "fin": 19056,
             "duracion": 109
         },
         {
             "tecla": "F",
             "inicio": 19132,
             "fin": 19251,
             "duracion": 119
         },
         {
             "tecla": "J",
             "inicio": 19146,
             "fin": 19266,
             "duracion": 120
         },
         {
             "tecla": "D",
             "inicio": 19345,
             "fin": 19526,
             "duracion": 181
         },
         {
             "tecla": "F",
             "inicio": 19566,
             "fin": 19662,
             "duracion": 96
         },
         {
             "tecla": "G",
             "inicio": 19776,
             "fin": 19914,
             "duracion": 138
         },
         {
             "tecla": "ESCAPE",
             "inicio": 17862,
             "fin": 19937,
             "duracion": 2075
         },
         {
             "tecla": "T",
             "inicio": 20014,
             "fin": 20440,
             "duracion": 426
         },
         {
             "tecla": "Y",
             "inicio": 20039,
             "fin": 20440,
             "duracion": 401
         },
         {
             "tecla": "T",
             "inicio": 20441,
             "fin": 20566,
             "duracion": 125
         },
         {
             "tecla": "Y",
             "inicio": 20442,
             "fin": 20582,
             "duracion": 140
         },
         {
             "tecla": "ESCAPE",
             "inicio": 20440,
             "fin": 20606,
             "duracion": 166
         },
         {
             "tecla": "R",
             "inicio": 20679,
             "fin": 21090,
             "duracion": 411
         },
         {
             "tecla": "T",
             "inicio": 20702,
             "fin": 21090,
             "duracion": 388
         },
         {
             "tecla": "R",
             "inicio": 21092,
             "fin": 21423,
             "duracion": 331
         },
         {
             "tecla": "T",
             "inicio": 21093,
             "fin": 21439,
             "duracion": 346
         },
         {
             "tecla": "E",
             "inicio": 21519,
             "fin": 21642,
             "duracion": 123
         },
         {
             "tecla": "Y",
             "inicio": 21542,
             "fin": 21659,
             "duracion": 117
         },
         {
             "tecla": "R",
             "inicio": 21729,
             "fin": 21838,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 21751,
             "fin": 21854,
             "duracion": 103
         },
         {
             "tecla": "E",
             "inicio": 21952,
             "fin": 22072,
             "duracion": 120
         },
         {
             "tecla": "Y",
             "inicio": 21977,
             "fin": 22094,
             "duracion": 117
         },
         {
             "tecla": "U",
             "inicio": 22209,
             "fin": 22314,
             "duracion": 105
         },
         {
             "tecla": "R",
             "inicio": 22185,
             "fin": 22338,
             "duracion": 153
         },
         {
             "tecla": "E",
             "inicio": 22420,
             "fin": 22535,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 22432,
             "fin": 22551,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 22640,
             "fin": 22759,
             "duracion": 119
         },
         {
             "tecla": "U",
             "inicio": 22664,
             "fin": 22800,
             "duracion": 136
         },
         {
             "tecla": "E",
             "inicio": 22856,
             "fin": 23018,
             "duracion": 162
         },
         {
             "tecla": "R",
             "inicio": 23068,
             "fin": 23211,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 23278,
             "fin": 23434,
             "duracion": 156
         },
         {
             "tecla": "Y",
             "inicio": 23512,
             "fin": 23831,
             "duracion": 319
         },
         {
             "tecla": "ESCAPE",
             "inicio": 21090,
             "fin": 23935,
             "duracion": 2845
         },
         {
             "tecla": "T",
             "inicio": 23924,
             "fin": 23935,
             "duracion": 11
         },
         {
             "tecla": "T",
             "inicio": 23936,
             "fin": 24198,
             "duracion": 262
         },
         {
             "tecla": "T",
             "inicio": 24198,
             "fin": 24578,
             "duracion": 380
         },
         {
             "tecla": "ESCAPE",
             "inicio": 24198,
             "fin": 24616,
             "duracion": 418
         },
         {
             "tecla": "R",
             "inicio": 24641,
             "fin": 24862,
             "duracion": 221
         },
         {
             "tecla": "ESCAPE",
             "inicio": 24962,
             "fin": 25442,
             "duracion": 480
         },
         {
             "tecla": "O",
             "inicio": 25231,
             "fin": 25442,
             "duracion": 211
         },
         {
             "tecla": "O",
             "inicio": 25444,
             "fin": 25654,
             "duracion": 210
         },
         {
             "tecla": "I",
             "inicio": 25630,
             "fin": 25862,
             "duracion": 232
         },
         {
             "tecla": "U",
             "inicio": 25845,
             "fin": 26011,
             "duracion": 166
         },
         {
             "tecla": "U",
             "inicio": 26143,
             "fin": 26440,
             "duracion": 297
         },
         {
             "tecla": "M",
             "inicio": 26167,
             "fin": 26456,
             "duracion": 289
         },
         {
             "tecla": "T",
             "inicio": 26544,
             "fin": 26663,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 26560,
             "fin": 26695,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 26834,
             "fin": 26895,
             "duracion": 61
         },
         {
             "tecla": "T",
             "inicio": 27015,
             "fin": 27111,
             "duracion": 96
         },
         {
             "tecla": "Y",
             "inicio": 27030,
             "fin": 27166,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 27206,
             "fin": 27322,
             "duracion": 116
         },
         {
             "tecla": "ESCAPE",
             "inicio": 26990,
             "fin": 27346,
             "duracion": 356
         },
         {
             "tecla": "R",
             "inicio": 27431,
             "fin": 27526,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 27455,
             "fin": 27593,
             "duracion": 138
         },
         {
             "tecla": "R",
             "inicio": 27639,
             "fin": 27754,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 27895,
             "fin": 27998,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 27904,
             "fin": 28038,
             "duracion": 134
         },
         {
             "tecla": "R",
             "inicio": 28143,
             "fin": 28415,
             "duracion": 272
         },
         {
             "tecla": "R",
             "inicio": 28535,
             "fin": 28647,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 28730,
             "fin": 28874,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 28948,
             "fin": 29074,
             "duracion": 126
         },
         {
             "tecla": "Y",
             "inicio": 29177,
             "fin": 29297,
             "duracion": 120
         },
         {
             "tecla": "E",
             "inicio": 29395,
             "fin": 29528,
             "duracion": 133
         },
         {
             "tecla": "R",
             "inicio": 29620,
             "fin": 29703,
             "duracion": 83
         },
         {
             "tecla": "T",
             "inicio": 29644,
             "fin": 29816,
             "duracion": 172
         },
         {
             "tecla": "R",
             "inicio": 29874,
             "fin": 30064,
             "duracion": 190
         },
         {
             "tecla": "E",
             "inicio": 30289,
             "fin": 30466,
             "duracion": 177
         },
         {
             "tecla": "R",
             "inicio": 30493,
             "fin": 30638,
             "duracion": 145
         },
         {
             "tecla": "R",
             "inicio": 30727,
             "fin": 30868,
             "duracion": 141
         },
         {
             "tecla": "ESCAPE",
             "inicio": 27866,
             "fin": 31114,
             "duracion": 3248
         },
         {
             "tecla": "R",
             "inicio": 30935,
             "fin": 31115,
             "duracion": 180
         },
         {
             "tecla": "R",
             "inicio": 31116,
             "fin": 31342,
             "duracion": 226
         },
         {
             "tecla": "T",
             "inicio": 31367,
             "fin": 31390,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 31390,
             "fin": 31874,
             "duracion": 484
         },
         {
             "tecla": "ESCAPE",
             "inicio": 31390,
             "fin": 32240,
             "duracion": 850
         },
         {
             "tecla": "R",
             "inicio": 32020,
             "fin": 32240,
             "duracion": 220
         },
         {
             "tecla": "R",
             "inicio": 32242,
             "fin": 32390,
             "duracion": 148
         },
         {
             "tecla": "R",
             "inicio": 32470,
             "fin": 32591,
             "duracion": 121
         },
         {
             "tecla": "R",
             "inicio": 32663,
             "fin": 32767,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 32862,
             "fin": 32879,
             "duracion": 17
         },
         {
             "tecla": "ESCAPE",
             "inicio": 32879,
             "fin": 33160,
             "duracion": 281
         },
         {
             "tecla": "T",
             "inicio": 32880,
             "fin": 33160,
             "duracion": 280
         },
         {
             "tecla": "T",
             "inicio": 33161,
             "fin": 33238,
             "duracion": 77
         },
         {
             "tecla": "T",
             "inicio": 33351,
             "fin": 33873,
             "duracion": 522
         },
         {
             "tecla": "T",
             "inicio": 33875,
             "fin": 33902,
             "duracion": 27
         },
         {
             "tecla": "D",
             "inicio": 34022,
             "fin": 34094,
             "duracion": 72
         },
         {
             "tecla": "H",
             "inicio": 34038,
             "fin": 34158,
             "duracion": 120
         },
         {
             "tecla": "F",
             "inicio": 34247,
             "fin": 34368,
             "duracion": 121
         },
         {
             "tecla": "G",
             "inicio": 34474,
             "fin": 34575,
             "duracion": 101
         },
         {
             "tecla": "H",
             "inicio": 34663,
             "fin": 34897,
             "duracion": 234
         },
         {
             "tecla": "F",
             "inicio": 34912,
             "fin": 35014,
             "duracion": 102
         },
         {
             "tecla": "G",
             "inicio": 34991,
             "fin": 35070,
             "duracion": 79
         },
         {
             "tecla": "F",
             "inicio": 35103,
             "fin": 35442,
             "duracion": 339
         },
         {
             "tecla": "Y",
             "inicio": 35572,
             "fin": 35681,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 35772,
             "fin": 35872,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 35980,
             "fin": 36089,
             "duracion": 109
         },
         {
             "tecla": "Y",
             "inicio": 36200,
             "fin": 36313,
             "duracion": 113
         },
         {
             "tecla": "ESCAPE",
             "inicio": 33873,
             "fin": 36666,
             "duracion": 2793
         },
         {
             "tecla": "Y",
             "inicio": 36417,
             "fin": 36666,
             "duracion": 249
         },
         {
             "tecla": "Y",
             "inicio": 36668,
             "fin": 37076,
             "duracion": 408
         },
         {
             "tecla": "Y",
             "inicio": 37079,
             "fin": 37182,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 37302,
             "fin": 37434,
             "duracion": 132
         },
         {
             "tecla": "ESCAPE",
             "inicio": 37076,
             "fin": 37466,
             "duracion": 390
         },
         {
             "tecla": "T",
             "inicio": 37550,
             "fin": 37991,
             "duracion": 441
         },
         {
             "tecla": "T",
             "inicio": 37991,
             "fin": 38294,
             "duracion": 303
         },
         {
             "tecla": "E",
             "inicio": 38445,
             "fin": 38544,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 38474,
             "fin": 38736,
             "duracion": 262
         },
         {
             "tecla": "R",
             "inicio": 38857,
             "fin": 38934,
             "duracion": 77
         },
         {
             "tecla": "U",
             "inicio": 38873,
             "fin": 39051,
             "duracion": 178
         },
         {
             "tecla": "R",
             "inicio": 39116,
             "fin": 39208,
             "duracion": 92
         },
         {
             "tecla": "U",
             "inicio": 39321,
             "fin": 39446,
             "duracion": 125
         },
         {
             "tecla": "T",
             "inicio": 39551,
             "fin": 39672,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 39778,
             "fin": 39886,
             "duracion": 108
         },
         {
             "tecla": "E",
             "inicio": 40004,
             "fin": 40162,
             "duracion": 158
         },
         {
             "tecla": "R",
             "inicio": 40215,
             "fin": 40347,
             "duracion": 132
         },
         {
             "tecla": "T",
             "inicio": 40232,
             "fin": 40426,
             "duracion": 194
         },
         {
             "tecla": "R",
             "inicio": 40504,
             "fin": 40649,
             "duracion": 145
         },
         {
             "tecla": "E",
             "inicio": 40884,
             "fin": 41017,
             "duracion": 133
         },
         {
             "tecla": "R",
             "inicio": 41114,
             "fin": 41247,
             "duracion": 133
         },
         {
             "tecla": "R",
             "inicio": 41336,
             "fin": 41450,
             "duracion": 114
         },
         {
             "tecla": "ESCAPE",
             "inicio": 37991,
             "fin": 41729,
             "duracion": 3738
         },
         {
             "tecla": "R",
             "inicio": 41557,
             "fin": 41729,
             "duracion": 172
         },
         {
             "tecla": "R",
             "inicio": 41731,
             "fin": 41982,
             "duracion": 251
         },
         {
             "tecla": "R",
             "inicio": 41983,
             "fin": 42023,
             "duracion": 40
         },
         {
             "tecla": "T",
             "inicio": 41999,
             "fin": 42386,
             "duracion": 387
         },
         {
             "tecla": "ESCAPE",
             "inicio": 41982,
             "fin": 42866,
             "duracion": 884
         },
         {
             "tecla": "R",
             "inicio": 42634,
             "fin": 42867,
             "duracion": 233
         },
         {
             "tecla": "R",
             "inicio": 42868,
             "fin": 42998,
             "duracion": 130
         },
         {
             "tecla": "R",
             "inicio": 43086,
             "fin": 43198,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 43288,
             "fin": 43394,
             "duracion": 106
         },
         {
             "tecla": "ESCAPE",
             "inicio": 43516,
             "fin": 43790,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 43528,
             "fin": 43790,
             "duracion": 262
         },
         {
             "tecla": "T",
             "inicio": 43791,
             "fin": 43886,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 43999,
             "fin": 44394,
             "duracion": 395
         },
         {
             "tecla": "D",
             "inicio": 44694,
             "fin": 44790,
             "duracion": 96
         },
         {
             "tecla": "H",
             "inicio": 44670,
             "fin": 44838,
             "duracion": 168
         },
         {
             "tecla": "F",
             "inicio": 44918,
             "fin": 45035,
             "duracion": 117
         },
         {
             "tecla": "G",
             "inicio": 45121,
             "fin": 45224,
             "duracion": 103
         },
         {
             "tecla": "H",
             "inicio": 45344,
             "fin": 45529,
             "duracion": 185
         },
         {
             "tecla": "F",
             "inicio": 45563,
             "fin": 45665,
             "duracion": 102
         },
         {
             "tecla": "G",
             "inicio": 45642,
             "fin": 45737,
             "duracion": 95
         },
         {
             "tecla": "F",
             "inicio": 45755,
             "fin": 45914,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 46204,
             "fin": 46343,
             "duracion": 139
         },
         {
             "tecla": "Y",
             "inicio": 46438,
             "fin": 46554,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 46652,
             "fin": 46751,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 46876,
             "fin": 46983,
             "duracion": 107
         },
         {
             "tecla": "ESCAPE",
             "inicio": 44514,
             "fin": 47311,
             "duracion": 2797
         },
         {
             "tecla": "Y",
             "inicio": 47093,
             "fin": 47311,
             "duracion": 218
         },
         {
             "tecla": "Y",
             "inicio": 47312,
             "fin": 47755,
             "duracion": 443
         },
         {
             "tecla": "Y",
             "inicio": 47758,
             "fin": 47838,
             "duracion": 80
         },
         {
             "tecla": "Y",
             "inicio": 48017,
             "fin": 48098,
             "duracion": 81
         },
         {
             "tecla": "ESCAPE",
             "inicio": 47755,
             "fin": 48135,
             "duracion": 380
         },
         {
             "tecla": "T",
             "inicio": 48230,
             "fin": 48667,
             "duracion": 437
         },
         {
             "tecla": "T",
             "inicio": 48670,
             "fin": 48815,
             "duracion": 145
         },
         {
             "tecla": "R",
             "inicio": 49085,
             "fin": 49369,
             "duracion": 284
         },
         {
             "tecla": "U",
             "inicio": 49098,
             "fin": 49392,
             "duracion": 294
         },
         {
             "tecla": "R",
             "inicio": 49541,
             "fin": 49649,
             "duracion": 108
         },
         {
             "tecla": "U",
             "inicio": 49525,
             "fin": 49681,
             "duracion": 156
         },
         {
             "tecla": "R",
             "inicio": 49754,
             "fin": 49889,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 49967,
             "fin": 50098,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 50195,
             "fin": 50319,
             "duracion": 124
         },
         {
             "tecla": "Y",
             "inicio": 50406,
             "fin": 50526,
             "duracion": 120
         },
         {
             "tecla": "E",
             "inicio": 50607,
             "fin": 50751,
             "duracion": 144
         },
         {
             "tecla": "R",
             "inicio": 50839,
             "fin": 50962,
             "duracion": 123
         },
         {
             "tecla": "T",
             "inicio": 50855,
             "fin": 51022,
             "duracion": 167
         },
         {
             "tecla": "R",
             "inicio": 51071,
             "fin": 51195,
             "duracion": 124
         },
         {
             "tecla": "R",
             "inicio": 51289,
             "fin": 51402,
             "duracion": 113
         },
         {
             "tecla": "R",
             "inicio": 51516,
             "fin": 51609,
             "duracion": 93
         },
         {
             "tecla": "R",
             "inicio": 51945,
             "fin": 52065,
             "duracion": 120
         },
         {
             "tecla": "R",
             "inicio": 52162,
             "fin": 52278,
             "duracion": 116
         },
         {
             "tecla": "ESCAPE",
             "inicio": 48666,
             "fin": 52498,
             "duracion": 3832
         },
         {
             "tecla": "R",
             "inicio": 52369,
             "fin": 52499,
             "duracion": 130
         },
         {
             "tecla": "R",
             "inicio": 52500,
             "fin": 52518,
             "duracion": 18
         },
         {
             "tecla": "T",
             "inicio": 52606,
             "fin": 52750,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 52863,
             "fin": 53134,
             "duracion": 271
         },
         {
             "tecla": "Y",
             "inicio": 53235,
             "fin": 53351,
             "duracion": 116
         },
         {
             "tecla": "ESCAPE",
             "inicio": 53432,
             "fin": 53816,
             "duracion": 384
         },
         {
             "tecla": "U",
             "inicio": 53474,
             "fin": 53816,
             "duracion": 342
         },
         {
             "tecla": "U",
             "inicio": 53817,
             "fin": 54046,
             "duracion": 229
         },
         {
             "tecla": "Y",
             "inicio": 54095,
             "fin": 54383,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 54384,
             "fin": 54600,
             "duracion": 216
         },
         {
             "tecla": "T",
             "inicio": 54655,
             "fin": 54886,
             "duracion": 231
         },
         {
             "tecla": "Y",
             "inicio": 55041,
             "fin": 55186,
             "duracion": 145
         },
         {
             "tecla": "ESCAPE",
             "inicio": 54383,
             "fin": 55210,
             "duracion": 827
         },
         {
             "tecla": "U",
             "inicio": 55271,
             "fin": 55639,
             "duracion": 368
         },
         {
             "tecla": "Y",
             "inicio": 55663,
             "fin": 55890,
             "duracion": 227
         },
         {
             "tecla": "Y",
             "inicio": 55892,
             "fin": 56070,
             "duracion": 178
         },
         {
             "tecla": "ESCAPE",
             "inicio": 55890,
             "fin": 56094,
             "duracion": 204
         },
         {
             "tecla": "T",
             "inicio": 56126,
             "fin": 56318,
             "duracion": 192
         },
         {
             "tecla": "R",
             "inicio": 56359,
             "fin": 56612,
             "duracion": 253
         },
         {
             "tecla": "ESCAPE",
             "inicio": 56666,
             "fin": 56949,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 56752,
             "fin": 56950,
             "duracion": 198
         },
         {
             "tecla": "Y",
             "inicio": 56950,
             "fin": 57375,
             "duracion": 425
         },
         {
             "tecla": "Y",
             "inicio": 57376,
             "fin": 57502,
             "duracion": 126
         },
         {
             "tecla": "ESCAPE",
             "inicio": 57375,
             "fin": 57518,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 57561,
             "fin": 57726,
             "duracion": 165
         },
         {
             "tecla": "Y",
             "inicio": 57807,
             "fin": 57873,
             "duracion": 66
         },
         {
             "tecla": "Y",
             "inicio": 57875,
             "fin": 58174,
             "duracion": 299
         },
         {
             "tecla": "W",
             "inicio": 58485,
             "fin": 58769,
             "duracion": 284
         },
         {
             "tecla": "Y",
             "inicio": 58468,
             "fin": 58792,
             "duracion": 324
         },
         {
             "tecla": "ESCAPE",
             "inicio": 57873,
             "fin": 58809,
             "duracion": 936
         },
         {
             "tecla": "T",
             "inicio": 58849,
             "fin": 59006,
             "duracion": 157
         },
         {
             "tecla": "R",
             "inicio": 59110,
             "fin": 59206,
             "duracion": 96
         },
         {
             "tecla": "T",
             "inicio": 59289,
             "fin": 59465,
             "duracion": 176
         },
         {
             "tecla": "T",
             "inicio": 59579,
             "fin": 59681,
             "duracion": 102
         },
         {
             "tecla": "Y",
             "inicio": 59781,
             "fin": 60098,
             "duracion": 317
         },
         {
             "tecla": "Y",
             "inicio": 60245,
             "fin": 60327,
             "duracion": 82
         },
         {
             "tecla": "Y",
             "inicio": 60441,
             "fin": 60660,
             "duracion": 219
         },
         {
             "tecla": "ESCAPE",
             "inicio": 60660,
             "fin": 60966,
             "duracion": 306
         },
         {
             "tecla": "Y",
             "inicio": 60663,
             "fin": 60966,
             "duracion": 303
         },
         {
             "tecla": "Y",
             "inicio": 60966,
             "fin": 61014,
             "duracion": 48
         },
         {
             "tecla": "T",
             "inicio": 61054,
             "fin": 61238,
             "duracion": 184
         },
         {
             "tecla": "Y",
             "inicio": 61334,
             "fin": 61470,
             "duracion": 136
         },
         {
             "tecla": "ESCAPE",
             "inicio": 61270,
             "fin": 61958,
             "duracion": 688
         },
         {
             "tecla": "T",
             "inicio": 61550,
             "fin": 61959,
             "duracion": 409
         },
         {
             "tecla": "T",
             "inicio": 61959,
             "fin": 62158,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 62206,
             "fin": 62570,
             "duracion": 364
         },
         {
             "tecla": "ESCAPE",
             "inicio": 62182,
             "fin": 62614,
             "duracion": 432
         },
         {
             "tecla": "T",
             "inicio": 62600,
             "fin": 62614,
             "duracion": 14
         },
         {
             "tecla": "T",
             "inicio": 62614,
             "fin": 62841,
             "duracion": 227
         },
         {
             "tecla": "ESCAPE",
             "inicio": 62841,
             "fin": 63046,
             "duracion": 205
         },
         {
             "tecla": "T",
             "inicio": 62842,
             "fin": 63046,
             "duracion": 204
         },
         {
             "tecla": "T",
             "inicio": 63047,
             "fin": 63246,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 63279,
             "fin": 63590,
             "duracion": 311
         },
         {
             "tecla": "ESCAPE",
             "inicio": 63654,
             "fin": 63902,
             "duracion": 248
         },
         {
             "tecla": "T",
             "inicio": 63689,
             "fin": 63902,
             "duracion": 213
         },
         {
             "tecla": "T",
             "inicio": 63903,
             "fin": 64295,
             "duracion": 392
         },
         {
             "tecla": "T",
             "inicio": 64296,
             "fin": 64454,
             "duracion": 158
         },
         {
             "tecla": "ESCAPE",
             "inicio": 64295,
             "fin": 64470,
             "duracion": 175
         },
         {
             "tecla": "R",
             "inicio": 64511,
             "fin": 64742,
             "duracion": 231
         },
         {
             "tecla": "R",
             "inicio": 64742,
             "fin": 65265,
             "duracion": 523
         },
         {
             "tecla": "T",
             "inicio": 65665,
             "fin": 66594,
             "duracion": 929
         },
         {
             "tecla": "Y",
             "inicio": 65645,
             "fin": 66610,
             "duracion": 965
         },
         {
             "tecla": "T",
             "inicio": 66689,
             "fin": 66800,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 66705,
             "fin": 66816,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 64742,
             "fin": 67134,
             "duracion": 2392
         },
         {
             "tecla": "T",
             "inicio": 66896,
             "fin": 67134,
             "duracion": 238
         },
         {
             "tecla": "Y",
             "inicio": 66920,
             "fin": 67134,
             "duracion": 214
         },
         {
             "tecla": "Y",
             "inicio": 67135,
             "fin": 67294,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 67135,
             "fin": 67335,
             "duracion": 200
         },
         {
             "tecla": "M",
             "inicio": 67358,
             "fin": 67682,
             "duracion": 324
         },
         {
             "tecla": "U",
             "inicio": 67318,
             "fin": 67706,
             "duracion": 388
         },
         {
             "tecla": "T",
             "inicio": 67759,
             "fin": 68103,
             "duracion": 344
         },
         {
             "tecla": "Y",
             "inicio": 67743,
             "fin": 68120,
             "duracion": 377
         },
         {
             "tecla": "ESCAPE",
             "inicio": 67719,
             "fin": 68144,
             "duracion": 425
         },
         {
             "tecla": "R",
             "inicio": 68188,
             "fin": 68462,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 68207,
             "fin": 68486,
             "duracion": 279
         },
         {
             "tecla": "D",
             "inicio": 68629,
             "fin": 68951,
             "duracion": 322
         },
         {
             "tecla": "H",
             "inicio": 68657,
             "fin": 68968,
             "duracion": 311
         },
         {
             "tecla": "F",
             "inicio": 69041,
             "fin": 69402,
             "duracion": 361
         },
         {
             "tecla": "J",
             "inicio": 69065,
             "fin": 69423,
             "duracion": 358
         },
         {
             "tecla": "G",
             "inicio": 69480,
             "fin": 69810,
             "duracion": 330
         },
         {
             "tecla": "K",
             "inicio": 69504,
             "fin": 69833,
             "duracion": 329
         },
         {
             "tecla": "ESCAPE",
             "inicio": 68610,
             "fin": 69849,
             "duracion": 1239
         },
         {
             "tecla": "T",
             "inicio": 69886,
             "fin": 70014,
             "duracion": 128
         },
         {
             "tecla": "Y",
             "inicio": 69903,
             "fin": 70030,
             "duracion": 127
         },
         {
             "tecla": "T",
             "inicio": 70152,
             "fin": 70214,
             "duracion": 62
         },
         {
             "tecla": "Y",
             "inicio": 70115,
             "fin": 70230,
             "duracion": 115
         },
         {
             "tecla": "T",
             "inicio": 70353,
             "fin": 70439,
             "duracion": 86
         },
         {
             "tecla": "Y",
             "inicio": 70323,
             "fin": 70466,
             "duracion": 143
         },
         {
             "tecla": "M",
             "inicio": 70524,
             "fin": 70763,
             "duracion": 239
         },
         {
             "tecla": "U",
             "inicio": 70540,
             "fin": 70763,
             "duracion": 223
         },
         {
             "tecla": "U",
             "inicio": 70767,
             "fin": 71094,
             "duracion": 327
         },
         {
             "tecla": "M",
             "inicio": 70765,
             "fin": 71129,
             "duracion": 364
         },
         {
             "tecla": "ESCAPE",
             "inicio": 70763,
             "fin": 71134,
             "duracion": 371
         },
         {
             "tecla": "T",
             "inicio": 71167,
             "fin": 71611,
             "duracion": 444
         },
         {
             "tecla": "Y",
             "inicio": 71182,
             "fin": 71611,
             "duracion": 429
         },
         {
             "tecla": "T",
             "inicio": 71613,
             "fin": 71878,
             "duracion": 265
         },
         {
             "tecla": "Y",
             "inicio": 71614,
             "fin": 71894,
             "duracion": 280
         },
         {
             "tecla": "E",
             "inicio": 72023,
             "fin": 72375,
             "duracion": 352
         },
         {
             "tecla": "Y",
             "inicio": 72048,
             "fin": 72398,
             "duracion": 350
         },
         {
             "tecla": "R",
             "inicio": 72479,
             "fin": 72834,
             "duracion": 355
         },
         {
             "tecla": "U",
             "inicio": 72502,
             "fin": 72851,
             "duracion": 349
         },
         {
             "tecla": "I",
             "inicio": 72943,
             "fin": 73416,
             "duracion": 473
         },
         {
             "tecla": "T",
             "inicio": 72918,
             "fin": 73432,
             "duracion": 514
         },
         {
             "tecla": "Y",
             "inicio": 73552,
             "fin": 73667,
             "duracion": 115
         },
         {
             "tecla": "T",
             "inicio": 73537,
             "fin": 73690,
             "duracion": 153
         },
         {
             "tecla": "ESCAPE",
             "inicio": 71610,
             "fin": 73958,
             "duracion": 2348
         },
         {
             "tecla": "Y",
             "inicio": 73764,
             "fin": 73958,
             "duracion": 194
         },
         {
             "tecla": "T",
             "inicio": 73778,
             "fin": 73958,
             "duracion": 180
         },
         {
             "tecla": "T",
             "inicio": 73960,
             "fin": 74133,
             "duracion": 173
         },
         {
             "tecla": "T",
             "inicio": 74150,
             "fin": 74213,
             "duracion": 63
         },
         {
             "tecla": "Y",
             "inicio": 73959,
             "fin": 74237,
             "duracion": 278
         },
         {
             "tecla": "U",
             "inicio": 74174,
             "fin": 74527,
             "duracion": 353
         },
         {
             "tecla": "M",
             "inicio": 74199,
             "fin": 74549,
             "duracion": 350
         },
         {
             "tecla": "ESCAPE",
             "inicio": 74581,
             "fin": 74950,
             "duracion": 369
         },
         {
             "tecla": "Y",
             "inicio": 74600,
             "fin": 74950,
             "duracion": 350
         },
         {
             "tecla": "T",
             "inicio": 74622,
             "fin": 74950,
             "duracion": 328
         },
         {
             "tecla": "Y",
             "inicio": 74951,
             "fin": 74974,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 74952,
             "fin": 74999,
             "duracion": 47
         },
         {
             "tecla": "R",
             "inicio": 75070,
             "fin": 75402,
             "duracion": 332
         },
         {
             "tecla": "T",
             "inicio": 75087,
             "fin": 75424,
             "duracion": 337
         },
         {
             "tecla": "D",
             "inicio": 75494,
             "fin": 75834,
             "duracion": 340
         },
         {
             "tecla": "H",
             "inicio": 75510,
             "fin": 75857,
             "duracion": 347
         },
         {
             "tecla": "J",
             "inicio": 75942,
             "fin": 76283,
             "duracion": 341
         },
         {
             "tecla": "F",
             "inicio": 75927,
             "fin": 76300,
             "duracion": 373
         },
         {
             "tecla": "K",
             "inicio": 76392,
             "fin": 76678,
             "duracion": 286
         },
         {
             "tecla": "G",
             "inicio": 76369,
             "fin": 76702,
             "duracion": 333
         },
         {
             "tecla": "ESCAPE",
             "inicio": 75449,
             "fin": 76718,
             "duracion": 1269
         },
         {
             "tecla": "T",
             "inicio": 76790,
             "fin": 76917,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 76814,
             "fin": 76933,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 77023,
             "fin": 77128,
             "duracion": 105
         },
         {
             "tecla": "Y",
             "inicio": 77046,
             "fin": 77151,
             "duracion": 105
         },
         {
             "tecla": "Y",
             "inicio": 77241,
             "fin": 77334,
             "duracion": 93
         },
         {
             "tecla": "T",
             "inicio": 77217,
             "fin": 77358,
             "duracion": 141
         },
         {
             "tecla": "U",
             "inicio": 77411,
             "fin": 77665,
             "duracion": 254
         },
         {
             "tecla": "M",
             "inicio": 77425,
             "fin": 77666,
             "duracion": 241
         },
         {
             "tecla": "U",
             "inicio": 77667,
             "fin": 77998,
             "duracion": 331
         },
         {
             "tecla": "M",
             "inicio": 77669,
             "fin": 78022,
             "duracion": 353
         },
         {
             "tecla": "ESCAPE",
             "inicio": 77665,
             "fin": 78072,
             "duracion": 407
         },
         {
             "tecla": "Y",
             "inicio": 78100,
             "fin": 78542,
             "duracion": 442
         },
         {
             "tecla": "T",
             "inicio": 78112,
             "fin": 78542,
             "duracion": 430
         },
         {
             "tecla": "Y",
             "inicio": 78543,
             "fin": 78936,
             "duracion": 393
         },
         {
             "tecla": "T",
             "inicio": 78543,
             "fin": 78957,
             "duracion": 414
         },
         {
             "tecla": "E",
             "inicio": 79190,
             "fin": 79407,
             "duracion": 217
         },
         {
             "tecla": "Y",
             "inicio": 79378,
             "fin": 79641,
             "duracion": 263
         },
         {
             "tecla": "R",
             "inicio": 79611,
             "fin": 79775,
             "duracion": 164
         },
         {
             "tecla": "T",
             "inicio": 79723,
             "fin": 79855,
             "duracion": 132
         },
         {
             "tecla": "U",
             "inicio": 79873,
             "fin": 80206,
             "duracion": 333
         },
         {
             "tecla": "I",
             "inicio": 79896,
             "fin": 80222,
             "duracion": 326
         },
         {
             "tecla": "T",
             "inicio": 80291,
             "fin": 80407,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 80308,
             "fin": 80422,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 80516,
             "fin": 80634,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 80536,
             "fin": 80658,
             "duracion": 122
         },
         {
             "tecla": "ESCAPE",
             "inicio": 78542,
             "fin": 80905,
             "duracion": 2363
         },
         {
             "tecla": "T",
             "inicio": 80732,
             "fin": 80905,
             "duracion": 173
         },
         {
             "tecla": "Y",
             "inicio": 80756,
             "fin": 80905,
             "duracion": 149
         },
         {
             "tecla": "T",
             "inicio": 80907,
             "fin": 81093,
             "duracion": 186
         },
         {
             "tecla": "Y",
             "inicio": 80909,
             "fin": 81118,
             "duracion": 209
         },
         {
             "tecla": "U",
             "inicio": 81174,
             "fin": 81514,
             "duracion": 340
         },
         {
             "tecla": "M",
             "inicio": 81198,
             "fin": 81534,
             "duracion": 336
         },
         {
             "tecla": "T",
             "inicio": 81582,
             "fin": 81823,
             "duracion": 241
         },
         {
             "tecla": "Y",
             "inicio": 81598,
             "fin": 81823,
             "duracion": 225
         },
         {
             "tecla": "ESCAPE",
             "inicio": 81823,
             "fin": 82204,
             "duracion": 381
         },
         {
             "tecla": "T",
             "inicio": 81824,
             "fin": 82204,
             "duracion": 380
         },
         {
             "tecla": "Y",
             "inicio": 81825,
             "fin": 82204,
             "duracion": 379
         },
         {
             "tecla": "T",
             "inicio": 82205,
             "fin": 82215,
             "duracion": 10
         },
         {
             "tecla": "Y",
             "inicio": 82206,
             "fin": 82237,
             "duracion": 31
         },
         {
             "tecla": "R",
             "inicio": 82294,
             "fin": 82534,
             "duracion": 240
         },
         {
             "tecla": "T",
             "inicio": 82278,
             "fin": 82550,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 82666,
             "fin": 82784,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 82682,
             "fin": 82808,
             "duracion": 126
         },
         {
             "tecla": "T",
             "inicio": 82927,
             "fin": 82966,
             "duracion": 39
         },
         {
             "tecla": "U",
             "inicio": 82915,
             "fin": 83238,
             "duracion": 323
         },
         {
             "tecla": "M",
             "inicio": 82890,
             "fin": 83254,
             "duracion": 364
         },
         {
             "tecla": "T",
             "inicio": 83297,
             "fin": 83526,
             "duracion": 229
         },
         {
             "tecla": "Y",
             "inicio": 83320,
             "fin": 83526,
             "duracion": 206
         },
         {
             "tecla": "T",
             "inicio": 83526,
             "fin": 83854,
             "duracion": 328
         },
         {
             "tecla": "Y",
             "inicio": 83527,
             "fin": 83869,
             "duracion": 342
         },
         {
             "tecla": "ESCAPE",
             "inicio": 83526,
             "fin": 83894,
             "duracion": 368
         },
         {
             "tecla": "R",
             "inicio": 83942,
             "fin": 84273,
             "duracion": 331
         },
         {
             "tecla": "T",
             "inicio": 83958,
             "fin": 84297,
             "duracion": 339
         },
         {
             "tecla": "R",
             "inicio": 84384,
             "fin": 84506,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 84407,
             "fin": 84526,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 84634,
             "fin": 84929,
             "duracion": 295
         },
         {
             "tecla": "Y",
             "inicio": 84618,
             "fin": 84952,
             "duracion": 334
         },
         {
             "tecla": "R",
             "inicio": 85077,
             "fin": 85149,
             "duracion": 72
         },
         {
             "tecla": "T",
             "inicio": 85053,
             "fin": 85175,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 85293,
             "fin": 85597,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 85304,
             "fin": 85613,
             "duracion": 309
         },
         {
             "tecla": "R",
             "inicio": 85694,
             "fin": 85990,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 85710,
             "fin": 86014,
             "duracion": 304
         },
         {
             "tecla": "E",
             "inicio": 86135,
             "fin": 86374,
             "duracion": 239
         },
         {
             "tecla": "Y",
             "inicio": 86351,
             "fin": 86576,
             "duracion": 225
         },
         {
             "tecla": "R",
             "inicio": 86555,
             "fin": 86714,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 86668,
             "fin": 86792,
             "duracion": 124
         },
         {
             "tecla": "Y",
             "inicio": 86851,
             "fin": 87110,
             "duracion": 259
         },
         {
             "tecla": "U",
             "inicio": 86863,
             "fin": 87126,
             "duracion": 263
         },
         {
             "tecla": "I",
             "inicio": 86825,
             "fin": 87150,
             "duracion": 325
         },
         {
             "tecla": "T",
             "inicio": 87231,
             "fin": 87338,
             "duracion": 107
         },
         {
             "tecla": "Y",
             "inicio": 87235,
             "fin": 87363,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 87438,
             "fin": 87545,
             "duracion": 107
         },
         {
             "tecla": "Y",
             "inicio": 87454,
             "fin": 87570,
             "duracion": 116
         },
         {
             "tecla": "ESCAPE",
             "inicio": 85255,
             "fin": 87829,
             "duracion": 2574
         },
         {
             "tecla": "Y",
             "inicio": 87648,
             "fin": 87829,
             "duracion": 181
         },
         {
             "tecla": "T",
             "inicio": 87672,
             "fin": 87829,
             "duracion": 157
         },
         {
             "tecla": "Y",
             "inicio": 87830,
             "fin": 88110,
             "duracion": 280
         },
         {
             "tecla": "T",
             "inicio": 87830,
             "fin": 88125,
             "duracion": 295
         },
         {
             "tecla": "M",
             "inicio": 88086,
             "fin": 88448,
             "duracion": 362
         },
         {
             "tecla": "U",
             "inicio": 88070,
             "fin": 88480,
             "duracion": 410
         },
         {
             "tecla": "T",
             "inicio": 88502,
             "fin": 88761,
             "duracion": 259
         },
         {
             "tecla": "Y",
             "inicio": 88521,
             "fin": 88761,
             "duracion": 240
         },
         {
             "tecla": "T",
             "inicio": 88763,
             "fin": 89071,
             "duracion": 308
         },
         {
             "tecla": "Y",
             "inicio": 88764,
             "fin": 89087,
             "duracion": 323
         },
         {
             "tecla": "ESCAPE",
             "inicio": 88760,
             "fin": 89110,
             "duracion": 350
         },
         {
             "tecla": "T",
             "inicio": 89198,
             "fin": 89437,
             "duracion": 239
         },
         {
             "tecla": "R",
             "inicio": 89175,
             "fin": 89454,
             "duracion": 279
         },
         {
             "tecla": "T",
             "inicio": 89585,
             "fin": 89679,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 89564,
             "fin": 89703,
             "duracion": 139
         },
         {
             "tecla": "U",
             "inicio": 89784,
             "fin": 90126,
             "duracion": 342
         },
         {
             "tecla": "M",
             "inicio": 89800,
             "fin": 90142,
             "duracion": 342
         },
         {
             "tecla": "Y",
             "inicio": 90195,
             "fin": 90426,
             "duracion": 231
         },
         {
             "tecla": "T",
             "inicio": 90212,
             "fin": 90427,
             "duracion": 215
         },
         {
             "tecla": "T",
             "inicio": 90430,
             "fin": 90734,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 90428,
             "fin": 90758,
             "duracion": 330
         },
         {
             "tecla": "ESCAPE",
             "inicio": 90426,
             "fin": 90782,
             "duracion": 356
         },
         {
             "tecla": "R",
             "inicio": 90862,
             "fin": 91144,
             "duracion": 282
         },
         {
             "tecla": "T",
             "inicio": 90880,
             "fin": 91168,
             "duracion": 288
         },
         {
             "tecla": "R",
             "inicio": 91286,
             "fin": 91392,
             "duracion": 106
         },
         {
             "tecla": "T",
             "inicio": 91311,
             "fin": 91415,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 91533,
             "fin": 91832,
             "duracion": 299
         },
         {
             "tecla": "Y",
             "inicio": 91508,
             "fin": 91855,
             "duracion": 347
         },
         {
             "tecla": "T",
             "inicio": 91934,
             "fin": 92041,
             "duracion": 107
         },
         {
             "tecla": "R",
             "inicio": 91911,
             "fin": 92062,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 92182,
             "fin": 92455,
             "duracion": 273
         },
         {
             "tecla": "Y",
             "inicio": 92159,
             "fin": 92470,
             "duracion": 311
         },
         {
             "tecla": "R",
             "inicio": 92595,
             "fin": 92849,
             "duracion": 254
         },
         {
             "tecla": "T",
             "inicio": 92572,
             "fin": 92873,
             "duracion": 301
         },
         {
             "tecla": "E",
             "inicio": 92991,
             "fin": 93274,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 93252,
             "fin": 93448,
             "duracion": 196
         },
         {
             "tecla": "R",
             "inicio": 93426,
             "fin": 93584,
             "duracion": 158
         },
         {
             "tecla": "T",
             "inicio": 93549,
             "fin": 93682,
             "duracion": 133
         },
         {
             "tecla": "U",
             "inicio": 93715,
             "fin": 93956,
             "duracion": 241
         },
         {
             "tecla": "I",
             "inicio": 93730,
             "fin": 93977,
             "duracion": 247
         },
         {
             "tecla": "R",
             "inicio": 94116,
             "fin": 94166,
             "duracion": 50
         },
         {
             "tecla": "I",
             "inicio": 94128,
             "fin": 94182,
             "duracion": 54
         },
         {
             "tecla": "O",
             "inicio": 94342,
             "fin": 94390,
             "duracion": 48
         },
         {
             "tecla": "T",
             "inicio": 94326,
             "fin": 94413,
             "duracion": 87
         },
         {
             "tecla": "O",
             "inicio": 94551,
             "fin": 94646,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 94567,
             "fin": 94670,
             "duracion": 103
         },
         {
             "tecla": "ESCAPE",
             "inicio": 92141,
             "fin": 94686,
             "duracion": 2545
         },
         {
             "tecla": "T",
             "inicio": 94766,
             "fin": 94885,
             "duracion": 119
         },
         {
             "tecla": "P",
             "inicio": 94782,
             "fin": 94903,
             "duracion": 121
         },
         {
             "tecla": "Ñ",
             "inicio": 95008,
             "fin": 95245,
             "duracion": 237
         },
         {
             "tecla": "H",
             "inicio": 95022,
             "fin": 95262,
             "duracion": 240
         },
         {
             "tecla": "ESCAPE",
             "inicio": 94982,
             "fin": 95309,
             "duracion": 327
         },
         {
             "tecla": "P",
             "inicio": 95398,
             "fin": 95501,
             "duracion": 103
         },
         {
             "tecla": "T",
             "inicio": 95414,
             "fin": 95525,
             "duracion": 111
         },
         {
             "tecla": "ESCAPE",
             "inicio": 95574,
             "fin": 95929,
             "duracion": 355
         },
         {
             "tecla": "O",
             "inicio": 95638,
             "fin": 95929,
             "duracion": 291
         },
         {
             "tecla": "T",
             "inicio": 95662,
             "fin": 95929,
             "duracion": 267
         },
         {
             "tecla": "O",
             "inicio": 95931,
             "fin": 95953,
             "duracion": 22
         },
         {
             "tecla": "T",
             "inicio": 95932,
             "fin": 95967,
             "duracion": 35
         },
         {
             "tecla": "O",
             "inicio": 96055,
             "fin": 96302,
             "duracion": 247
         },
         {
             "tecla": "R",
             "inicio": 96070,
             "fin": 96326,
             "duracion": 256
         },
         {
             "tecla": "E",
             "inicio": 96502,
             "fin": 96573,
             "duracion": 71
         },
         {
             "tecla": "Ñ",
             "inicio": 96735,
             "fin": 96966,
             "duracion": 231
         },
         {
             "tecla": "H",
             "inicio": 96760,
             "fin": 96982,
             "duracion": 222
         },
         {
             "tecla": "ESCAPE",
             "inicio": 96351,
             "fin": 97007,
             "duracion": 656
         },
         {
             "tecla": "T",
             "inicio": 97142,
             "fin": 97221,
             "duracion": 79
         },
         {
             "tecla": "P",
             "inicio": 97118,
             "fin": 97245,
             "duracion": 127
         },
         {
             "tecla": "ESCAPE",
             "inicio": 97318,
             "fin": 97601,
             "duracion": 283
         },
         {
             "tecla": "T",
             "inicio": 97374,
             "fin": 97602,
             "duracion": 228
         },
         {
             "tecla": "O",
             "inicio": 97390,
             "fin": 97602,
             "duracion": 212
         },
         {
             "tecla": "O",
             "inicio": 97605,
             "fin": 97618,
             "duracion": 13
         },
         {
             "tecla": "T",
             "inicio": 97603,
             "fin": 97637,
             "duracion": 34
         },
         {
             "tecla": "R",
             "inicio": 97782,
             "fin": 98030,
             "duracion": 248
         },
         {
             "tecla": "O",
             "inicio": 97766,
             "fin": 98065,
             "duracion": 299
         },
         {
             "tecla": "R",
             "inicio": 98191,
             "fin": 98289,
             "duracion": 98
         },
         {
             "tecla": "O",
             "inicio": 98215,
             "fin": 98305,
             "duracion": 90
         },
         {
             "tecla": "P",
             "inicio": 98434,
             "fin": 98717,
             "duracion": 283
         },
         {
             "tecla": "T",
             "inicio": 98454,
             "fin": 98741,
             "duracion": 287
         },
         {
             "tecla": "R",
             "inicio": 98846,
             "fin": 98918,
             "duracion": 72
         },
         {
             "tecla": "O",
             "inicio": 98870,
             "fin": 98942,
             "duracion": 72
         },
         {
             "tecla": "O",
             "inicio": 99102,
             "fin": 99375,
             "duracion": 273
         },
         {
             "tecla": "T",
             "inicio": 99078,
             "fin": 99402,
             "duracion": 324
         },
         {
             "tecla": "I",
             "inicio": 99500,
             "fin": 99745,
             "duracion": 245
         },
         {
             "tecla": "R",
             "inicio": 99483,
             "fin": 99778,
             "duracion": 295
         },
         {
             "tecla": "E",
             "inicio": 99915,
             "fin": 100135,
             "duracion": 220
         },
         {
             "tecla": "Y",
             "inicio": 100111,
             "fin": 100344,
             "duracion": 233
         },
         {
             "tecla": "R",
             "inicio": 100321,
             "fin": 100479,
             "duracion": 158
         },
         {
             "tecla": "T",
             "inicio": 100433,
             "fin": 100542,
             "duracion": 109
         },
         {
             "tecla": "U",
             "inicio": 100560,
             "fin": 100933,
             "duracion": 373
         },
         {
             "tecla": "I",
             "inicio": 100584,
             "fin": 100957,
             "duracion": 373
         },
         {
             "tecla": "R",
             "inicio": 101210,
             "fin": 101527,
             "duracion": 317
         },
         {
             "tecla": "U",
             "inicio": 101424,
             "fin": 101552,
             "duracion": 128
         },
         {
             "tecla": "M",
             "inicio": 101449,
             "fin": 101576,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 101681,
             "fin": 101720,
             "duracion": 39
         },
         {
             "tecla": "M",
             "inicio": 101641,
             "fin": 101744,
             "duracion": 103
         },
         {
             "tecla": "U",
             "inicio": 101664,
             "fin": 101767,
             "duracion": 103
         },
         {
             "tecla": "R",
             "inicio": 101887,
             "fin": 101934,
             "duracion": 47
         },
         {
             "tecla": "M",
             "inicio": 101849,
             "fin": 101950,
             "duracion": 101
         },
         {
             "tecla": "U",
             "inicio": 101873,
             "fin": 101974,
             "duracion": 101
         },
         {
             "tecla": "U",
             "inicio": 102096,
             "fin": 102150,
             "duracion": 54
         },
         {
             "tecla": "M",
             "inicio": 102059,
             "fin": 102167,
             "duracion": 108
         },
         {
             "tecla": "R",
             "inicio": 102084,
             "fin": 102190,
             "duracion": 106
         },
         {
             "tecla": "R",
             "inicio": 102291,
             "fin": 102374,
             "duracion": 83
         },
         {
             "tecla": "M",
             "inicio": 102329,
             "fin": 102399,
             "duracion": 70
         },
         {
             "tecla": "U",
             "inicio": 102317,
             "fin": 102416,
             "duracion": 99
         },
         {
             "tecla": "R",
             "inicio": 102500,
             "fin": 102811,
             "duracion": 311
         },
         {
             "tecla": "U",
             "inicio": 102671,
             "fin": 102833,
             "duracion": 162
         },
         {
             "tecla": "M",
             "inicio": 102695,
             "fin": 102847,
             "duracion": 152
         },
         {
             "tecla": "U",
             "inicio": 102945,
             "fin": 104514,
             "duracion": 1569
         },
         {
             "tecla": "R",
             "inicio": 102920,
             "fin": 104537,
             "duracion": 1617
         },
         {
             "tecla": "M",
             "inicio": 102962,
             "fin": 104552,
             "duracion": 1590
         },
         {
             "tecla": "R",
             "inicio": 104665,
             "fin": 104991,
             "duracion": 326
         },
         {
             "tecla": "U",
             "inicio": 104908,
             "fin": 105008,
             "duracion": 100
         },
         {
             "tecla": "M",
             "inicio": 104933,
             "fin": 105032,
             "duracion": 99
         },
         {
             "tecla": "R",
             "inicio": 105098,
             "fin": 105190,
             "duracion": 92
         },
         {
             "tecla": "M",
             "inicio": 105138,
             "fin": 105207,
             "duracion": 69
         },
         {
             "tecla": "U",
             "inicio": 105123,
             "fin": 105230,
             "duracion": 107
         },
         {
             "tecla": "R",
             "inicio": 105320,
             "fin": 105414,
             "duracion": 94
         },
         {
             "tecla": "U",
             "inicio": 105358,
             "fin": 105437,
             "duracion": 79
         },
         {
             "tecla": "M",
             "inicio": 105334,
             "fin": 105453,
             "duracion": 119
         },
         {
             "tecla": "R",
             "inicio": 105542,
             "fin": 105607,
             "duracion": 65
         },
         {
             "tecla": "U",
             "inicio": 105559,
             "fin": 105640,
             "duracion": 81
         },
         {
             "tecla": "M",
             "inicio": 105518,
             "fin": 105655,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 105737,
             "fin": 105840,
             "duracion": 103
         },
         {
             "tecla": "M",
             "inicio": 105753,
             "fin": 105856,
             "duracion": 103
         },
         {
             "tecla": "U",
             "inicio": 105777,
             "fin": 105881,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 99040,
             "fin": 105944,
             "duracion": 6904
         },
         {
             "tecla": "R",
             "inicio": 105975,
             "fin": 106270,
             "duracion": 295
         },
         {
             "tecla": ",",
             "inicio": 106006,
             "fin": 106294,
             "duracion": 288
         },
         {
             "tecla": "I",
             "inicio": 105997,
             "fin": 106310,
             "duracion": 313
         },
         {
             "tecla": "E",
             "inicio": 106430,
             "fin": 107870,
             "duracion": 1440
         },
         {
             "tecla": "U",
             "inicio": 106407,
             "fin": 107886,
             "duracion": 1479
         },
         {
             "tecla": "M",
             "inicio": 106392,
             "fin": 107902,
             "duracion": 1510
         },
         {
             "tecla": "M",
             "inicio": 108098,
             "fin": 108245,
             "duracion": 147
         },
         {
             "tecla": "E",
             "inicio": 108083,
             "fin": 108279,
             "duracion": 196
         },
         {
             "tecla": "U",
             "inicio": 108058,
             "fin": 108302,
             "duracion": 244
         },
         {
             "tecla": "E",
             "inicio": 108487,
             "fin": 108560,
             "duracion": 73
         },
         {
             "tecla": "M",
             "inicio": 108448,
             "fin": 108585,
             "duracion": 137
         },
         {
             "tecla": "U",
             "inicio": 108437,
             "fin": 108599,
             "duracion": 162
         },
         {
             "tecla": "R",
             "inicio": 108694,
             "fin": 108806,
             "duracion": 112
         },
         {
             "tecla": ",",
             "inicio": 108720,
             "fin": 108830,
             "duracion": 110
         },
         {
             "tecla": "I",
             "inicio": 108678,
             "fin": 108847,
             "duracion": 169
         },
         {
             "tecla": "R",
             "inicio": 108961,
             "fin": 108999,
             "duracion": 38
         },
         {
             "tecla": "I",
             "inicio": 108920,
             "fin": 109023,
             "duracion": 103
         },
         {
             "tecla": ",",
             "inicio": 108944,
             "fin": 109039,
             "duracion": 95
         },
         {
             "tecla": "I",
             "inicio": 109127,
             "fin": 109222,
             "duracion": 95
         },
         {
             "tecla": "R",
             "inicio": 109150,
             "fin": 109246,
             "duracion": 96
         },
         {
             "tecla": ",",
             "inicio": 109111,
             "fin": 109263,
             "duracion": 152
         },
         {
             "tecla": "R",
             "inicio": 109334,
             "fin": 109657,
             "duracion": 323
         },
         {
             "tecla": ",",
             "inicio": 109600,
             "fin": 109681,
             "duracion": 81
         },
         {
             "tecla": "M",
             "inicio": 109584,
             "fin": 109696,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 109510,
             "fin": 109718,
             "duracion": 208
         },
         {
             "tecla": "ESCAPE",
             "inicio": 109286,
             "fin": 109733,
             "duracion": 447
         },
         {
             "tecla": "E",
             "inicio": 109790,
             "fin": 111249,
             "duracion": 1459
         },
         {
             "tecla": "U",
             "inicio": 109806,
             "fin": 111271,
             "duracion": 1465
         },
         {
             "tecla": "M",
             "inicio": 109830,
             "fin": 111286,
             "duracion": 1456
         },
         {
             "tecla": "T",
             "inicio": 111492,
             "fin": 111663,
             "duracion": 171
         },
         {
             "tecla": "P",
             "inicio": 111507,
             "fin": 111679,
             "duracion": 172
         },
         {
             "tecla": "R",
             "inicio": 111905,
             "fin": 112005,
             "duracion": 100
         },
         {
             "tecla": "O",
             "inicio": 111926,
             "fin": 112029,
             "duracion": 103
         },
         {
             "tecla": "P",
             "inicio": 112158,
             "fin": 112230,
             "duracion": 72
         },
         {
             "tecla": "T",
             "inicio": 112134,
             "fin": 112247,
             "duracion": 113
         },
         {
             "tecla": "P",
             "inicio": 112318,
             "fin": 112432,
             "duracion": 114
         },
         {
             "tecla": "T",
             "inicio": 112343,
             "fin": 112454,
             "duracion": 111
         },
         {
             "tecla": "R",
             "inicio": 112591,
             "fin": 112646,
             "duracion": 55
         },
         {
             "tecla": "O",
             "inicio": 112605,
             "fin": 112670,
             "duracion": 65
         },
         {
             "tecla": "P",
             "inicio": 112804,
             "fin": 113061,
             "duracion": 257
         },
         {
             "tecla": "T",
             "inicio": 112820,
             "fin": 113086,
             "duracion": 266
         },
         {
             "tecla": "O",
             "inicio": 113214,
             "fin": 114713,
             "duracion": 1499
         },
         {
             "tecla": "T",
             "inicio": 113191,
             "fin": 114727,
             "duracion": 1536
         },
         {
             "tecla": "R",
             "inicio": 114875,
             "fin": 115144,
             "duracion": 269
         },
         {
             "tecla": "I",
             "inicio": 114859,
             "fin": 115160,
             "duracion": 301
         },
         {
             "tecla": "ESCAPE",
             "inicio": 113174,
             "fin": 115189,
             "duracion": 2015
         },
         {
             "tecla": "R",
             "inicio": 115286,
             "fin": 115368,
             "duracion": 82
         },
         {
             "tecla": "O",
             "inicio": 115262,
             "fin": 115381,
             "duracion": 119
         },
         {
             "tecla": "O",
             "inicio": 115487,
             "fin": 115573,
             "duracion": 86
         },
         {
             "tecla": "T",
             "inicio": 115502,
             "fin": 115590,
             "duracion": 88
         },
         {
             "tecla": "O",
             "inicio": 115694,
             "fin": 115773,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 115678,
             "fin": 115790,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 115461,
             "fin": 115831,
             "duracion": 370
         },
         {
             "tecla": "T",
             "inicio": 115910,
             "fin": 115998,
             "duracion": 88
         },
         {
             "tecla": "P",
             "inicio": 115926,
             "fin": 116021,
             "duracion": 95
         },
         {
             "tecla": "O",
             "inicio": 116148,
             "fin": 116413,
             "duracion": 265
         },
         {
             "tecla": "T",
             "inicio": 116161,
             "fin": 116430,
             "duracion": 269
         },
         {
             "tecla": "ESCAPE",
             "inicio": 116119,
             "fin": 116461,
             "duracion": 342
         },
         {
             "tecla": "O",
             "inicio": 116566,
             "fin": 118034,
             "duracion": 1468
         },
         {
             "tecla": "R",
             "inicio": 116550,
             "fin": 118049,
             "duracion": 1499
         },
         {
             "tecla": "E",
             "inicio": 118242,
             "fin": 118511,
             "duracion": 269
         },
         {
             "tecla": "I",
             "inicio": 118227,
             "fin": 118535,
             "duracion": 308
         },
         {
             "tecla": "ESCAPE",
             "inicio": 118581,
             "fin": 118765,
             "duracion": 184
         },
         {
             "tecla": "I",
             "inicio": 118614,
             "fin": 118765,
             "duracion": 151
         },
         {
             "tecla": "R",
             "inicio": 118638,
             "fin": 118765,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 118766,
             "fin": 118790,
             "duracion": 24
         },
         {
             "tecla": "I",
             "inicio": 118766,
             "fin": 118805,
             "duracion": 39
         },
         {
             "tecla": "R",
             "inicio": 118894,
             "fin": 118966,
             "duracion": 72
         },
         {
             "tecla": "O",
             "inicio": 118878,
             "fin": 118989,
             "duracion": 111
         },
         {
             "tecla": "R",
             "inicio": 119070,
             "fin": 119160,
             "duracion": 90
         },
         {
             "tecla": "O",
             "inicio": 119086,
             "fin": 119184,
             "duracion": 98
         },
         {
             "tecla": "O",
             "inicio": 119295,
             "fin": 119333,
             "duracion": 38
         },
         {
             "tecla": "T",
             "inicio": 119310,
             "fin": 119333,
             "duracion": 23
         },
         {
             "tecla": "O",
             "inicio": 119334,
             "fin": 119397,
             "duracion": 63
         },
         {
             "tecla": "T",
             "inicio": 119334,
             "fin": 119413,
             "duracion": 79
         },
         {
             "tecla": "ESCAPE",
             "inicio": 119333,
             "fin": 119437,
             "duracion": 104
         },
         {
             "tecla": "O",
             "inicio": 119550,
             "fin": 119814,
             "duracion": 264
         },
         {
             "tecla": "R",
             "inicio": 119534,
             "fin": 119839,
             "duracion": 305
         },
         {
             "tecla": "R",
             "inicio": 119912,
             "fin": 119936,
             "duracion": 24
         },
         {
             "tecla": "R",
             "inicio": 119937,
             "fin": 121537,
             "duracion": 1600
         },
         {
             "tecla": "I",
             "inicio": 119961,
             "fin": 121562,
             "duracion": 1601
         },
         {
             "tecla": "R",
             "inicio": 121656,
             "fin": 121945,
             "duracion": 289
         },
         {
             "tecla": "I",
             "inicio": 121680,
             "fin": 121958,
             "duracion": 278
         },
         {
             "tecla": "ESCAPE",
             "inicio": 119935,
             "fin": 121982,
             "duracion": 2047
         },
         {
             "tecla": "R",
             "inicio": 122061,
             "fin": 122173,
             "duracion": 112
         },
         {
             "tecla": "O",
             "inicio": 122086,
             "fin": 122190,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 122288,
             "fin": 122383,
             "duracion": 95
         },
         {
             "tecla": "O",
             "inicio": 122302,
             "fin": 122407,
             "duracion": 105
         },
         {
             "tecla": "O",
             "inicio": 122494,
             "fin": 122598,
             "duracion": 104
         },
         {
             "tecla": "ESCAPE",
             "inicio": 122229,
             "fin": 122622,
             "duracion": 393
         },
         {
             "tecla": "T",
             "inicio": 122510,
             "fin": 122622,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 122623,
             "fin": 122643,
             "duracion": 20
         },
         {
             "tecla": "T",
             "inicio": 122702,
             "fin": 122813,
             "duracion": 111
         },
         {
             "tecla": "P",
             "inicio": 122726,
             "fin": 122837,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 122918,
             "fin": 122941,
             "duracion": 23
         },
         {
             "tecla": "O",
             "inicio": 122958,
             "fin": 123215,
             "duracion": 257
         },
         {
             "tecla": "ESCAPE",
             "inicio": 122941,
             "fin": 123239,
             "duracion": 298
         },
         {
             "tecla": "T",
             "inicio": 122942,
             "fin": 123239,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 123241,
             "fin": 123257,
             "duracion": 16
         },
         {
             "tecla": "I",
             "inicio": 123399,
             "fin": 123509,
             "duracion": 110
         },
         {
             "tecla": "O",
             "inicio": 123358,
             "fin": 123574,
             "duracion": 216
         },
         {
             "tecla": "R",
             "inicio": 123334,
             "fin": 123598,
             "duracion": 264
         },
         {
             "tecla": "R",
             "inicio": 123598,
             "fin": 123613,
             "duracion": 15
         },
         {
             "tecla": "H",
             "inicio": 123815,
             "fin": 123877,
             "duracion": 62
         },
         {
             "tecla": "D",
             "inicio": 123766,
             "fin": 123902,
             "duracion": 136
         },
         {
             "tecla": "F",
             "inicio": 123988,
             "fin": 124070,
             "duracion": 82
         },
         {
             "tecla": "J",
             "inicio": 124007,
             "fin": 124088,
             "duracion": 81
         },
         {
             "tecla": "G",
             "inicio": 124193,
             "fin": 124279,
             "duracion": 86
         },
         {
             "tecla": "K",
             "inicio": 124209,
             "fin": 124295,
             "duracion": 86
         },
         {
             "tecla": "L",
             "inicio": 124448,
             "fin": 124771,
             "duracion": 323
         },
         {
             "tecla": "ESCAPE",
             "inicio": 123598,
             "fin": 124790,
             "duracion": 1192
         },
         {
             "tecla": "H",
             "inicio": 124424,
             "fin": 124790,
             "duracion": 366
         },
         {
             "tecla": "H",
             "inicio": 124791,
             "fin": 124808,
             "duracion": 17
         },
         {
             "tecla": "E",
             "inicio": 125086,
             "fin": 125333,
             "duracion": 247
         },
         {
             "tecla": "I",
             "inicio": 125102,
             "fin": 125358,
             "duracion": 256
         },
         {
             "tecla": "I",
             "inicio": 125486,
             "fin": 125573,
             "duracion": 87
         },
         {
             "tecla": "R",
             "inicio": 125470,
             "fin": 125597,
             "duracion": 127
         },
         {
             "tecla": "ESCAPE",
             "inicio": 125430,
             "fin": 125613,
             "duracion": 183
         },
         {
             "tecla": "R",
             "inicio": 125694,
             "fin": 125789,
             "duracion": 95
         },
         {
             "tecla": "O",
             "inicio": 125718,
             "fin": 125813,
             "duracion": 95
         },
         {
             "tecla": "R",
             "inicio": 125902,
             "fin": 125990,
             "duracion": 88
         },
         {
             "tecla": "O",
             "inicio": 125886,
             "fin": 126014,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 126070,
             "fin": 126221,
             "duracion": 151
         },
         {
             "tecla": "O",
             "inicio": 126105,
             "fin": 126221,
             "duracion": 116
         },
         {
             "tecla": "T",
             "inicio": 126118,
             "fin": 126221,
             "duracion": 103
         },
         {
             "tecla": "O",
             "inicio": 126222,
             "fin": 126238,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 126222,
             "fin": 126262,
             "duracion": 40
         },
         {
             "tecla": "O",
             "inicio": 126342,
             "fin": 126632,
             "duracion": 290
         },
         {
             "tecla": "R",
             "inicio": 126326,
             "fin": 126656,
             "duracion": 330
         },
         {
             "tecla": "R",
             "inicio": 126734,
             "fin": 127807,
             "duracion": 1073
         },
         {
             "tecla": "U",
             "inicio": 127795,
             "fin": 128232,
             "duracion": 437
         },
         {
             "tecla": "I",
             "inicio": 127771,
             "fin": 128256,
             "duracion": 485
         },
         {
             "tecla": "T",
             "inicio": 128192,
             "fin": 128334,
             "duracion": 142
         },
         {
             "tecla": "Y",
             "inicio": 128217,
             "fin": 128415,
             "duracion": 198
         },
         {
             "tecla": "T",
             "inicio": 128393,
             "fin": 128550,
             "duracion": 157
         },
         {
             "tecla": "ESCAPE",
             "inicio": 126673,
             "fin": 128574,
             "duracion": 1901
         },
         {
             "tecla": "R",
             "inicio": 128615,
             "fin": 128885,
             "duracion": 270
         },
         {
             "tecla": "T",
             "inicio": 129027,
             "fin": 129126,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 129045,
             "fin": 129175,
             "duracion": 130
         },
         {
             "tecla": "T",
             "inicio": 129260,
             "fin": 129361,
             "duracion": 101
         },
         {
             "tecla": "T",
             "inicio": 129694,
             "fin": 129798,
             "duracion": 104
         },
         {
             "tecla": "Y",
             "inicio": 129718,
             "fin": 129873,
             "duracion": 155
         },
         {
             "tecla": "T",
             "inicio": 129892,
             "fin": 129986,
             "duracion": 94
         },
         {
             "tecla": "T",
             "inicio": 130110,
             "fin": 130229,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 130134,
             "fin": 130294,
             "duracion": 160
         },
         {
             "tecla": "T",
             "inicio": 130318,
             "fin": 130422,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 130523,
             "fin": 130626,
             "duracion": 103
         },
         {
             "tecla": "ESCAPE",
             "inicio": 130015,
             "fin": 130658,
             "duracion": 643
         },
         {
             "tecla": "R",
             "inicio": 130726,
             "fin": 131058,
             "duracion": 332
         },
         {
             "tecla": "I",
             "inicio": 131131,
             "fin": 131462,
             "duracion": 331
         },
         {
             "tecla": "U",
             "inicio": 131114,
             "fin": 131486,
             "duracion": 372
         },
         {
             "tecla": "T",
             "inicio": 131536,
             "fin": 131654,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 131575,
             "fin": 131720,
             "duracion": 145
         },
         {
             "tecla": "T",
             "inicio": 131745,
             "fin": 131869,
             "duracion": 124
         },
         {
             "tecla": "R",
             "inicio": 131983,
             "fin": 132077,
             "duracion": 94
         },
         {
             "tecla": "R",
             "inicio": 132198,
             "fin": 132238,
             "duracion": 40
         },
         {
             "tecla": "T",
             "inicio": 132382,
             "fin": 132488,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 132406,
             "fin": 132536,
             "duracion": 130
         },
         {
             "tecla": "T",
             "inicio": 132586,
             "fin": 132695,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 132793,
             "fin": 132886,
             "duracion": 93
         },
         {
             "tecla": "T",
             "inicio": 133019,
             "fin": 133117,
             "duracion": 98
         },
         {
             "tecla": "Y",
             "inicio": 133044,
             "fin": 133190,
             "duracion": 146
         },
         {
             "tecla": "T",
             "inicio": 133222,
             "fin": 133325,
             "duracion": 103
         },
         {
             "tecla": "ESCAPE",
             "inicio": 131957,
             "fin": 133349,
             "duracion": 1392
         },
         {
             "tecla": "R",
             "inicio": 133438,
             "fin": 133525,
             "duracion": 87
         },
         {
             "tecla": "T",
             "inicio": 133462,
             "fin": 133597,
             "duracion": 135
         },
         {
             "tecla": "R",
             "inicio": 133654,
             "fin": 133769,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 133859,
             "fin": 134094,
             "duracion": 235
         },
         {
             "tecla": "R",
             "inicio": 134094,
             "fin": 134510,
             "duracion": 416
         },
         {
             "tecla": "I",
             "inicio": 134470,
             "fin": 134789,
             "duracion": 319
         },
         {
             "tecla": "U",
             "inicio": 134494,
             "fin": 134814,
             "duracion": 320
         },
         {
             "tecla": "T",
             "inicio": 134887,
             "fin": 134993,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 134903,
             "fin": 135073,
             "duracion": 170
         },
         {
             "tecla": "T",
             "inicio": 135099,
             "fin": 135225,
             "duracion": 126
         },
         {
             "tecla": "ESCAPE",
             "inicio": 134093,
             "fin": 135258,
             "duracion": 1165
         },
         {
             "tecla": "R",
             "inicio": 135310,
             "fin": 135675,
             "duracion": 365
         },
         {
             "tecla": "T",
             "inicio": 135744,
             "fin": 136033,
             "duracion": 289
         },
         {
             "tecla": "Y",
             "inicio": 135761,
             "fin": 136058,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 136150,
             "fin": 136293,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 136398,
             "fin": 136681,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 136382,
             "fin": 136703,
             "duracion": 321
         },
         {
             "tecla": "ESCAPE",
             "inicio": 136095,
             "fin": 136727,
             "duracion": 632
         },
         {
             "tecla": "R",
             "inicio": 136822,
             "fin": 136997,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 136798,
             "fin": 137013,
             "duracion": 215
         },
         {
             "tecla": "Y",
             "inicio": 137230,
             "fin": 137489,
             "duracion": 259
         },
         {
             "tecla": "ESCAPE",
             "inicio": 137062,
             "fin": 137593,
             "duracion": 531
         },
         {
             "tecla": "O",
             "inicio": 137422,
             "fin": 137593,
             "duracion": 171
         },
         {
             "tecla": "O",
             "inicio": 137594,
             "fin": 137918,
             "duracion": 324
         },
         {
             "tecla": "I",
             "inicio": 137897,
             "fin": 138096,
             "duracion": 199
         },
         {
             "tecla": "U",
             "inicio": 138080,
             "fin": 138215,
             "duracion": 135
         },
         {
             "tecla": "U",
             "inicio": 138324,
             "fin": 138624,
             "duracion": 300
         },
         {
             "tecla": "M",
             "inicio": 138335,
             "fin": 138648,
             "duracion": 313
         },
         {
             "tecla": "T",
             "inicio": 138713,
             "fin": 138806,
             "duracion": 93
         },
         {
             "tecla": "Y",
             "inicio": 138739,
             "fin": 138838,
             "duracion": 99
         },
         {
             "tecla": "T",
             "inicio": 138912,
             "fin": 139033,
             "duracion": 121
         },
         {
             "tecla": "T",
             "inicio": 139158,
             "fin": 139277,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 139182,
             "fin": 139333,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 139374,
             "fin": 139486,
             "duracion": 112
         },
         {
             "tecla": "ESCAPE",
             "inicio": 139113,
             "fin": 139494,
             "duracion": 381
         },
         {
             "tecla": "R",
             "inicio": 139582,
             "fin": 139677,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 139606,
             "fin": 139742,
             "duracion": 136
         },
         {
             "tecla": "R",
             "inicio": 139774,
             "fin": 139889,
             "duracion": 115
         },
         {
             "tecla": "R",
             "inicio": 140003,
             "fin": 140101,
             "duracion": 98
         },
         {
             "tecla": "T",
             "inicio": 140022,
             "fin": 140165,
             "duracion": 143
         },
         {
             "tecla": "R",
             "inicio": 140246,
             "fin": 140497,
             "duracion": 251
         },
         {
             "tecla": "R",
             "inicio": 140662,
             "fin": 140767,
             "duracion": 105
         },
         {
             "tecla": "U",
             "inicio": 140852,
             "fin": 140982,
             "duracion": 130
         },
         {
             "tecla": "T",
             "inicio": 141069,
             "fin": 141175,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 141299,
             "fin": 141398,
             "duracion": 99
         },
         {
             "tecla": "E",
             "inicio": 141480,
             "fin": 141617,
             "duracion": 137
         },
         {
             "tecla": "R",
             "inicio": 141691,
             "fin": 141808,
             "duracion": 117
         },
         {
             "tecla": "T",
             "inicio": 141706,
             "fin": 141889,
             "duracion": 183
         },
         {
             "tecla": "R",
             "inicio": 141924,
             "fin": 142066,
             "duracion": 142
         },
         {
             "tecla": "E",
             "inicio": 142361,
             "fin": 142526,
             "duracion": 165
         },
         {
             "tecla": "R",
             "inicio": 142547,
             "fin": 142689,
             "duracion": 142
         },
         {
             "tecla": "R",
             "inicio": 142782,
             "fin": 142910,
             "duracion": 128
         },
         {
             "tecla": "ESCAPE",
             "inicio": 139975,
             "fin": 143152,
             "duracion": 3177
         },
         {
             "tecla": "R",
             "inicio": 142993,
             "fin": 143152,
             "duracion": 159
         },
         {
             "tecla": "R",
             "inicio": 143154,
             "fin": 143389,
             "duracion": 235
         },
         {
             "tecla": "T",
             "inicio": 143430,
             "fin": 143889,
             "duracion": 459
         },
         {
             "tecla": "ESCAPE",
             "inicio": 143413,
             "fin": 144255,
             "duracion": 842
         },
         {
             "tecla": "R",
             "inicio": 144053,
             "fin": 144255,
             "duracion": 202
         },
         {
             "tecla": "R",
             "inicio": 144257,
             "fin": 144446,
             "duracion": 189
         },
         {
             "tecla": "R",
             "inicio": 144534,
             "fin": 144666,
             "duracion": 132
         },
         {
             "tecla": "R",
             "inicio": 144740,
             "fin": 144841,
             "duracion": 101
         },
         {
             "tecla": "ESCAPE",
             "inicio": 144917,
             "fin": 145149,
             "duracion": 232
         },
         {
             "tecla": "T",
             "inicio": 144943,
             "fin": 145149,
             "duracion": 206
         },
         {
             "tecla": "T",
             "inicio": 145150,
             "fin": 145341,
             "duracion": 191
         },
         {
             "tecla": "T",
             "inicio": 145454,
             "fin": 145775,
             "duracion": 321
         },
         {
             "tecla": "D",
             "inicio": 146062,
             "fin": 146134,
             "duracion": 72
         },
         {
             "tecla": "H",
             "inicio": 146038,
             "fin": 146166,
             "duracion": 128
         },
         {
             "tecla": "F",
             "inicio": 146240,
             "fin": 146360,
             "duracion": 120
         },
         {
             "tecla": "G",
             "inicio": 146458,
             "fin": 146567,
             "duracion": 109
         },
         {
             "tecla": "H",
             "inicio": 146649,
             "fin": 146874,
             "duracion": 225
         },
         {
             "tecla": "F",
             "inicio": 146900,
             "fin": 147006,
             "duracion": 106
         },
         {
             "tecla": "G",
             "inicio": 146968,
             "fin": 147072,
             "duracion": 104
         },
         {
             "tecla": "F",
             "inicio": 147106,
             "fin": 147261,
             "duracion": 155
         },
         {
             "tecla": "Y",
             "inicio": 147551,
             "fin": 147657,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 147768,
             "fin": 147874,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 147974,
             "fin": 148089,
             "duracion": 115
         },
         {
             "tecla": "Y",
             "inicio": 148195,
             "fin": 148294,
             "duracion": 99
         },
         {
             "tecla": "ESCAPE",
             "inicio": 145910,
             "fin": 148615,
             "duracion": 2705
         },
         {
             "tecla": "Y",
             "inicio": 148388,
             "fin": 148615,
             "duracion": 227
         },
         {
             "tecla": "Y",
             "inicio": 148616,
             "fin": 148992,
             "duracion": 376
         },
         {
             "tecla": "Y",
             "inicio": 148994,
             "fin": 149125,
             "duracion": 131
         },
         {
             "tecla": "Y",
             "inicio": 149238,
             "fin": 149358,
             "duracion": 120
         },
         {
             "tecla": "ESCAPE",
             "inicio": 148992,
             "fin": 149389,
             "duracion": 397
         },
         {
             "tecla": "T",
             "inicio": 149471,
             "fin": 149899,
             "duracion": 428
         },
         {
             "tecla": "T",
             "inicio": 149901,
             "fin": 150150,
             "duracion": 249
         },
         {
             "tecla": "R",
             "inicio": 150323,
             "fin": 150390,
             "duracion": 67
         },
         {
             "tecla": "U",
             "inicio": 150352,
             "fin": 150771,
             "duracion": 419
         },
         {
             "tecla": "R",
             "inicio": 150948,
             "fin": 151048,
             "duracion": 100
         },
         {
             "tecla": "U",
             "inicio": 151162,
             "fin": 151273,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 151383,
             "fin": 151471,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 151582,
             "fin": 151701,
             "duracion": 119
         },
         {
             "tecla": "E",
             "inicio": 151812,
             "fin": 151929,
             "duracion": 117
         },
         {
             "tecla": "R",
             "inicio": 152026,
             "fin": 152145,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 152046,
             "fin": 152224,
             "duracion": 178
         },
         {
             "tecla": "R",
             "inicio": 152321,
             "fin": 152440,
             "duracion": 119
         },
         {
             "tecla": "E",
             "inicio": 152688,
             "fin": 152793,
             "duracion": 105
         },
         {
             "tecla": "R",
             "inicio": 152906,
             "fin": 153033,
             "duracion": 127
         },
         {
             "tecla": "R",
             "inicio": 153130,
             "fin": 153240,
             "duracion": 110
         },
         {
             "tecla": "ESCAPE",
             "inicio": 149899,
             "fin": 153518,
             "duracion": 3619
         },
         {
             "tecla": "R",
             "inicio": 153329,
             "fin": 153518,
             "duracion": 189
         },
         {
             "tecla": "R",
             "inicio": 153519,
             "fin": 153725,
             "duracion": 206
         },
         {
             "tecla": "T",
             "inicio": 153783,
             "fin": 154242,
             "duracion": 459
         },
         {
             "tecla": "ESCAPE",
             "inicio": 153749,
             "fin": 154597,
             "duracion": 848
         },
         {
             "tecla": "R",
             "inicio": 154395,
             "fin": 154597,
             "duracion": 202
         },
         {
             "tecla": "R",
             "inicio": 154598,
             "fin": 154766,
             "duracion": 168
         },
         {
             "tecla": "R",
             "inicio": 154846,
             "fin": 154958,
             "duracion": 112
         },
         {
             "tecla": "R",
             "inicio": 155040,
             "fin": 155145,
             "duracion": 105
         },
         {
             "tecla": "T",
             "inicio": 155221,
             "fin": 155257,
             "duracion": 36
         },
         {
             "tecla": "ESCAPE",
             "inicio": 155257,
             "fin": 155517,
             "duracion": 260
         },
         {
             "tecla": "T",
             "inicio": 155259,
             "fin": 155517,
             "duracion": 258
         },
         {
             "tecla": "T",
             "inicio": 155518,
             "fin": 155661,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 155758,
             "fin": 156235,
             "duracion": 477
         },
         {
             "tecla": "D",
             "inicio": 156358,
             "fin": 156454,
             "duracion": 96
         },
         {
             "tecla": "H",
             "inicio": 156374,
             "fin": 156510,
             "duracion": 136
         },
         {
             "tecla": "F",
             "inicio": 156590,
             "fin": 156713,
             "duracion": 123
         },
         {
             "tecla": "G",
             "inicio": 156807,
             "fin": 156911,
             "duracion": 104
         },
         {
             "tecla": "H",
             "inicio": 156995,
             "fin": 157225,
             "duracion": 230
         },
         {
             "tecla": "F",
             "inicio": 157244,
             "fin": 157368,
             "duracion": 124
         },
         {
             "tecla": "G",
             "inicio": 157331,
             "fin": 157432,
             "duracion": 101
         },
         {
             "tecla": "F",
             "inicio": 157464,
             "fin": 157784,
             "duracion": 320
         },
         {
             "tecla": "Y",
             "inicio": 157924,
             "fin": 158051,
             "duracion": 127
         },
         {
             "tecla": "Y",
             "inicio": 158142,
             "fin": 158245,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 158357,
             "fin": 158464,
             "duracion": 107
         },
         {
             "tecla": "Y",
             "inicio": 158575,
             "fin": 158671,
             "duracion": 96
         },
         {
             "tecla": "ESCAPE",
             "inicio": 156293,
             "fin": 158998,
             "duracion": 2705
         },
         {
             "tecla": "Y",
             "inicio": 158779,
             "fin": 158999,
             "duracion": 220
         },
         {
             "tecla": "Y",
             "inicio": 159000,
             "fin": 159407,
             "duracion": 407
         },
         {
             "tecla": "Y",
             "inicio": 159407,
             "fin": 159501,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 159606,
             "fin": 159726,
             "duracion": 120
         },
         {
             "tecla": "ESCAPE",
             "inicio": 159406,
             "fin": 159743,
             "duracion": 337
         },
         {
             "tecla": "T",
             "inicio": 159862,
             "fin": 160298,
             "duracion": 436
         },
         {
             "tecla": "T",
             "inicio": 160299,
             "fin": 160573,
             "duracion": 274
         },
         {
             "tecla": "R",
             "inicio": 160709,
             "fin": 160783,
             "duracion": 74
         },
         {
             "tecla": "U",
             "inicio": 160731,
             "fin": 161135,
             "duracion": 404
         },
         {
             "tecla": "R",
             "inicio": 161351,
             "fin": 161481,
             "duracion": 130
         },
         {
             "tecla": "U",
             "inicio": 161561,
             "fin": 161711,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 161796,
             "fin": 161915,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 162011,
             "fin": 162110,
             "duracion": 99
         },
         {
             "tecla": "E",
             "inicio": 162204,
             "fin": 162338,
             "duracion": 134
         },
         {
             "tecla": "R",
             "inicio": 162442,
             "fin": 162525,
             "duracion": 83
         },
         {
             "tecla": "T",
             "inicio": 162420,
             "fin": 162565,
             "duracion": 145
         },
         {
             "tecla": "R",
             "inicio": 162646,
             "fin": 162777,
             "duracion": 131
         },
         {
             "tecla": "R",
             "inicio": 162860,
             "fin": 162958,
             "duracion": 98
         },
         {
             "tecla": "R",
             "inicio": 163062,
             "fin": 163167,
             "duracion": 105
         },
         {
             "tecla": "R",
             "inicio": 163466,
             "fin": 163566,
             "duracion": 100
         },
         {
             "tecla": "R",
             "inicio": 163671,
             "fin": 163777,
             "duracion": 106
         },
         {
             "tecla": "R",
             "inicio": 163874,
             "fin": 164017,
             "duracion": 143
         },
         {
             "tecla": "ESCAPE",
             "inicio": 160298,
             "fin": 164040,
             "duracion": 3742
         },
         {
             "tecla": "T",
             "inicio": 164110,
             "fin": 164254,
             "duracion": 144
         },
         {
             "tecla": "T",
             "inicio": 164358,
             "fin": 164675,
             "duracion": 317
         },
         {
             "tecla": "Y",
             "inicio": 164766,
             "fin": 164885,
             "duracion": 119
         },
         {
             "tecla": "ESCAPE",
             "inicio": 164985,
             "fin": 165393,
             "duracion": 408
         },
         {
             "tecla": "U",
             "inicio": 165013,
             "fin": 165394,
             "duracion": 381
         },
         {
             "tecla": "U",
             "inicio": 165395,
             "fin": 165625,
             "duracion": 230
         },
         {
             "tecla": "Y",
             "inicio": 165662,
             "fin": 165849,
             "duracion": 187
         },
         {
             "tecla": "Y",
             "inicio": 165851,
             "fin": 166046,
             "duracion": 195
         },
         {
             "tecla": "T",
             "inicio": 166102,
             "fin": 166377,
             "duracion": 275
         },
         {
             "tecla": "Y",
             "inicio": 166492,
             "fin": 166645,
             "duracion": 153
         },
         {
             "tecla": "ESCAPE",
             "inicio": 165849,
             "fin": 166677,
             "duracion": 828
         },
         {
             "tecla": "U",
             "inicio": 166750,
             "fin": 167142,
             "duracion": 392
         },
         {
             "tecla": "Y",
             "inicio": 167159,
             "fin": 167374,
             "duracion": 215
         },
         {
             "tecla": "Y",
             "inicio": 167374,
             "fin": 167566,
             "duracion": 192
         },
         {
             "tecla": "ESCAPE",
             "inicio": 167373,
             "fin": 167582,
             "duracion": 209
         },
         {
             "tecla": "T",
             "inicio": 167618,
             "fin": 167765,
             "duracion": 147
         },
         {
             "tecla": "R",
             "inicio": 167782,
             "fin": 168097,
             "duracion": 315
         },
         {
             "tecla": "ESCAPE",
             "inicio": 168142,
             "fin": 168446,
             "duracion": 304
         },
         {
             "tecla": "Y",
             "inicio": 168246,
             "fin": 168446,
             "duracion": 200
         },
         {
             "tecla": "Y",
             "inicio": 168446,
             "fin": 168865,
             "duracion": 419
         },
         {
             "tecla": "Y",
             "inicio": 168866,
             "fin": 168966,
             "duracion": 100
         },
         {
             "tecla": "ESCAPE",
             "inicio": 168865,
             "fin": 168990,
             "duracion": 125
         },
         {
             "tecla": "T",
             "inicio": 169022,
             "fin": 169181,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 169302,
             "fin": 169694,
             "duracion": 392
         },
         {
             "tecla": "W",
             "inicio": 169982,
             "fin": 170270,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 169958,
             "fin": 170286,
             "duracion": 328
         },
         {
             "tecla": "ESCAPE",
             "inicio": 169261,
             "fin": 170311,
             "duracion": 1050
         },
         {
             "tecla": "T",
             "inicio": 170366,
             "fin": 170485,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 170590,
             "fin": 170694,
             "duracion": 104
         },
         {
             "tecla": "T",
             "inicio": 170806,
             "fin": 170911,
             "duracion": 105
         },
         {
             "tecla": "T",
             "inicio": 171010,
             "fin": 171112,
             "duracion": 102
         },
         {
             "tecla": "T",
             "inicio": 171248,
             "fin": 171301,
             "duracion": 53
         },
         {
             "tecla": "Y",
             "inicio": 171223,
             "fin": 171537,
             "duracion": 314
         },
         {
             "tecla": "Y",
             "inicio": 171648,
             "fin": 171766,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 171860,
             "fin": 172058,
             "duracion": 198
         },
         {
             "tecla": "ESCAPE",
             "inicio": 172058,
             "fin": 172366,
             "duracion": 308
         },
         {
             "tecla": "Y",
             "inicio": 172060,
             "fin": 172366,
             "duracion": 306
         },
         {
             "tecla": "Y",
             "inicio": 172366,
             "fin": 172405,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 172510,
             "fin": 172685,
             "duracion": 175
         },
         {
             "tecla": "Y",
             "inicio": 172750,
             "fin": 172934,
             "duracion": 184
         },
         {
             "tecla": "ESCAPE",
             "inicio": 172717,
             "fin": 173281,
             "duracion": 564
         },
         {
             "tecla": "T",
             "inicio": 172969,
             "fin": 173281,
             "duracion": 312
         },
         {
             "tecla": "T",
             "inicio": 173283,
             "fin": 173493,
             "duracion": 210
         },
         {
             "tecla": "Y",
             "inicio": 173534,
             "fin": 173557,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 173558,
             "fin": 173910,
             "duracion": 352
         },
         {
             "tecla": "ESCAPE",
             "inicio": 173557,
             "fin": 173976,
             "duracion": 419
         },
         {
             "tecla": "T",
             "inicio": 173961,
             "fin": 173976,
             "duracion": 15
         },
         {
             "tecla": "T",
             "inicio": 173977,
             "fin": 174206,
             "duracion": 229
         },
         {
             "tecla": "ESCAPE",
             "inicio": 174205,
             "fin": 174421,
             "duracion": 216
         },
         {
             "tecla": "T",
             "inicio": 174206,
             "fin": 174421,
             "duracion": 215
         },
         {
             "tecla": "T",
             "inicio": 174422,
             "fin": 174685,
             "duracion": 263
         },
         {
             "tecla": "R",
             "inicio": 174654,
             "fin": 174971,
             "duracion": 317
         },
         {
             "tecla": "ESCAPE",
             "inicio": 175050,
             "fin": 175261,
             "duracion": 211
         },
         {
             "tecla": "T",
             "inicio": 175086,
             "fin": 175261,
             "duracion": 175
         },
         {
             "tecla": "T",
             "inicio": 175262,
             "fin": 175694,
             "duracion": 432
         },
         {
             "tecla": "ESCAPE",
             "inicio": 175693,
             "fin": 175830,
             "duracion": 137
         },
         {
             "tecla": "T",
             "inicio": 175694,
             "fin": 175830,
             "duracion": 136
         },
         {
             "tecla": "T",
             "inicio": 175830,
             "fin": 175862,
             "duracion": 32
         },
         {
             "tecla": "R",
             "inicio": 175894,
             "fin": 176126,
             "duracion": 232
         },
         {
             "tecla": "R",
             "inicio": 176126,
             "fin": 176149,
             "duracion": 23
         },
         {
             "tecla": "ESCAPE",
             "inicio": 176126,
             "fin": 176937,
             "duracion": 811
         },
         {
             "tecla": "T",
             "inicio": 176174,
             "fin": 176938,
             "duracion": 764
         },
         {
             "tecla": "T",
             "inicio": 176939,
             "fin": 176954,
             "duracion": 15
         },
         {
             "tecla": "T",
             "inicio": 177233,
             "fin": 177352,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 177443,
             "fin": 177553,
             "duracion": 110
         },
         {
             "tecla": "T",
             "inicio": 177644,
             "fin": 177753,
             "duracion": 109
         },
         {
             "tecla": "T",
             "inicio": 177850,
             "fin": 177949,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 178055,
             "fin": 178338,
             "duracion": 283
         },
         {
             "tecla": "Y",
             "inicio": 178476,
             "fin": 178582,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 178708,
             "fin": 178930,
             "duracion": 222
         },
         {
             "tecla": "ESCAPE",
             "inicio": 178929,
             "fin": 179262,
             "duracion": 333
         },
         {
             "tecla": "Y",
             "inicio": 178931,
             "fin": 179262,
             "duracion": 331
         },
         {
             "tecla": "Y",
             "inicio": 179262,
             "fin": 179309,
             "duracion": 47
         },
         {
             "tecla": "T",
             "inicio": 179366,
             "fin": 179518,
             "duracion": 152
         },
         {
             "tecla": "Y",
             "inicio": 179582,
             "fin": 179749,
             "duracion": 167
         },
         {
             "tecla": "ESCAPE",
             "inicio": 179565,
             "fin": 180157,
             "duracion": 592
         },
         {
             "tecla": "T",
             "inicio": 179790,
             "fin": 180157,
             "duracion": 367
         },
         {
             "tecla": "T",
             "inicio": 180158,
             "fin": 180357,
             "duracion": 199
         },
         {
             "tecla": "Y",
             "inicio": 180398,
             "fin": 180423,
             "duracion": 25
         },
         {
             "tecla": "Y",
             "inicio": 180423,
             "fin": 180774,
             "duracion": 351
         },
         {
             "tecla": "ESCAPE",
             "inicio": 180422,
             "fin": 180798,
             "duracion": 376
         },
         {
             "tecla": "T",
             "inicio": 180819,
             "fin": 181053,
             "duracion": 234
         },
         {
             "tecla": "ESCAPE",
             "inicio": 181053,
             "fin": 181254,
             "duracion": 201
         },
         {
             "tecla": "T",
             "inicio": 181054,
             "fin": 181254,
             "duracion": 200
         },
         {
             "tecla": "T",
             "inicio": 181254,
             "fin": 181502,
             "duracion": 248
         },
         {
             "tecla": "R",
             "inicio": 181526,
             "fin": 181823,
             "duracion": 297
         },
         {
             "tecla": "ESCAPE",
             "inicio": 181887,
             "fin": 182133,
             "duracion": 246
         },
         {
             "tecla": "T",
             "inicio": 181920,
             "fin": 182133,
             "duracion": 213
         },
         {
             "tecla": "T",
             "inicio": 182134,
             "fin": 182550,
             "duracion": 416
         },
         {
             "tecla": "ESCAPE",
             "inicio": 182550,
             "fin": 182701,
             "duracion": 151
         },
         {
             "tecla": "T",
             "inicio": 182551,
             "fin": 182701,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 182701,
             "fin": 182749,
             "duracion": 48
         },
         {
             "tecla": "R",
             "inicio": 182766,
             "fin": 182965,
             "duracion": 199
         },
         {
             "tecla": "R",
             "inicio": 182966,
             "fin": 183402,
             "duracion": 436
         },
         {
             "tecla": "T",
             "inicio": 183876,
             "fin": 184783,
             "duracion": 907
         },
         {
             "tecla": "Y",
             "inicio": 183891,
             "fin": 184799,
             "duracion": 908
         },
         {
             "tecla": "T",
             "inicio": 184919,
             "fin": 185009,
             "duracion": 90
         },
         {
             "tecla": "Y",
             "inicio": 184903,
             "fin": 185034,
             "duracion": 131
         },
         {
             "tecla": "ESCAPE",
             "inicio": 182965,
             "fin": 185270,
             "duracion": 2305
         },
         {
             "tecla": "T",
             "inicio": 185100,
             "fin": 185271,
             "duracion": 171
         },
         {
             "tecla": "Y",
             "inicio": 185118,
             "fin": 185271,
             "duracion": 153
         },
         {
             "tecla": "T",
             "inicio": 185271,
             "fin": 185454,
             "duracion": 183
         },
         {
             "tecla": "Y",
             "inicio": 185272,
             "fin": 185509,
             "duracion": 237
         },
         {
             "tecla": "U",
             "inicio": 185471,
             "fin": 185830,
             "duracion": 359
         },
         {
             "tecla": "M",
             "inicio": 185494,
             "fin": 185845,
             "duracion": 351
         },
         {
             "tecla": "T",
             "inicio": 185879,
             "fin": 185895,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 185896,
             "fin": 186262,
             "duracion": 366
         },
         {
             "tecla": "ESCAPE",
             "inicio": 185895,
             "fin": 186278,
             "duracion": 383
         },
         {
             "tecla": "Y",
             "inicio": 185922,
             "fin": 186278,
             "duracion": 356
         },
         {
             "tecla": "Y",
             "inicio": 186278,
             "fin": 186301,
             "duracion": 23
         },
         {
             "tecla": "R",
             "inicio": 186358,
             "fin": 186676,
             "duracion": 318
         },
         {
             "tecla": "T",
             "inicio": 186382,
             "fin": 186703,
             "duracion": 321
         },
         {
             "tecla": "D",
             "inicio": 186801,
             "fin": 187138,
             "duracion": 337
         },
         {
             "tecla": "H",
             "inicio": 186814,
             "fin": 187162,
             "duracion": 348
         },
         {
             "tecla": "F",
             "inicio": 187228,
             "fin": 187560,
             "duracion": 332
         },
         {
             "tecla": "J",
             "inicio": 187247,
             "fin": 187577,
             "duracion": 330
         },
         {
             "tecla": "ESCAPE",
             "inicio": 186773,
             "fin": 187945,
             "duracion": 1172
         },
         {
             "tecla": "G",
             "inicio": 187643,
             "fin": 187945,
             "duracion": 302
         },
         {
             "tecla": "K",
             "inicio": 187668,
             "fin": 187946,
             "duracion": 278
         },
         {
             "tecla": "G",
             "inicio": 187948,
             "fin": 187969,
             "duracion": 21
         },
         {
             "tecla": "K",
             "inicio": 187949,
             "fin": 187981,
             "duracion": 32
         },
         {
             "tecla": "Y",
             "inicio": 188064,
             "fin": 188166,
             "duracion": 102
         },
         {
             "tecla": "T",
             "inicio": 188046,
             "fin": 188189,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 188286,
             "fin": 188385,
             "duracion": 99
         },
         {
             "tecla": "Y",
             "inicio": 188270,
             "fin": 188401,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 188486,
             "fin": 188574,
             "duracion": 88
         },
         {
             "tecla": "Y",
             "inicio": 188470,
             "fin": 188590,
             "duracion": 120
         },
         {
             "tecla": "M",
             "inicio": 188673,
             "fin": 188898,
             "duracion": 225
         },
         {
             "tecla": "U",
             "inicio": 188696,
             "fin": 188898,
             "duracion": 202
         },
         {
             "tecla": "U",
             "inicio": 188902,
             "fin": 189238,
             "duracion": 336
         },
         {
             "tecla": "ESCAPE",
             "inicio": 188897,
             "fin": 189277,
             "duracion": 380
         },
         {
             "tecla": "M",
             "inicio": 188900,
             "fin": 189278,
             "duracion": 378
         },
         {
             "tecla": "M",
             "inicio": 189278,
             "fin": 189302,
             "duracion": 24
         },
         {
             "tecla": "T",
             "inicio": 189320,
             "fin": 189769,
             "duracion": 449
         },
         {
             "tecla": "Y",
             "inicio": 189342,
             "fin": 189769,
             "duracion": 427
         },
         {
             "tecla": "T",
             "inicio": 189771,
             "fin": 190005,
             "duracion": 234
         },
         {
             "tecla": "Y",
             "inicio": 189772,
             "fin": 190021,
             "duracion": 249
         },
         {
             "tecla": "E",
             "inicio": 190179,
             "fin": 190513,
             "duracion": 334
         },
         {
             "tecla": "Y",
             "inicio": 190201,
             "fin": 190537,
             "duracion": 336
         },
         {
             "tecla": "R",
             "inicio": 190611,
             "fin": 190922,
             "duracion": 311
         },
         {
             "tecla": "U",
             "inicio": 190633,
             "fin": 190944,
             "duracion": 311
         },
         {
             "tecla": "T",
             "inicio": 191039,
             "fin": 191522,
             "duracion": 483
         },
         {
             "tecla": "I",
             "inicio": 191070,
             "fin": 191545,
             "duracion": 475
         },
         {
             "tecla": "Y",
             "inicio": 191745,
             "fin": 191846,
             "duracion": 101
         },
         {
             "tecla": "T",
             "inicio": 191744,
             "fin": 191863,
             "duracion": 119
         },
         {
             "tecla": "ESCAPE",
             "inicio": 189769,
             "fin": 192153,
             "duracion": 2384
         },
         {
             "tecla": "T",
             "inicio": 191934,
             "fin": 192153,
             "duracion": 219
         },
         {
             "tecla": "Y",
             "inicio": 191960,
             "fin": 192153,
             "duracion": 193
         },
         {
             "tecla": "T",
             "inicio": 192155,
             "fin": 192309,
             "duracion": 154
         },
         {
             "tecla": "Y",
             "inicio": 192157,
             "fin": 192365,
             "duracion": 208
         },
         {
             "tecla": "U",
             "inicio": 192342,
             "fin": 192665,
             "duracion": 323
         },
         {
             "tecla": "M",
             "inicio": 192382,
             "fin": 192685,
             "duracion": 303
         },
         {
             "tecla": "T",
             "inicio": 192755,
             "fin": 192777,
             "duracion": 22
         },
         {
             "tecla": "ESCAPE",
             "inicio": 192776,
             "fin": 193128,
             "duracion": 352
         },
         {
             "tecla": "T",
             "inicio": 192778,
             "fin": 193128,
             "duracion": 350
         },
         {
             "tecla": "Y",
             "inicio": 192794,
             "fin": 193128,
             "duracion": 334
         },
         {
             "tecla": "T",
             "inicio": 193129,
             "fin": 193159,
             "duracion": 30
         },
         {
             "tecla": "Y",
             "inicio": 193130,
             "fin": 193166,
             "duracion": 36
         },
         {
             "tecla": "R",
             "inicio": 193246,
             "fin": 193520,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 193230,
             "fin": 193534,
             "duracion": 304
         },
         {
             "tecla": "D",
             "inicio": 193638,
             "fin": 193975,
             "duracion": 337
         },
         {
             "tecla": "H",
             "inicio": 193662,
             "fin": 194003,
             "duracion": 341
         },
         {
             "tecla": "F",
             "inicio": 194084,
             "fin": 194407,
             "duracion": 323
         },
         {
             "tecla": "J",
             "inicio": 194103,
             "fin": 194424,
             "duracion": 321
         },
         {
             "tecla": "G",
             "inicio": 194508,
             "fin": 194799,
             "duracion": 291
         },
         {
             "tecla": "K",
             "inicio": 194521,
             "fin": 194815,
             "duracion": 294
         },
         {
             "tecla": "ESCAPE",
             "inicio": 193598,
             "fin": 194847,
             "duracion": 1249
         },
         {
             "tecla": "T",
             "inicio": 194918,
             "fin": 195037,
             "duracion": 119
         },
         {
             "tecla": "Y",
             "inicio": 194942,
             "fin": 195063,
             "duracion": 121
         },
         {
             "tecla": "T",
             "inicio": 195174,
             "fin": 195265,
             "duracion": 91
         },
         {
             "tecla": "Y",
             "inicio": 195151,
             "fin": 195282,
             "duracion": 131
         },
         {
             "tecla": "T",
             "inicio": 195351,
             "fin": 195462,
             "duracion": 111
         },
         {
             "tecla": "Y",
             "inicio": 195374,
             "fin": 195477,
             "duracion": 103
         },
         {
             "tecla": "U",
             "inicio": 195550,
             "fin": 195789,
             "duracion": 239
         },
         {
             "tecla": "M",
             "inicio": 195574,
             "fin": 195790,
             "duracion": 216
         },
         {
             "tecla": "M",
             "inicio": 195790,
             "fin": 196125,
             "duracion": 335
         },
         {
             "tecla": "U",
             "inicio": 195790,
             "fin": 196142,
             "duracion": 352
         },
         {
             "tecla": "ESCAPE",
             "inicio": 195789,
             "fin": 196189,
             "duracion": 400
         },
         {
             "tecla": "T",
             "inicio": 196215,
             "fin": 196648,
             "duracion": 433
         },
         {
             "tecla": "Y",
             "inicio": 196230,
             "fin": 196648,
             "duracion": 418
         },
         {
             "tecla": "Y",
             "inicio": 196650,
             "fin": 196998,
             "duracion": 348
         },
         {
             "tecla": "T",
             "inicio": 196649,
             "fin": 197022,
             "duracion": 373
         },
         {
             "tecla": "E",
             "inicio": 197323,
             "fin": 197523,
             "duracion": 200
         },
         {
             "tecla": "Y",
             "inicio": 197508,
             "fin": 197725,
             "duracion": 217
         },
         {
             "tecla": "R",
             "inicio": 197702,
             "fin": 197861,
             "duracion": 159
         },
         {
             "tecla": "T",
             "inicio": 197814,
             "fin": 197974,
             "duracion": 160
         },
         {
             "tecla": "U",
             "inicio": 197991,
             "fin": 198200,
             "duracion": 209
         },
         {
             "tecla": "I",
             "inicio": 197956,
             "fin": 198217,
             "duracion": 261
         },
         {
             "tecla": "T",
             "inicio": 198345,
             "fin": 198455,
             "duracion": 110
         },
         {
             "tecla": "Y",
             "inicio": 198362,
             "fin": 198473,
             "duracion": 111
         },
         {
             "tecla": "T",
             "inicio": 198579,
             "fin": 198679,
             "duracion": 100
         },
         {
             "tecla": "Y",
             "inicio": 198603,
             "fin": 198704,
             "duracion": 101
         },
         {
             "tecla": "ESCAPE",
             "inicio": 196648,
             "fin": 198951,
             "duracion": 2303
         },
         {
             "tecla": "T",
             "inicio": 198785,
             "fin": 198951,
             "duracion": 166
         },
         {
             "tecla": "Y",
             "inicio": 198802,
             "fin": 198951,
             "duracion": 149
         },
         {
             "tecla": "T",
             "inicio": 198952,
             "fin": 199102,
             "duracion": 150
         },
         {
             "tecla": "Y",
             "inicio": 198953,
             "fin": 199125,
             "duracion": 172
         },
         {
             "tecla": "M",
             "inicio": 199206,
             "fin": 199504,
             "duracion": 298
         },
         {
             "tecla": "U",
             "inicio": 199190,
             "fin": 199528,
             "duracion": 338
         },
         {
             "tecla": "T",
             "inicio": 199602,
             "fin": 199864,
             "duracion": 262
         },
         {
             "tecla": "Y",
             "inicio": 199617,
             "fin": 199864,
             "duracion": 247
         },
         {
             "tecla": "ESCAPE",
             "inicio": 199864,
             "fin": 200141,
             "duracion": 277
         },
         {
             "tecla": "T",
             "inicio": 199865,
             "fin": 200141,
             "duracion": 276
         },
         {
             "tecla": "Y",
             "inicio": 199866,
             "fin": 200141,
             "duracion": 275
         },
         {
             "tecla": "T",
             "inicio": 200142,
             "fin": 200165,
             "duracion": 23
         },
         {
             "tecla": "Y",
             "inicio": 200142,
             "fin": 200181,
             "duracion": 39
         },
         {
             "tecla": "R",
             "inicio": 200270,
             "fin": 200544,
             "duracion": 274
         },
         {
             "tecla": "T",
             "inicio": 200294,
             "fin": 200561,
             "duracion": 267
         },
         {
             "tecla": "T",
             "inicio": 200704,
             "fin": 200807,
             "duracion": 103
         },
         {
             "tecla": "Y",
             "inicio": 200723,
             "fin": 200823,
             "duracion": 100
         },
         {
             "tecla": "U",
             "inicio": 200935,
             "fin": 201208,
             "duracion": 273
         },
         {
             "tecla": "M",
             "inicio": 200919,
             "fin": 201232,
             "duracion": 313
         },
         {
             "tecla": "Y",
             "inicio": 201323,
             "fin": 201602,
             "duracion": 279
         },
         {
             "tecla": "T",
             "inicio": 201336,
             "fin": 201602,
             "duracion": 266
         },
         {
             "tecla": "ESCAPE",
             "inicio": 201602,
             "fin": 201881,
             "duracion": 279
         },
         {
             "tecla": "Y",
             "inicio": 201604,
             "fin": 201881,
             "duracion": 277
         },
         {
             "tecla": "T",
             "inicio": 201605,
             "fin": 201882,
             "duracion": 277
         },
         {
             "tecla": "Y",
             "inicio": 201883,
             "fin": 201904,
             "duracion": 21
         },
         {
             "tecla": "T",
             "inicio": 201885,
             "fin": 201926,
             "duracion": 41
         },
         {
             "tecla": "R",
             "inicio": 202022,
             "fin": 202294,
             "duracion": 272
         },
         {
             "tecla": "T",
             "inicio": 201998,
             "fin": 202310,
             "duracion": 312
         },
         {
             "tecla": "T",
             "inicio": 202463,
             "fin": 202543,
             "duracion": 80
         },
         {
             "tecla": "R",
             "inicio": 202439,
             "fin": 202567,
             "duracion": 128
         },
         {
             "tecla": "T",
             "inicio": 202676,
             "fin": 202974,
             "duracion": 298
         },
         {
             "tecla": "Y",
             "inicio": 202693,
             "fin": 202990,
             "duracion": 297
         },
         {
             "tecla": "R",
             "inicio": 203118,
             "fin": 203183,
             "duracion": 65
         },
         {
             "tecla": "T",
             "inicio": 203103,
             "fin": 203200,
             "duracion": 97
         },
         {
             "tecla": "T",
             "inicio": 203342,
             "fin": 203630,
             "duracion": 288
         },
         {
             "tecla": "Y",
             "inicio": 203331,
             "fin": 203647,
             "duracion": 316
         },
         {
             "tecla": "R",
             "inicio": 203754,
             "fin": 203984,
             "duracion": 230
         },
         {
             "tecla": "T",
             "inicio": 203738,
             "fin": 204009,
             "duracion": 271
         },
         {
             "tecla": "E",
             "inicio": 204162,
             "fin": 204398,
             "duracion": 236
         },
         {
             "tecla": "Y",
             "inicio": 204382,
             "fin": 204593,
             "duracion": 211
         },
         {
             "tecla": "R",
             "inicio": 204579,
             "fin": 204729,
             "duracion": 150
         },
         {
             "tecla": "T",
             "inicio": 204683,
             "fin": 204799,
             "duracion": 116
         },
         {
             "tecla": "Y",
             "inicio": 204842,
             "fin": 204935,
             "duracion": 93
         },
         {
             "tecla": "U",
             "inicio": 204865,
             "fin": 205102,
             "duracion": 237
         },
         {
             "tecla": "I",
             "inicio": 204825,
             "fin": 205127,
             "duracion": 302
         },
         {
             "tecla": "T",
             "inicio": 205272,
             "fin": 205369,
             "duracion": 97
         },
         {
             "tecla": "Y",
             "inicio": 205251,
             "fin": 205394,
             "duracion": 143
         },
         {
             "tecla": "T",
             "inicio": 205471,
             "fin": 205577,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 205487,
             "fin": 205593,
             "duracion": 106
         },
         {
             "tecla": "ESCAPE",
             "inicio": 203297,
             "fin": 205865,
             "duracion": 2568
         },
         {
             "tecla": "T",
             "inicio": 205693,
             "fin": 205865,
             "duracion": 172
         },
         {
             "tecla": "Y",
             "inicio": 205709,
             "fin": 205865,
             "duracion": 156
         },
         {
             "tecla": "T",
             "inicio": 205867,
             "fin": 206149,
             "duracion": 282
         },
         {
             "tecla": "Y",
             "inicio": 205868,
             "fin": 206190,
             "duracion": 322
         },
         {
             "tecla": "M",
             "inicio": 206166,
             "fin": 206471,
             "duracion": 305
         },
         {
             "tecla": "U",
             "inicio": 206126,
             "fin": 206486,
             "duracion": 360
         },
         {
             "tecla": "T",
             "inicio": 206534,
             "fin": 206771,
             "duracion": 237
         },
         {
             "tecla": "Y",
             "inicio": 206550,
             "fin": 206771,
             "duracion": 221
         },
         {
             "tecla": "ESCAPE",
             "inicio": 206770,
             "fin": 207077,
             "duracion": 307
         },
         {
             "tecla": "T",
             "inicio": 206773,
             "fin": 207078,
             "duracion": 305
         },
         {
             "tecla": "Y",
             "inicio": 206774,
             "fin": 207078,
             "duracion": 304
         },
         {
             "tecla": "T",
             "inicio": 207078,
             "fin": 207103,
             "duracion": 25
         },
         {
             "tecla": "Y",
             "inicio": 207079,
             "fin": 207118,
             "duracion": 39
         },
         {
             "tecla": "R",
             "inicio": 207191,
             "fin": 207478,
             "duracion": 287
         },
         {
             "tecla": "T",
             "inicio": 207206,
             "fin": 207502,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 207649,
             "fin": 207727,
             "duracion": 78
         },
         {
             "tecla": "Y",
             "inicio": 207625,
             "fin": 207744,
             "duracion": 119
         },
         {
             "tecla": "M",
             "inicio": 207871,
             "fin": 208187,
             "duracion": 316
         },
         {
             "tecla": "U",
             "inicio": 207855,
             "fin": 208210,
             "duracion": 355
         },
         {
             "tecla": "T",
             "inicio": 208242,
             "fin": 208487,
             "duracion": 245
         },
         {
             "tecla": "Y",
             "inicio": 208257,
             "fin": 208487,
             "duracion": 230
         },
         {
             "tecla": "ESCAPE",
             "inicio": 208487,
             "fin": 208733,
             "duracion": 246
         },
         {
             "tecla": "T",
             "inicio": 208488,
             "fin": 208733,
             "duracion": 245
         },
         {
             "tecla": "Y",
             "inicio": 208488,
             "fin": 208733,
             "duracion": 245
         },
         {
             "tecla": "T",
             "inicio": 208734,
             "fin": 208789,
             "duracion": 55
         },
         {
             "tecla": "Y",
             "inicio": 208734,
             "fin": 208813,
             "duracion": 79
         },
         {
             "tecla": "R",
             "inicio": 208894,
             "fin": 209210,
             "duracion": 316
         },
         {
             "tecla": "T",
             "inicio": 208910,
             "fin": 209225,
             "duracion": 315
         },
         {
             "tecla": "R",
             "inicio": 209336,
             "fin": 209415,
             "duracion": 79
         },
         {
             "tecla": "T",
             "inicio": 209319,
             "fin": 209438,
             "duracion": 119
         },
         {
             "tecla": "T",
             "inicio": 209571,
             "fin": 209849,
             "duracion": 278
         },
         {
             "tecla": "Y",
             "inicio": 209556,
             "fin": 209872,
             "duracion": 316
         },
         {
             "tecla": "R",
             "inicio": 209967,
             "fin": 210062,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 209949,
             "fin": 210081,
             "duracion": 132
         },
         {
             "tecla": "T",
             "inicio": 210191,
             "fin": 210529,
             "duracion": 338
         },
         {
             "tecla": "Y",
             "inicio": 210166,
             "fin": 210546,
             "duracion": 380
         },
         {
             "tecla": "R",
             "inicio": 210617,
             "fin": 211030,
             "duracion": 413
         },
         {
             "tecla": "T",
             "inicio": 210633,
             "fin": 211069,
             "duracion": 436
         },
         {
             "tecla": "T",
             "inicio": 211258,
             "fin": 212121,
             "duracion": 863
         },
         {
             "tecla": "Y",
             "inicio": 211234,
             "fin": 212137,
             "duracion": 903
         },
         {
             "tecla": "T",
             "inicio": 212313,
             "fin": 212400,
             "duracion": 87
         },
         {
             "tecla": "Y",
             "inicio": 212288,
             "fin": 212415,
             "duracion": 127
         },
         {
             "tecla": "ESCAPE",
             "inicio": 210112,
             "fin": 212697,
             "duracion": 2585
         },
         {
             "tecla": "Y",
             "inicio": 212496,
             "fin": 212697,
             "duracion": 201
         },
         {
             "tecla": "T",
             "inicio": 212513,
             "fin": 212697,
             "duracion": 184
         },
         {
             "tecla": "T",
             "inicio": 212700,
             "fin": 212821,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 212699,
             "fin": 212934,
             "duracion": 235
         },
         {
             "tecla": "U",
             "inicio": 212894,
             "fin": 213230,
             "duracion": 336
         },
         {
             "tecla": "M",
             "inicio": 212918,
             "fin": 213254,
             "duracion": 336
         },
         {
             "tecla": "ESCAPE",
             "inicio": 213302,
             "fin": 213622,
             "duracion": 320
         },
         {
             "tecla": "T",
             "inicio": 213320,
             "fin": 213622,
             "duracion": 302
         },
         {
             "tecla": "Y",
             "inicio": 213344,
             "fin": 213622,
             "duracion": 278
         },
         {
             "tecla": "T",
             "inicio": 213622,
             "fin": 213669,
             "duracion": 47
         },
         {
             "tecla": "Y",
             "inicio": 213623,
             "fin": 213686,
             "duracion": 63
         },
         {
             "tecla": "R",
             "inicio": 213799,
             "fin": 214094,
             "duracion": 295
         },
         {
             "tecla": "T",
             "inicio": 213782,
             "fin": 214134,
             "duracion": 352
         },
         {
             "tecla": "E",
             "inicio": 214207,
             "fin": 214717,
             "duracion": 510
         },
         {
             "tecla": "R",
             "inicio": 214662,
             "fin": 214870,
             "duracion": 208
         },
         {
             "tecla": "E",
             "inicio": 214859,
             "fin": 215014,
             "duracion": 155
         },
         {
             "tecla": "C",
             "inicio": 215150,
             "fin": 215602,
             "duracion": 452
         },
         {
             "tecla": "V",
             "inicio": 215132,
             "fin": 215649,
             "duracion": 517
         },
         {
             "tecla": "Y",
             "inicio": 215796,
             "fin": 215880,
             "duracion": 84
         },
         {
             "tecla": "T",
             "inicio": 215780,
             "fin": 215902,
             "duracion": 122
         },
         {
             "tecla": "T",
             "inicio": 215977,
             "fin": 216054,
             "duracion": 77
         },
         {
             "tecla": "Y",
             "inicio": 215955,
             "fin": 216078,
             "duracion": 123
         },
         {
             "tecla": "E",
             "inicio": 216191,
             "fin": 216278,
             "duracion": 87
         },
         {
             "tecla": "U",
             "inicio": 216206,
             "fin": 216302,
             "duracion": 96
         },
         {
             "tecla": "M",
             "inicio": 216167,
             "fin": 216326,
             "duracion": 159
         },
         {
             "tecla": "R",
             "inicio": 216402,
             "fin": 216718,
             "duracion": 316
         },
         {
             "tecla": "M",
             "inicio": 216438,
             "fin": 216734,
             "duracion": 296
         },
         {
             "tecla": "U",
             "inicio": 216414,
             "fin": 216762,
             "duracion": 348
         },
         {
             "tecla": "ESCAPE",
             "inicio": 216376,
             "fin": 216776,
             "duracion": 400
         },
         {
             "tecla": "Y",
             "inicio": 216830,
             "fin": 217170,
             "duracion": 340
         },
         {
             "tecla": "T",
             "inicio": 216807,
             "fin": 217195,
             "duracion": 388
         },
         {
             "tecla": "T",
             "inicio": 217251,
             "fin": 217581,
             "duracion": 330
         },
         {
             "tecla": "Y",
             "inicio": 217264,
             "fin": 217597,
             "duracion": 333
         },
         {
             "tecla": "T",
             "inicio": 217694,
             "fin": 218025,
             "duracion": 331
         },
         {
             "tecla": "R",
             "inicio": 217670,
             "fin": 218038,
             "duracion": 368
         },
         {
             "tecla": "T",
             "inicio": 218119,
             "fin": 218240,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 218135,
             "fin": 218268,
             "duracion": 133
         },
         {
             "tecla": "T",
             "inicio": 218322,
             "fin": 218457,
             "duracion": 135
         },
         {
             "tecla": "T",
             "inicio": 218567,
             "fin": 219040,
             "duracion": 473
         },
         {
             "tecla": "R",
             "inicio": 218551,
             "fin": 219062,
             "duracion": 511
         },
         {
             "tecla": "T",
             "inicio": 219142,
             "fin": 219266,
             "duracion": 124
         },
         {
             "tecla": "Y",
             "inicio": 219167,
             "fin": 219285,
             "duracion": 118
         },
         {
             "tecla": "ESCAPE",
             "inicio": 217225,
             "fin": 219550,
             "duracion": 2325
         },
         {
             "tecla": "T",
             "inicio": 219371,
             "fin": 219550,
             "duracion": 179
         },
         {
             "tecla": "Y",
             "inicio": 219387,
             "fin": 219550,
             "duracion": 163
         },
         {
             "tecla": "T",
             "inicio": 219551,
             "fin": 219710,
             "duracion": 159
         },
         {
             "tecla": "Y",
             "inicio": 219551,
             "fin": 219733,
             "duracion": 182
         },
         {
             "tecla": "U",
             "inicio": 219814,
             "fin": 220119,
             "duracion": 305
         },
         {
             "tecla": "M",
             "inicio": 219838,
             "fin": 220134,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 220199,
             "fin": 220221,
             "duracion": 22
         },
         {
             "tecla": "T",
             "inicio": 220222,
             "fin": 220551,
             "duracion": 329
         },
         {
             "tecla": "Y",
             "inicio": 220238,
             "fin": 220575,
             "duracion": 337
         },
         {
             "tecla": "ESCAPE",
             "inicio": 220221,
             "fin": 220591,
             "duracion": 370
         },
         {
             "tecla": "R",
             "inicio": 220638,
             "fin": 220934,
             "duracion": 296
         },
         {
             "tecla": "T",
             "inicio": 220654,
             "fin": 220958,
             "duracion": 304
         },
         {
             "tecla": "E",
             "inicio": 221049,
             "fin": 221401,
             "duracion": 352
         },
         {
             "tecla": "E",
             "inicio": 221478,
             "fin": 221582,
             "duracion": 104
         },
         {
             "tecla": "R",
             "inicio": 221502,
             "fin": 221606,
             "duracion": 104
         },
         {
             "tecla": "E",
             "inicio": 221676,
             "fin": 221802,
             "duracion": 126
         },
         {
             "tecla": "V",
             "inicio": 221942,
             "fin": 222378,
             "duracion": 436
         },
         {
             "tecla": "C",
             "inicio": 221918,
             "fin": 222402,
             "duracion": 484
         },
         {
             "tecla": "T",
             "inicio": 222519,
             "fin": 222614,
             "duracion": 95
         },
         {
             "tecla": "Y",
             "inicio": 222544,
             "fin": 222639,
             "duracion": 95
         },
         {
             "tecla": "T",
             "inicio": 222723,
             "fin": 222817,
             "duracion": 94
         },
         {
             "tecla": "Y",
             "inicio": 222746,
             "fin": 222834,
             "duracion": 88
         },
         {
             "tecla": "U",
             "inicio": 222932,
             "fin": 223175,
             "duracion": 243
         },
         {
             "tecla": "M",
             "inicio": 222954,
             "fin": 223175,
             "duracion": 221
         },
         {
             "tecla": "U",
             "inicio": 223176,
             "fin": 223513,
             "duracion": 337
         },
         {
             "tecla": "ESCAPE",
             "inicio": 223175,
             "fin": 223529,
             "duracion": 354
         },
         {
             "tecla": "M",
             "inicio": 223176,
             "fin": 223530,
             "duracion": 354
         },
         {
             "tecla": "M",
             "inicio": 223531,
             "fin": 223556,
             "duracion": 25
         },
         {
             "tecla": "T",
             "inicio": 223568,
             "fin": 223975,
             "duracion": 407
         },
         {
             "tecla": "Y",
             "inicio": 223590,
             "fin": 223975,
             "duracion": 385
         },
         {
             "tecla": "T",
             "inicio": 223976,
             "fin": 224278,
             "duracion": 302
         },
         {
             "tecla": "Y",
             "inicio": 223976,
             "fin": 224301,
             "duracion": 325
         },
         {
             "tecla": "R",
             "inicio": 224395,
             "fin": 224722,
             "duracion": 327
         },
         {
             "tecla": "T",
             "inicio": 224417,
             "fin": 224738,
             "duracion": 321
         },
         {
             "tecla": "T",
             "inicio": 224828,
             "fin": 224934,
             "duracion": 106
         },
         {
             "tecla": "Y",
             "inicio": 224849,
             "fin": 224969,
             "duracion": 120
         },
         {
             "tecla": "T",
             "inicio": 225018,
             "fin": 225158,
             "duracion": 140
         },
         {
             "tecla": "R",
             "inicio": 225275,
             "fin": 225736,
             "duracion": 461
         },
         {
             "tecla": "T",
             "inicio": 225258,
             "fin": 225752,
             "duracion": 494
         },
         {
             "tecla": "T",
             "inicio": 225850,
             "fin": 225968,
             "duracion": 118
         },
         {
             "tecla": "Y",
             "inicio": 225873,
             "fin": 225992,
             "duracion": 119
         },
         {
             "tecla": "ESCAPE",
             "inicio": 223975,
             "fin": 226273,
             "duracion": 2298
         },
         {
             "tecla": "T",
             "inicio": 226066,
             "fin": 226274,
             "duracion": 208
         },
         {
             "tecla": "Y",
             "inicio": 226090,
             "fin": 226274,
             "duracion": 184
         },
         {
             "tecla": "T",
             "inicio": 226276,
             "fin": 226397,
             "duracion": 121
         },
         {
             "tecla": "Y",
             "inicio": 226277,
             "fin": 226422,
             "duracion": 145
         },
         {
             "tecla": "U",
             "inicio": 226518,
             "fin": 226840,
             "duracion": 322
         },
         {
             "tecla": "M",
             "inicio": 226534,
             "fin": 226864,
             "duracion": 330
         },
         {
             "tecla": "Y",
             "inicio": 226921,
             "fin": 226960,
             "duracion": 39
         },
         {
             "tecla": "T",
             "inicio": 226937,
             "fin": 226960,
             "duracion": 23
         },
         {
             "tecla": "T",
             "inicio": 226962,
             "fin": 227262,
             "duracion": 300
         },
         {
             "tecla": "ESCAPE",
             "inicio": 226960,
             "fin": 227277,
             "duracion": 317
         },
         {
             "tecla": "Y",
             "inicio": 226961,
             "fin": 227277,
             "duracion": 316
         },
         {
             "tecla": "Y",
             "inicio": 227278,
             "fin": 227301,
             "duracion": 23
         },
         {
             "tecla": "R",
             "inicio": 227342,
             "fin": 227639,
             "duracion": 297
         },
         {
             "tecla": "T",
             "inicio": 227366,
             "fin": 227689,
             "duracion": 323
         },
         {
             "tecla": "E",
             "inicio": 227760,
             "fin": 228143,
             "duracion": 383
         },
         {
             "tecla": "E",
             "inicio": 228224,
             "fin": 228319,
             "duracion": 95
         },
         {
             "tecla": "R",
             "inicio": 228240,
             "fin": 228359,
             "duracion": 119
         },
         {
             "tecla": "E",
             "inicio": 228400,
             "fin": 228533,
             "duracion": 133
         },
         {
             "tecla": "C",
             "inicio": 228670,
             "fin": 229117,
             "duracion": 447
         },
         {
             "tecla": "V",
             "inicio": 228654,
             "fin": 229141,
             "duracion": 487
         },
         {
             "tecla": "T",
             "inicio": 229262,
             "fin": 229374,
             "duracion": 112
         },
         {
             "tecla": "Y",
             "inicio": 229287,
             "fin": 229399,
             "duracion": 112
         },
         {
             "tecla": "T",
             "inicio": 229504,
             "fin": 229575,
             "duracion": 71
         },
         {
             "tecla": "Y",
             "inicio": 229479,
             "fin": 229591,
             "duracion": 112
         },
         {
             "tecla": "U",
             "inicio": 229670,
             "fin": 229930,
             "duracion": 260
         },
         {
             "tecla": "M",
             "inicio": 229694,
             "fin": 229930,
             "duracion": 236
         },
         {
             "tecla": "U",
             "inicio": 229932,
             "fin": 230230,
             "duracion": 298
         },
         {
             "tecla": "M",
             "inicio": 229933,
             "fin": 230246,
             "duracion": 313
         },
         {
             "tecla": "ESCAPE",
             "inicio": 229929,
             "fin": 230270,
             "duracion": 341
         },
         {
             "tecla": "T",
             "inicio": 230326,
             "fin": 230726,
             "duracion": 400
         },
         {
             "tecla": "Y",
             "inicio": 230342,
             "fin": 230726,
             "duracion": 384
         },
         {
             "tecla": "T",
             "inicio": 230727,
             "fin": 231062,
             "duracion": 335
         },
         {
             "tecla": "Y",
             "inicio": 230727,
             "fin": 231086,
             "duracion": 359
         },
         {
             "tecla": "ESCAPE",
             "inicio": 230726,
             "fin": 232522,
             "duracion": 1796
         },
         {
             "tecla": "R",
             "inicio": 231173,
             "fin": 232522,
             "duracion": 1349
         },
         {
             "tecla": "Y",
             "inicio": 231192,
             "fin": 232522,
             "duracion": 1330
         },
         {
             "tecla": "T",
             "inicio": 231212,
             "fin": 232523,
             "duracion": 1311
         },
         {
             "tecla": "Y",
             "inicio": 232525,
             "fin": 232541,
             "duracion": 16
         },
         {
             "tecla": "T",
             "inicio": 232526,
             "fin": 232557,
             "duracion": 31
         },
         {
             "tecla": "R",
             "inicio": 232524,
             "fin": 232573,
             "duracion": 49
         }
     ]
     }
 
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