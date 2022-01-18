import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDTO } from './create-product.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    console.log(file);
    return this.productsService.createProduct({
      ...createProductDTO,
      image: 'hgferbhg',
    });
  }
}
