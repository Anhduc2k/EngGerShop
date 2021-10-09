import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '../../../assets/styles/utils'
import InputText from '../../../components/InputText/InputText'
import { path } from '../../../constants/path'
import * as S from './register.style'
import InputPassword from '../../../components/InputPassword/InputPassword'
import { rules } from '../../../constants/rules'
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage'
export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })
  const handleRegister = data => {
    console.log(data)
  }

  return (
    <div>
      <S.StyledRegister>
        <S.Banner>
          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Nhập email..."
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: v =>
                        v === getValues('password') || 'Mật khẩu không khớp'
                    }
                  }}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Nhập lại mật khẩu"
                      name="confirmedPassword"
                      onChange={field.onChange}
                      value={getValues('confirmedPassword')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassword" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link to={path.login} className="link">
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Banner>
      </S.StyledRegister>
    </div>
  )
}
