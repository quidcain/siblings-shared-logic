import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @Input()
  public set value(_value: string) {
    this._value.setValue(_value);
  }

  @Output()
  public valueChange = new EventEmitter<string>();

  @Output()
  public editToggled = new EventEmitter<boolean>();

  public _value = new FormControl('');

  public isEdit: boolean = false;

  constructor() { }

  public toggleEditInput(shouldEnableEdit: boolean): void {
    this.isEdit = shouldEnableEdit;
    this.editToggled.emit(shouldEnableEdit);
    if (!shouldEnableEdit) {
      this.valueChange.emit(this._value.value);
    }
  }
}
