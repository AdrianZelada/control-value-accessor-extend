import { Injectable } from '@angular/core';
import {AbtractInputComponent} from '../domains/AbtractInputComponent';

@Injectable({
  providedIn: 'root'
})
export class DefaultControlValueService extends AbtractInputComponent {

  constructor() {
    super();
  }
}
