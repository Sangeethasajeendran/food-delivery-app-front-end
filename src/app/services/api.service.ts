import { HttpClient } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }

  login(username: any, password: any) {
    const body = {
      username,
      password
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  getAllRest() {
    return this.http.get('http://localhost:3000/all-rest')
  }

  viewRest(restId: any) {
    return this.http.get('http://localhost:3000/all-rest/' + restId)
  }

  signUp(username: any, password: any) {
    const body = {
      username,
      password
    }
    return this.http.post('http://localhost:3000/signup', body)
  }



  addToCart(item: any) {
    const body = {
      id: item.id,
      name: item.name,
      price: item.price,
      restname: item.restname
    }
    return this.http.post('http://localhost:3000/add-to-cart', body)
  }

  //getWishlist
  getCart() {
    return this.http.get('http://localhost:3000/get-cart')
  }

  deleteItemCart(id: any) {
    return this.http.delete('http://localhost:3000/delete-cart/' + id)
  }

  deleteCart() {
    return this.http.delete('http://localhost:3000/delete-cart')
  }

  

}
