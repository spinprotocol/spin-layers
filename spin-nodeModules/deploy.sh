#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist & rm -rf node_modules
yarn
mkdir -p dist/nodejs && cp -r node_modules dist/nodejs/node8
echo '✅  Setting up complete ✅'

echo 'ℹ️  Zipping files ℹ️'
cd dist
zip -r celebNodeModules.zip nodejs
cd ..
echo '✅  Files zipped ✅'
 
echo 'ℹ️  Creating Serverless package ℹ️'
sls package
mv dist/celebNodeModules.zip .serverless/celebNodeModules.zip
echo '✅  Serverless package created ✅'

echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy --package .serverless
echo '✅  Successfully deployed ✅'
