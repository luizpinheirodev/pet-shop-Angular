import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private localStorageKey: string = 'user'

  constructor() { }

  login(user){
    localStorage.setItem(this.localStorageKey, JSON.stringify(user))
  }

  logout(){
    localStorage.removeItem(this.localStorageKey)
  }

  isLogged(){
    try{
      const user = localStorage.getItem(this.localStorageKey)
      if(!user){
        return false
      }
      const userLogged = JSON.parse(user)
      return true
      }catch(error){
        return false
    }
  }

}
