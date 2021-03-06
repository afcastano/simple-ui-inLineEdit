Angular Inline Edit Directive
==============================

Simple In line edition directive for Angular Js. Keyboard edition and tab support. 
The style of the components can be easily defined.

Check the demo: http://afcastano.github.io/simple-ui-inLineEdit/demo/index.html

Include the module <code>simple.ui.inLineEdit</code> on your application.
```javascript
var app = angular.module('demoApp', ['simple.ui.inLineEdit']);
```

And then use the attribute <code>in-line-editable</code> in your templates like this:
```html
<table>
	<tr ng-repeat="item in items">
		<td in-line-editable ng-model="item" model-att="name"></td>
		<td in-line-editable ng-model="item" model-att="value" display-filter="currency" s-numbers-only="true"></td>
	</tr>
</table>
```

- Pending: Detailed description. (Include modelUpdated callback and double click support)
- Pending: Example with date-picker
- Pending: Minimize
- Pending: Dependencies

Other projects
==============

- XEditable: http://vitalets.github.io/angular-xeditable/ Very good and complete. It uses buttons to accept changes. It is possible not to use them but it doesn't work completely fine. It creates hyperlinks for the editable values.
- Angular-inlineEdit: http://ngmodules.org/modules/Angular-InlineEdit Also very good, doesn't provide callbacks when the object is modified.
- Bower angular edit inline: https://github.com/m-a-t-t/bower-angular-edit-inline Haven't tried it yet

