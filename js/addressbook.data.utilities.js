AddressBook.data.utilities = function() {
  // declare variables
  var createContact, addContact, updateContact, removeContact;

  // module methods
  createContact = function() {
    return new Promise((resolve, reject) => {
      let data = ko.toJSON(AddressBook.data.contact);

      $.post(AddressBook.config.postUrl, data)
        .done((response) => {
          clearContact();
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
        // add the contact to the contacts array 
        AddressBook.data.contacts.push({
          firstname: AddressBook.data.contact.firstname(), 
          lastname: AddressBook.data.contact.lastname(),
          address: AddressBook.data.contact.address(),
          city: AddressBook.data.contact.city(),
          state: AddressBook.data.contact.state(),
          zipcode: AddressBook.data.contact.zipcode(),
          phone: AddressBook.data.contact.phone(),
          email: AddressBook.data.contact.email()
        });
        // need to update table here 
      })
      .catch((err) => {
        console.log(err);
      })
      

  };
  return {
    add: addContact
  }

}();