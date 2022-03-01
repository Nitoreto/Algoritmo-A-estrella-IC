class Cordenada{

    constructor(numFila,numCol, finalX, finalY, distanciaAct){
        this.numFila=numFila;
        this.numCol=numCol;
        this.anterior=null;
    
        // coordenadas de la casilla final para calcular d
        this.finalFila = finalY;
        this.finalCol = finalX;
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