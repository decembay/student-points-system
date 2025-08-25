const API_URL = "https://script.google.com/macros/s/AKfycbxSQpHYmy9V4_ARnNB5BibOV6FobmuJxnV2_VR9KZhOQ4rFQkNw6CC11EIRTyvy0b2z/exec";

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