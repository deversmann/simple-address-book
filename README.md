# simple-address-book

This front end is designed to work with the goaddr API here: https://github.com/deversmann/goaddr

## Requirements
Goaddr API running somewhere your front end can access it (there is a container image! Use it, it's awesome).
This Repo and some customization of the AddressBook.config.js file.

## Instructions
Update js/addressbook.config.js -> the section below will need values that align with how and where you deployed the goaddr API.
```
  protocol = 'http',
  hostname = 'localhost',
  port = '8080',
  base = 'api',
  apiVersion = 'v1',
  contactsPath = 'contacts',
  ```
  The application will build the api calls it needs from this information.  

### General Musings
I've broken this application up into four JavaScript modules.  I was originally going to try to use VueJS for this but honestly I hate not knowing what's going on and these magical "learn a whole new language to avoid just learning JavaScript" frameworks just do not work for me.

addressbook.js handles the initial settings of the application front end
addressbook.config.js contains the configuration so the front end nows how to make the API calls to the back end.  This file is excellent for templating with Ansible to deploy (will provide link to Ansible Playbook here once that is done).
addressbook.data.js contains the methods for updating the contacts and tables
adressbook.data.utilties.js contains the methods for calling the goaddr REST API.  
  