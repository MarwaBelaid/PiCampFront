import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Activity } from 'src/models/Activity';
import { CentreCamp } from 'src/models/CentreCamp';
import { Photo } from 'src/models/Photo';
import { FileHandle } from 'src/models/file-handle.model';

@Injectable({
  providedIn: 'root'
})
export class ImageShowCentreService {

  constructor(private sanitizer : DomSanitizer) { }


  public removeBase64Prefix(base64Data: string): string {
    const prefix: string = "data:image/png;base64,";
    if (base64Data.startsWith(prefix)) {
      return base64Data.substring(prefix.length);
    }
    return base64Data;
  }



  public createImages (CenteCamp : CentreCamp)
  {   const centreImages: Photo[] = Array.from(CenteCamp.photos);
    const modifiedCentreImages: Photo[] = centreImages.map(photo => {
      photo.picByte = this.removeBase64Prefix(photo.picByte);
      return photo;
    });
   
    const centreImagesToFileHandle 
   : FileHandle [] = [] ; 

   for(let i = 0 ; i< modifiedCentreImages.length;i++)
   {
    const imageFileData = modifiedCentreImages[i] ; 
    
    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

    const finalFileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };
    centreImagesToFileHandle.push(finalFileHandle);
  }
 // CenteCamp.photos_centre = centreImagesToFileHandle  ;
 CenteCamp.photos_centre = new Set<FileHandle>([...centreImagesToFileHandle]);

return CenteCamp ; 
}

  
  public dataURItoBlob (picBytes : any , imageType : any)
  {
    const byteString = window.atob(picBytes) ; 
    const arrayBuffer = new ArrayBuffer(byteString.length) ; 
    const int8Array = new Uint8Array(arrayBuffer) ; 

    for (let i = 0 ; i<byteString.length; i++)
    {
      int8Array[i] = byteString.charCodeAt(i) ; 
    }

    const blob = new Blob([int8Array],{type:imageType}) ; 

    return blob ; 

  }


  public createImagesAct (Act : Activity)
  {   const ActivityImages: Photo[] = Array.from(Act.photos);
    const modifiedActivityImages: Photo[] = ActivityImages.map(photo => {
      photo.picByte = this.removeBase64Prefix(photo.picByte);
      return photo;
    });
   
    const centreImagesToFileHandle 
   : FileHandle [] = [] ; 

   for(let i = 0 ; i< modifiedActivityImages.length;i++)
   {
    const imageFileData = modifiedActivityImages[i] ; 
    
    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

    const finalFileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };
    centreImagesToFileHandle.push(finalFileHandle);
  }
  Act.photosFile = new Set<FileHandle>([...centreImagesToFileHandle]);

  
return Act ; 
}












  public createPhotos(centreCamp: CentreCamp): Photo[] {
    //const centreImagesToFileHandle: FileHandle[] = centreCamp.photos_centre;
    const centreImagesToFileHandle: FileHandle[] = Array.from(centreCamp.photos_centre);

    const photos: Photo[] = [];
  
    for (let i = 0; i < centreImagesToFileHandle.length; i++) {
      const fileHandle = centreImagesToFileHandle[i];
      const imageFile = fileHandle.file;
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const picByte = reader.result as string; // Change the type to string
        const imageType = imageFile.type;
        const imageName = imageFile.name;
  
        const photo: Photo = {
          picByte: picByte, // Assign the string directly
          type: imageType,
          name: imageName
        };
  
        photos.push(photo);
      };
      reader.readAsDataURL(imageFile); // Use readAsDataURL instead of readAsArrayBuffer
    }
  
    return photos;
  }
  
  
  public arrayBufferToBase64(arrayBuffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(arrayBuffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  
  

}












/*
public createImages(CenteCamp: CentreCamp) {
  const centreImages: Photo[] = Array.from(CenteCamp.photos);
  const centreImagesToFileHandle: any[] = [];

  for (let i = 0; i < centreImages.length; i++) {
    const imageFileData = centreImages[i];
    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

    const finalFileHandle = {
      file: imageFile,
      url: '' as SafeUrl// Initialiser la propriété 'url' avec une valeur de type 'SafeUrl'
    };

    // Assigner l'URL après la création de l'objet FileHandle
    finalFileHandle.url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile));

    centreImagesToFileHandle.push(finalFileHandle);
  }

  CenteCamp.photos_centre = centreImagesToFileHandle;

  return CenteCamp;
}

public dataURItoBlob(picBytes: any, imageType: any) {
  const byteString = window.atob(picBytes);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([int8Array], { type: imageType });

  return blob;
}

}*/

