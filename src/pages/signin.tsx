import { Form } from "../styles/layout/sign/globalSignBox";

function SignIn() {
  return (
    <Form>
      <input type="text" className="input" placeholder="" />
      <input type="text" className="input" placeholder="" />
      <button className="submit">LOG IN</button>
    </Form>
  );
}
export default SignIn;
