const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: {
        rejectUnauthorized: false
    }
  };

}else{
  configs = {
    user: 'alvischew',
    host: '127.0.0.1',
    database: 'perntodo',
    port: 5432
  };
}


const pool = new pg.Pool(configs);


module.exports = pool;