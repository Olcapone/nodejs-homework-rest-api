module.exports = {
  get: {
    tags: ["auth"],
    description: "verificationToken desc",
    operationId: "verificationToken", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/auth-verificationToken",
            },
          },
        },
      },
    },
  },
};