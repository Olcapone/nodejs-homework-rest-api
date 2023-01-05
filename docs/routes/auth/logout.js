module.exports = {
  get: {
    tags: ["auth"],
    description: "logout desc",
    operationId: "logout", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/auth-logout",
            },
          },
        },
      },
    },
  },
};