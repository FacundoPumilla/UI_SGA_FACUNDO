import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
private _pelajes: string[]=['Alazan Oscuro','Alazan Ruano','Alazán','Lobuna','Lobuno','Moro','Overa Rosada',
'Overo','Overo rosado','Pangare colorado','Pintado','Rosilla','Rosillo','Rozillo','Tobiana','Tobiano','Tordilla',
'Tordilla negra','Tordillo','Zaina','Zaino','Zaino Cabos Negros','Zaino Colorado','Zaino Oscuro','Zaino Tsotado',
'baya','colorado','gateada','raya de mula','zaino tostado'];

get pelajes():string[]{
  return [ ...this._pelajes ];
}
constructor() { }

}
