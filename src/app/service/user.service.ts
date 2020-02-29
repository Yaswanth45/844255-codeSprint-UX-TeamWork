import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:4444/users";
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl)
  }

  add(us: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, us);
  }
  getAllById(empId:number) : Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${empId}`);
 }
 save(us:User) :Observable<User>{
  return this.httpClient.put<User>(this.baseUrl,us);
}


}