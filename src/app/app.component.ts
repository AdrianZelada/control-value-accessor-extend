import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'control-value-accesor-extend';

  form: FormGroup;

  options: Array<string> = ['Adrian', 'Chicho', 'Ceci'];
  mask: string = '+(0) 000 000';
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: new FormControl('Adrian'),
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

