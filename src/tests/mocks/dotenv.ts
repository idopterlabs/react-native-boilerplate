// @ts-ignore
import dotenv from 'dotenv';
dotenv.config({ path: './env.test' });
Object.assign(process.env, { RN_ENV: 'test' });

export {};
