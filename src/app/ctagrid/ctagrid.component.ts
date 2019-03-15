import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { beer } from './ctagrid.model';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-ctagrid',
  templateUrl: './ctagrid.component.html',
  styleUrls: ['./ctagrid.component.scss']
})
export class CTAGridComponent implements OnInit {
  beerList: beer[];
  abv: number = 0;
  page: number = 1;
  perPageNumber: number = 8;
  nextButtonDisable: boolean = false;
  abv_lt: boolean = false;
  filter: string = "";
  baseUrl: string = "https://api.punkapi.com/v2/beers";
  constructor(private http: Http) { }

  ngOnInit() {
    this.getBeersList();
  }

  search = function () {
    if (!this.abv) {
      this.abv = 0;
    }
    this.page = 1;
    this.perPageNumber = 8;
    if (!this.abv_lt) {
      this.filter = "&abv_gt=" + this.abv;
    } else {
      this.filter = "&abv_lt=" + this.abv;
    }

    this.getBeersList();

  }

  getBeersList = function () {
    if (this.page > 0) {
      var url = this.baseUrl + "?page=" + this.page + "&per_page=" + this.perPageNumber + this.filter;

      this.http.get(url).pipe(map((response) => response.json()))
        .subscribe((data) => {
          console.log(data);
          this.beerList = data;

        });
    }
  }

  nextList = function () {
    if (this.beerList.length == this.perPageNumber) {
      this.page += 1;
    }
    this.getBeersList();
  }

  prevList = function () {
    if (this.page > 1) {
      this.page -= 1;
    }
    this.nextButtonDisable = false;
    this.getBeersList();
  }

}
