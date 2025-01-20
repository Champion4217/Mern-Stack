
const validate = (schema) => async(req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const statusCode = 422;
        const message = `${error.message}`;
        const extraDetails = error.errors[0].message;
        const err = {
          statusCode,
          message,
          extraDetails
        }
        next(err);
    }
};

module.exports = {
    validate
}