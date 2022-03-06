class Cordenada{

    constructor(numFila,numCol, finalX, finalY, distanciaAct){
        this.numFila= parseInt(numFila);
        this.numCol=parseInt(numCol);
        this.anterior=null;
    
        // coordenadas de la casilla final para calcular d
        this.finalFila = parseInt(finalY);
        this.finalCol = parseInt(finalX);
        this.distancia = this.calcularDistancia();
        this.distanciaAcumulada = distanciaAct;
    }

    calcularDistancia(){
        return Math.sqrt(Math.pow(this.finalCol - this.numCol) + Math.pow(this.finalFila - this.finalFila));
    }
    getCol(){
        return this.numCol;
    }

    getFila(){
        return this.numFila;
    }

    setFin(fil, col){
        this.finalFila = fil;
        this.finalCol = col;
    }

    getAnterior(){
        return this.anterior;
    }

    getDistanciaAct(){
        return this.distanciaAct;
    }

    setAnterior(anterior){
        this.anterior=anterior;
    }

    setDistanciaAct(distancia){
        this.distanciaAct = distancia;
    }

    comparator(a, b){
        return a.distanciaAct + a.distancia < b.distanciaAct + b.distancia;
    }
}