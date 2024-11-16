import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

declare global {
  var mongoose: { conn: any; promise: any } | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbCache = cached as { conn: any; promise: any };

async function connectDB(retryCount = 0) {
  if (dbCache.conn) {
    return dbCache.conn;
  }

  if (!dbCache.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    dbCache.promise = new Promise(async (resolve, reject) => {
      try {
        const mongoose = await tryConnect(opts, retryCount);
        resolve(mongoose);
      } catch (error) {
        reject(error);
      }
    });
  }

  try {
    dbCache.conn = await dbCache.promise;
    return dbCache.conn;
  } catch (error) {
    dbCache.promise = null;
    throw error;
  }
}

async function tryConnect(opts: any, retryCount: number) {
  try {
    const db = await mongoose.connect(MONGODB_URI, opts);
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      console.log(`Failed to connect to MongoDB. Retrying in ${RETRY_DELAY/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return connectDB(retryCount + 1);
    }
    console.error('Failed to connect to MongoDB after maximum retries');
    throw error;
  }
}

export default connectDB;