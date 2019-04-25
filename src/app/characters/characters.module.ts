import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CharacterDetailComponent, CharacterListComponent],
  exports: [CharacterDetailComponent, CharacterListComponent],
})
export class CharactersModule { }