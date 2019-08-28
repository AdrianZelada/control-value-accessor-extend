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
  mapMask: Array<any> = [];
  private input: HTMLElement;
  constructor( private rendererService: RendererService, private validateCharacterService: ValidationsCharacterService) {
    super();
  }

  ngOnInit() {
    this.mapMask = this.getMapMask();
  }

  getMapMask() {
    return this.mask.split('').map((key) =>{
      return {
        key: key,
        replace: false,
        type: this.getTypeData(key),
        value: ''
      };
    });
  }

  getTypeData(character: string) {
    switch (character) {
      case '0':
        return 'number';
        break;
      case 'a':
        return 'letter';
        break;
      case '_':
        return 'any';
        break;
      default:
        return 'symbol';
        break;
    }
  }

  change(text: string) {

    if (text.length > this.filterReplace().length) {
      const character = text.charAt(text.length - 1);
      const l = this.mapMask.length;
      for (let i = 0; i < l; i++) {
        const mask: any = this.mapMask[i];
        if (mask.type === 'number') {
          if (!mask.replace) {
            if (this.validateCharacterService.isNumber(character)){
              mask.value = character;
              mask.replace = true;
              break;
            }
          }
        }

        if (mask.type === 'letter') {
          if (!mask.replace) {
            if (this.validateCharacterService.isLetter(character)) {
              mask.value = character;
              mask.replace = true;
              break;
            }
          }
        }

        if (mask.type === 'any') {
          if (!mask.replace) {
            mask.value = character;
            mask.replace = true;
            break;
          }
        }

        if (mask.type === 'symbol') {
          mask.value = mask.key;
          mask.replace = true;
        }
      }
    } else {
      const textArray = text.split('');
      this.mapMask.forEach((mask: any, index: number) => {
        if (textArray.length - 1 < index) {
          mask.replace = false;
          mask.value = '';
        }
      });
    }

    let valuesForm = '';
    const maskText = this.filterReplace()
      .map( (mask: any) => {
      if (mask.type !== 'symbol') {
        valuesForm = valuesForm + mask.value;
      }
      return mask.value;
    }).join('');

    this.renderEL('value', maskText);
    this.onChange(valuesForm);
  }

  filterReplace() {
    return this.mapMask.filter((mask: any) => {
      return mask.replace;
    });
  }

  writeValue(input: HTMLElement, prop: string, value: any): void {
    this.lastValue = value;
    this.input = input;
    this.renderEL(prop, value);
  }

  renderEL(prop: string, value: string) {
    this.rendererService.setProperty(this.input, prop, value);
  }
}
