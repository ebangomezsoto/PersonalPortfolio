import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PostsComponent} from "./modules/posts/posts.component";
import {ContactsComponent} from "./modules/contacts/contacts.component";

const routes: Routes = [{
  path:"",
  component: DefaultComponent,
  children:[{
    path:"",
    component: DashboardComponent
  },{
    path:"posts",
    component: PostsComponent
  },
    {
      path:"contacts",
      component: ContactsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
