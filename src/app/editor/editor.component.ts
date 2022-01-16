import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditorWrapperComponent } from '../editor-wrapper/editor-wrapper.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  constructor(
    @Optional()
    private readonly editorWrapperComponent?: EditorWrapperComponent,
  ) {
    if (this.editorWrapperComponent) {
      this.editorWrapperComponent.isEditorOpenChange.subscribe(value => {
        this.toggleEditInput(value);
      });
    }
  }

  @Input()
  public set value(_value: string) {
    this._value.setValue(_value);
  }

  @Output()
  public valueChange = new EventEmitter<string>();

  public _value = new FormControl('');

  public isEditorOpen: boolean = false;

  public toggleEditInput(isEditorOpen: boolean): void {
    this.isEditorOpen = isEditorOpen;
    if (this.editorWrapperComponent) {
      this.editorWrapperComponent.isRenameButtonDisplayedChange.next(isEditorOpen);
    }
    if (!isEditorOpen) {
      this.valueChange.emit(this._value.value);
    }
  }
}
