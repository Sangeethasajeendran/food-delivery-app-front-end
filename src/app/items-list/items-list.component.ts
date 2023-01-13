import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  allRestaurants: any = []
restuarants:any;
searchKey:string=''
user = ""

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllRest().subscribe((data: any) => {
      this.allRestaurants = data.result
      console.log(this.allRestaurants);
      if (localStorage.getItem("username")) {
        this.user = localStorage.getItem("username") || ''
        console.log(this.user);
        
      }
    })
  }
  search(event: any) {
    this.searchKey = event.target.value
  }

}
