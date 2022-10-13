import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.url)
  }
  addUser(user:User){
    return this.http.post(this.url, user)
  }
  updateUser(user: User){
    return this.http.put(this.url+user.id, user)
  }
  deleteUser(id:number){
    return this.http.delete(this.url+id)
  }
}
