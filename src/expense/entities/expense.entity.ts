import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  expenseId: bigint;

  @Column()
  userId: number;

  @Column()
  description: string;

  @Column()
  cost: string;

  @Column()
  currency: string;

  @Column()
  date: Date;

  @Column()
  createdBy: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
