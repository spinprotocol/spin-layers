#!/bin/bash

echo 'ℹ️  Setting up ℹ️'
rm -rf dist & rm -rf node_modules
yarn
mkdir -p dist/nodejs && cp -r node_modules dist/nodejs/node8
echo '✅  Setting up complete ✅'


echo 'ℹ️  Copying files to /opt ℹ️'
sudo cp -r dist/nodejs /opt
echo '✅  Copied fules to /opt ✅'


echo 'ℹ️  Cleaning up ℹ️'
rm -rf dist
echo '✅  Cleaned up ✅'
