//creando una clase
class cliente {
     constructor(nombre, saldo){
          this.nombre = nombre;
          this.saldo = saldo;
     }
     imprimirSaldo(){
          return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
     }
     //metodo static
     static bienvenido(){
          return 'Bienvenido al cajero';
     }
}
const Cliente = new cliente('Maria', 'Palacios', 1000);
console.log(Cliente.imprimirSaldo());
console.log(cliente.bienvenido());

class Empresa extends cliente{
     constructor(nombre, saldo, telefono, tipo){
     super(nombre, saldo);
     this.telefono = telefono;
     this.tipo = tipo;
     }
}
const nuevo = new Empresa('Mcdonalds', 1000000, 775, 'Gold')
console.log(nuevo);

