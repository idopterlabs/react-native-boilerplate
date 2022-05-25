export const extractPhoneNumber = (value: string): string => {
  if (!value) {
    return '';
  }

  value = value.replace(/[^0-9]+/g, '');
  return value;
};

export default {
  extractPhoneNumber,
};
