AddressBook.data = function() {

  var contact, contacts, clearContact, updateContactTable, initContactTable;

  contact = {
    id: ko.observable(),
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

  clearContact = function() {
    contact.id(null);
    contact.firstname(null);
    contact.lastname(null);
    contact.address(null);
    contact.city(null);
    contact.state(null);
    contact.zipcode(null);
    contact.phone(null);
    contact.email(null);
  };

  updateContactTable = function() {
    let data = JSON.parse(ko.toJSON(AddressBook.data.contacts()));
    console.log(data);
    $('#contactTable').bootstrapTable('load', data);
    $('#contactTable').bootstrapTable('uncheckAll');
  };

  initContactTable = function() {
    // convert observables to json but have to parse because ko returns it as a string
    let data = JSON.parse(ko.toJSON(AddressBook.data.contacts()));

    $('#contactTable').bootstrapTable({
      onCheck: function(row, el) {
        $("#newContact").addClass('disabled');
        // load row data into the contact observable i.e. the edit modal text boxes
        contact.firstname(row.firstname)
          .lastname(row.lastname)
          .address(row.address)
          .city(row.city)
          .state(row.state)
          .zipcode(row.zipcode)
          .phone(row.phone)
          .email(row.email)
          .id(row.id);
        console.log(contact);
        // a ballet of hiding and showing the right buttons for the time
        $('#editContact').show();
        $('#saveContact').hide();
        $('#updateContact').show();
        $('#deleteContact').show();
      },
      onUncheck: function(row, el) {
        // a ballet of hiding and showing the right buttons for the time
        $('#editContact').hide();
        $('#saveContact').show();
        $('#updateContact').hide();
        $('#deleteContact').hide();
        $("#newContact").removeClass('disabled');
        clearContact();
      },
      onUncheckAll: function() {
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
  };

  clearContact = function() {
    contact.id(null);
    contact.firstname(null);
    contact.lastname(null);
    contact.address(null);
    contact.city(null);
    contact.state(null);
    contact.zipcode(null);
    contact.phone(null);
    contact.email(null);
  };

  return {
    contact: contact,
    contacts: contacts,
    clearContact: clearContact,
    updateContactTable: updateContactTable,
    initContactTable: initContactTable
  }
}();