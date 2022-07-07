import { Injectable } from "@angular/core";
import { Menu } from "./menu";

const MENUITEMS:Menu[]=[
{route:'personas',name:'Persona',type:'link',icon:'account_circle'},
{route:'animales',name:'Animal',type:'link',icon:'pets'},
{route:'chips',name:'Chip',type:'link',icon:'memory'},
];

@Injectable()
export class MenuItems {
    getMenuItem():Menu[]{
        return MENUITEMS;
    }
}
