import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable()
export class ServiceNameService {
  
  constructor(private http: HttpClient) { }

}
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpclient: HttpClient) { }

  signup(register:any[])
  {
   return this.httpclient.post('https://home-budget-4e7bf.firebaseio.com/register.json',register);
  }
}
