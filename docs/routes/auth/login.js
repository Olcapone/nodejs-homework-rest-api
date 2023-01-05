module.exports = {
  post: {
    tags: ["auth"],
    description: "login desc",
    operationId: "login", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/auth-login",
            },
          },
        },
      },
    },
  },
};