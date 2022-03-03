class AEstrella{
    constructor(ini,fin,obstaculos, tamTableroX, tamTableroY){
        this.tamTableroFila=tamTableroX;
        this.tamTableroCol=tamTableroY;

        this.matriz= new Array();
        this.abierta=new PriorityQueue(comparator);
        this.cerrada=new Array();
        
        this.ini=ini;//Cordenada
        this.fin=fin;//Cordenada
        this.obstaculos=obstaculos//Array cordenadas
    }

    iniciar(){
        // inicializamos la matriz
        let matriz = new Array(this.tamTableroFila);
        for(let i = 0; i < this.tamTableroFila; i++){
            matriz[i] = new Array(this.tamTableroCol);
        }

        //colocamos el fin en la matriz
        matriz[this.fin.numFila][this.fin.numCol] = "fin";

        //colocamos los obstaculos
        for(let i = 0; i < this.obstaculos.length; i++){
            matriz[this.obstaculos[i].numFila][this.obstaculos[i].numCol] = "obstaculo";
        }
        console.log(matriz);
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

                    if(i != 0 && j != 0){ //que no mire la actual
                        //comprobar que no se salga del tablero
                        if(-1 < actual.numFila + i < this.tamTableroFila && -1 < actual.numCol + j < this.tamTableroCol ){

                            // comprobamos que no sea obstaculo
                            if(this.matriz[actual.numFila + i][actual.numCol + j] != "obstaculo"){

                                // hemos llegado al final?
                                if(this.matriz[actual.numFila + i][actual.numCol + j] != "fin"){
                                    terminado = true;
                                }
                                //seguimos
                                else{
                                    let nueva = new Cordenada(); 
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