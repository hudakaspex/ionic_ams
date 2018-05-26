import { NgModule } from '@angular/core';
import { FilterStringImgPipe } from './filter-stringImg/filter-stringImg';
import { SortArrayPipe } from './sort-array/sort-array';
import { FilterStringAftrCharPipe } from './filter-string-aftr-char/filter-string-aftr-char';
import { StrSpitJoinPipe } from './str-spit-join/str-spit-join';
@NgModule({
	declarations: [
    FilterStringImgPipe,
    SortArrayPipe,
    FilterStringAftrCharPipe,
    StrSpitJoinPipe
  ],
	imports: [],
	exports: [
    FilterStringImgPipe,
    SortArrayPipe,
    FilterStringAftrCharPipe,
    StrSpitJoinPipe
  ]
})
export class PipesModule {}
