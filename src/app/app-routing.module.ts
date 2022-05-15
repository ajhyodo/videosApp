import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'drestranho',
    loadChildren: () => import('./filmes/drestranho/drestranho.module').then( m => m.DrestranhoPageModule)
  },
  {
    path: 'uncharted',
    loadChildren: () => import('./filmes/uncharted/uncharted.module').then( m => m.UnchartedPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
