import { Component } from '@angular/core';
import { Credit } from './model/credit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  credit : Credit[] = [{
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
  }
]
}
