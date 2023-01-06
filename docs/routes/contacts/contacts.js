
module.exports = {
  get: {
    tags: ["contacts"],
    description: "",
    operationId: "get-contacts",
    parameters: [],

    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contactsSchema",
            },
          },
        },
      },
    },
  },
  post: {
    tags: ["contacts"],
    description: "",
    operationId: "new-contact",
    parameters: [],

    requestBody: {
      description: "",
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/addContactSchema",
          }
        }
      }
    },

    responses: {
      201: {
        description: "contact create",
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
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
            },
          },
        },
      },
    },
  },
};