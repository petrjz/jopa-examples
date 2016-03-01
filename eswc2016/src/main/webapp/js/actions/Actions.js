'use strict';

var Reflux = require('reflux');

/**
 * Reflux actions, listened to by StudentStore.
 */
var Actions = Reflux.createActions([
    'loadAudits', 'loadAudit', 'createAudit', 'updateAudit', 'deleteAudit', 'loadReport', 'saveReport', 'updateReport', 'deleteReport',

    'loadData'
]);

module.exports = Actions;