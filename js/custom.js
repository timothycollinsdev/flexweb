function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function(n, i) {
    indexed_array[n["name"]] = n["value"];
  });

  return indexed_array;
}
// javascript Animate onscroll Start
$(document).ready(function() {
  if (screen.width > 1024) {
    AOS.init({
      easing: "ease-in-out-sine",
      once: true
    });
  }

  $("#btnSubmit").click(e => {
    e.preventDefault();
    let values = getFormData($("#contactForm"));
    if (!values.email || !values.message) {
      return;
    }

    fetch("https://flexweb.glitch.me/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        console.log("ok");
        alert("Thank you for contacting us. We'll contact you soon.");
      })
      .catch(() => {
        alert(
          "There's some issue with submitting your query. Please contact us directly at support@flexweb.in"
        );
      });
  });
});
new IntersectionObserver(function(e, o) {
  if (e[0].intersectionRatio > 0) {
    document.documentElement.removeAttribute("class");
  } else {
    document.documentElement.setAttribute("class", "stuck");
  }
}).observe(document.querySelector(".trigger"));
