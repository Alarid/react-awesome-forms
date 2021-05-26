import * as React from 'react'

type ErrorMessageProps = { children: React.ReactNode }

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <div className="invalid-feedback">{children}</div>
}
