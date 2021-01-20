import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("userData", token)
  }
  getToken() {
    return localStorage.getItem("login");
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("login");
    this.myRoute.navigate(["/login"]);
  }
}