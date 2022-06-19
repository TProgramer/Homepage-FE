import { Form } from "../styles/layout/sign/globalSignBox";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function SignUp() {
  return (
    <>
      <Form>
        <input type="text" className="input" placeholder="Student Id" />
        <input type="text" className="input" placeholder="Password" />
        <input type="text" className="input" placeholder="Password Confirm" />
        <input type="text" className="input" placeholder="Birthday" />
        <input type="text" className="input" placeholder="Email address" />
        <input type="text" className="input" placeholder="Github address" />
        <button className="submit">CREATE ACCOUNT</button>
      </Form>
      <div className="warning">
        <WarningAmberIcon />
        <p className="paragraph">
          The authentication process is carried out by the administrator, please
          write down your personal information properly
        </p>
      </div>
    </>
  );
}
export default SignUp;
