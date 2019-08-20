export abstract class AbtractInputComponent {
  onChange: any;
  onTouched: any;
  writeValue: any;
  valid(): boolean {
    return true;
  }
  change(value: any) {
    this.onChange(value);
  }
}
