//Molde para instanciar diferentes objetos del mismo tipo (POO)
class Videojueo {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }

    jugar() {
        console.log(`Iniciando partida de ${this.titulo}`);
    }
}

//Objetos: Instancias de la clase Videojuego
const juegoUno = new Videojueo("Mario Kart", "Carreras");
const juegoDos = new Videojueo("Crash Bandicoot", "Plataformas");

juegoUno.jugar();
juegoDos.jugar();

