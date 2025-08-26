const API_URL = "https://script.google.com/macros/s/AKfycbz3WoKmFjphip5EHxvdcJREoUo1mtuOuJF7DxfH23GD2S_LaAeHBYBrvhqDLbpryaDD/exec";

// Get all students
async function loadStudents() {
  const res = await fetch(API_URL);
  return res.json(); // Expecting [["ID","Name","Class","Points"],...]
}

// Add or subtract points
async function addPoints(studentId, points) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ studentId: studentId, points: points })
  });
  return res.json();

}
