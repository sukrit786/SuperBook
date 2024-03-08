import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OpenTransaction {
  @PrimaryGeneratedColumn()
  transactionId: bigint;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.userId)
  borrower: number;

  @Column()
  lender: number;
}
