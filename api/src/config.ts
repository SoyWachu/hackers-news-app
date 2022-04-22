import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      dbName: process.env.DATABASE_NAME,
      dbPort: parseInt(process.env.DATABASE_PORT, 10),
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      host: process.env.DATABASE_HOST,
      connection: process.env.DATABASE_CONNECTION,
    },
  };
});
