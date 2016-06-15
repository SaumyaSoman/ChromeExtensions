// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

 
function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];

    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}


function redirect() {

   chrome.tabs.update({url: "https://dzone.com/"});
    window.close(); 

}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    if(url == 'https://www.facebook.com/'){
          redirect();
    }

  });

})
