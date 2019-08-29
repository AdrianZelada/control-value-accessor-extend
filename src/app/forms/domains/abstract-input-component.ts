import {Input} from '@angular/core';
import {FormControl} from '@angular/forms';

export abstract class AbstractInputComponent {
  @Input() control: FormControl;
  onChange: any;
  onTouched: any;
  registerChange(fn: void) {
    this.onChange = fn;
  }
  registerTouched(fn: void) {
    this.onTouched = fn;
  }
  abstract writeValue(input: HTMLElement, prop: string, value: any): void;
  abstract change(value: any): void;
}
