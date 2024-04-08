import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  name: string|undefined; 
  @Input() 
  type: string = 'button'; 
  @Input() 
  disabled: boolean = false;
}
