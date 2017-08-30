var Node = require('basis.ui').Node;

module.exports = require('basis.app').create({
  title: 'Basisjs tour of heroes',

  init: function(){
    return new Node({
      template: resource('./app/template/layout.tmpl'),
      binding: {
        //moduleName: resource('./module/moduleName/index.js')
      }
    });
  }
});
