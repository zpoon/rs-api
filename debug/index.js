'use strict';
// simple place to add calls to debug them while developing

var api = require('../');

//api.rs.player.details(['sync']).then(console.log).catch(console.error);
function resolve(d) {
    console.log(d);
}
api.rs.player.events('sync').then(console.log).catch(console.error);