import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GlobalInterceptor } from './core/interceptor/global.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './core/interceptor/spinner.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
