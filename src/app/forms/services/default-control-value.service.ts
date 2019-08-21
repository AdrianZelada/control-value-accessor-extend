import { Injectable } from '@angular/core';
import {AbstractInputComponent} from '../domains/abstract-input-component';
import {RendererService} from './renderer.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultControlValueService extends AbstractInputComponent {

  constructor(private rendererService: RendererService) {
    super();
  }

  change(value: any): void {
    this.onChange(value);
  }

  writeValue(input: HTMLElement, prop: string, value: any): void {
    this.rendererService.setProperty(input, prop, value);
  }
}
