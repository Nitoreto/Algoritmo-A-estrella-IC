var mode;
var numIni=1;
var numFin=1;

function comparator(a, b){
    return a.distanciaAct + a.distancia < b.distanciaAct + b.distancia;
}

$(function () {
    /*let prueba = new PriorityQueue(comparator);
    let b = new Cordenada(5, 3, 5, 5, 1);
    let i = new Cordenada(4, 2, 5, 5, Math.sqrt(2));
    prueba.push(b);
    prueba.push(i);
    console.log(prueba);*/
    let matriz = new Array(5);
    for(let i = 0; i < 5; i++){
        matriz[i] = new Array(5);
    }
    matriz[0][0] = "obs";
    console.log(matriz[0][0]);
    console.log(matriz[0][1]);
    initTable();
    select_mode();
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
                }else
                    alert("Solo puede haber 1 casilla de inicio")
            break;
            case "FIN":
                if(numFin <= 1){
                    numFin++;
                    casilla.toggleClass("fin"); break;
                }else{
                    alert("Solo puede haber 1 casilla de fin")
                }
                
            case "OBSTACLE": casilla.toggleClass("obstaculo"); break;
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
        if(ini === true){
            mode = "INIT"
        }
        else if(fin === true){
            mode = "FIN";
        }
        else if(obs === true){
            mode = "OBSTACLE"
        }
        
    })
}