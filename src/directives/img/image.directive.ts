import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'img[default]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src'
   }
})
export class ImgDirective {

  @Input() src: string;
  @Input() default: string;

  updateUrl():void {
    this.src = this.default;
  }

}
