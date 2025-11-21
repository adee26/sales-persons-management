import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-persons-list',
  standalone: false,
  templateUrl: './sales-persons-list.html',
  styleUrl: './sales-persons-list.css',
})
export class SalesPersonsList {

  //create an array of sales-persons-objects;

  salePersonsList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@mail.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@mail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@mail.com", 90000),
    new SalesPerson("Mai", "Troung", "mai.troung@mail.com", 60000)
  ];

}
