import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  variavelSombra: string = "10px 10px yellow";
  
  pessoas = [    
    { nome: "José", idade: 18 },    
    { nome: "Maria", idade: 22 }  
  ];
  
}
