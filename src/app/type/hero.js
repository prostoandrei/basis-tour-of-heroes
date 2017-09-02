var entity = require('basis.entity');

var Hero = entity.createType('Hero', {
	id: entity.IntId,
	title: String
});

module.exports = Hero;
