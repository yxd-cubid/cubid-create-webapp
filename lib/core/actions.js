const open = require("open");
const path = require("path");
const fs = require("fs");
const {
  promisify
} = require("util")
const {
  exec,
  spawn
} = require("child_process");

const download = promisify(require("download-git-repo"));
const repopath = require("../config/repoconfig")

const createCommandAction = async (projectName, options) => {
  if (
    options.framework &&
    (options.framework !== "vue" &&
      options.framework !== "react" &&
      options.framework !== "angluar")
  ) {
    // console.log("\033[31m this is a error! \033[39m\n")
    console.error("\033[31mError:\n  Please select the vue/react/angluar when -f is used\033[39m\n");
    return;
  }

  // 添加下载提示
  console.log("downloading template...");
  if (fs.existsSync(path.resolve(projectName))) {
    console.log("\033[31mError:\n  dir [" + projectName + "] is exist!\033[39m\n");
    return;
  }

  // console.log(repopath, projectName);
  // 1、拉取git创建好的模板项目  download-git-repo
  await download(repopath, projectName, {
    clone: true
  });
  console.log("download complete!");
  // 2、执行npm install  exec spawn
  // exec()

  // 3、执行 npm run serve
  // 4、打开浏览器
  // open("https://www.baidu.com");
}

module.exports = {
  createCommandAction
}