import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: Add validation
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: string;

  @Column()
  image: string;

  @Column()
  description: string;
}
