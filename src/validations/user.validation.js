const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().email().required(),
    password: Joi.number().required().integer(),
    role: Joi.string().trim().required(),
  }),
};

/** GEt user list */
const getUserList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get user details by id */
const getDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
};

/** user details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().email().required(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
  getDetails,
  getUserList,
  updateDetails,
  sendMail,
};
