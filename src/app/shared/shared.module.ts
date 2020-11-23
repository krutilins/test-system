import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

}
