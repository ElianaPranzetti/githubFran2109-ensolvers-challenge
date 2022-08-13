import dotenv from 'dotenv';
import path from 'path';
import { dev } from './../args/args.js';

if(dev){
    const __dirname = process.cwd();
    dotenv.config({ path: path.join(__dirname, 'configs/configs.env') });
}

export const whitelistedDomains = process.env.WHITELISTED_DOMAINS;
export const clearDatabaseUrl = process.env.CLEARDB_DATABASE_URL;