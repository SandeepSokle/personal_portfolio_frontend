import { Portfolio } from "./Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import { AdminPanel } from "./Components/AdminPanel";
import MySnackbar from "./Components/Snackbar/Snackbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Box, CircularProgress } from "@mui/material";
function App() {
  const [isProgress, setIsProgress] = useState(false);
  const progressStatus = useSelector((state) => {
    return state.loader.status;
  });

  useEffect(() => {
    setIsProgress(progressStatus);
  }, [progressStatus]);

  return (
    <div className="App">
      <Router>
        {isProgress ? (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isProgress}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "fixed",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 30,
                }}
              >
                <CircularProgress size="5rem" Backdrop />
              </Box>
            </Backdrop>
          </>
        ) : (
          ""
        )}

        <Switch>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Portfolio />
          </Route>
          <Route>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
      {/* <Portfolio /> */}
      <MySnackbar />
    </div>
  );
}

export default App;
