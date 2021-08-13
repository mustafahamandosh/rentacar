import { hash } from 'bcryptjs';
import { v4 } from 'uuid';

import createConnection from '../index';

async function create() {
    const connection = await createConnection('localhost');
    const id = v4();
    const password = await hash('admin', 8);
    await connection.query(
        `insert into "user" (id, name, email, password, "isAdmin", created_at, driver_license)
               values
               ('${id}', 'admin', 'admin@email.com', '${password}', true, 'now()', 'FED-1123')`,
    );
    await connection.close();
}

create()
    .then(() => console.log('Admin created'))
    .catch((reason) => console.log(reason));
