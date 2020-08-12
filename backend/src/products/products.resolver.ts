import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from '../graphql';

@Resolver('Products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Query()
  async products(): Promise<Product[]> {
    try {
      return await this.productsService.getProducts();
    } catch (e) {
      return e;
    }
  }
}
