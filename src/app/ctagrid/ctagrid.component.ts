import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { beer } from './ctagrid.model';

@Component({
  selector: 'app-ctagrid',
  templateUrl: './ctagrid.component.html',
  styleUrls: ['./ctagrid.component.scss']
})
export class CTAGridComponent implements OnInit {
  beerList: beer[];
  abv: number = 1;
  page: number = 1;
  perPageNumber: number = 8;
  nextButtonDisable: boolean = false;
  prevButtonDisable: boolean = true;
  abv_lt:boolean = false;
  basdf={
    name:"sdas"
  }

  constructor(private http: Http) { }

  ngOnInit() {
    this.getBeersList();
  }

  getBeersList = function () {
    var url = "https://api.punkapi.com/v2/beers?page=" + this.page + "&per_page=" + this.perPageNumber;
    this.http.get(url).pipe(map((response) => response.json()))
      .subscribe((data) => {
        console.log(data);
        this.beerList = data;
        if (this.beerList.length < this.perPageNumber) {
          this.nextButtonDisable = true;
        }
      });
  }

  nextList = function () {
    this.page += 1;
    if (this.page > 1) {
      this.prevButtonDisable = false;
    }
    this.getBeersList();
  }

  prevList = function () {
    this.page -= 1;
    if (this.page == 1) {
      this.prevButtonDisable = true;
    }

    this.getBeersList();
  }

}
