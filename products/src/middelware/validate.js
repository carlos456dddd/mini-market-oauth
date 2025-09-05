import {z} from 'zod';

export const validate = (schema) => (req, res,next) => {
    try {

       schema.parse(req.body);
       next();


    } catch (error) {
        if (error instanceof z.ZodError) {

            return res.status(400).json({
                message: 'validation error',
                errors: error.errors.map (err => (
                    {
                      path: err.path.join('.'),
                      message: err.message  
                    }
                ))
            })
        }
        return res.status(400).json({error:error.errors});
    }
}