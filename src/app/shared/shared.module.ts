//import all material modules that you will use here//

import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatCheckboxModule } from '@angular/material'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatCheckboxModule,
        MatGridListModule,
        MatSliderModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatCheckboxModule,
        MatGridListModule,
        MatSliderModule
    ] 
 
})
export class SharedModule {} 