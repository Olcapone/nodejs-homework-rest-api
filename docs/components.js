const contactSchema = {
      name: {
        type: "string",
        description: "min 3 symbols",
        example: "User Name",
        required: "true",
      },
      email: {
        type: "string",
        description: "",
        example: "example@email.com",
        required: "true",
      },
      phone: {
        type: "string",
        description: "only numbers",
        example: "",
        required: "true",
      },
      favorite: {
        type: "boolean",
        default: "false",
      }
  }

const updateContactSchema = {
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
  phone: {
    type: "string",
    description: "only numbers",
    example: "",
  },
}

const contactResponseSchema = {
  _id: { type: "string" },
  ...contactSchema,
  owner: { type: "string" },
  createdAt: { type: "string" },
  updatedAt: { type: "string" }
}

const userResponseSchema = {
  _id: { type: "string" },
  email: { type: "string" },
  avatarURL: { type: "string", example: "//www.gravatar.com/avatar/a6bd226eb3480260c38d805fa2c5a9dc" },
  subscription: { type: "string", example:  "starter"},
  createdAt: { type: "string" },
  updatedAt: { type: "string" },
  verificationCode: { type: "string" },
  verifyStatus: { type: "boolean" },
}

const currentUserResponseSchema = {
  email: { type: "string" },
  subscription: { type: "string", example:  "starter"},
}

module.exports = {
  components: {
    schemas: {
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

      loginSchema: {
        type: "object",
        properties: {
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

      loginResponseSchema: {
        type: "object",
        properties: {
          body: {
            type: "object",
            properties: {
              token: { type: "string" },
              user: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                  name: {
                    type: "string",
                  },
                },
              }
            }
          },
          code: { type: "number" },
          status: { type: "string" },
        }
      },

      resendEmailSchema: {
        type: "object",
        properties: {
          email: {
            type: "string",
            example: "example@email.com",
          },
          verificationToken: {
            type: "string",
          },
        },
      },

      contactsSchema: {
        type: "object",
        properties: {
           body: {
             type: "array",
             items: {
               type: "object",
               properties: {
                 ...contactResponseSchema
               },
             }
           },
          code: { type: "number" },
          status: { type: "string" }
        },
      },

      addContactSchema: {
        type: "object",
        properties: { ...contactSchema },
      },

      updateContactRequestSchema: {
        type: "object",
        properties: { ...updateContactSchema },
      },

      contactResponseSchema: {
        type: "object",
        properties: {
          body: {
            type:"object",
            properties: {
              ...contactResponseSchema
            }
          },
          message: { type: "string" },
          code: { type: "number" },
          status: { type: "string" }
        }
      },

      usersSchema: {
        type: "object",
        properties: {
          body: {
            type: "array",
            items: {
              type: "object",
              properties: {
                ...userResponseSchema,
                usersContacts: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      ...contactResponseSchema
                    }
                  }
                }
              },
            }
          },
          code: { type: "number" },
          status: { type: "string" }
        },
      },

      userSchema: {
        type: "object",
        properties: {
          body: {
            type: "object",
            properties: {
              ...currentUserResponseSchema
            }
          },
          code: {type: "number"},
          status: {type: "string"}
        }
      },

      updateSubscribeRequestSchema: {
        type: "object",
        properties: {
          id: {
            type: "string",
            required: "true",
          },
          subscription: {
            type: "string",
            example:  "starter",
            required: "true"
          },
        }
      },

      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found",
          },
        },
      },
    },
  },
};
