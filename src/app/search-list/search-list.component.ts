import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractInputComponent} from '../forms/domains/abstract-input-component';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  viewProviders: [
    {
      provide: AbstractInputComponent,
      useExisting: forwardRef(() => SearchListComponent)
    }
  ]
})
export class SearchListComponent extends AbstractInputComponent implements OnInit {

  @Input() options: Array<any> = [];
  @Input() label: string;
  @Input() keyLabel: string = 'label';
  @Input() keyValue: string = 'value';
  currentOptions: Array<any> = [];
  selected: any;
  constructor() {
    super();
  }

  ngOnInit() {
    this.currentOptions = this.options;
  }

  change(value: any) {
    if (value != '') {
      this.currentOptions = this.options.filter( (option: any) => {
        return option[this.keyLabel].search(value) > -1;
      });
    } else {
      this.currentOptions = this.options;
    }
  }

  select(item: any) {
    this.selected = this.selected === item[this.keyValue] ? null : item[this.keyValue];
    this.onChange(this.selected);
  }

  writeValue(input: HTMLElement, prop: string, value: any): void {
    this.selected = value;
  }
}
