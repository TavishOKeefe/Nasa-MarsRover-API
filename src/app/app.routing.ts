import { RoverFormComponent } from './rover-form/rover-form.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PhotosListComponent } from './photos-list/photos-list.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  }
  // {
  //   path: 'app-photos-list',
  //   component: PhotosListComponent
  // }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
