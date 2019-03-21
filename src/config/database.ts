const pg = (connectionString: string) => {
  return require('knex')({
    client: 'pg',
    connection: {
      database: 'alperen_dev',
      user: 'postgres',
      password: 'postgres'
    },
  })
};

export default pg;