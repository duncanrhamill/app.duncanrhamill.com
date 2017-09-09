import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule, MdIconModule, MdTooltipModule, MdCardModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdTooltipModule,
        MdCardModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdTooltipModule,
        MdCardModule
    ]
})
export class MdNgImports { }