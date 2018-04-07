import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fotos'
})
export class FotosPipe implements PipeTransform {

  transform(images: any[]): any {
    const NO_IMAGE = '/assets/img/noimage.png';
    if ( !images ) {
      return NO_IMAGE;
    } return (images.length > 0) ? images[1].url : NO_IMAGE;
  }

}
