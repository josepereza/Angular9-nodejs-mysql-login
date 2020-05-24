import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  private eventsApi="http://localhost:3000/api/clientes/events"
  private specaileventsApi="http://localhost:3000/api/clientes/lista"
  constructor(
    private http:HttpClient
  ) { }

    getEvents(){
      return this.http.get<any>(this.eventsApi)
    }

    getSpecialEvents(){
      return this.http.get<any>(this.specaileventsApi)
    }


}
