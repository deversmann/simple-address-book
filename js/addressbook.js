/* Module for Address Book application */
var AddressBook = function () {
  var config, init;


  init = function () {
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
  document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM is ready");
    let response = await fetch('config.default.json');
    let data = await response.json();
    AddressBook.config = new AddressBook.Config(data);
    init();
  })
  // $( document ).ready(async () => {
  //   console.log("DOM is ready");
  //   let data = await $.get('config.default.json')
  //   config = new AddressBook.config(response);
  //   console.log(config);
  // });
  
  return {
    /* add members that will be exposed publicly */
    init: init,
    config: config
  };
}();