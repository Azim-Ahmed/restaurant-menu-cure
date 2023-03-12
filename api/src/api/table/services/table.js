'use strict';

/**
 * table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::table.table');
