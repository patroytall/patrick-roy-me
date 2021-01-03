function loadJavaScriptAsync(file, onload) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;
  script.onload = onload();
  document.body.appendChild(script);
}

// ["script", {src:"https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"}],
// ["script", {src:"https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"}],
// ["script", {src:"/__/firebase/init.js"}],

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer
}) => {
  if (!isServer) {
    loadJavaScriptAsync("/__/firebase/8.2.1/firebase-app.js", 
      () => loadJavaScriptAsync("/__/firebase/8.2.1/firebase-analytics.js",
        () => loadJavaScriptAsync("/__/firebase/init.js")));
  }
}
