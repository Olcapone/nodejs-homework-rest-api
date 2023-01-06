module.exports = {
  post: {
    tags: ["auth"],
    description: "",
    operationId: "resend-verify-email",
    parameters: [{
      "name": "user",
      "in": "body",
      "schema": {
        "$ref": "#/components/schemas/resendEmailSchema",
      },
      "required": true,
      "description": "",
    },],

    responses: {
      201: {
        description: "Verification message was sent",
      },
      400: {
        description: "Verification has already been passed",
      },
      404: {
        description: "User not found",
      },
    },
  },
};
