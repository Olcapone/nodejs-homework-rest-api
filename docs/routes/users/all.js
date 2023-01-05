module.exports = {
  get: {
    tags: ["users"],
    description: "",
    operationId: "get-users", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/get-users",
            },
          },
        },
      },
    },
  },
};