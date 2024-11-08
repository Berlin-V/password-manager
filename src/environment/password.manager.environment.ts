import { databaseConfig } from 'src/entity/password.manager.db';
import { DataSource, DataSourceOptions } from 'typeorm';

export const environment = {
  port: process.env.po ?? 3000,
  projectID: process.env.PROJECT_ID,
  instanceID: process.env.INSTANCE_ID,
  databaseID: process.env.DATABASE_ID,
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
