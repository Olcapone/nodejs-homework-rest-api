module.exports = {
  patch: {
    tags: ["users"],
    description: "",
    operationId: "update-subscription",
    parameters: [],

    requestBody: {
      description: "",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/updateSubscribeRequestSchema",
          }
        }
      }
    },

    responses: {
      200: {
        description: "Subscription update",
      },
      400: {
        description: "Error message",
      },
    },
  },
};