const electrodomesticos = ["televisor", "microondas", "heladera", "lavarropa"]

const ropa = ["pantalon", "remera", "campera", "buzo", "medias"]

const utiles = ["lapices", "cartuchera", "goma", "regla", "hojas"]

const hipermercado = electrodomesticos.concat(ropa.concat(utiles))

console.log(hipermercado)

console.log(hipermercado.slice(0, 9))

console.log(hipermercado.includes("goma"))
console.log(hipermercado.includes("medias"))


class Vestimenta {
    constructor(detalle, color, cantidad, precio) {
        this.detalle = detalle
        this.color = color
        this.cantidad = cantidad
        this.precio = precio
    }
}

const vestimenta1 = new Vestimenta("pantalon","negro", 8, 120)
const vestimenta2 = new Vestimenta("remera","roja", 4, 60)
const vestimenta3 = new Vestimenta("buzo","azul", 3, 30)
const vestimenta4 = new Vestimenta("campera","rosa", 7, 100)

const vestimentas = [vestimenta1, vestimenta2, vestimenta3, vestimenta4]

console.log(vestimentas)

console.log(vestimentas[2].precio)
console.log(vestimentas[0].detalle)