module.exports = {
  get: {
    tags: ["contacts"],
    description: "Get contact desc",
    operationId: "get-contact", // unique operation id.
    parameters: [],

    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/get-contact",
            },
          },
        },
      },
    },
  },
  put: {
    tags: ["contacts"],
    description: "update contact desc",
    operationId: "update-contact", // unique operation id.
    parameters: [],

    responses: {
      200: {
        description: "response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/update-contact",
            },
          },
        },
      },
    },
  },
  delete: {
    tags: ["contacts"],
    description: "",
    operationId: "delete-contact", // unique operation id.
    parameters: [],

    responses: {
      200: {
        description: "response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/delete-contact",
            },
          },
        },
      },
    },
  },
};