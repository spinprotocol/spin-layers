#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist
yarn
# yarn webpack
mkdir -p dist/commonLibraries && cp -r src/ dist/commonLibraries && cp -r node_modules dist/commonLibraries
echo '✅  Setting up complete ✅'


echo 'ℹ️  Copying files to /opt ℹ️'
sudo cp -r dist/commonLibraries /opt
echo '✅  Copied fules to /opt ✅'


echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'
