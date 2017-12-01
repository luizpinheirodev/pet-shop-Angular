import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) : Observable<any>{
    return this.http.get(`http://localhost:3000/users?username=${username}&password=${password}`)
      .map((res: any[])=>{
        if (!res.length) {
          return
        }
        const user = res.pop()
        delete user.password
        localStorage.setItem('user', JSON.stringify(user))
        return true
      })
  }

}
