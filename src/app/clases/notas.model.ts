export class Nota{

    titulo: string;
    descripcion: string;
    fecCre: Date;
    opti: string;

    constructor(titulo: string, descripcion: string, opti:string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecCre = new Date();
        this.opti=opti;
    }
}
