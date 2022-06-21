import { Form } from "../styles/layout/sign/globalSignBox";
import Link from "next/link";

function SignIn() {
  return (
    <Form>
      <input type="text" className="input" placeholder="Student ID" />
      <input type="text" className="input" placeholder="Password" />
      <button className="submit">LOG IN</button>
      <p className="toregister">
        <Link href="/signup">
          <a>CREATE ACOUNT</a>
        </Link>
      </p>
    </Form>
  );
}
export default SignIn;
