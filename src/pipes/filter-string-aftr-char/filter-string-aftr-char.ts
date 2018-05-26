import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the FilterStringAftrSymbolPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "filterStringAftrSymbol"
})
export class FilterStringAftrCharPipe implements PipeTransform {
  transform(value: string, char: string): string {
    if (value != undefined && value != null) {
      return value.substr(0, value.indexOf(char));
    }
  }
}
