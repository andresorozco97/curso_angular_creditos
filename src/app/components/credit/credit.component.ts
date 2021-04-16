import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  credit : Credit[] = [
    {
      id : '12345',
      customer : { name : 'Andres', last: 'Orozco' },
      value : 500000,
      payment: [
        { date: new Date(), value: 250000 },
        { date: new Date(), value: 250000 },
        { date: new Date(), value: 250000 }
      ]
    },
    {
      id : '98765',
      customer : { name : 'Julian', last: 'Alvarez' },
      value : 500000,
      payment: [
        { date: new Date(), value: 250000 },
        { date: new Date(), value: 250000 },
        { date: new Date(), value: 250000 }
      ]
    },
    {
      id : '98765',
      customer : { name : 'Julian', last: 'Alvarez' },
      value : 500000,
      payment: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
