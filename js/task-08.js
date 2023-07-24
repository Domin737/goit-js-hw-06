const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  // Zapobiegaj domyślnej akcji formularza
  event.preventDefault();

  const { email, password } = event.target.elements;

  // Sprawdź, czy oba pola są wypełnione
  if (!email.value || !password.value) {
    alert("Wszystkie pola powinny zostać wypełnione!");
    return;
  }

  // Utwórz obiekt z wartościami formularza
  const formData = {
    email: email.value,
    password: password.value,
  };

  // Wypisz obiekt w konsoli
  console.log(formData);

  // Wyczyść formularz
  event.target.reset();
});
