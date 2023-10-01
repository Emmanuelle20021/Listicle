import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide : LOCALE_ID, useValue: 'es' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
