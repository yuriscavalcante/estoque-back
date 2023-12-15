import { DataSource } from 'typeorm';
import { typeormConfigs } from './TypeormConfig';

const dataSource = new DataSource(typeormConfigs as unknown as any);

export default dataSource;
