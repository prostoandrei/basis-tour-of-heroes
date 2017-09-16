var Node = require('basis.ui').Node;
var DataObject = require('basis.data').Object;
var Heroes = require('../../type').Hero;
var Value = require('basis.data').Value;

var Slice = require('basis.data.dataset').Slice;
var Filter = require('basis.data.dataset').Filter;

var searchedHero = new Value({ value: '' });

var filtered = new Filter({ source: Heroes.all });
var top = new Slice({ source: filtered, limit: 4 });

searchedHero.link(null, (value) => {
    filtered.setRule(function(item){
        return item.data.title.toLowerCase().indexOf(searchedHero.value.toLowerCase()) !== -1;
    });
})

module.exports = new Node({
    template: resource('./templates/dashboard.tmpl'),
    action: {
        search: function(e) {
            searchedHero.set(e.sender.value);
        }
    },
    childClass: {
        template: `
            <a class="col-1-4">
                <div class="module hero">
                    <h4>{title}</h4>
                </div>
            </a>
        `,
        binding: {
            id: 'data:',
            title: 'data:',
        },
    },
    active: true,
    dataSource: top
});
