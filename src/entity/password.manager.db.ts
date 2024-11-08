import { Spanner } from '@google-cloud/spanner';
import { environment } from 'src/environment/password.manager.environment';
import { DataSourceOptions } from 'typeorm';
import { entitiesToInject } from './password.manager.entity';

const spanner = new Spanner({
  projectId: environment.projectID,
});

const instance = spanner.instance(environment.instanceID);

// const database = instance.database(environment.databaseId);

export const databaseConfig: DataSourceOptions = {
  type: 'spanner', // You may need a custom driver setup here
  name: 'default',
  synchronize: true, // Automatically syncs tables; set to false in production
  entities: entitiesToInject,
  database: environment.databaseID,
  extra: {
    spannerInstance: instance,
  },
};
