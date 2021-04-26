'use strict';

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (details.type !== 'main_frame' || details.method !== 'GET') {
    return;
  }

  const url = new URL(details.url);
 if((url=="https://www.facebook.com/signin")||(url=="https://www.facebook.com/signin"))
 {
	 
	   url.protocol = 'https:';
	   url.host="google.com"
  url.pathname = '/';
  return {
    redirectUrl: url.href
  };
 }
}, { urls: ['*://*.facebook.com/signin*'] }, ['blocking']);
