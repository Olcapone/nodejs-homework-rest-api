module.exports = {
  patch: {
    tags: ["users"],
    description: "",
    operationId: "update-avatar", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/update-avatar",
            },
          },
        },
      },
    },
  },
};