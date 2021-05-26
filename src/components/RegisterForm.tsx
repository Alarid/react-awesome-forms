/* eslint-disable jsx-a11y/anchor-is-valid */
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Select, { OptionTypeBase } from 'react-select'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const iceCreamOptions: OptionTypeBase[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const schema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email address')
    .required('Please fill in your email'),
  password: yup.string().required('Please fill in your password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required('Passwords must match'),
  // favoriteIceCream isn't required, so we require its value to be one of the options, or null
  favoriteIceCream: yup.string().oneOf([...iceCreamOptions.map((option) => option.value), null]),
  acceptLegal: yup.boolean().oneOf([true], 'You must accept the Terms & Conditions'),
})

// Type definition for the form data
type FormValues = {
  email: string
  password: string
  passwordConfirm: string
  favoriteIceCream: OptionTypeBase
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
    control,
  } = useForm<FormValues>({ resolver: yupResolver(schema) })

  function onSubmit(data: FormValues) {
    // eslint-disable-next-line unused-imports/no-unused-vars-ts
    const { passwordConfirm, acceptLegal, ...rest } = data
    console.log(rest) // you would only send what's in rest to your backend
  }
  console.log(errors.acceptLegal?.message)

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/** Email */}
      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" isInvalid={Boolean(errors.email)} {...register('email')} />
        <Form.Text className="invalid-feedback">{errors.email?.message}</Form.Text>
      </Form.Group>
      {/** Password */}
      <Form.Group controlId="password" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={Boolean(errors.password)}
          {...register('password')}
        />
        <Form.Text className="invalid-feedback">{errors.password?.message}</Form.Text>
      </Form.Group>
      {/** Password Confirmation */}
      <Form.Group controlId="passwordConfirm" className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={Boolean(errors.passwordConfirm)}
          {...register('passwordConfirm')}
        />
        <Form.Text className="invalid-feedback">{errors.passwordConfirm?.message}</Form.Text>
      </Form.Group>
      {/* Favorite Ice Cream */}
      <Form.Group controlId="favoriteIceCream" className="mb-3">
        <Form.Label>Favorite ice cream</Form.Label>
        <Controller
          name="favoriteIceCream" // equivalent to register('favoriteIceCream')
          control={control}
          render={({ field }) => <Select {...field} options={iceCreamOptions} />}
        />
      </Form.Group>
      {/** Accept terms & conditions */}
      <Form.Group controlId="acceptLegal" className="mb-3">
        <Form.Check
          type="checkbox"
          isInvalid={Boolean(errors.acceptLegal)}
          feedback={errors.acceptLegal?.message}
          label={
            <>
              I accept the <a href="#">Terms & Conditions</a>
            </>
          }
          {...register('acceptLegal')}
        />
      </Form.Group>

      {/** Submit button */}
      <Button variant="primary" type="submit" className="w-100 mb-3">
        Register
      </Button>
      <Link to="/">Already have an account ? Login</Link>
    </Form>
  )
}
