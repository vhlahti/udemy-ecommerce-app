import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: IProduct;
  faCartShopping = faCartShopping;

}
