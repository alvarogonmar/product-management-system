import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

// Routing
router.get("/", (req, res) => {
    res.json("Hello, World!");
})

router.post("/", createProduct);

router.put("/", (req, res) => {
    res.json({"Hello, World!": "PUT"});
})

router.patch("/", (req, res) => {
    res.json({"Hello, World!": "PATCH"});
})

router.delete("/", (req, res) => {
    res.json({"Hello, World!": "DELETE"});
});

export default router;