import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Output } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-view-restuarant',
  templateUrl: './view-restuarant.component.html',
  styleUrls: ['./view-restuarant.component.css']
})
export class ViewRestuarantComponent implements OnInit {

  restId: any;
  restDetail = []
  restView: any = []
  restMenu: any = []
  restuarants: any;
  searchKey: string = ''

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((result: any) => {
      this.restId = result.id
      console.log(this.restId);
    })

    this.api.viewRest(this.restId).subscribe((data: any) => {
      this.restDetail = data.result
      console.log(this.restDetail);

      this.restView = this.restDetail.find(a => a['id'] == this.restId);

      // console.log(this.restView);
      this.restMenu = this.restView.menu
      console.log(this.restMenu);



    })


  }
  search(event: any) {
    this.searchKey = event.target.value
  }

  addToCart(item: any) {
    this.api.addToCart(item).subscribe(
      (result: any) => {
        alert(result.message)
        

      },
      (result: any) => {
        alert(result.error.message)

      }
    )



  }


}


