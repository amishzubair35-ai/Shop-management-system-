
// Dukan Hisab Pro

let sales = Number(localStorage.getItem("sales")) || 0;
let expenses = Number(localStorage.getItem("expenses")) || 0;
let udhaar = Number(localStorage.getItem("udhaar")) || 0;

function updateDashboard() {
  document.getElementById("sales").textContent =
    "Rs. " + sales.toLocaleString("en-PK");

  document.getElementById("expenses").textContent =
    "Rs. " + expenses.toLocaleString("en-PK");

  document.getElementById("udhaar").textContent =
    "Rs. " + udhaar.toLocaleString("en-PK");

  localStorage.setItem("sales", sales);
  localStorage.setItem("expenses", expenses);
  localStorage.setItem("udhaar", udhaar);
}

function addSale() {
  const amount = Number(
    document.getElementById("saleAmount").value
  );

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid sale amount");
    return;
  }

  sales += amount;
  document.getElementById("saleAmount").value = "";
  updateDashboard();
  alert("Sale saved successfully!");
}

function addExpense() {
  const amount = Number(
    document.getElementById("expenseAmount").value
  );

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid expense amount");
    return;
  }

  expenses += amount;
  document.getElementById("expenseAmount").value = "";
  updateDashboard();
  alert("Expense saved successfully!");
}

function addUdhaar() {
  const amount = Number(
    document.getElementById("udhaarAmount").value
  );

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid udhaar amount");
    return;
  }

  udhaar += amount;
  document.getElementById("udhaarAmount").value = "";
  updateDashboard();
  alert("Udhaar saved successfully!");
}

updateDashboard();
