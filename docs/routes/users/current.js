module.exports = {
  get: {
    tags: ["users"],
    description: "",
    operationId: "get-user", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/get-user",
            },
          },
        },
      },
    },
  },
};