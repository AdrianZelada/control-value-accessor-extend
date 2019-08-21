import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AbstractInputComponent} from '../forms/domains/abstract-input-component';
import {RendererService} from '../forms/services/renderer.service';

@Component({
  selector: 'app-only-numbers',
  templateUrl: './only-numbers.component.html',
  styleUrls: ['./only-numbers.component.sass'],
  viewProviders: [
    {
      provide: AbstractInputComponent,
      useExisting: forwardRef(() => OnlyNumbersComponent)
    }
  ]
})
export class OnlyNumbersComponent extends AbstractInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  lastValue: string = '';
  private input: HTMLElement;
  constructor( private rendererService: RendererService) {
    super();
  }

  ngOnInit() {}

  change(text: any) {
    if (this.isNumber(text)) {
      this.onChange(text);
      this.lastValue = text;
    } else {
      this.renderEL('value', this.lastValue);
    }
  }

  writeValue(input: HTMLElement, prop: string, value: any): void {
    this.lastValue = value;
    this.input = input;
    this.renderEL(prop, value);
  }

  renderEL(prop: string, value: string) {
    this.rendererService.setProperty(this.input, prop, value);
  }

  isNumber(n: any) {
    const pattern = /^\d+$/;
    return pattern.test(n);
  }
}
