import { knex as setupKnex } from 'Knex'

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})