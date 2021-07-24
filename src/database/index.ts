import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then(option => {
    const newOption = option as IOptions;
    newOption.host = 'database_rentcar';
    createConnection({ ...option }).then(r => r);
});
