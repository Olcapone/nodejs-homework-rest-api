module.exports = {
  patch: {
    tags: ["users"],
    description: "",
    operationId: "update-subscription", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/update-user-subscription",
            },
          },
        },
      },
    },
  },
};