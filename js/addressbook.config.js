AddressBook.config = {
  // configure these for your env or use Ansible and overwrite this with a template
  protocol: 'http',
  hostname: 'localhost',
  port: '8081',
  base: 'api',
  apiVersion: 'v1',
  contactsPath: 'contacts',
  // urls, dont' touch these
  contactsUrl: `http://${ hostname }:${ port }/${ base }/${ apiVersion }/${ contactsPath }`,
  contactUrl: function(id) {
    return `http://${ hostname }:${ port }/${ base }/${ apiVersion }/${ contactsPath }/${ id }`
  }
}