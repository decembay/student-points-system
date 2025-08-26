const API_URL = "https://script.google.com/macros/s/AKfycbwwnfpheW1uOxsBKUI1yWAH3dcFZZTLr4ZHaMDfH3wHWdWPHwuFGtf8FhOlWUny5dKZ/exec";

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

