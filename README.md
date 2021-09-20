# simple-address-book

This front end is designed to work with the goaddr API here: https://github.com/deversmann/goaddr

## Requirements
Goaddr API running somewhere your front end can access it (there is a container image! Use it, it's awesome).  
This Repo and some customization of the `addressbook.config.js` file.
A basic web server.

## Instructions
This app is just written in Javascript with some libraries, no build tools or whatever.
Update `js/addressbook.config.js` -> the section below will need values that align with how and where you deployed the goaddr API.  I recommend using Ansible to template the file for automating deployment.
```javascript
  protocol = 'http',
  hostname = 'localhost',
  port = '8080',
  base = 'api',
  apiVersion = 'v1',
  contactsPath = 'contacts',
```  

The application will build the api calls it needs from this information, check it twice.  

### General Musings
I've broken this application up into four JavaScript modules.  I was originally going to try to use VueJS for this but honestly I hate not knowing what's going on and these magical "learn a whole new language to avoid just learning JavaScript" frameworks just seem to obfuscate what is actually happening.

`addressbook.js` handles the initial settings of the application front end  

`addressbook.config.js` contains the configuration so the front end nows how to make the API calls to the back end.  This file is excellent for templating with Ansible to deploy (will provide link to Ansible Playbook here once that is done).  

`addressbook.data.js` contains the methods for updating the contacts and tables  

`adressbook.data.utilties.js` contains the methods for calling the goaddr REST API.  
  