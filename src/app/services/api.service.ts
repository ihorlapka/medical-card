import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
  private urlApiBase = 'http://localhost';
  constructor(
    private http: HttpClient
  ) { }


  getPatients() {
    const url = `${this.urlApiBase}` + '/patients';
    return this.http.get(url);
  }
}


