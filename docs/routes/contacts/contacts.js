module.exports = {
  get: {
    tags: ["contacts"],
    description: "",
    operationId: "get-contacts", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: "",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/contacts",
            },
          },
        },
      },
    },
  },
  post: {
    tags: ["contacts"],
    description: "Post contacts desc",
    operationId: "create-contact", // unique operation id.
    parameters: [],

    responses: {

      200: {
        description: " response desc",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/post-contacts",
            },
          },
        },
      },
    },
  },
};