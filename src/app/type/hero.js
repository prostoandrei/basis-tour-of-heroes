var entity = require('basis.entity');
var action = require('basis.net.action');
var Service = require('basis.net.service').Service;

var service = new Service();

var Hero = entity.createType('Hero', {
    id: entity.IntId,
    title: String,
    name: String,
    primary_attr: String,
    attack_type: String,
});

Hero.all.setSyncAction(service.createAction({
    url: 'https://api.opendota.com/api/heroes',
    success: function(data){
        this.setAndDestroyRemoved(Hero.readList(data));
    }
}));

Hero.extendReader(function(data) {
    data.title = data.localized_name;
});

module.exports = Hero;
