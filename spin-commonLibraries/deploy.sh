#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist
yarn
# yarn webpack
mkdir -p dist/commonLibraries && cp -r src/ dist/commonLibraries && cp -r node_modules dist/commonLibraries
echo '✅  Setting up complete ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy -v --stage $STAGE
echo '✅  Successfully deployed ✅'

echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'
