import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-editor-wrapper',
  templateUrl: './editor-wrapper.component.html',
  styleUrls: ['./editor-wrapper.component.scss']
})
export class EditorWrapperComponent {
  public isEditorOpenChange = new Subject<boolean>();
  public isRenameButtonDisplayedChange = new Subject<boolean>();
}
