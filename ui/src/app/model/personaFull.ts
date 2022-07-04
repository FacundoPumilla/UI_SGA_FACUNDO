import { Contacto } from "./contacto";

export class PersonaFull {
    id:          number;
    dni:         string;
    apellido:    string;
    nombre:      string;
    sexo:        string;
    estado:      boolean;
    contactoDTO: Contacto;
}