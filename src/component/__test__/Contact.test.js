import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact page is rendred or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Contact page placeholder name", () => {
  render(<Contact />);
  const placeholder = screen.getByPlaceholderText("Name");

  expect(placeholder).toBeInTheDocument();
});

test("contact page form element", () => {
  render(<Contact />);

  const form = screen.getByRole("button");
  expect(form).toBeInTheDocument();
});

test("checking the inputs in cotact us page", () => {
  render(<Contact />);
  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).toBe(2);
});
