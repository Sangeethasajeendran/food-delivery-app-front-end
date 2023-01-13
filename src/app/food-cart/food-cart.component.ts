import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {
  Cart: any = []
  eMsg: string = ''
  grantTotal: any = 0
  total = 0
  cartCount: number = 0
  cartPrice: any = []
  updateTotal: any = 0
  cartItemsList = new BehaviorSubject([])

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getCart().subscribe(
      (data: any) => {
        console.log(data.result);
        this.Cart = data.result
        this.Cart.forEach((person: any) => {

          this.cartPrice.push(person.price)
          console.log(this.cartPrice);
        })
        
        // this.cartPrice.map((item: any) => {
          // parseInt(item.price)
          this.cartPrice.forEach((num:any) => {
            this.grantTotal += num;
            console.log( this.grantTotal);
            
          
        // });
        
          
        })
        // return grantSum
        //   this.idWithLast = person.id
        // console.log(this.idWithLast);
        // this.CartId = Math.floor(this.idWithLast / 10);
        // console.log(this.CartId)
        // });
        this.cartCount = this.Cart.length
        if (this.Cart.length == 0) {
          this.eMsg = 'empty cart'
        }
      },
      (data: any) => {
        this.eMsg = data.error.message

      }
    )
    

    // this.api.getAllRest().subscribe(
    //   (data: any) => {

    //     this.allRest = data.result
    //     this.allRest.forEach((person: any) => {
    //       this.restId = person.id
    //        console.log(this.restId);
    //        if(this.Cart.length!==0){
    //      this.restView=this.allRest.filter((a:any)=>a['id']==this.CartId)
    //       // console.log(this.restView);
    //        }
    //     })

    //   }
    // )

  }

  removeItem(item: any) {
    this.api.deleteItemCart(item.id).subscribe(
      (result: any) => {
        console.log(result);
        this.Cart = result.Cart
        location.reload();
        if (this.Cart.length == 0) {
          this.eMsg = 'empty cart'

        }
      },
      //client error
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

 

  removeAllItems() {
    this.api.deleteCart().subscribe(
      (result: any) => {
        console.log(result);
        alert(result.message)
        this.router.navigateByUrl('food-cart')
        location.reload();
      }
    )
  }

  discount3per(){
    let discount = (this.grantTotal * 3) / 100
    let discountValue = this.grantTotal - discount
    this.updateTotal = discountValue.toFixed(2)
  }

  discount5per() {

    let discount = (this.grantTotal * 5) / 100
    let discountValue = this.grantTotal - discount
    this.updateTotal = discountValue.toFixed(2)
  }

  discount30per() {
   
    let discount = (this.grantTotal * 30) / 100
    let discountValue = this.grantTotal - discount
    this.updateTotal = discountValue.toFixed(2)
  }

  discount50per() {
    
    let discount = (this.grantTotal * 50) / 100
    let discountValue = this.grantTotal - discount
    this.updateTotal = discountValue.toFixed(2)
  }

  proceed() {
    this.removeAllItems()
    alert('Your order placed successfuly')
    this.router.navigateByUrl('')
  }

}
