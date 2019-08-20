import {Component, forwardRef, Input, OnInit, Optional, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DefaultControlValueService} from '../services/default-control-value.service';
import {AbtractInputComponent} from '../domains/AbtractInputComponent';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true,
};
@Component({
  selector: 'zt-textarea',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR, DefaultControlValueService],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class TextareaComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea;
  @Input() label: string;

  lastValue;
  serviceCpn: AbtractInputComponent;
  constructor(@Optional() private cpnService: AbtractInputComponent, private renderer: Renderer2, private defaultControlValueService: DefaultControlValueService) {
    console.log(this.cpnService);
    console.log(this.defaultControlValueService);
    this.serviceCpn = this.cpnService || this.defaultControlValueService;
    this.serviceCpn.writeValue = (val) => {
      this.writeValue(val);
    }
  }

  writeValue( value: any ): void {
    console.log('writeValue', value);
    console.log('writeValue', this);
    const div = this.textarea.nativeElement;
    this.lastValue = value;
    this.renderer.setProperty(div, 'value', value);
  }

  registerOnChange( fn: any ): void {
    console.log('registerOnChange');
    this.serviceCpn.onChange = fn;
  }

  registerOnTouched( fn: any ): void {
    console.log('registerOnTouched');
    this.serviceCpn.onTouched = fn;
  }

  setDisabledState( isDisabled: boolean ): void {
    console.log('setDisabledState');
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  change( $event ) {
    console.log(event);
    const text = $event.target.value;
    const div = this.textarea.nativeElement;
    if (this.serviceCpn.valid()) {
      this.serviceCpn.change(text);
      this.lastValue = text;
    } else {
      this.renderer.setProperty(div, 'value', this.lastValue);
    }
  }

}
