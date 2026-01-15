import server from "../server";
import request from "supertest";

describe("GET /api", () => {
    it("shoould send back a json with a message", async () => {
        const res = await request(server).get("/api");

        console.log(res)
    });
});