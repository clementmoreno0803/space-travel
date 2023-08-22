#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy V2 without total responsivness'
git push -f git@github.com:clementmoreno0803/space-travel.git main:gh-pages

cd -