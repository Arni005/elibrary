
   function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 

    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
// login.js
//document.getElementById("loginForm").addEventListener("submit", async (event) => {
  //event.preventDefault();
  //const formData = new FormData(event.target);
  /*const response = await fetch("https://127.0.0.1:8000/api/students/", {
      method: "POST",
      body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
      }),
      headers: {
          "Content-Type": "application/json",
      },
  });
  const result = await response.json();
  console.log(result);
});


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}*/
//const csrfToken = getCookie('csrftoken');  // Get CSRF token from cookie

/*fetch('http://127.0.0.1:8000/api/students/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken  // Include CSRF token in header
    },
   // body: JSON.stringify({
       // full_name:full_name,
       // email:email,
       // password:password,
   // }),
//})
   // .then(response => {
       // if (response.ok) {
       //     return response.json();
       // }
      //  throw new Error('Network response was not ok');
    //})
    //.then(data => console.log(data))
    //.catch(error => console.error('Error:', error));*/

/*
 // Function to get CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const trimmedCookie = cookie.trim();
            if (trimmedCookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(trimmedCookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Login form submission
document.getElementById("loginForm1").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const csrfToken = getCookie('csrftoken'); // Get CSRF token
        const response = await fetch("/api/students/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password"),
            }),
        });

        if (!response.ok) {
            throw new Error(`Login failed: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Login Successful:", result);
        // Redirect or update UI
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed. Please try again.");
    }
});

// Data submission (e.g., registration)
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const full_name = document.getElementById("full_Name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const csrfToken = getCookie('csrftoken');
        const response = await fetch("http://127.0.0.1:8000/api/students/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({ full_name, email, password }),
        });

        if (!response.ok) {
            throw new Error(`Registration failed: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Registration Successful:", data);
        // Redirect or update UI
    } catch (error) {
        console.error("Error:", error);
        alert("Registration failed. Please try again.");
    }
});
   */
