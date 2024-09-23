document.getElementById('major').addEventListener('change', function() {
    var major = document.getElementById('major').value;
    var skillField = document.getElementById('skill');
    
    if (major === "Hệ thống") {
        skillField.value = "Phân tích & Thiết kế";
    } else if (major === "Phần mềm") {
        skillField.value = "Lập trình";
    } else if (major === "Mạng máy tính") {
        skillField.value = "Quản lý mạng";
    }
});

function validateForm() {
    var studentID = document.getElementById('studentID').value;
    var fullName = document.getElementById('fullName').value;
    var age = document.getElementById('age').value;
    var resultField = document.getElementById('result');

    var hasError = false;

    // Clear previous error messages
    clearErrors();

    // Validate student ID (length 10)
    if (studentID.length !== 10) {
        document.getElementById('studentIDError').textContent = "Mã sinh viên phải có độ dài 10 ký tự.";
        hasError = true;
    }

    // Validate full name (non-empty, max length 30)
    if (fullName === "" || fullName.length > 30) {
        document.getElementById('fullNameError').textContent = "Họ và tên không được bỏ trống và phải ít hơn 30 ký tự.";
        hasError = true;
    }

    // Validate age (>= 18)
    if (age < 18) {
        document.getElementById('ageError').textContent = "Tuổi phải từ 18 trở lên.";
        hasError = true;
    }

    // Check selected languages
    var selectedLanguages = [];
    if (document.getElementById('english').checked) {
        selectedLanguages.push("Anh");
    }
    if (document.getElementById('french').checked) {
        selectedLanguages.push("Pháp");
    }
    if (document.getElementById('japanese').checked) {
        selectedLanguages.push("Nhật");
    }

    // Display error if no language is selected
    if (selectedLanguages.length === 0) {
        document.getElementById('languageError').textContent = "Bạn phải chọn ít nhất một ngoại ngữ.";
        hasError = true;
    }

    // Display the result
    if (!hasError) {
        resultField.textContent = "Bạn đã đăng ký thành công";
    }
}

function clearErrors() {
    document.getElementById('studentIDError').textContent = "";
    document.getElementById('fullNameError').textContent = "";
    document.getElementById('ageError').textContent = "";
    document.getElementById('languageError').textContent = "";
    document.getElementById('result').textContent = "";
}
