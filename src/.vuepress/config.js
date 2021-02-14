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
    ["script", { src: "/__/firebase/8.2.1/firebase-app.js" }],
    ["script", { src: "/__/firebase/8.2.1/firebase-analytics.js" }],
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
      "/articles/": getSideBarReverse("articles", "Articles"),
      "/home/": getSideBar("home", "Home"),
      "/references/": getSideBar("references", "References"),
      "/documents/technology/": getSideBar("documents/technology", "Technology"),
      "/documents/various/": getSideBar("documents/various", "Various"),
    }
  },

  plugins: [
    "@vuepress/plugin-medium-zoom",
    ["sitemap", {
      hostname: "https://softwareaficionado.com"
    }]
  ]
}

function getSideBarFiles(folder) {
  const extension = [".md"];
  return fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "index.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    )
    .sort()
}

function getSideBarCommon(files, title) {
  return [{ title: title, children: [...files] }];
}

function getSideBar(folder, title) {
  return getSideBarCommon(getSideBarFiles(folder), title)
}

function getSideBarReverse(folder, title) {
  return getSideBarCommon(getSideBarFiles(folder).reverse(), title)
}