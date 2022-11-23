'use strict';

/**
 * airline-ticket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::airline-ticket.airline-ticket');
