export default function UncontrolledForm() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function onSubmit(event) {
    event.preventDefault()
    const { username, password } = event.target
    console.log(username.value, password.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />

      <button type="submit">Login</button>
    </form>
  )
}
