import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/Signup";
import { Feed } from "./pages/Feed";
import { Login } from "./pages/Login";
import { useAuthContext } from "./hook/useAuth";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  // const state.user = localStorage.getItem("user");
  // console.log("localStoragestate.user: ", user);
  const { state } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={state.user ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={state.user ? <Navigate to={"/"} /> : <Login />}
        />

        <Route element={<ProtectedRoute />} />

        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
