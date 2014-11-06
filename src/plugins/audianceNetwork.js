// install  :     cordova plugin add com.rjfun.cordova.facebookads
// link     :     https://github.com/floatinghotpot/cordova-plugin-facebookads

    angular.module('ngCordova.plugins.audianceNetwork', [])

        .factory('$cordovaAudianceNetwork', [function () {

            return {
                setOptions: function (options, success, fail) {
                    return window.FacebookAds.setOptions(options, success, fail);
                },
                createBanner: function (adId, success, fail) {
                    return window.FacebookAds.createBanner(adId, success, fail);
                },
                removeBanner: function (options, success, fail) {
                    return window.FacebookAds.removeBanner(options, success, fail);
                },
                showBanner: function (position) {
                    return window.FacebookAds.showBanner(position);
                },
                showBannerAtXY: function (x, y) {
                    return window.FacebookAds.showBannerAtXY(x, y);
                },
                hideBanner: function () {
                    return window.FacebookAds.hideBanner();
                },
                prepareInterstitial: function (adId, success, fail) {
                    return window.FacebookAds.prepareInterstitial(adId, success, fail);
                },
                showInterstitial: function () {
                    return window.FacebookAds.showInterstitial();
                },
                isInterstitialReady: function (callback) {
                    return window.FacebookAds.isInterstitialReady(callback);
                }
            }
        }]);
