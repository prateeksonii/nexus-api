import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './create-product.dto';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  createProduct(productBody: CreateProductDTO): Promise<Product> {
    const product = this.productsRepository.create(productBody);
    return this.productsRepository.save(product);
  }
}
