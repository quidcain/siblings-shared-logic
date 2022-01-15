import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-editor-wrapper',
  templateUrl: './editor-wrapper.component.html',
  styleUrls: ['./editor-wrapper.component.scss']
})
export class EditorWrapperComponent implements AfterContentInit {
  @ContentChild(EditorComponent)
  public editor?: EditorComponent;

  @ContentChild('renameButton')
  public renameButton?: ElementRef<HTMLButtonElement>;

  ngAfterContentInit() {
    if (this.renameButton !== undefined && this.editor !== undefined) {
      const renameButton = this.renameButton.nativeElement;
      let renameButtonDisplayValue: string | undefined;
      const hideRenameButton = () => {
        renameButtonDisplayValue = renameButton.style.display;
        renameButton.style.display = 'none';
      };
      const showRenameButton = () => {
        if (renameButtonDisplayValue !== undefined) {
          renameButton.style.display = renameButtonDisplayValue;
          renameButtonDisplayValue = undefined;
        }
      };
      renameButton.addEventListener('click', event => {
        if (this.editor) {
          this.editor.toggleEditInput(true);
        }
      });
      this.editor.editToggled.subscribe(value => {
        if (value) {
          hideRenameButton()
        } else {
          showRenameButton();
        }
      })
    }
  }
}
