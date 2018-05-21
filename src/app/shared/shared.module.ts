import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumbersPipe } from './numbers.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NumbersPipe],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NumbersPipe
  ]
})
export class SharedModule {
}
