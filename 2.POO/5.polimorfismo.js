//Polimorfismo: objetos de diferentes clases pueden responder a la misma instrucción, pero cada uno lo hace a su propia manera

class Mascota {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y soy un ${this.especie}`);
    }

    emitirSonido() {
        console.log("Emitiendo un sonido...");
    }
}



class Perro extends Mascota {
    constructor(nombre, raza) {
        super(nombre, "Perro");
        this.raza = raza;
    }

    emitirSonido() {
        console.log("¡Guau, guau!");
    }
}



class Gato extends Mascota {
    constructor(nombre, raza) {
        super(nombre, "Gato");
        this.raza = raza;
    }

    emitirSonido() {
        console.log("Miau, miau!");
    }

}



const mascota1 = new Mascota("Kirin", "Ave");
const perro1 = new Perro("Hatsu");
const gato1 = new Gato("Hatsu");

let mascotas = [mascota1, perro1, gato1];

for (let i = 0; i < mascotas.length; i++) {
    mascotas[i].emitirSonido();
}

