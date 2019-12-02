import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, CreateProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
