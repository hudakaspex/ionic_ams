import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the SortArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "sortArray"
})
export class SortArrayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, type: string) {
    let result;
    if (value != undefined && value != null) {
      if (type == "DESC") {
        result = value.sort(function(a, b) {
          if (a.actTime > b.actTime) return -1;
          else if (a.actTime < b.actTime) return 1;
          else return 0;
        });
      } else {
        result = value.sort(function(a, b) {
          if (a.actTime < b.actTime) return -1;
          else if (a.actTime > b.actTime) return 1;
          else return 0;
        });
      }
      return result;
    }
  }
}
