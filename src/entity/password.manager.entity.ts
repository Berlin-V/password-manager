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
export class PasswordSaverEntity extends BaseEntity {
  @PrimaryColumn({ type: 'int64' }) // Spanner expects INT64 for numeric IDs
  id: number;

  @PrimaryColumn({ name: 'user_id', type: 'int64' })
  userID: number;

  @Column({ type: 'string' }) // STRING in Spanner
  name: string;

  @Column({ type: 'string' })
  password: string;

  @Column({ type: 'string', nullable: true })
  description: string;

  @Column({ name: 'icon_url', type: 'string', nullable: true })
  iconUrl: string;

  @Column({ type: 'bool', default: false }) // BOOL in Spanner
  pin: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  }) // TIMESTAMP in Spanner
  createdAt: Date;

  @UpdateDateColumn({
    name: 'last_update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  lastUpdatedAt: Date;

  @Column({ name: 'created_by', type: 'string' })
  createdBy: string;

  @Column({ name: 'updated_by', type: 'string' })
  updatedBy: string;
}

export const entitiesToInject = [PasswordSaverEntity];
