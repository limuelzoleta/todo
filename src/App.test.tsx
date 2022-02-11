import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render App", () => {
  render(<App />);
  expect(screen.getByTitle("App")).toBeTruthy();
});
