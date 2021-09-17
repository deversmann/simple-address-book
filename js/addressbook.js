/* Module for Address Book application */
var AddressBook = function () {

  /* add members here */
  var contact = {
    firstname: ko.observable(),
    lastname: ko.observable(),
    address: ko.observable(),
    city: ko.observable(),
    state: ko.observable(),
    zipcode: ko.observable(),
    phone: ko.observable(),
    email: ko.observable(),
  };
  
  var contacts = ko.observableArray();

  var addContact = function () {
    console.log("Adding new contact with name: " + contact.firstname() +" and phone number: " + contact.phone());
    createContact();
    // add the contact to the contacts array 
    contacts.push({
      firstname: contact.firstname(), 
      lastname: contact.lastname(),
      address: contact.address(),
      city: contact.city(),
      state: contact.state(),
      zipcode: contact.zipcode(),
      phone: contact.phone(),
      email: contact.email()
    });

  };

  var clearContact = function() {
    contact.firstname(null);
    contact.lastname(null);
    contact.address(null);
    contact.city(null);
    contact.state(null);
    contact.zipcode(null);
    contact.phone(null);
    contact.email(null);
  };

  var createContact = function() {
    let data = ko.toJSON(contact);
    console.log(contact);

    $.post("http://localhost:8081/api/v1/contacts", data, function(response) {
      console.log(response);
      clearContact();
    })
  }

  var getContacts = function() {
    $.get("http://localhost:8081/api/v1/contacts", function(response) {
      console.log(response);
      response.contacts.forEach((element, index, array) => {
        contacts.push({
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
      var data = JSON.parse(ko.toJSON(contacts));
      $('#contactTable').bootstrapTable({
        onCheck: function(row, el) {
          console.log(row);
          $("#newContact").addClass('disabled');
          contact.firstname(row.firstname)
            .lastname(row.lastname)
            .address(row.address)
            .city(row.city)
            .state(row.state)
            .zipcode(row.zipcode)
            .phone(row.phone)
            .email(row.email)

          $('#editContact').show();
          $('#saveContact').hide();
          $('#updateContact').show();
          $('#deleteContact').show();
        },
        onUncheck: function(row, el) {
          $('#editContact').hide();
          $('#saveContact').show();
          $('#updateContact').hide();
          $('#deleteContact').hide();
          $("#newContact").removeClass('disabled');
          clearContact();
        },
        data: data
      })
      $('#contactTable').bootstrapTable('uncheckAll');

    });
  }

  var init = function () {
    ko.applyBindings(AddressBook);
    $('#editContact').hide();
    $('#saveContact').show();
    $('#updateContact').hide();
    $('#deleteContact').hide();
    getContacts();
    

  };

  /* execute the init function when the DOM is ready */
  $(init);
  
  return {
    /* add members that will be exposed publicly */
    contact: contact,
    contacts: contacts,
    addContact: addContact
  };
}();