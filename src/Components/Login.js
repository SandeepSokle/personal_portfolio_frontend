import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailPassword,
  loginWithEmailPassword,
  loginWithGoogle,
} from "../firebase/firebase_config";

const theme = createTheme();

export default function Login() {
  const [loginState, setLoginState] = React.useState("signin");
  const [user, setUser] = React.useState();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    console.log({
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });

    if (loginState === "signin") {
      let userDetail = await loginWithEmailPassword(
        data.get("email"),
        data.get("password")
      );
      console.log("user!!", userDetail);
      setUser(userDetail);
    } else {
      let userDetail = await createUserWithEmailPassword(
        data.get("email"),
        data.get("password")
      );
      console.log("user!!", userDetail);
      setUser(userDetail);
    }

    history.push("/admin");
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {`${loginState === "signin" ? "Sign in" : "Sign up"}`}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {loginState === "signin" ? (
                ""
              ) : (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
                onClick={async (e) => {
                  e.preventDefault();
                  let userDetail = await loginWithGoogle();
                  console.log("user!!", userDetail);
                  setUser(userDetail);
                  history.push("/admin");
                }}
              >
                Sign in with google
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                {`${loginState === "signin" ? "Sign in" : "Sign up"}`}
              </Button>

              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid item xs>
                  <Link
                    href=""
                    variant="body2"
                    onClick={(e) => {
                      e.preventDefault();
                      if (loginState === "signin") {
                        setLoginState("signup");
                      } else {
                        setLoginState("signin");
                      }
                    }}
                  >
                    {`${
                      loginState === "signin" ? "Sign up new User." : "Sign in"
                    }`}
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
