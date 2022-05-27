import { validationResult } from 'express-validator';

const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ message: errors.errors[0].msg });
        }
        next()
    };
}

export default validate;