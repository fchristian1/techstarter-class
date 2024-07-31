//Klasse: die mit new Animal() erstellt wird
class Animal {
  // Constructor: wird aufgerufen wenn new Animal() aufgerufen wird
  constructor(name) {
    // Eigenschaft: name wird in der Instanz gespeichert
    this.name = name;
  }
  // Methode: speak() wird in der Instanz gespeichert
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Irgenwo im Code wird eine Instanz von Animal erstellt
let animal = new Animal("animal");
// Die Methode speak() wird auf der Instanz aufgerufen
animal.speak(); // animal makes a noise.
