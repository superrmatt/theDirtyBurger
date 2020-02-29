// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    let id = $(this).data("id");
    let newEaten = $(this).data("neweaten");
    console.log("id = " + id);
    console.log("new eaten state = " + newEaten);

    let newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      eaten: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
