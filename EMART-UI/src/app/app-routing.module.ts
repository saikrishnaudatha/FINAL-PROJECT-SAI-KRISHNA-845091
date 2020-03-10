import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { SearchComponent } from './Buyer/search/search.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { ViewBuyerProfileComponent } from './Buyer/view-buyer-profile/view-buyer-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewCategoriesComponent } from './Admin/view-categories/view-categories.component';
import { ViewSubCategoriesComponent } from './Admin/view-sub-categories/view-sub-categories.component';


const routes: Routes = [
  {path:'buyer',component:BuyerComponent,children:
  [
    {path:'search',component:SearchComponent},
 { path:'view-cart',component:ViewCartComponent},
 { path:'purchase-history',component:PurchaseHistoryComponent},
 { path:'buy-product',component:BuyProductComponent},
 { path:'view-buyer-profile',component:ViewBuyerProfileComponent},
]},

{path:'seller',component:SellerComponent,children:
[
  {path:'add-items',component:AddItemsComponent},
  {path:'view-items',component:ViewItemsComponent},
  {path:'view-seller-profile',component:ViewSellerProfileComponent},
  {path:'view-reports',component:ViewReportsComponent},


]},


{path:'admin',component:AdminComponent,children:
[
  {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
  {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'add-sub-category',component:AddSubCategoryComponent},
  {path:'daily-reports',component:DailyReportsComponent},
  {path:'view-categories',component:ViewCategoriesComponent},
  {path:'view-sub-categories',component:ViewSubCategoriesComponent}
]},

{path:'home',component:HomeComponent,children:
[
{path:'login',component:LoginComponent},
]},
{path:'register-buyer',component:RegisterBuyerComponent},
{path:'register-seller',component:RegisterSellerComponent},

{path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
