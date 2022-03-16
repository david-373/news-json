import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'


const components = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule

]

@NgModule({
  declarations: [],
  imports: components,
  exports: components
})
export class MaterialModule { }
