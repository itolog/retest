import { Injectable } from '@nestjs/common';

import * as data from './data/data.json';
import { Product } from "../graphql";

@Injectable()
export class ProductsService {
  async getProducts(): Promise<Product[]> {
    const { products } = data;
    return products;
  }
}
