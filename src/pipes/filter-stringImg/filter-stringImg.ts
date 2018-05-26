import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the FilterStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "filterString"
})
export class FilterStringImgPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (value != undefined && value != null) {
      let str: Array<string> = value.split(" ");
      let strImg = str.filter(string => {
        let myRegexp = /[^/]+(jpg|png|gif)$/;
        let match = myRegexp.exec(string);
        if (match != null) {
          if (string == match[0]) {
            return string;
          }
        }
      });
      return strImg[0];
    }
  }
}
