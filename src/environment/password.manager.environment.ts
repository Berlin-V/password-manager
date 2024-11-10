import { passwordSaverEntity } from 'src/entity/password.manager.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseConfig: DataSourceOptions = {
  type: 'spanner',
  name: process.env.SPANNER_INSTANCE_NAME,
  projectId: process.env.GCP_PROJECT_ID,
  instanceId: process.env.SPANNER_INSTANCE_ID,
  databaseId: process.env.SPANNER_DATABASE,
  logging: false,
  entities: [passwordSaverEntity],
  synchronize: true,
};

export const environment = {
  port: process.env.PORT ?? 3000,
  dataSources: [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource(databaseConfig);
        return dataSource.initialize();
      },
    },
  ],
} as const;
