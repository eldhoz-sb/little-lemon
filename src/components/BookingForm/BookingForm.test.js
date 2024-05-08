import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const submitForm = jest.fn();
  const updateTimes = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00"]}
        submitForm={submitForm}
        updateTimes={updateTimes}
      />
    );
  });

  it("submits form successfully with correct data", () => {
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

    // Submit the form
    fireEvent.submit(
      screen.getByRole("button", { name: "Make Your reservation" })
    );

    // Check if submitForm function was called with correct data
    expect(submitForm).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      date: "2024-05-10",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    });

    // Check if updateTimes function was called with selected date
    expect(updateTimes).toHaveBeenCalledWith("2024-05-10");
  });


  describe("BookingForm Validate if correct attributes are applied", () => {

  it("renders input field for Name with required attribute", () => {
    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders input field for Email with required attribute", () => {
    const nameInput = screen.getByLabelText("Email");
    expect(nameInput).toHaveAttribute("type", "email");
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders input field for Date with required attribute", () => {
    const nameInput = screen.getByLabelText("Choose date");
    expect(nameInput).toHaveAttribute("type", "date");
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders input field for Time with required attribute", () => {
    const nameInput = screen.getByLabelText("Choose time");
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders input field for Guests with required attribute", () => {
    const nameInput = screen.getByLabelText("Number of guests");
    expect(nameInput).toHaveAttribute("type", "number");
    expect(nameInput).toHaveAttribute("required");
  });

  it("renders input field for occasion without required attribute", () => {
    const nameInput = screen.getByLabelText("Occasion");
  });
});


});

