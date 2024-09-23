// 1. Hàm kiểm tra không cho phép rỗng
function validateInput(id, errorMessage) {
    var input = document.getElementById(id);
    var error = document.getElementById(id + '_error');

    if (input.value.trim() === '') {
        error.textContent = errorMessage;
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// 2. Hàm kiểm tra số điện thoại
function validatePhone() {
    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phone_error');
    var phoneRegex = /^[0-9]{10,}$/;

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = 'Số điện thoại không hợp lệ, phải có ít nhất 10 chữ số';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}

// 3. Hàm chọn giao hàng tại văn phòng hoặc nhà riêng
function selectDelivery(option) {
    if (option === 'office') {
        alert('Bạn chọn giao hàng tại văn phòng');
    } else if (option === 'home') {
        alert('Bạn chọn giao hàng tại nhà riêng');
    }
}

// 4. Hàm xử lý khi nhấn "Lưu"
function saveInformation() {
    var isValid = true;

    // Kiểm tra tất cả các trường
    isValid &= validateInput('name', 'Tên không được để trống');
    isValid &= validateInput('address', 'Địa chỉ không được để trống');
    isValid &= validateInput('city', 'Tỉnh/Thành phố không được để trống');
    isValid &= validateInput('district', 'Quận/Huyện không được để trống');
    isValid &= validateInput('ward', 'Phường/Xã không được để trống');
    isValid &= validatePhone();

    if (isValid) {
        alert('Lưu thông tin thành công');
    } else {
        alert('Thông tin nhập không hợp lệ');
    }
}
