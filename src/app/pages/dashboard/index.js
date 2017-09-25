var Node = require('basis.ui').Node;
var DataObject = require('basis.data').Object;
var Value = require('basis.data').Value;
var Slice = require('basis.data.dataset').Slice;
var Filter = require('basis.data.dataset').Filter;
var Heroes = require('../../type').Hero;
var SearchInput = require('../../components/search-input/index');

var searchedHero = new Value({ value: '' });

var searchInput = new SearchInput({
    action: {
        input: function(e) {
            searchedHero.set(e.sender.value);
        }
    }
});

var filtered = new Filter({
    source: Heroes.all,
    rule: function(item) {
        return item.data.title.toLowerCase().indexOf(searchedHero.value.toLowerCase()) !== -1;
    }
});
var top = new Slice({ source: filtered, limit: 4 });

searchedHero.link(null, function(value) {
    filtered.applyRule();
})

module.exports = new Node({
    template: resource('./templates/dashboard.tmpl'),
    binding: {
        searchInput: searchInput,
    },
    childClass: {
        template: resource('./templates/dashboard-item.tmpl'),
        binding: {
            id: 'data:',
            title: 'data:',
        },
    },
    active: true,
    dataSource: top
});
