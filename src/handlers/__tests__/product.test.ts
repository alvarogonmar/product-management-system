import request from "supertest";
import server from "../../server";

describe("POST /api/productos", () => {
    it("should create a new product", async () => {
        const response = await request(server).post("/api/productos").send({

        });
    });
}); 