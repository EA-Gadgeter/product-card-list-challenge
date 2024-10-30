import { Injectable } from '@angular/core';

import productsData from "@/mock/data.json";

import type { Product } from "@/app/products/interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: Product[] = []; 

  constructor() { 
    this._products = productsData;
  }

  public get products(): Product[] {
    return [...this._products];
  }
}
