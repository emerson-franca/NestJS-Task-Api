import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, default: 'TO_DO' })
  status: string;

  @Column({ type: 'timestamp', name: 'expiration_date' })
  expirationDate: Date;
}
