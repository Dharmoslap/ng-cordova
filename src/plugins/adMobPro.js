// install  :     cordova plugin add com.google.cordova.admob
// link     :     https://github.com/floatinghotpot/cordova-admob-pro

    angular.module('ngCordova.plugins.adMobPro', [])

        .factory('$cordovaAdMobPro', [function () {

            return {
                setOptions: function (options, success, fail) {
                    return window.AdMob.setOptions(options, success, fail);
                },
                createBanner: function (adId, success, fail) {
                    return window.AdMob.createBanner(adId, success, fail);
                },
                removeBanner: function (options, success, fail) {
                    return window.AdMob.removeBanner(options, success, fail);
                },
                showBanner: function (position) {
                    return window.AdMob.showBanner(position);
                },
                showBannerAtXY: function (x, y) {
                    return window.AdMob.showBannerAtXY(x, y);
                },
                hideBanner: function () {
                    return window.AdMob.hideBanner();
                },
                prepareInterstitial: function (adId, success, fail) {
                    return window.AdMob.prepareInterstitial(adId, success, fail);
                },
                showInterstitial: function () {
                    return window.AdMob.showInterstitial();
                },
                isInterstitialReady: function (callback) {
                    return window.AdMob.isInterstitialReady(callback);
                }
            }
        }]);
