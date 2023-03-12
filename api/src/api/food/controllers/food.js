'use strict';

/**
 * food controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::food.food');
