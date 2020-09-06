import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { MaskComponent } from './directive/mask/mask.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
