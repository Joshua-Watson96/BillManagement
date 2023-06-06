const deleteBtn = document.querySelectorAll(".delete-button");

deleteBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        var element = event.target;
        var bill = element.getAttribute("data-id");
        console.log(bill);
        deleteBills(bill);
    });
});

async function deleteBills(id) {
    const response = await fetch(`/api/bills/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/bills');
    } else {
        alert('Failed to delete bill');
    }
}
