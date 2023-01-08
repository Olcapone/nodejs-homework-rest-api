module.exports = {
  post: {
    tags: ["auth"],
    description: "",
    operationId: "login", // unique operation id.
    parameters: [{
      "name": "user",
      "in": "body",
      "schema": {
        "$ref": "#/components/schemas/loginSchema",
      },
      "required": true,
      "description": "",
    },],

    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/loginResponseSchema",
            },
          },
        },
      },
      400: {
        description: "Bad Request",
      },
      403: {
        description: "Email or password is wrong",
      },
    },
  },
};
