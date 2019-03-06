#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist && rm -rf node_modules
yarn
# yarn webpack
## spin-common-libs Layer
mkdir -p dist/libs && cp -r src/ dist/libs
## spin node_modules Layer
mkdir -p dist/nodejs/node8 && cp -r node_modules dist/nodejs/node8
echo '✅  Setting up complete ✅'

echo 'ℹ️  Zipping files ℹ️'
cd dist
zip -r libs.zip libs
zip -r nodejs.zip nodejs
cd ..
echo '✅  Files zipped ✅'
 
echo 'ℹ️  Creating Serverless package ℹ️'
sls package
mv dist/libs.zip .serverless/libs.zip
mv dist/nodejs.zip .serverless/nodejs.zip
echo '✅  Serverless package created ✅'

echo 'ℹ️  Cleaning up ℹ️'
# rm -rf dist
echo '✅  Cleaned up ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy --package .serverless
echo '✅  Successfully deployed ✅'
