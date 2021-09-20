/* Module for Address Book application */
var AddressBook = function () {



  var init = function () {
    ko.applyBindings(AddressBook.data);
    AddressBook.data.utilities.getContacts()
    .then((res) => {
      console.log(res);
      AddressBook.data.initContactTable();
    })
    .catch((err) => {
      console.log(err);
    })

    // set initial state of buttons for editing and whatnot
    $('#editContact').hide();
    $('#saveContact').show();
    $('#updateContact').hide();
    $('#deleteContact').hide();
  };

  /* execute the init function when the DOM is ready */
  $(init);
  
  return {
    /* add members that will be exposed publicly */
    init: init
  };
}();