function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.getDetails = function() {
  return `${this.location} - Landmark: ${this.landmark}, Visited in ${this.timeOfYear}. Notes: ${this.notes}`;
};

function Task(description) {
  this.description = description;
  this.done = false;
}

Task.prototype.toggleDone = function() {
  this.done = !this.done;
};

document.addEventListener("DOMContentLoaded", function() {
  const placeForm = document.getElementById("place-form");
  const placesList = document.getElementById("places-list");
  const taskForm = document.getElementById("task-form");
  const tasksList = document.getElementById("tasks-list");

  placeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const landmark = document.getElementById("landmark").value;
    const timeOfYear = document.getElementById("timeOfYear").value;
    const notes = document.getElementById("notes").value;

    const newPlace = new Place(location, landmark, timeOfYear, notes);

    const li = document.createElement("li");
    li.textContent = newPlace.getDetails();
    placesList.appendChild(li);

    placeForm.reset();
  });

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const description = document.getElementById ("task").value;
    const newTask = new Task(description);

    const li = document.createElement("li");
    li.textContent = newTask.description;
    li.style.cursor = "pointer";

    li.addEventListener("click", function() {
      newTask.toggleDone();
      if (newTask.done) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    li.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      li.remove();
    });

    tasksList.appendChild(li);
    taskForm.reset();
  });
});
