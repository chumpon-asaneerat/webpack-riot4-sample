//import random from './random.tag'
//export default { components: { random } }
console.log('app tag loaded.');

var app = {
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<h3 expr0><!----></h3>', [{
      'redundantAttribute': 'expr0',
      'selector': '[expr0]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return ['app component: ', scope.props.title].join('');
        }
      }]
    }]);
  },

  'name': 'app'
};

export default app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL3RhZ3MvYXBwLnRhZyJdLCJzb3VyY2VzQ29udGVudCI6WyI8YXBwPlxyXG4gICAgPGgzPmFwcCBjb21wb25lbnQ6IHsgcHJvcHMudGl0bGUgfTwvaDM+XHJcblxyXG4gICAgPHNjcmlwdD5cclxuICAgICAgICAvL2ltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20udGFnJ1xyXG4gICAgICAgIC8vZXhwb3J0IGRlZmF1bHQgeyBjb21wb25lbnRzOiB7IHJhbmRvbSB9IH1cclxuICAgICAgICBjb25zb2xlLmxvZygnYXBwIHRhZyBsb2FkZWQuJyk7XHJcbiAgICA8L3NjcmlwdD5cclxuPC9hcHA+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlROztBQUVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBTGIsS0FBSyxDQUFDOzs7Ozs7Ozs7OzsifQ==
