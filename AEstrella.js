class AEstrella{
    constructor(ini,fin,obstaculos, tamTableroX, tamTableroY){
        this.tamTableroFila=tamTableroX;
        this.tamTableroCol=tamTableroY;

        this.matriz = new Array();
        this.abierta=new PriorityQueue(comparator);
        this.cerrada=new Array();
        
        this.ini=ini;//Cordenada
        this.fin=fin;//Cordenada
        this.obstaculos=obstaculos//Array cordenadas
    }

    iniciar(){
        // inicializamos la matriz
        this.matriz = new Array(this.tamTableroFila);
        for(let i = 0; i < this.tamTableroFila; i++){
            this.matriz[i] = new Array(this.tamTableroCol);
        }

        //rellenamos la matriz
        for(let i = 0; i < this.tamTableroFila; i++){
            for(let j = 0; j < this.tamTableroCol;j++){
                this.matriz[i][j] = "vacio";
            }
        }

        //colocamos el ini en la matriz
        this.matriz[this.ini.numFila][this.ini.numCol] = "ini";
        //colocamos el fin en la matriz
        this.matriz[this.fin.numFila][this.fin.numCol] = "fin";

        //colocamos los obstaculos
        for(let i = 0; i < this.obstaculos.length; i++){
            this.matriz[this.obstaculos[i].numFila][this.obstaculos[i].numCol] = "obstaculo";
        }
        console.log(this.matriz);
        console.log(this.matriz[2][2]);
    }

    algoritmo(){
        let terminado=false;
        let puntoInicial = new Cordenada(ini.numFila, ini.numCol, fin.numFila, fin.numCol, 0);
        this.abierta.push(puntoInicial);

        while(!terminado || this.abierta.size() >= 0){
            let actual = this.abierta.pop();

            //bucle para recorre las casillas adyacentes a la actual
            for(let i = -1; i < 2; i++){
                for(let j = -1; j < 2; j++){

                    let filaActual = parseInt(actual.numFila) + i;
                    let colActual = parseInt(actual.numCol) + j;

                    if(i != 0 && j != 0){ //que no mire la actual
                        //comprobar que no se salga del tablero
                        if(-1 < filaActual < this.tamTableroFila && -1 < colActual < this.tamTableroCol ){

                            // comprobamos que no sea obstaculo ni el inicio
                            if(this.matriz[filaActual][colActual] != "obstaculo" && this.matriz[filaActual][colActual] != "ini"){

                                // hemos llegado al final?
                                if(this.matriz[filaActual][colActual] == "fin"){
                                    terminado = true;
                                    //let casillaFinal = 
                                }
                                //seguimos
                                else{
                                    //calculamos la distancia euclidea de actual hasta la nueva
                                    let aux = Math.pow((filaActual - i) - filaActual);
                                    let distancia = Math.sqrt(Math.pow((filaActual - i) - filaActual)
                                     + Math.pow((colActual - j) - colActual));
                                    let nueva = new Cordenada(filaActual, colActual, fin.numFila, fin.numCol, distancia);
                                    nueva.setAnterior(actual); 
                                    this.abierta.push(nueva);
                                }

                            }
                        }
                    }

                } // for2
            }
        }
    }

    comparator(a, b){
        return a.distanciaAct + a.distancia < b.distanciaAct + b.distancia;
    }
}