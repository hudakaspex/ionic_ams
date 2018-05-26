import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the StrSpitJoinPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "strSpitJoin"
})
export class StrSpitJoinPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, split: string, join: string) {
    if (value != undefined && value != null) {
      return value.split(split).join(join);
    }
  }
}
