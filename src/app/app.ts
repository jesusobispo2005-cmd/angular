import { Component, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.component.css'
})
export class App {
  title = 'angular';

  numeroA = signal(5);
  numeroB = signal(2);
  resultado=signal(0)

  numChange(valor: any) {
    console.log("Cambiando valor a:", valor);
    // Convertimos a número para evitar que 5 + "2" sea "52"
    this.numeroB.set(Number(valor));
  }

  suma() {
    // IMPORTANTE: Para ver el valor de un signal necesitas los paréntesis ()
    console.log("El valor actual de B es:", this.numeroA() + this.numeroB());
    
    this.resultado.set(this.numeroA() + this.numeroB())
  }
}