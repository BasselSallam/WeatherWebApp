import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [InfoCardComponent, FilterComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InfoCardComponent, FilterComponent],
})
export class SharedModule {}
