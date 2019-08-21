import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AbstractInputComponent} from '../forms/domains/abstract-input-component';
import {RendererService} from '../forms/services/renderer.service';

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

  @Input() control: FormControl;
  @Input() options: Array<any> = [];
  @Input() label: string;
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
      this.currentOptions = this.options.filter( (option: string) => {
        return option.search(value) > -1;
      });
    } else {
      this.currentOptions = this.options;
    }
  }

  select(item: any) {
    this.selected = this.selected === item ? '' : item;
    this.onChange(this.selected);
  }

  writeValue(input: HTMLElement, prop: string, value: any): void {
    this.selected = value;
  }
}