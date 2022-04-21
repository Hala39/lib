import { NgModule } from '@angular/core';
import { ButtonModule } from './modules/button/button.module';
import { PatternComponent } from './pattern.component';



@NgModule({
  declarations: [
    PatternComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    PatternComponent
  ]
})
export class PatternModule { }
