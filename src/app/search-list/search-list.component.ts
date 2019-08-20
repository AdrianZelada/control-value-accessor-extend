import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AbtractInputComponent} from '../forms/domains/AbtractInputComponent';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  viewProviders: [
    {
      provide: AbtractInputComponent,
      useExisting: forwardRef(() => SearchListComponent)
    }
  ]
})
export class SearchListComponent extends AbtractInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() options: Array<any> = [];
  @Input() label: string;
  currentOptions: Array<any> = [];
  constructor() {
    super();
  }

  ngOnInit() {
    this.currentOptions = this.options;
  }

  change(value: any) {
    console.log('changes')
    if (value != '') {
      this.currentOptions = this.options.filter( (option: string) => {
        return option.search(value) > -1;
      });
    } else {
      this.currentOptions = this.options;
    }
  }

  select(item: any) {
    this.onChange(item);
    this.writeValue(item);
  }
}
