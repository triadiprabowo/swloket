import { NgModule } from '@angular/core';

import { ArrFilterPipe } from './arr-filter.pipe';

@NgModule({
	declarations: [ArrFilterPipe],
	exports: [ArrFilterPipe]
})
export class PipeModule { }