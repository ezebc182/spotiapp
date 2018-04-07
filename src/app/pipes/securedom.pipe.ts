import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

  constructor(private domsanitizer: DomSanitizer) {

  }
  transform(value: string, url: string): any {
    return this.domsanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
