export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'vita',
  password: 'LGTM',
  database: 'vita',
  synchronize: false,
  logging: true,
  entities: ['src//*.entity.ts', 'dist//*entity.ts'],
};
