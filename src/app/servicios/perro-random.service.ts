import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerroRandomService {

  endpoint = "https://api.thedogapi.com/v1/images/search";
  constructor(private http: HttpClient) {}

  getRandom(){
    return this.http.get(this.endpoint)
  }
}
