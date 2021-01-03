function loadJavaScriptAsync(file, onload) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;
  document.body.appendChild(script);
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer
}) => {
  if (!isServer) {
    loadJavaScriptAsync("/__/firebase/init.js");
  }
}
