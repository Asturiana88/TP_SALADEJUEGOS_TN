import { Component, OnInit } from '@angular/core';

interface Carta {
  figura: string;
  valor: number
}

const NUMERO_CARTAS = ["A",2,3,4,5,6,7,8,9,10, "J", "Q", "K"]
const PALOS = ["♠", "♡", "♢", "♣"]

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  mazo!:Carta[];
  cartaJugador?: Carta;
  cartaAnterior?: Carta;
  resultado?: string;
  juegoTerminado = false;

  constructor() { }

  ngOnInit(): void {
    this.generarMazo()
    this.cartaJugador = this.mazo.pop();
  }

  shuffle(array: Carta[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  generarMazo(){
    const listaDePalos = PALOS.map(
      palo => NUMERO_CARTAS.map(
        (numero, index) => ({
          figura: `${numero} ${palo}`,
          valor: index + 1
        })
      )
    )

    const mazoSinMezclar = listaDePalos.reduce(
      (accumulador, valorActualDelMap) => (
        [...accumulador, ...valorActualDelMap]
      ), []
    )

    this.mazo = this.shuffle(mazoSinMezclar)
    console.log(this.mazo)
  }

  proximaCarta(guess: '+' | '-'){
    if (this.juegoTerminado) return;

    const siguienteCarta = this.mazo.pop();
    const diff = (siguienteCarta?.valor || 0)  - (this.cartaJugador?.valor || 0)
    this.cartaAnterior = this.cartaJugador;
    this.cartaJugador = siguienteCarta;

    if (diff == 0) {
      this.resultado = "Las cartas valian lo mismo es un EMPATE!"
    } else if (diff > 0 && guess == '+') {
      this.resultado = "La carta era mayor Ganaste!"
      console.log("CARTA ERA MAYOR GANA")
    } else if (diff < 0 && guess == '-') {
      this.resultado = "La carta era menor Ganaste!"
    } else if (diff < 0 && guess == '+') {
      this.resultado = "La carta era menor Perdiste :("
    } else if (diff > 0 && guess == '-') {
      this.resultado = "La carta era mayor Perdiste :("
    }

    if (this.mazo.length == 0) {
      this.juegoTerminado = true;
    }

  }
}
