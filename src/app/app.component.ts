import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form: FormGroup;

  options: Array<any> = [
    {name: 'Adrian', value: 1 },
    {name: 'Chicho', value: 2 },
    {name: 'Ceci', value: 3 }];
  mask: string = '+(0) 000 000';
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: new FormControl(2),
      control:  new FormControl(''),
      age:  new FormControl(''),
      mask:  new FormControl('')
    });

    this.form.valueChanges.subscribe((data) => {
      console.log('data data data');
      console.log(data);
    });
  }
}

