import { PersonaFull } from "src/app/model/personaFull";



export class AnimalFull {
  id: number
  nombre: string;
  especieId: number;
  fechaNacimiento: string;
  sexo: string;
  fechaChip: string;
  pelaje: string;
  link: string;
  ambito: string;
  uso: string;
  personaId: number;
  estado: boolean;
  personaDTO: PersonaFull;
}
