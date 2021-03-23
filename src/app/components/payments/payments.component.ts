import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/credit';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() payments: Payment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.payments)
  }

}
