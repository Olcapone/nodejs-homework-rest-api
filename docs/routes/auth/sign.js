module.exports = {
  post: {
    tags: ["auth"],
    description: "",
    operationId: "sign",
    parameters: [{
      "name": "user",
      "in": "body",
      "schema": {
        "$ref": "#/components/schemas/signSchema",
      },
      "required": true,
      "description": "",
    },],

    responses: {
      201: {
        description: "Contact create",
      },
      400: {
        description: "Bad request",
      },
      409: {
        description: "Email in use",
      },
    },
  },
};
