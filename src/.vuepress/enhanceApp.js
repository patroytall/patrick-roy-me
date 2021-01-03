function loadJavaScriptAsync(file, onload) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;
  script.onload = onload;
  document.body.appendChild(script);
}

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer
}) => {
  if (!isServer && !window.location.href.startsWith("http://localhost")) {
    loadJavaScriptAsync("/__/firebase/init.js", () => {
      firebase.analytics();
      router.afterEach(() => {
        firebase.analytics().logEvent("page_view")
      });
    })
  }
}
