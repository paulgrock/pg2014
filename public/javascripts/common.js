require.config({
  baseUrl: '/javascripts',
  paths: {
    jquery: '../vendor/jquery/jquery',
    lodash: '../vendor/lodash/dist/lodash.compat',
    ember: '../vendor/ember/ember',
    'ember-data-shim': '../vendor/ember-data-shim/ember-data',
    handlebars: '../vendor/handlebars/handlebars',
    'handlebars.runtime': '../vendor/handlebars/handlebars.runtime'
  }
});

//files to include on ALL client side paths
require([
  'jquery',
  'lodash'
], function ($, _) {
  'use strict';
  console.log(_.VERSION);
  console.log($.fn.jquery);
});
