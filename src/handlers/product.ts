import { Request, Response } from "express";

export const createProduct = (req: Request, res: Response) => {
    // Logic to create a product
    res.json('Create Product');
}