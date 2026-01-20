import server, { connectDB } from "../server";
import request from "supertest";
import db from "../config/db";

describe("GET /api", () => {
    it("shoould send back a json with a message", async () => {
        const res = await request(server).get("/api");

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toMatch(/json/);
        expect(res.body.msg).toBe("From API")

        expect(res.status).not.toBe(404);
        expect(res.body.msg).not.toBe("from api");
    });
});

jest.mock("../config/db");

describe("connectDB", () => {
    it("should handle database connection errors", async () => {
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error("Unable to connect to the database:"));
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB();

        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Unable to connect to the database:'));
    });
});