import express from "express"
import router from "./router";
import db from "./config/db";

// Test DB connection
async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:');
    }
}

connectDB()
const server = express();
server.use('/api/productos', router);

export default server;