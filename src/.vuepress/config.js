const { description } = require("../../package")
const fs = require("fs");
const path = require("path");

module.exports = {
  title: "Software Aficionado",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "icon", href: "https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/global/patrick-32x32-1.png" }],
  ],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    logo: "https://cdn.jsdelivr.net/gh/patroytall/patrick-roy-me-asset/image/global/patrick-1.jpg",
    nav: [
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Articles",
        link: "/articles/"
      },
      {
        text: "References",
        link: "/references/"
      },
      {
        text: "Documents",
        link: "/documents/"
      },
    ],
    sidebar: {
      "/articles/": getSideBar("articles", "Articles"),
    }
  },

  plugins: [
    "@vuepress/plugin-medium-zoom",
  ]
}

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "index.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );
  return [{ title: title, children: [...files] }];
}