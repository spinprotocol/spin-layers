#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist && rm -rf node_modules
# export PARENT_DIR=../../
# export DEPENDENCIES_DEST=./
# node ../scripts/package-json-merger.js
npm install
# yarn webpack
## spin-common-libs Layer
mkdir -p dist/commonLibs/libs && cp -r src/ dist/commonLibs/libs && cp -r node_modules dist/commonLibs/libs
## spin node_modules Layer
mkdir -p dist/nodeDependencies/nodejs/node8 && cp -r node_modules dist/nodeDependencies/nodejs/node8
echo '✅  Setting up complete ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy -v --stage $STAGE
echo '✅  Successfully deployed ✅'

echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'
