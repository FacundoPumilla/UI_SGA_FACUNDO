import { PersonaFull } from "../../persona/model/personaFull";


export class AnimalFull {
  id: number
  nombre: string;
  especieId: number;
  fechaNacimiento: Date;
  sexo: string;
  fechaChip: Date;
  pelaje: string;
  link: string;
  ambito: string;
  uso: string;
  personaId: number;
  estado: boolean;
  personaDTO: PersonaFull;
}
