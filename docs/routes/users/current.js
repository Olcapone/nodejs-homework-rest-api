module.exports = {
  get: {
    tags: ["users"],
    description: "",
    operationId: "get-user",
    parameters: [],

    responses: {

      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/userSchema",
            },
          },
        },
      },
    },
  },
};
