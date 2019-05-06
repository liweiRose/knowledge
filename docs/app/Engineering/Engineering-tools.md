# Tools

## node

[Node.js](https://nodejs.org/en/) 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

### 安装

- [官网下载](https://nodejs.org/en/download/)
- windows 和 macOS 安装均可直接使用下载链接安装
- [具体安装步骤](http://www.runoob.com/nodejs/nodejs-install-setup.html)
- 保持 node 版本在 v8.3 以上

> 注：由于 node 是比较普遍的工具，具体安装步骤就不展开描述了，参见具体安装步骤即可；另 npm 已经在 Node.js 安装的时候顺带装好了。

## yarn

Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。简单的来说就是具有 npm 功能但是比 npm 更快更好用。

### 安装

> 仅以 macOS 为例，Windows 参考标注。

```shell
  # mac 下安装 利用 Homebrew 包管理工具 具体安装可参见下文
  MacBook-Pro:~ mr.lemon$: brew install yarn

  # 由于 Homebrew 会自动为你安装，若不需要安装node，使用以下命令
  MacBook-Pro:~ mr.lemon$: brew install yarn --without-node

  # 查看版本
  MacBook-Pro:~ mr.lemon$: yarn --version
  1.12.3

  # 至此已经安装完成
```

###  相关命令

```

$ yarn                             安装项目的全部依赖
$ yarn init                        初始化一个新项目类似 npm init
$ yarn add [package]               添加依赖包
$ yarn add [package]@[version]     添加指定版本依赖包
$ yarn upgrade [package]           升级依赖包
$ yarn upgrade [package]@[version] 升级指定版本依赖包
$ yarn remove [package]            移除依赖包

```

> 注：windows 安装请参考 [此处](https://yarn.bootcss.com/docs/install/#windows-stable)

## nvm

nvm 是 Mac 下的 node 管理工具, 简单来说就是在你安装了很多 node 版本时，方便你在不同 node 版本之间切换使用。如果需要管理 Windows 下的 node，官方推荐使用 [nvmw](https://github.com/hakobera/nvmw) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)。

### 安装

```{r, engine='bash', code_block_name}

# 连接资源 (curl命令是一个利用URL规则在命令行下工作的文件传输工具)
MacBook-Pro:~ mr.lemon$: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

# 配置环境变量 具体参加上文 配置内容
# This loads nvm
export NVM_DIR="/Users/mr.lemon/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# 查看版本
MacBook-Pro:~ mr.lemon$: nvm --version
0.25.2

# 至此安装完毕
```

### 相关命令

```

$ nvm ls                查看本地安装的node版本列表
$ nvm use xxx           使用指定版本的node 
$ nvm ls-remote         查看所有的node可用版本
$ nvm install xxx       下载你想要的版本
$ nvm alias default xxx 每次启动终端都使用该版本的node 

```

> 注：windows 直接下载 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)窗口式安装即可。

## nrm

nrm 是一个 npm 源管理器，允许你快速地切换 npm 源。

### 常见源：

- [npm](https://www.npmjs.com)
- [cnpm](https://cnpmjs.org/)
- [taobao](http://npm.taobao.org/)

### 安装：

```{r, engine='bash', code_block_name}

# 全局安装
MacBook-Pro:~ mr.lemon$: npm install -g nrm

# 查看版本
MacBook-Pro:~ mr.lemon$: nrm --version
1.0.2

# 查看源列表
MacBook-Pro:~ mr.lemon$: nrm ls
* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/

```

###  相关命令：

```

  $ nrm ls                           查看源列表
  $ nrm use taobao                   使用指定源
  $ nrm add  <registry> <url> [home] 添加源
  $ nrm del <registry>               删除源
  $ nrm test npm                     测试npm源速度

```

> 注: 以上工具是日常开发中比较常用工具，不是必须要安装的，但是还是建议安装。

## Homebrew

[Homebrew](https://brew.sh/index_zh-cn) 是 macOS [缺失的](https://formulae.brew.sh/formula/)软件包的管理器, 可以让你安装和更新程序变得更方便，目前是 OS X 系统最受欢迎的包管理工具。

### 安装

```shell
  # 连接资源 并 安装
  # Homebrew安装的程序存放目录：'/usr/local/Cellar'
  MacBook-Pro:~ mr.lemon$: /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  # 查看版本
  MacBook-Pro:~ mr.lemon$: brew --version
  Homebrew 1.8.4

```

### 相关命令

```

$ brew search [package]      搜索包
$ brew install [package]     安装包
$ brew uninstall [package]   卸载包
$ brew info [package]        查看包信息
$ brew list                  查看本地安装包列表
$ brew upgrade [package]     更新包

```

## MAC 下新建用户级环境变量

```
  用touch 命令创建一个文件，并用open 命令打开文件：

  # 新建文件
  $: touch ~/.bash_profile

  # 打开文件
  $: open -t ~/.bash_profile

  # 更新资源
  $: source  ~/.bash_profile
  $: echo $PATH

  1./etc/profile  ( 全局（公有）配置，登录时读取该文件 )

  2./etc/bashrc （ 一般在这个文件中添加系统级环境变量 )

  3.~/.bash_profile （ 一般在这个文件中添加用户级环境变量 ）

  默认：

  PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
  export PATH

```
