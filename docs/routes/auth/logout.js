module.exports = {
  post: {
    tags: ["auth"],
    description: "",
    operationId: "logout",
    parameters: [
      {
        "name": "id",
        "in": "query",
        "required": true,
        "schema": {
          type: "string"
        }
      }
    ],

    responses: {
      204: {
        description: "Success",
      },
      401: {
        description: "Not authorized",
      },
    },
  },
};
