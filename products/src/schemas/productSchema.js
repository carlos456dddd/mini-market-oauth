import { z } from 'zod';


export const createProductSchema = z.object({
    name: z.string().min(1).max(100),
    price: z.number().positive(),
    stock: z.int().min(0),
    description: z.string().optional()
}); 


