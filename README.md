# simple-address-book

This front end is designed to work with the goaddr API here: https://github.com/deversmann/goaddr

## Requirements
- [goaddr](https://github.com/deversmann/goaddr) API running somewhere your front end can access it (there is a [container image](https://quay.io/deversmann/goaddr)! Use it, it's awesome).  
- This repo and some customization of the `config.default.json` file.
- A basic web server.

## Instructions
This app is just written in Javascript with some libraries, no build tools or whatever.
Update `config.default.json` with values that align with how and where you deployed the goaddr API.
```json
{
  "protocol": "http",
  "hostname": "localhost",
  "port": "8081"
}
```  

The application will build the api calls it needs from this information, check it twice.  

## Container instructions
The project includes a `Containerfile` that can be used to build a container of the application.  To build the container locally:
```bash
podman build --tag localhost/sab .
```
The resulting container could be run using:
```bash
podman run -d --rm \
  -e SAB_PROTOCOL="http" \
  -e SAB_HOSTNAME="192.0.2.42" \
  -e SAB_PORT=8090 \
  -p 8080:80 --name sab localhost/sab
```

The `Containerfile` builds a container with Apache running on port 80 and the app files in the root html directory.  It will overwrite the config file at runtime with the values contained in the following environment vars:

| config.default.json value | env var name | default value | notes |
|---|---|---|---|
|`protocol`|`SAB_PROTOCOL`|`http`|protocol to connect to the REST service|
|`hostname`|`SAB_HOSTNAME`|`localhost`|hostname where the service is hosted|
|`port`|`SAB_PORT`|`8080`|port of the service|


## General Musings
I've broken this application up into four JavaScript modules.  I was originally going to try to use VueJS for this but honestly I hate not knowing what's going on and these magical "learn a whole new language to avoid just learning JavaScript" frameworks just seem to obfuscate what is actually happening.

- `config.default.json` contains the configuration so the front end nows how to make the API calls to the back end.  This file is excellent for templating with Ansible to deploy (will provide link to Ansible Playbook here once that is done).  
- `addressbook.js` handles the initial settings of the application front end  
- `addressbook.data.js` contains the methods for updating the contacts and tables  
- `adressbook.data.utilties.js` contains the methods for calling the goaddr REST API.  
  
