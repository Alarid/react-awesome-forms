import React from 'react'

export default function ControlledForm() {
  const [username, setUsername] = React.useState<string | undefined>()
  const [password, setPassword] = React.useState('')

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(username, password)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      {/**
       * Remember, we need a value and an onChange handler
       * for the input to be considered controlled
       **/}
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}
