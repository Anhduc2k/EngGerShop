import { isEmail } from '../components/utils/helper'

export const rules = {
  email: {
    require: {
      value: true,
      message: 'Email là bắt buộc nhập'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 5-100 kí tự'
    },
    maxLength: {
      value: 100,
      message: 'Email có độ dài từ 5-100 kí tự '
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng'
    }
  },
  password: {
    require: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự'
    },
    maxLength: {
      value: 100,
      message: 'Mật khẩu có độ dài ít nhất 6 kí tự '
    }
  },
  confirmedPassword: {
    require: {
      value: true,
      message: 'Nhập lại mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài ít nhất 6 kí tự'
    },
    maxLength: {
      value: 100,
      message: ' Nhập lại mật khẩu có độ dài ít nhất 6 kí tự '
    }
  }
}
