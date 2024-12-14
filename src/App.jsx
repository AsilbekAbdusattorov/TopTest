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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Bosh sahifani faqat tizimga kirgan foydalanuvchilar ko'ra oladi */}
        <Route element={<MainLayout />}>
          <Route
            index
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

        {/* Login va Ro'yxatdan o'tish sahifalari */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />

        {/* Not Found sahifasi */}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
