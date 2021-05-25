import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'

// Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email address')
    .required('Please fill in your email'),
  password: yup.string().required('Please fill in your password'),
  rememberMe: yup.boolean(),
})

// Type definition for the form data
type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

/**
 * Simple Login Form Component
 */
export default function LoginForm() {
  // Initiate the form using react-hook-form's hook
  // We get some utilities & state in return
  const {
    register, // you need this to register your inputs
    handleSubmit, // this is a wrapper for you onSubmit handler
    formState: { errors }, // we get our form's state, especially the errors
  } = useForm<FormValues>({ resolver: yupResolver(schema) })

  // Form submit handler
  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    /**
     * A few things to note here:
     *  - the onSubmit callback needs to be wrapped with react-hook-form's
     *    handleSubmit utility
     *  - the "noValidate" prop on the form is here because we manage
     *    validation ourselves, with Yup, so we don't want the browser validation
     **/
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/** Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className={cn('form-control', {
            /**
             * is-invalid is a Bootstrap utility class to highligh the
             * input in red in case of an error. If errors.email is not
             * nullish, it means there were a validation error regarding
             * this field
             */
            'is-invalid': Boolean(errors.email),
          })}
          {...register('email')}
        />
        {/** Render the error message related to this field (empty if no error) */}
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>

      {/** Password */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={cn('form-control', {
            'is-invalid': Boolean(errors.password),
          })}
          {...register('password')}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>

      {/** Remember me */}
      <div className="mb-3 form-check">
        <input
          id="rememberMe"
          type="checkbox"
          className="form-check-input"
          {...register('rememberMe')}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>

      {/** Submit button */}
      <button type="submit" className="btn btn-primary w-100 mb-3">
        Login
      </button>

      <Link to="/register">You're new ? Register here !</Link>
    </form>
  )
}
