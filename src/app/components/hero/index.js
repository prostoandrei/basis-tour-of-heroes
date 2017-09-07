var Node = require('basis.ui').Node;

module.exports = Node.subclass({
    template: resource('./templates/hero.tmpl'),
    binding: {
        id: 'data:',
        title: 'data:',
    }
});
