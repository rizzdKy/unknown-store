import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { NextRequest } from "next/server";

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  discountPrice: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_PRODUCT = "Product";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getProducts = async () => {
  const db = await getDb();

  const products = (await db
    .collection(COLLECTION_PRODUCT)
    .find()
    .toArray()) as ProductModel[];

  return products;
};

export const getProductBySlug = async (slug: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_PRODUCT)
    .findOne({ slug: slug })) as ProductModel;

  return user;
};
