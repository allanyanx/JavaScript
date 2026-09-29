//Herencia en JS
class Mascota {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y soy un ${this.especie}`);
    }
}

const mascota1 = new Mascota("Hatsu", "Akita");
mascota1.presentarse();

class Perro extends Mascota {
    constructor(nombre, raza) {
        super(nombre, "Perro");
        this.raza = raza;
    }

    ladrar() {
        console.log("¡Guau, guau!");
    }
}

const miPerro = new Perro("Rex", "Pastor Alemán");
miPerro.presentarse(); // Sigue funcionando gracias a la herencia



