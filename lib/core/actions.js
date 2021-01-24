const open =  require("open");
const {exec, spawn} = require("child_process")

const createCommandAction = (projectName, options) => {
  if (
    options.framework &&
    (options.framework !== "vue" &&
    options.framework !== "react" &&
    options.framework !== "angluar")
  ) {
    // console.log("\033[31m this is a error! \033[39m\n")
    console.error("\033[31m Error::please select vue/react/angluar from -f \033[39m\n");
    return;
  }

  // 1、拉取git创建好的模板项目  download-git-repo
  // 2、执行npm install  exec spawn
  // 3、执行 npm run serve
  // 4、打开浏览器
  open("https://www.baidu.com");
}

module.exports = {
  createCommandAction
}