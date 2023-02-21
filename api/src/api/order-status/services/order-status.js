'use strict';

/**
 * order-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-status.order-status');
