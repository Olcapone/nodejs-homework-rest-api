module.exports = {
  get: {
    tags: ["contacts"],
    description: "",
    operationId: "get-contact",
    parameters: [
      {
        "name": "contactId",
        "in": "path",
        "description": "",
        "required": true,
        "schema": {
          type: "string"
        }
      },
    ],

    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contactResponseSchema",
            },
          },
        },
      },
      404: {
        description: "Contact with id=${contactId} not found",
      }
    },
  },
  put: {
    tags: ["contacts"],
    description: "",
    operationId: "update-contact",
    parameters: [
      {
        "name": "contactId",
        "in": "path",
        "description": "",
        "required": true,
        "schema": {
          type: "string"
        }
      },
      {
        "name": "name",
        "in": "query",
        "schema": {
          type: "string"
        }
      },
      {
        "name": "email",
        "in": "query",
        "schema": {
          type: "string"
        }
      },
      {
        "name": "phone",
        "in": "query",
        "schema": {
          type: "string"
        }
      },
    ],

    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contactResponseSchema",
            },
          },
        },
      },
      404: {
        description: "Not found",
      },
      400: {
        description: "Error message",
      }
    },
  },
  delete: {
    tags: ["contacts"],
    description: "",
    operationId: "delete-contact",
    parameters: [
      {
        "name": "contactId",
        "in": "path",
        "description": "",
        "required": true,
        "schema": {
          type: "string"
        }
      },
    ],

    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contactResponseSchema",
            },
          },
        },
      },
      404: {
        description: "Not found",
      },
    },
  },
};