/* eslint-disable jsx-a11y/anchor-is-valid */
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'

import ErrorMessage from './ErrorMessage'

// Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email address')
    .required('Please fill in your email'),
  fullName: yup.string().required('PLease fill in your full name'),
  password: yup.string().required('Please fill in your password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required('Passwords must match'),
  acceptLegal: yup.boolean().oneOf([true], 'You must accept the Terms & Conditions'),
})

// Type definition for the form data
type FormValues = {
  email: string
  fullName: string
  password: string
  passwordConfirm: string
  acceptLegal: boolean
}

/**
 * Registration form
 */
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) })

  function onSubmit(data: FormValues) {
    // eslint-disable-next-line unused-imports/no-unused-vars-ts
    const { passwordConfirm, acceptLegal, ...rest } = data
    console.log(rest) // you would only send what's in rest to your backend
  }

  const getClassNames = (field: keyof FormValues) =>
    cn('form-control', { 'is-invalid': Boolean(errors[field]) })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/** Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input id="email" type="email" className={getClassNames('email')} {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>

      {/** Full name */}
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          className={getClassNames('fullName')}
          {...register('fullName')}
        />
        <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
      </div>

      {/** Password */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={getClassNames('password')}
          {...register('password')}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </div>

      {/** Password Confirmation */}
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className={getClassNames('passwordConfirm')}
          {...register('passwordConfirm')}
        />
        <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
      </div>

      {/** Remember me */}
      <div className="mb-3 form-check">
        <input
          id="acceptLegal"
          type="checkbox"
          className={cn('form-check-input', { 'is-invalid': Boolean(errors.acceptLegal) })}
          {...register('acceptLegal')}
        />
        <label className="form-check-label" htmlFor="acceptLegal">
          I accept the <a href="#">Terms & Conditions</a>
        </label>
        <ErrorMessage>{errors.acceptLegal?.message}</ErrorMessage>
      </div>

      {/** Submit button */}
      <button type="submit" className="btn btn-primary w-100 mb-3">
        Register
      </button>

      <Link to="/">Already have an account ? Login</Link>
    </form>
  )
}
