'use strict';

/**
 * payment-method controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment-method.payment-method');
