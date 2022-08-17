export const validationMessages = function (model, label) {
    if(!model)
        return "";
    else if(!model.$dirty)    
        return "";
    for (let key in model.$params) {
        let type = model.$params[key].type;
        switch (type) {
            case "required":
                if (!model.required)
                    return label + " alanını doldurmak zorunludur";
                break;
            case "email":
                if (!model.email)
                    return label + " alanı için geçerli bir mail adresi giriniz";
                break;
            case "maxLength":
                if (!model.maxLength)
                    return label + " alanına " + model.$params[key].max + " karakterden fazla giriş yapılamaz"
                break;
            case "minLength":
                if (!model.minLength)
                    return label + " alanına " + model.$params[key].min + " karakterden az giriş yapılamaz"
                break;
        }
    }
}

