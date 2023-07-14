import * as Yup from "yup";

export const signUpSchema = Yup.object({
  summary: Yup.string().min(2).max(25).required("Please enter the Summary"),
  description:Yup.string().min(2).max(25).required("Please enter the Summary"),
  title: Yup.string().min(2).max(25).required("Please enter the Title"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
