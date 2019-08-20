import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
}, {
    path: 'blog/:id',
    component: BlogDetailComponent
}, {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
