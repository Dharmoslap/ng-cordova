This is ngCordova wrapper with extended [AdMobPro](https://github.com/floatinghotpot/cordova-admob-pro) and [Facebook Audience Network](https://github.com/floatinghotpot/cordova-plugin-facebookads) support.

You can find [original docs](https://github.com/driftyco/ng-cordova/blob/master/README.md) in [ngCordova](https://github.com/driftyco/ng-cordova/) repository.



##Usage

###AdMobPro

- Install Cordova AdMob Pro Plugin

`cordova plugin add com.google.cordova.admob`

- Implement $cordovaAdMobPro service

```
module.controller('AdMobCtrl', function($scope, $cordovaAdMobPro) {
    $cordovaAdMobPro.setOptions({
					adId: 'ca-app-pub-6869992474017983/4806197152',
					position:8,
					autoShow:true,
					isTesting: true
				});
});
```


###Facebook Audience Network

- Install Cordova Facebook Audience Network Plugin

`cordova plugin add com.rjfun.cordova.facebookads`

- Implement $cordovaAudianceNetwork service

```
module.controller('AudianceNetworkCtrl', function($scope, $cordovaAudianceNetwork) {
	$cordovaAudianceNetwork.setOptions({
                    adId: '577571115610927_876258762408826',
                    position:8,
                    autoShow:true,
					isTesting: true
                });
});
```
