import MemDB from "../db";

export const getMailsCountQuery = () => {
  const query = MemDB.query(`SELECT COUNT(*) AS emails FROM emails`);

  const { emails } = query.get() as { emails: number };

  return emails;
};
