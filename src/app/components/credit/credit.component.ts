import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  @Input() credit: Credit;

  constructor() { }

  ngOnInit(): void {
  }

}
