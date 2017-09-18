var Node = require('basis.ui').Node;
var Hero = require('../hero/index');
var Heroes = require('../../type').Hero;
var SearchInput = require('../../components/search-input/index');
var Value = require('basis.data').Value;
var Slice = require('basis.data.dataset').Slice;
var Filter = require('basis.data.dataset').Filter;

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
var top = new Slice({ source: filtered, limit: 10 });

searchedHero.link(null, function(value) {
    filtered.applyRule();
})

module.exports = new Node({
    template: resource('./templates/hero-list.tmpl'),
    binding: {
        searchInput: searchInput,
    },
    active: true,
    childClass: Hero,
    selection: true,
    dataSource: top
});
