AddressBook.data = function() {

  var contact, contacts;

  contact = {
    firstname: ko.observable(),
    lastname: ko.observable(),
    address: ko.observable(),
    city: ko.observable(),
    state: ko.observable(),
    zipcode: ko.observable(),
    phone: ko.observable(),
    email: ko.observable()
  };

  contacts = ko.observableArray();

  return {
    contact: contact,
    contacts: contacts
  }
}();