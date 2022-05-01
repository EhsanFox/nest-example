import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) ?? 5432,
    host: process.env.DB_HOST ?? '127.0.0.1',
    synchronize: (process.env.NODE_ENV == 'production') ? false : true,
    entities: ['dist/**/*.entity{.ts,.js}']
};