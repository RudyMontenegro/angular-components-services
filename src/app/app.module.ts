import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TestNameComponent } from './test-name/test-name.component';
import { ImgComponent } from './components/img/img.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ChangeLetToNumPipe } from './pipes/change-let-to-num.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestNameComponent,
    ImgComponent,
    ProductsComponent,
    ProductComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    ChangeLetToNumPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
