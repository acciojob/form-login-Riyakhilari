function getFormvalue() {
  // Get the form elements
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");

  // Get the entered values
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Concatenate the full name
  const fullName = firstName + " " + lastName;

  // Display the full name in an alert
  alert(fullName);
}