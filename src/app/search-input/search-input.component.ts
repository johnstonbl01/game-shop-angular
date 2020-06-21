import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  constructor(private elRef: ElementRef) {}

  inputIsFocused: boolean = false;

  @Input() value: string;
  @Input() onChange: (e: KeyboardEvent) => void;

  setInputFocus(bool: boolean): void {
    this.inputIsFocused = bool;
  }

  onInputFocus(): void {
    this.setInputFocus(!this.inputIsFocused);
  }

  onInputSubmit(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      const inputEl = this.elRef.nativeElement.querySelector('input');
      inputEl.blur();
    }
  }
}
