import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('password_saver')
export class passwordSaverEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn({ name: 'user_id' })
  userID: number;

  @Column({ type: 'string' })
  name: string;

  @Column()
  password: string;

  @Column({ type: 'string', nullable: true })
  description: string;

  @Column({ name: 'icon_url', nullable: true })
  iconUrl: string;

  @Column({ default: false })
  pin: boolean;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'last_update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  lastUpdatedAt: Date;

  @Column({ name: 'created_by', type: 'varchar' })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'varchar' })
  updatedBy: string;
}

export const entitiesToInject = [passwordSaverEntity];
