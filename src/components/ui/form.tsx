'use client'; // If using Next.js

import { useState } from "react";
import * as Form from "@radix-ui/react-form";

export function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send form data to FormBold
    try {
      const response = await fetch("https://formbold.com/s/3V7m5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show thank you message
        setSubmitted(true);
        
        // Reset form data after submission (optional)
        setFormData({
          name: "",
          username: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Please fill the form, <span className="text-yellow-500">Our team</span> will reach out to you
      </h2> 
      {submitted ? (
        <div className="mb-4 text-green-600 text-center">
          Thank you for your submission!
        </div>
      ) : (
        <Form.Root onSubmit={handleSubmit}>
          <Form.Field className="mb-4" name="name">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold text-yellow-600">Name</Form.Label>
              <Form.Message className="text-xs text-red-500" match="valueMissing">
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className="mb-4" name="phoneNumber">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold text-yellow-600">Phone Number</Form.Label>
              <Form.Message className="text-xs text-red-500" match="valueMissing">
                Please enter your phone number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="tel"
                required
                name="phoneNumber"
                pattern="[0-9]*" // Ensures only numbers are entered
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className="mb-4" name="email">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold text-yellow-600">Email</Form.Label>
              <Form.Message className="text-xs text-red-500" match="valueMissing">
                Please enter an email address
              </Form.Message>
              <Form.Message className="text-xs text-red-500" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className="mb-4" name="message">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-sm font-bold text-yellow-600">Message</Form.Label>
              <Form.Message className="text-xs text-red-500" match="valueMissing">
                Please enter your message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Submit
            </button>
          </Form.Submit>
        </Form.Root>
      )}
    </div>
  );
}