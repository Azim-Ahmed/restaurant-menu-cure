'use strict';

/**
 * food service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food.food');
