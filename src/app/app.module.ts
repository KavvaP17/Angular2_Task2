import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogoComponent } from './shared/header/logo/logo.component';
import { LoginComponent } from './shared/header/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MainModule } from './pages/main.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        LoginComponent,
        FooterComponent
    ],
    imports: [
        MainModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
