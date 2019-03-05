#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist
yarn
# yarn webpack
mkdir -p dist/commonLibraries && cp -r src/ dist/commonLibraries && cp -r node_modules dist/commonLibraries
echo '✅  Setting up complete ✅'

echo 'ℹ️  Zipping files ℹ️'
cd dist
zip -r commonLibraries.zip commonLibraries
cd ..
echo '✅  Files zipped ✅'
 
echo 'ℹ️  Creating Serverless package ℹ️'
sls package
mv dist/commonLibraries.zip .serverless/commonLibraries.zip
echo '✅  Serverless package created ✅'

echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy --package .serverless
echo '✅  Successfully deployed ✅'
