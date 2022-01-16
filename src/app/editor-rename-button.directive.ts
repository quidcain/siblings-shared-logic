import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { EditorWrapperComponent } from './editor-wrapper/editor-wrapper.component';

@Directive({
  selector: '[editorRenameButton]'
})
export class EditorRenameButtonDirective {

  constructor(
    elementRef: ElementRef,
    @Optional()
    private readonly editorWrapperComponent?: EditorWrapperComponent,
  ) {
    let renameButtonDisplayValue: string | undefined;
    const hideRenameButton = () => {
      renameButtonDisplayValue = elementRef.nativeElement.style.display;
      elementRef.nativeElement.style.display = 'none';
    };
    const showRenameButton = () => {
      if (renameButtonDisplayValue !== undefined) {
        elementRef.nativeElement.style.display = renameButtonDisplayValue;
        renameButtonDisplayValue = undefined;
      }
    };
    this.editorWrapperComponent?.isRenameButtonDisplayedChange.subscribe(value => {
      if (value) {
        hideRenameButton()
      } else {
        showRenameButton();
      }
    });
  }

  @HostListener('click') onClick() {
    if (this.editorWrapperComponent) {
      this.editorWrapperComponent.isEditorOpenChange.next(true);
    }
  }
}
