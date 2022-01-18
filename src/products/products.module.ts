import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    MulterModule.register({
      dest: './uploads',
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(
            null,
            `${req.body.name}-${Date.now()}.${file.originalname
              .split('.')
              .at(-1)}`,
          );
        },
      }),
    }),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
