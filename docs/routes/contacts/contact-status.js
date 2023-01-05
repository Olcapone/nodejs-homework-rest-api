module.exports = {
  patch: {
    tags: ["contacts"],
    description: "update status contact desc",
    operationId: "update-contact-status", // unique operation id.
    parameters: [],

    responses: {
      200: {
        description: "response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contacts/update-contact-status",
            },
          },
        },
      },
    },
  },
};