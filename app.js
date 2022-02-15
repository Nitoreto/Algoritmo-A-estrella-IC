
$(function () {
    initTable();
});


function initTable() {
    let table = $("table");

    for (let i = 0; i < 10; i++) {
        let fila = $("<tr></tr>");
        for (let j = 0; j < 10; j++) {
            let col = $("<td></td>");
            col.addClass("f" + i);
            col.addClass("c" + j);
            if (i === dFil && j === dCol)V
                col.prop("id", "destination");
            col.on("click", clickPosition);
            //col.on("click touchstart", clickPosition);
            col.on("mouseover", function (event) {
                if (mouseDown)
                    clickPosition(event);
            })
            fila.append(col);
        }
        table.append(fila);
    }
}