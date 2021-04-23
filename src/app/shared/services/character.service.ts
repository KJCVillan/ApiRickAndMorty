import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) 
  {

  }

  SearchCharacters(query='',page=1)
  {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  getDetails(id:number)
  {
    return this.http.get<Character>(`${environment.baseUrlAPI}/?name=${id}`);
  }
}
