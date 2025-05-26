import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
});

site.copy("styles.css");

export default site;
