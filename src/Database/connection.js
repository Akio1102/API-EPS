import { MongoClient } from "mongodb";
import { MONGODB } from "../Config/config.js";

export default async function () {
  try {
    const client = new MongoClient(MONGODB.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "Error al conectar a MongoDB:", error });
  }
}
