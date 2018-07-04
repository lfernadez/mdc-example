import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* MDC AppBar */
import {
  MdcAppBarModule,
  MdcButtonModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcDialogModule,
  MdcDrawerModule,
  MdcElevationModule,
  MdcFabModule,
  MdcFormFieldModule,
  MdcIconModule,
  MdcIconToggleModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcMenuModule,
  MdcRadioModule,
  MdcRippleModule,
  MdcSelectModule,
  MdcSliderModule,
  MdcSnackbarModule,
  MdcSwitchModule,
  MdcTabModule,
  MdcTextFieldModule,
  MdcThemeModule,
  MdcToolbarModule,
  MdcTypographyModule,
} from '@angular-mdc/web';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcAppBarModule,
    MdcIconModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
