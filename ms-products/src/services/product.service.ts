import oracledb from 'oracledb';
import * as dotenv from 'dotenv';

dotenv.config();

// Configuración de la conexión a la base de datos
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SID}`,
};

// Función para obtener todos los productos
export const getProducts = async () => {
  let connection: oracledb.Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM PRODUCTS');
    return result.rows;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

// Función para obtener un producto por ID
export const getProductById = async (id: string) => {
  let connection: oracledb.Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'SELECT * FROM PRODUCTS WHERE PRODUCT_ID = :id',
      [id]
    );
    return result.rows?.[0];
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

// Función para crear un nuevo producto
export const createProductInDb = async (product: { name: string; price: number }) => {
  let connection: oracledb.Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_PRICE) VALUES (:name, :price)',
      [product.name, product.price],
      { autoCommit: true }
    );
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

// Función para actualizar un producto
export const updateProductInDb = async (id: string, product: { name: string; price: number }) => {
  let connection: oracledb.Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'UPDATE PRODUCTS SET PRODUCT_NAME = :name, PRODUCT_PRICE = :price WHERE PRODUCT_ID = :id',
      [product.name, product.price, id],
      { autoCommit: true }
    );
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

// Función para eliminar un producto
export const deleteProductFromDb = async (id: string) => {
  let connection: oracledb.Connection | undefined;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'DELETE FROM PRODUCTS WHERE PRODUCT_ID = :id',
      [id],
      { autoCommit: true }
    );
    return result;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};
