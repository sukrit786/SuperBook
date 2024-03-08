import { Expense } from 'src/expense/entities/expense.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  paidShare: number;

  @Column()
  owedShare: number;

  @Column()
  netShare: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => Expense)
  @JoinTable()
  expenses: Expense[];

  // @Column({nullable:true})
  // profile_picture:string;

  // @Column({default: new Date()})
  // updatedAt: Date;
}
