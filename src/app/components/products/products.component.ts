import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Object;

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getProducts().subscribe(
      database => this.products$ = database
    )
  }

}
