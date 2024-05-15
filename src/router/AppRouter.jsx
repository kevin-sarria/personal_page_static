import { Routes, Route, Navigate } from "react-router-dom";

import { routesPublic } from "./";
import { PageNotFound } from "../pages";

export const AppRouter = () => {

  return (
      <Routes>
        {
          <>
            { /* Rutas Publicas */ }
            {
              routesPublic.map( ({ path, Component }, index) => (<Route key={index} path={path} element={ <Component /> } />) )
            }

            <Route path="/*" element={ <Navigate to="/404" /> } />
            <Route path="/404" element={<PageNotFound />} />
          </>
        }

      </Routes>
  )
}