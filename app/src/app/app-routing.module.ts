import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'add' , component:AddNewSongComponent},
  {path:'search' , component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
