import { Injectable, } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreserviceService {

  constructor(private http:HttpClient) { }


  getDataArticles()
  {
     return this.http.get("https://plataforma.visasgomezyasociados.com/shop/getproducts")
  }
}
