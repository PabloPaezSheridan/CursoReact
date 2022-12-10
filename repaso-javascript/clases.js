class Coche{
    constructor(modelo, velocidad){
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }
}

var coche1 = new Coche('BMW',200);

console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1);