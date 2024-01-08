import {AxiosError} from "axios";

export const extractErrorMessage = (error: AxiosError<any>): string => {
  if (error.response?.data) {
    if (error.response.data.errorMessage) {
      return error.response.data.errorMessage;
    }

    if (error.response.data.message) {
      return error.response.data.message;
    }

    if (error.response.data.data?.errorMessage) {
      return error.response.data.data.errorMessage;
    }

    if (error.response.data.data?.message) {
      return error.response.data.data.message;
    }
  }

  if (error.message) {
    return error.message;
  }

  return "General Error";
};
