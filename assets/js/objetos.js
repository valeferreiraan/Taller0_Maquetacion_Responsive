const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
    console.log(`${animal.nombre} está comiendo`)
    //usando la palabra reservada this
    console.log(`${this.nombre} está comiendo`)
    }
    }
    //mostrar objeto completo
    //console.log(animal)

    //invocar métodos de un objeto
    animal.comer();