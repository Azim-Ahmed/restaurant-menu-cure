module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'restaurantmenu'),
      user: env('DATABASE_USERNAME', process.env.DB_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.DB_PASSWORD),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
