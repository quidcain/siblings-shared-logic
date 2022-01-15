import { Component } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent {
  public header = "123";
  public isEditorShown = true;
  public isRenameButtonShown = true;

  public toggleEditor() {
    this.isEditorShown = !this.isEditorShown;
  }

  public toggleRenameButton() {
    this.isRenameButtonShown = !this.isRenameButtonShown;
  }
}
