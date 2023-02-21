'use strict';

/**
 * payment-method service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-method.payment-method');
