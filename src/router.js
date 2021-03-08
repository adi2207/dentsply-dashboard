import React from "react";
import { Redirect } from "react-router-dom";

export const redirectRoutes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={`/home`} />
  }
]