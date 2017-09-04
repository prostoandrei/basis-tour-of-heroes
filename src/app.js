var Node = require('basis.ui').Node;

module.exports = require('basis.app').create({
  title: 'Basis tour of heroes',
  init: function() {
    return new Node({
      template: resource('./app/template/layout.tmpl'),
      binding: {
        list: 'satellite:list',
        details: 'satellite:details',
      },
      satellite: {
        list: require('./app/components/hero-list/index'),
        details: require('./app/components/hero-details/index')
      },
    });
  }
});
