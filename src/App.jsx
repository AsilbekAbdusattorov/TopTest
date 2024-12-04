import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import PageNotFound from './pages/PageNoteFound'
import ClassSelection from './pages/ClassSelection';
import QuestionPage from './pages/QuestionPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/class/:subject" element={<ClassSelection />} />
          <Route path="/questions/:subject/:grade" element={<QuestionPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
