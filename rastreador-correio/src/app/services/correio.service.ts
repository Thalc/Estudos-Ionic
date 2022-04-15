/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor(private _http: HttpClient) { }

  getObjeto(codigo: string) {
    let url = `https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/` + codigo;

    let header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }

    return this._http.get(url, header).toPromise();
  }
}
