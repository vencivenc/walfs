
export function formatUsPhoneNumber(phoneNumber?: string): string {
  if (!phoneNumber) {
    return '';
  }

  const cleaned = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
  const match = RegExp(/^(\d{3})(\d{3})(\d{4})$/).exec(cleaned); // Match the cleaned string with a regular expression

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
}
