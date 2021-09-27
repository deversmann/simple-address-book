AddressBook.Config = class Config {
  constructor(data) {
    this.protocol = data.protocol;
    this.hostname = data.hostname;
    this.port = data.port;
  }
  contactUrl = function(id) {
    return `${ this.protocol }://${ this.hostname }:${ this.port }/api/v1/contacts/${id}`
  }
  contactsUrl = function() {
    return `${ this.protocol }://${ this.hostname }:${ this.port }/api/v1/contacts`
  }
}

// I'm leaving this all here until I confirm the above works

// AddressBook.config = function() {
//   //declare module and global variables
//   var setConfig, protocol, hostname, port, base, apiVersion, contactsPath, contactsUrl, contactUrl, getConfig;

//   // Load config file data into config object for app use
//   setConfig = function(data) {
//     console.log(data);
//     protocol = data.protocol;
//     hostname = data.url;
//     port = data.port;
//     contactsUrl = `${ protocol }://${ hostname }:${ port }/${ base }/${ apiVersion }/${ contactsPath }`
//     return true
//   }

//   base = 'api',
//   apiVersion = 'v1',
//   contactsPath = 'contacts',

//   // urls for calling goaddr API
//   // contactsUrl = function() {
//   //   return `${ protocol }://${ hostname }:${ port }/${ base }/${ apiVersion }/${ contactsPath }`
//   // }
//   contactUrl = function(id) {
//     return `${ protocol }//${ hostname }:${ port }/${ base }/${ apiVersion }/${ contactsPath }/${ id }`
//   };

//   getConfig = function() {
//     return {
//       protocol: protocol,
//       hostname: hostname,
//       port: port,
//       base: base,
//       apiVersion: apiVersion,
//       contactsPath: contactsPath,
//       contactUrl: contactUrl,
//       contactsUrl: contactsUrl
//     }
//   }

//   return {
//     contactsUrl: contactsUrl,
//     contactUrl: contactUrl,
//     setConfig: setConfig,
//     getConfig: getConfig
//   }
// }();