import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';



@NgModule({
  declarations: [
    CharactersDetailsComponent,
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharactersDetailsComponent,
    CharactersListComponent
  ],
})
export class CharactersModule { }
