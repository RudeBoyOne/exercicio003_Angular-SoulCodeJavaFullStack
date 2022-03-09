import { Component, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    titulo: string = "";
    
    @Input()
    dinheiro: string = "";
    
    @Input()
    paragrafoUm: string = '';
    
    @Input()
    paragrafoDois: string = '';
    
    @Input()
    paragrafoTres: string = '';

    @Input()
    idCardMeio: string = "";

    @Input()
    classCardsPonta: string = "";

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(): void {
      this._snackBar.open("PACOTE COMPRADO", "OK");
    }
}
