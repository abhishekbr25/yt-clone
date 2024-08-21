 

function getAllUsers() {
  fetch("http://localhost:3001/api/user")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   method-1
  const formdata = new FormData(signupForm);
  //   const bodyObj = {
  //     username: formdata.get("username"),
  //     password: formdata.get("password"),
  //   };
  // method-2
  const data = Object.fromEntries(formdata.entries()); //convert form data into  JS object
  //  console.log(data);

  fetch("http://localhost:3001/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Important for sending cookies
    body: JSON.stringify(data), //send file in json
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const logindata = new FormData(loginForm);
  const loginObj = Object.fromEntries(logindata.entries());
  fetch("https://localhost:3001/api/auth/login", {
    method: "Post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginObj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

function getUserDetail() {
  fetch("http://localhost:3001/api/user/test", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
