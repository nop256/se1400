document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("sendmail.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showPopup("Message sent successfully!");
          form.reset();
        } else {
          showPopup("Message failed to send.");
        }
      })
      .catch(() => {
        showPopup("Something went wrong.");
      });
  });

  function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);
  }
