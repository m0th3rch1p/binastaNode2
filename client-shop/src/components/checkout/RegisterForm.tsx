import { ChangeEventHandler } from "react";

function RegisterForm(props: { form: { email: string, password: string }, onChangeFn: ChangeEventHandler }) {
  return (
    <form method="post">
      <div className="row">
        <div className="form-group col-lg-6">
          <input type="text" onChange={props.onChangeFn} required={true} value={props.form.email} name="email" placeholder="Email address *" />
        </div>
        <div className="form-group col-lg-6">
          <input type="password" onChange={props.onChangeFn} required={true} value={props.form.password} name="password" placeholder="Password *" />
        </div>
      </div>
    </form>
  )
}

export default RegisterForm;