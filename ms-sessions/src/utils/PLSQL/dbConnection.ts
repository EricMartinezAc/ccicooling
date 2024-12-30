import oracledb from 'oracledb';

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const connectString = `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.DB_SID}`;

const db = async () => {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString,
    });

    console.log("Database connection successful!");
    return connection;
  } catch (err:any) {
    console.error("Error connecting to the database:", err.message);
    throw err;
  }
};

export default db;
