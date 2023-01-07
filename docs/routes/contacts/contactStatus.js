module.exports = {
  patch: {
    tags: ["contacts"],
    description: "",
    operationId: "update-contact-status",
    parameters: [
      {
        "name": "contactId",
        "in": "path",
        "description": "",
        "required": true
      },
      {
        "name": "favorite",
        "in": "body",
        "description": "boolean",
        "required": true,
        "example": "false"
      },
    ],

    responses: {
      200: {
        description: "status update",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contactResponseSchema",
            },
          },
        },
      },
      400: {
        description: "error message",
      },
      404: {
        description: "Not found",
      }
    },
  },
};
