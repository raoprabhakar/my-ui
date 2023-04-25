import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsPickerService {

  constructor(private httpClient: HttpClient) { }
  findPartnerImageByLocation(zipCode:string):Observable<any> {
    const url = "http://localhost:9090/ims/v1/image-tracker"
    let result = this.httpClient.post<any>(url,{"zipCode":zipCode});
     return result ;
  }
}
