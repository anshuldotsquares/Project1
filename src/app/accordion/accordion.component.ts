import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { beer } from './accordion.model';

declare const $: any;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private http: Http) { }

  beerList:beer[];

  ngOnInit() {
    this.http.get("https://api.punkapi.com/v2/beers").pipe(map((response) => response.json()))
      .subscribe((data) => {
        this.beerList = data;
      });
  }

  hasClicked = function (res, asd) {
    this.beerList[res].show = !this.beerList[res].show;
    console.log('ssssssssssss', res, $(this));
  }

}
