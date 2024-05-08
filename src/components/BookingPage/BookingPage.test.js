// bookingPage.test.js

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from "../../BookingApi";

describe("BookingPage", () => {
  it("renders BookingPage with initial available times", async () => {
    // Mock fetchAPI and submitAPI functions
    jest.mock("../../BookingApi", () => ({
      fetchAPI: jest.fn(),
      submitAPI: jest.fn(),
    }));
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    expect(await screen.findByText("Reserve A Table")).toBeInTheDocument();
  });

  it("submits form successfully and navigates to confirmation page", async () => {
    // Mock useNavigate function
    const mockedUseNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockedUseNavigate,
    }));

    // Mock fetchAPI and submitAPI functions
    jest.mock("../../BookingApi", () => ({
      fetchAPI: jest.fn(),
      submitAPI: jest.fn().mockResolvedValue(true), // Mock submitAPI directly here
    }));

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    // Fill out form fields
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-05-10" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: "Make Your reservation" })
    );

    // Wait for navigation to occur
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith("/booking-confirmation");
    });

    // Check if confirmation message is displayed
    expect(
      screen.getByText("Your Reservation is Confirmed!")
    ).toBeInTheDocument();
  });
});
