//Encapsulamiento: el estado del interno de una clase es inaccesible al exterior
class Robot {
  #bateria = 100; // Propiedad privada, inaccesible desde afuera

  usarRayo() {
    this.#bateria -= 10;
    console.log(`Pew! Batería restante: ${this.#bateria}`);
  }
}