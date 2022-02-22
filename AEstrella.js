class AlgortimoAEstrella{
    constructor(ini,fin,obstaculos, tamTablero){
        this.tamTablero=tamTablero;

        this.matriz= new Array();
        this.abierta=new Array();
        this.cerrada=new Array();
        
        this.ini=ini;//Cordenada
        this.fin=fin;//Cordenada
        this.obstaculos=obstaculos//Array cordenadas
    }

    iniciar(){
        this.matriz[ini.getFila()][this.ini.getCol()]=ini;
        this.abierta.push(ini);
    }

    algoritmo(){
        let terminado=false;
        
        while(!terminado || this.abierta.size() >= 0){
            this.abierta
            for(i=0; i < 8; i++){
                this.abierta.push(new Cordenada())
            }
        }
    }
}