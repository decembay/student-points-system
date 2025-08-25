/**
 * ========= Student Points System =========
 * Backend code for Google Apps Script
 * Uses Google Sheets as database
 */

// === SETTINGS ===
const SHEET_NAME = "Points";  // Your sheet tab name

// === MAIN ENTRYPOINT ===
function doGet(e) {
  let page = e.parameter.page || "index"; // default page
  return HtmlService.createTemplateFromFile(page).evaluate()
    .setTitle("Student Points System")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// === HELPER: include CSS/JS partials ===
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// === SHEET GETTER ===
function getSheet() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
}

// === BACKEND FUNCTIONS ===
function getAllStudents() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  let students = [];

  for (let i = 1; i < data.length; i++) { // skip header
    students.push({
      StudentID: data[i][0],
      Name: data[i][1],
      Class: data[i][2],
      Points: data[i][3]
    });
  }
  return students;
}

function getStudentById(id) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      return {
        StudentID: data[i][0],
        Name: data[i][1],
        Class: data[i][2],
        Points: data[i][3]
      };
    }
  }
  return null;
}

function updateStudentPoints(id, change) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      let newPoints = data[i][3] + change;
      sheet.getRange(i + 1, 4).setValue(newPoints); // col D = Points
      return newPoints;
    }
  }
  return null;
}