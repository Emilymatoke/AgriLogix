let income = 0;
let expenses = 0;
document.getElementById("addBtn").onclick = function () {
    document.getElementById("form").classList.toggle("hidden");

}

function saveRecord() {
    let amount = parseInt(document.getElementById("amount").value);
    let type = document.getElementById("type").value;
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    if (type === income) {
        income += amount;
    } else{
        expenses += amount;
    }
    document.getElementById("income").innerText = "KES " + income;
    document.getElementById("expenses").innerText = "KES " + expenses;
    document.getElementById("profit").innerText = "KES " + (income - expenses);
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("form").classList.add("hidden");
}