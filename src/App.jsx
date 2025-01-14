import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNoteFound";
import ClassSelection from "./pages/ClassSelection";
import QuestionPage from "./pages/QuestionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import VerifyCode from "./pages/VerifyCode";
import LoginHome from "./pages/LoginHome";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* LoginHome is the default route */}
        <Route path="/" element={<LoginHome />} />
        
        <Route element={<MainLayout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/class/:subject"
            element={
              <ProtectedRoute>
                <ClassSelection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/questions/:subject/:grade"
            element={
              <ProtectedRoute>
                <QuestionPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
