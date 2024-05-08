import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Reserve a Table");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose date");
  expect(headingElementNew).toBeInTheDocument();
});
