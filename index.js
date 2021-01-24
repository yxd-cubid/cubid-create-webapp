#!/usr/bin/env node
const program = require("commander");

const createCommands = require("./lib/core/createCommands");

// 写入版本信息
program.version(require("./package.json").version);
// 创建命令
createCommands();
// 启动 commander
program.parse(process.argv);