export const phoneValidation = (value) => {
  const patterns = [
    /^\+?[1-9]\d{0,2}?[-.\s]?(\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/, // Generic international format
    /^(\+91[-.\s]?)?[6-9]\d{9}$/, // Indian format with optional +91
    /^[6-9]\d{9}$/, // Indian 10-digit format
  ];

  // Check if the value matches any of the patterns
  return (
    patterns.some((regex) => regex.test(value)) || "Enter a valid phone number"
  );
};
