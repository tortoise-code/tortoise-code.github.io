#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '凡心的博客'

# 如果发布到 https://<USERNAME>.github.io
git remote add origin https://github.com/tortoise-code/tortoise-code.github.io.git


git config --global http.sslVerify "false"
git push -f origin main
# git push -f git@github.com:tortoise-code/tortoise-code.github.io.git master
cd -