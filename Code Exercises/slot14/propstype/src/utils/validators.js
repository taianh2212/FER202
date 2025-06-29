export const validateForm = (form) => {
  const errors = {};

  if (!form.name || form.name.length < 3 || form.name.length > 50) {
    errors.name = "Tên phải từ 3 đến 50 ký tự.";
  }

  if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Email không hợp lệ.";
  }

  const age = parseInt(form.age, 10);
  if (!form.age) {
    errors.age = "Tuổi không được để trống.";
  } else if (isNaN(age) || age < 18 || age > 100) {
    errors.age = "Tuổi phải từ 18 đến 100.";
  }

  if (!form.phone || !/^\d{10,15}$/.test(form.phone)) {
    errors.phone = "Số điện thoại phải từ 10–15 chữ số.";
  }

  if (!form.agree) {
    errors.agree = "Bạn phải đồng ý với điều khoản.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
