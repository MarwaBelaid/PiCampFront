import { Byte } from "@angular/compiler/src/util";

export class Photo {

    public name !: string  ;
    public type !: string  ;
    public   picByte: string;

   // public   picByte: number[];

    constructor() {
      this.name = '';
      this.type = '';
      //this.picByte = [];
      this.picByte = '';

    }
}