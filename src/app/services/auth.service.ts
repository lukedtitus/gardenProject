import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from 'selenium-webdriver/http';

const Api_Url = 'http://efa-gardenapp-backend.herokuapp.com';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    //return this._http.post(`${Api_Url}/api/Account/Register`, regUserData)
  }

}
