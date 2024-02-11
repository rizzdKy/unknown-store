import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type WishlistModel = {
  _id: ObjectId;
  userId?: ObjectId;
  productId?: ObjectId;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateWishlistInput = Omit<WishlistModel, "_id">;
const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_WISH = "Whislist";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const createWishlist = async (wishlist: CreateWishlistInput) => {
  const modifiedWish: CreateWishlistInput = {
    ...wishlist,
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_WISH).insertOne(modifiedWish);

  return result;
};
