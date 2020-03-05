import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { ViewBuyerProfileComponent } from './Buyer/view-buyer-profile/view-buyer-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { HomeComponent } from './Account/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AccountService } from './Services/account.service';
import { AdminService } from './Services/admin.service';
import { ViewCategoriesComponent } from './Admin/view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './Admin/view-sub-categories/view-sub-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    AdminComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    BuyerComponent,
    SellerComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    ViewBuyerProfileComponent,
    ViewSellerProfileComponent,
    HomeComponent,
    ViewCategoriesComponent,
    ViewSubCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
