import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,  } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prato/dia',
    pathMatch: 'full'
  },
  {
    path: 'prato/:id',
    loadChildren: () => import('./prato/prato.module').then( m => m.PratoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
