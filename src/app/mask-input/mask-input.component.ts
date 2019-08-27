import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractInputComponent} from '../forms/domains/abstract-input-component';
import {RendererService} from '../forms/services/renderer.service';
import {ValidationsCharacterService} from '../services/validations-character.service';

// definicion de mascaras
//
// 0 = number;
// a = letter;
// _ = number o letter;

@Component({
  selector: 'mask-input',
  templateUrl: './mask-input.component.html',
  styleUrls: ['./mask-input.component.sass'],
  viewProviders: [
    {
      provide: AbstractInputComponent,
      useExisting: forwardRef(() => MaskInputComponent)
    }
  ]
})
export class MaskInputComponent  extends AbstractInputComponent implements OnInit {

  @Input() label: string;
  @Input() mask: string;
  lastValue: string = '';
  private input: HTMLElement;
  constructor( private rendererService: RendererService, private validateCharacterService: ValidationsCharacterService) {
    super();
  }

  ngOnInit() {}

  // objMask() {
  //   return this.mask.split('').map((value) =>{
  //     return {
  //       key: value,
  //       replace: false,
  //
  //     }
  //   });
  // }

  change(text: any) {

    console.log('text ===> ', text.length);
    const lMask = this.mask.length;
    let maskText = '';
    let value = '';
    let indexValue = 0;
    for (let i = 0; i < lMask; i++) {
      const character = this.mask.charAt(i);
      if (this.validateCharacterService.isNumber(character)) {
        // const
        // debugger;
        if (text.length > indexValue && this.validateCharacterService.isNumber(text[indexValue])) {
          maskText = maskText + text[indexValue];
          value = value + text[indexValue];
          // this.lastValue = `${this.lastValue}${text[indexValue]}`;
          indexValue++;
        } else {
          break;
          // maskText = maskText + character;
        }
      } else {
        if (this.validateCharacterService.isLetter(character)) {
          if (text.length > indexValue && this.validateCharacterService.isLetter(text[indexValue])) {
            maskText = maskText + text[indexValue];
            value = value + text[indexValue];
            // this.lastValue = `${this.lastValue}${text[indexValue]}`;
            indexValue++;
          } else {
            // maskText = maskText + character;
            break;
          }
        } else {
          // console.log(`asdfadf${character}adfasdfasf`);
          maskText = maskText + character;
          indexValue++;

        }
      }
    }





    console.log('maskText ===> ', maskText);
    this.renderEL('value', maskText);
    console.log('last  Value ===> ', value);
    this.onChange(value);

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
