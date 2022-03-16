import { Redirect, Router } from "@reach/router";
import React from "react";

import { Layout } from "./components/layout/layout.component";
import { FlightEditPage } from "./pages/flight.edit.page";
import { FlightsPage } from "./pages/flights.page";

export function Routes() {
  return (
    <Layout>
      <Router>
        <FlightsPage path="flights" />
      </Router>
      <Router>
        <FlightEditPage path="flight/:code" />
      </Router>
    </Layout>
  );
}
