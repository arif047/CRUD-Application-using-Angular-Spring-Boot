import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { model3 } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  private baseURL = "http://localhost:8080/cloudvendor";
  constructor(private http: HttpClient) { } 

  getVendorList(): Observable<model3[]>{
    return this.http.get<model3[]>('${this.baseURL}');
  }

   createVendor(vendorItem: model3): Observable<Object> {
    return this.http.post(this.baseURL, vendorItem);
  }
  

   
}
