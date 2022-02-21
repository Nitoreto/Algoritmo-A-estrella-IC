var mode;

$(function () {
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
                }
                //marca la casilla inicio
                else if(mode === "INIT"){
                    mark_init(event);
                }
                //marca la casilla fin
                else if(mode === "FIN"){

                }
                // marca un obstaculo
                else if(mode === "OBSTACLE"){

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

function mark_init(event){
    let eventoF = event.target.classList[0];
    let eventoC = event.target.classList[1];
    let numFila = eventoF.split('f')[1];
    let numCol = eventoC.split('c')[1];
    let casilla = $('.'+eventoF+'.'+eventoC);

    casilla.toggleClass("inicio");
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