const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintFieldset = document.getElementById('complaints-group');
const complaintGroup = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const otherComplaint = document.getElementById('other-complaint');
const complaintDescription = document.getElementById("complain-description");
const solutionsFieldset = document.getElementById('solutions-group');
const solutionsGroup = document.querySelectorAll('#solutions-group input[type="radio"]');
const otherSolution = document.getElementById('other-solution');
const solutionDescription = document.getElementById("solution-description");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");


function validateForm() {
    const formResponse = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const orderNoRegex = /^2024\d{6}$/;
    const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
    const quantityRegex = /^[1-9]\d*$/;

    formResponse['full-name'] = fullName.value.trim() !== "";
    formResponse['email'] = emailRegex.test(email.value.trim());
    formResponse['order-no'] = orderNoRegex.test(orderNo.value.trim());
    formResponse['product-code'] = productCodeRegex.test(productCode.value.trim());
    formResponse['quantity'] = quantityRegex.test(quantity.value.trim());
    formResponse['complaints-group'] = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked').length > 0;
    formResponse['complaint-description'] = !otherComplaint.checked || complaintDescription.value.trim().length >= 20;
    formResponse['solutions-group'] = document.querySelector('#solutions-group input[type="radio"]:checked').length > 0;
    formResponse['solution-description'] = !otherSolution.checked || solutionDescription.value.trim().length >= 20;

    return formResponse;
}



function isValid(validatedResponse) {

    return Object.values(validatedResponse).every(Boolean);
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const validatedResponse = validateForm();
    const validResponses = isValid(validatedResponse);

    if (!validResponses) {
        for (const [key, value] of Object.entries(validatedResponse)) {
            const element = document.getElementById(key);

            if (element) {
                element.style.borderColor = value ? "green" : "red";
            }
        }
    }
});