var Node = require('basis.ui').Node;
var List = require('../../components/hero-list/index');
var Details = require('../../components/hero-details/index');

List.selection.addHandler({
    itemsChanged: function(sender) {
        Details.setDelegate(sender.pick());
    }
});

module.exports = new Node({
    template: resource('./templates/heroes.tmpl'),
    binding: {
        list: List,
        details: Details
    }
});
