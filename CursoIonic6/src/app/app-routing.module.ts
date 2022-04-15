import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/componentes/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/componentes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/componentes/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/componentes/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/componentes/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/componentes/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/componentes/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./pages/componentes/js/js.module').then( m => m.JsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/componentes/camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
