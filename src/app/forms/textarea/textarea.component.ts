import {Component, forwardRef, Input, Optional, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DefaultControlValueService} from '../services/default-control-value.service';
import {AbstractInputComponent} from '../domains/abstract-input-component';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true,
};
@Component({
  selector: 'zt-textarea',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR, DefaultControlValueService],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea;
  @Input() label: string;
  serviceCpn: AbstractInputComponent;

  constructor( @Optional() private cpnService: AbstractInputComponent,
               private defaultControlValueService: DefaultControlValueService) {
      this.serviceCpn = this.cpnService || this.defaultControlValueService;
  }

  writeValue( value: any ): void {
    console.log('writeValue First Time', value);
    const input = this.textarea.nativeElement;
    this.serviceCpn.writeValue(input, 'value', value);
  }

  registerOnChange( fn: any ): void {
    console.log('registerOnChange');
    this.serviceCpn.registerChange(fn);
  }

  registerOnTouched( fn: any ): void {
    console.log('registerOnTouched');
    this.serviceCpn.registerTouched(fn);
  }

  setDisabledState( isDisabled: boolean ): void {
    console.log('setDisabledState');
    const input = this.textarea.nativeElement;
    this.serviceCpn.writeValue(input, 'disabled', isDisabled);
  }

  changeInput( $event ) {
    const text = $event.target.value;
    this.serviceCpn.change(text);
  }

}
