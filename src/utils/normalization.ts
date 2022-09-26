export const extractPhoneNumber = (value: string): string => {
  if (!value) {
    return '';
  }

  value = value.replace(/[^0-9]+/g, '');
  return value;
};

export const uppercaseFirstLetter = (value: string) => {
  if (typeof value !== 'string' || !value) {
    return '';
  }

  return value[0].toUpperCase() + value.substring(1);
};

export default {
  extractPhoneNumber,
  uppercaseFirstLetter,
};
