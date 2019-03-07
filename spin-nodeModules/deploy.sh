#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist & rm -rf node_modules
yarn
mkdir -p dist/nodejs/node8 && cp -r node_modules dist/nodejs/node8
echo '✅  Setting up complete ✅'

echo 'ℹ️  Deploying ℹ️'
sls deploy -v --stage $STAGE
echo '✅  Successfully deployed ✅'

echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'