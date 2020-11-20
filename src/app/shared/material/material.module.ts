import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';


const MaterialModules = [
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatRadioModule,
  DragDropModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatCheckboxModule,
  MatFormFieldModule,
  TextFieldModule,
]

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule { }