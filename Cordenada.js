class Cordenada{
    constructor(numFila,numCol){
        this.numCol=numCol;
        this.numFila=numFila;
        this.anterior=null;
        this.distanciaAct = 0;
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
}