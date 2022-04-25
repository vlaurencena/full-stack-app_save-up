'use strict';

/**
 * authenticated-navbar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::authenticated-navbar.authenticated-navbar');
