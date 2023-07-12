import { Directive } from '@angular/core';
import { Output,HostBinding, EventEmitter, HostListener} from "@angular/core";
import { FileHandle } from 'src/models/file-handle.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() files: EventEmitter<FileHandle> = new EventEmitter<FileHandle>();

  @HostBinding("style.background") private background = "#eee" ; 

  constructor(private sanitizer: DomSanitizer) { }

  
@HostListener("dragover",["$event"])
public onDragOver (evt: DragEvent)
{
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999" ; 
}

@HostListener("dragleave",["$event"])
public onDragLeave (evt: DragEvent)
{
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee" ; 
}

@HostListener("drop",["$event"])
public onDrop(evt:DragEvent)
{
  evt.preventDefault();
  evt.stopPropagation();
  this.background = "#eee" ; 


  const file = evt.dataTransfer?.files[0];
  if (file) {
    const url = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    );

    let fileHandle: FileHandle = { file: file, url: url };
    this.files.emit(fileHandle);
  }


}


}
