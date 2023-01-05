module.exports = {
  components: {
    schemas: {

      contacts: {
        type: "array",
        description: "sxcsxs",
        example: "tyVgf",
      },

      signSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "min 3 symbols",
            example: "User Name",
          },
          email: {
            type: "string",
            description: "",
            example: "example@email.com",
          },
          password: {
            type: "string",
            description: "min 6 symbols",
            example: "",
          },
        },
      },

      Todo: {
        type: "object",
        properties: {
          id: {
            type: "string", // data-type
            description: "Todo identification number", // desc
            example: "ytyVgh", // example of an id
          },
          title: {
            type: "string", // data-type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // Todo input model
      TodoInput: {
        type: "object", // data type
        properties: {
          title: {
            type: "string", // data type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
