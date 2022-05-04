import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe ("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("text is visible", () => {
  it("inserts text into the h2", () => {
    const { getByLabelText } = render(<Contact />);

    expect(getByLabelText("data-testid")).toBeInTheDocument("Contact me");
  });
});

