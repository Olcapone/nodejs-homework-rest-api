module.exports = {
  patch: {
    tags: ["users"],
    description: "",
    operationId: "update-avatar",
    parameters: [
      {
        "name": "id",
        "in": "query",
        "required": true,
        "schema": {
          type: "string"
        }
      },
      {
        "name": "file",
        "in": "query",
        "required": true,
        "schema": {
          type: "file"
        }
      },
    ],

    responses: {
      201: {
        description: "success",
      },
    },
  },
};
