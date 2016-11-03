// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Dependencies will be automatically added here, the following line must declare ionic as first dependency
// and should not be split into multiple lines, see gulpfile.js.
angular.module('mm', ['ionic', 'ngCordova', 'angular-md5', 'pascalprecht.translate', 'ngAria', 'oc.lazyLoad',
    'ngIOS9UIWebViewPatch', 'ckeditor'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
		
		document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("2ba345be-143f-4bc2-9708-0623b8db78a6", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
  // Sync hashed email if you have a login system or collect it.
  //   Will be used to reach the user at the most optimal time of day.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);
		
		
		
	});
});
