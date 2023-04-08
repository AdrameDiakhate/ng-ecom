import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{ path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
{ path: 'products', loadChildren: () => import('./public/products/products.module').then(m => m.ProductsModule) },
{ path: 'login', loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule) }, 
{ path: 'register', loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
