import MemDB from "../db";

export const insertNewMailQuery = (email: string) => {
  const query = MemDB.query(`insert into emails (email) values ($email)`);

  return query.run(email);
};
