import React from "react";
import auth from "../utils/auth";
import { Link } from "react-router-dom";
import { TextField, Card, CardContent, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Form, Formik, ErrorMessage } from "formik";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        border: "solid 2px green",
        width: "60%",
          margin: "10% auto"
    },
    cardContent: {
        border: "solid 2px red",
        width: "40%",
        margin: "0 auto",
        textAlign: "center"
    }
})




const Login = props => {
    const classes = useStyles()
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent} >
          <h1>Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invaild Email Address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <br />
                <TextField
                  label="E-Mail"
                  type="email"
                  name="email"
                  autoComplete="username"
                />
                <ErrorMessage name="email" component="div" />
                <br />

                <br />
                <TextField
                  label="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" />
                <br />
                <Button
                variant="outlined"
                color="primary"
                  onClick={() => {
                    auth.login(() => {
                      props.history.push("/dashboard");
                    });
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {" "}
                  submit{" "}
                </Button>
                <Link>Register</Link>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
