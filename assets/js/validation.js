function Validator(formSelector) {
    // 1 Object chứa các rules
    var formRules = {}

    // Quy ước tạo rule
    // - nếu có lỗi thì return `error message` 
    // - Nếu không có lỗi thì return undefinde
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập tên người đăng kí'
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email'
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= min ? undefined : `Vui lòng nhập ít nhất ${max} kí tự`
            }
        }
    }

    // Lấy ra form element trong DOM theo formSelector
    var formElement = document.querySelector(formSelector);
    
    // Chỉ sử dụng khi có element trong DOM 
    if (formElement) {
        var inputs = formElement.querySelectorAll("[name][rules]");
        for(var input of inputs) {
            formRules[input.name] = input.getAttribute('rules')
        }
    }

    console.log(formRules)
}