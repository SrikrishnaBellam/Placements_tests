document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.getElementById('input');
    const list_of_expense = document.getElementById('list_of_expense');
    let list_of_expenses = [];

    inputs.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;

        const expense = {
            amount: parseFloat(amount),
            category,
            date
        };

        list_of_expenses.push(expense);
        update_list_of_expenses();
        inputs.reset();
    });

    function update_list_of_expenses() {
        list_of_expense.innerHTML = '';
        list_of_expenses.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `${expense.date} - ${expense.category}: $${expense.amount}`;
            list_of_expense.appendChild(li);
        });
    }
});
