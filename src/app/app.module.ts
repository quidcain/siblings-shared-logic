import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorWrapperComponent } from './editor-wrapper/editor-wrapper.component';
import { EditorComponent } from './editor/editor.component';
import { EntityComponent } from './entity/entity.component';
import { EditorRenameButtonDirective } from './editor-rename-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorWrapperComponent,
    EditorComponent,
    EntityComponent,
    EditorRenameButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
