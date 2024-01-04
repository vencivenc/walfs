
export const extractErrorData = (value: any) => {
  if (value?.data?.message) {
    if (value?.data?.error) {
      return value.data.error + ' ' + value.data.message;
    }

    return value.data.message;
  } else {
    return JSON.stringify(value);
  }
};
