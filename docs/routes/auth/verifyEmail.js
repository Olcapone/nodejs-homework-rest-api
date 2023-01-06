module.exports = {
  get: {
    tags: ["auth"],
    description: "",
    operationId: "verifyEmail",
    parameters: [
      {
        "name": "verificationCode",
        "in": "path",
        "description": "",
        "required": true
      }
    ],

    responses: {
      200: {
        description: "Verification successful",
      },
      404: {
        description: "User not found",
      },
    },
  },
};
