import { Component } from '@angular/core';
import { Material } from './interfase/material.interfase';

const ELEMENT_DATA: Material[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',decimal:55.0079},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',decimal:77.0026},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',decimal:77.941},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',decimal:77.0122},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',decimal:77.811},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',decimal:77.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',decimal:77.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',decimal:77.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',decimal:77.9984},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',decimal:77.1797},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha:Date =new Date;
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-decimal','demo-porcentaje','demo-currency','demo-fecha'];
  dataSource = ELEMENT_DATA;

  constructor(){
    console.log(this.dataSource);
  }
}
