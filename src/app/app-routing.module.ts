import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TablaComponent} from './tabla/tabla.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
