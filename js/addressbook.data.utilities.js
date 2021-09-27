AddressBook.data.utilities = function() {
  // declare variables
  var createContact, addContact, getContacts, updateContact, removeContact, initConfig, setConfig;

  // module methods
  createContact = function() {
    return new Promise((resolve, reject) => {
      let data = ko.toJSON(AddressBook.data.contact);
// need to figure out how to update the contacts array and then refresh
      $.post(AddressBook.config.contactsUrl(), data)
        .done((response) => {
          // add the contact to the contacts array 
          AddressBook.data.contacts.push({
            id: response.id,
            firstname: AddressBook.data.contact.firstname(), 
            lastname: AddressBook.data.contact.lastname(),
            address: AddressBook.data.contact.address(),
            city: AddressBook.data.contact.city(),
            state: AddressBook.data.contact.state(),
            zipcode: AddressBook.data.contact.zipcode(),
            phone: AddressBook.data.contact.phone(),
            email: AddressBook.data.contact.email()
        });
          return resolve(response)
        })
        .fail((err) => {
          return reject(err)
        });
    });
  }
  // global methods 

  addContact = function () {
    createContact()
      .then((response) => {
        console.log(response);

        // need to update table here 
        AddressBook.data.updateContactTable();

        // clear the contact for next use 
        AddressBook.data.clearContact();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  getContacts = function() {
    return new Promise((resolve, reject) => {
      console.log(AddressBook.config.contactsUrl());
      $.get(AddressBook.config.contactsUrl())
        .done((response) => {
          console.log(response);
          response.contacts.forEach((element, index, array) => {
            AddressBook.data.contacts.push({
              id: element.id,
              firstname: element.firstname, 
              lastname: element.lastname,
              address: element.address,
              city: element.city,
              state: element.state,
              zipcode: element.zipcode,
              phone: element.phone,
              email: element.email
            });
          });
          return resolve(response)
        })
        .fail((err) => {
          return reject(err)
        })
    });
  }

  updateContact = function() {
    return new Promise((resolve, reject) => {
      let data = ko.toJSON(AddressBook.data.contact);

      $.ajax({
        url: AddressBook.config.contactUrl(AddressBook.data.contact.id),
        type: 'PUT',
        dataType: 'json',
        data: data
      })
      .done((response) => {
        let updatedContact = ko.utils.arrayFirst(AddressBook.data.contacts(), function(currentContact) {
          return currentContact.id == AddressBook.data.contact.id;
        });
        if (updatedContact) {
          console.log(updatedContact);
          AddressBook.data.contacts.replace(updatedContact, AddressBook.data.contact)
          AddressBook.data.updateContactTable();
        }
        resolve(response);
      })
      .fail((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  removeContact = function() {
    let data = ko.toJSON(AddressBook.data.contact);

    $.ajax({
      url: AddressBook.config.contactUrl(AddressBook.data.contact.id),
      type: 'DELETE',
    })
    .done((response) => {
      let deletedContact = ko.utils.arrayFirst(AddressBook.data.contacts(), function(currentContact) {
        return currentContact.id == AddressBook.data.contact.id;
      });
      if (deletedContact) {
        AddressBook.data.contacts.remove(deletedContact);
        AddressBook.data.updateContactTable();
      }
    })
    .fail((err) => {
      console.log(err);
    });
  }

  return {
    add: addContact,
    update: updateContact,
    delete: removeContact,
    getContacts: getContacts
  }

}();