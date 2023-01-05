module.exports = {
  post: {
    tags: ["auth"],
    description: "",
    operationId: "sign",
    parameters: [ {
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
        description: "contact create",
      },
      400: {
        description: "check your data",
      },
      409: {
        description: "cmail in use",
      },
    },
  },
};