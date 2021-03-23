export interface Credit {
  id: string,
  customer: Customer,
  value: number,
  payment?: Payment[]
}

export interface Customer {
  name: string,
  last: string
}

export interface Payment {
  date: Date,
  value: number
}
