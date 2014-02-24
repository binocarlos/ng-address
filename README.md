ng-address
==========

Angular directive that renders an address form with a full list of countries

## installation

```
$ component install binocarlos/ng-address
```

## usage

```js
angular
  .module('MyApp', [
  	require('ng-address')
  ])

  .controller('MyCtrl', function($scope){
  	$scope.$on('address:country', function($ev, country){
  		// the user has just selected another country from the drop-down
  	})
	})
```

```html
<div>

	<address-form address="mydata.address" />

</div>
```

## license

MIT