import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from './model/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() button!: Button;
  @Output() click: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();

  onClick(event?:any){
    this.click.emit(event);
  }
}
