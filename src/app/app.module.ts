import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, ProductsComponent]
})
export class AppModule { }
