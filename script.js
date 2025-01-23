function getFormvalue() {
      const firstNameInput = document.getElementById("firstName");
      const lastNameInput = document.getElementById("lastName");

      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;

      const fullName = firstName + " " + lastName;

      alert(fullName);
    }