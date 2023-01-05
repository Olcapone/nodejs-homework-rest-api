module.exports = {
  post: {
    tags: ["auth"],
    description: "verify desc",
    operationId: "verify", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/auth-verify",
            },
          },
        },
      },
    },
  },
};