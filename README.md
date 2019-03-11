# SPIN Layers

### Deployment

* In order to deploy spin-common layers, run the following command
```bash
  $ STAGE=<stage_name> npm run deploy-spin-common-libs

  # example for production stage
  $ STAGE=prod npm run deploy-spin-common-libs
```
* In order to deploy on local for testing purpose
```bash
  $ npm run local
```

* Before deploying Layers service be sure that this repository has already been added as a submodule to https://github.com/spinprotocol/spin-celeb-services project on your local.
In root folder of https://github.com/spinprotocol/spin-celeb-services project
```bash
  $ git submodule add https://github.com/spinprotocol/spin-layers.git
```