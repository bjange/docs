#!/usr/bin/env sh

set -e
# 生成静态文件
npm run build
cd docs/.vuepress/dist
# deploy to github
#echo 'test.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:bjange/docs.git
else
  msg='auto'
  githubUrl=https://bjange:${GITHUB_TOKEN}@github.com/bjange/docs.git
  git config --global user.name "Dylan"
  git config --global user.email "daixueen@hotmail.com"
fi

git init
git checkout -b gh-pages
git add -A
git commit -m "${msg}"
git push -f $githubUrl gh-pages:gh-pages # 推送到github

cd - 
rm -rf docs/.vuepress/dist
