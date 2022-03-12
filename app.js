var mode;
var numIni=1;
var numFin=1;
var obstaculos = new Array(); //el array de obstaculos
var wayPoint = new Array(); //el array de way points
var ini = null; //la coordenada de inicio
var fin = null; // la coordenada de fin

function comparator(a, b){
    return a.distanciaAct + a.distancia < b.distanciaAct + b.distancia;
}

$(function () {
    initTable();
    select_mode();
    $("#calcular").on("click", initAlgorithm);
    $("#resetear").on("click", resetear);
});

function initTable() {
    let table = $("table");

    for (let i = 0; i < 5; i++) {
        let fila = $("<tr></tr>");
        for (let j = 0; j < 5; j++) {
            let col = $("<td></td>");
            col.addClass("f" + i);
            col.addClass("c" + j);
            /*if (i === dFil && j === dCol)V
                col.prop("id", "destination");*/
            col.on("click", function(){
                // si selecciona una casilla sin indicar que tipo es
                if(mode === undefined){
                    alert("Selecciona que tipo de casilla vas a marcar")
                }else{
                    marcarCasillas(event);
                }
            
            });
            //col.on("click touchstart", clickPosition);
            /*col.on("mouseover", function (event) {
                if (mouseDown)
                    clickPosition(event);
            })*/
            fila.append(col);
        }
        table.append(fila);
    }
}

function marcarCasillas(event){
    let eventoF = event.target.classList[0];
    let eventoC = event.target.classList[1];
    let numFila = eventoF.split('f')[1];
    let numCol = eventoC.split('c')[1];
    let casilla = $('.'+eventoF+'.'+eventoC);
    //marca la casilla inicio
    if(casilla.attr('class').search("inicio") == -1 && casilla.attr('class').search("fin") == -1 && casilla.attr('class').search("obstaculo") == -1){
        switch(mode){
            case "INIT": 
                if(numIni <= 1){
                    numIni++;
                    casilla.toggleClass("inicio");
                    ini = new Cordenada(numFila, numCol, undefined, undefined, 0); 
                }else
                    alert("Solo puede haber 1 casilla de inicio")
            break;
            case "FIN":
                if(numFin <= 1){
                    numFin++;
                    casilla.toggleClass("fin"); 
                    fin = new Cordenada(numFila, numCol, numFila, numCol, 0); 
                }else{
                    alert("Solo puede haber 1 casilla de fin")
                }
            break;
            case "OBSTACLE": 
                casilla.toggleClass("obstaculo");
                let nuevoO = new Cordenada(numFila, numCol, 0, 0, 0); //los valores de fin y dist en los obstaculos dan igual
                obstaculos.push(nuevoO);
            break;
            case "WAY": 
                casilla.toggleClass("wayPoint");
                let nuevoW = new Cordenada(numFila, numCol, 0, 0, 0); //los valores de fin y dist en los way points dan igual
                wayPoint.push(nuevoW);
            break;
        };
    }else{
        alert("Esa casilla ya esta marcada")
    }

}

function select_mode(){
    $("#radios").on("click", function(){
        let ini = $("#marcar_ini").is(":checked");
        let fin = $("#marcar_fin").is(":checked");
        let obs = $("#marcar_obs").is(":checked");
        let way = $("#marcar_way").is(":checked");
        if(ini === true){
            mode = "INIT"
        }
        else if(fin === true){
            mode = "FIN";
        }
        else if(obs === true){
            mode = "OBSTACLE"
        }
        else if(way === true){
            mode = "WAY"
        }
        
    })
}

function initAlgorithm(){
    //para iniciar el algoritmo tiene que haber al menos ini y fin
    if(numIni > 1 && numFin > 1){
        ini.setFin(fin.numFila, fin.numCol);
        let solucion = new AEstrella(ini, fin, obstaculos,wayPoint, 5, 5);
        solucion.iniciar();
        solucion.algoritmo();
       
        imprimirSolucion(solucion.returnArraySoluciones());
        
    }
    else{
        alert("Tienes que marcar una coordenada inicial y otra final");
    }
    //console.log(obstaculos);
}

function imprimirSolucion(soluciones){
    for(let i = 0; i < soluciones.length; i++){
        let array = soluciones.shift();
        for(let j = 0; j < array.length; j++){
            let coor = array[j];
            let fila = coor.getFila();
            let col = coor.getCol();
            let casilla = $('.f'+fila+'.c'+col);
            casilla.toggleClass("camino");

        }
    }
}

function resetear(){
    $('table > tr').remove();
    numIni=1;
    numFin=1;
    obstaculos = new Array();
    wayPoint = new Array();
    ini = null; 
    fin = null; 
    initTable();
}