import axios, { AxiosError } from "axios";
import { AppService } from "../services/App.service";
import { cars_ship_commons_errors_ErrorDto } from "../dto/user-management";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      console.log("refreshing token");

      const refreshResponse = await AppService.refreshToken();
      if (refreshResponse && error.config) {
        error.config.headers.setAuthorization(
          "Bearer " + refreshResponse.accessToken,
        );

        error.config.baseURL = process.env.REACT_APP_API_URL;

        return http.request(error.config);
      }
    }

    return Promise.reject(error);
  },
);

function extractErrorDto(data: cars_ship_commons_errors_ErrorDto): string {
  let msg = `${data.httpStatus} ${data.errorMessage} ${data.timestamp}`;

  if (data.errorDetails) {
    for (const error of data.errorDetails) {
      msg += `<br/>${error}`;
    }
  }

  return msg;
}

export const extractErrorMessage = (error: AxiosError<any>): string => {
  if (error.response?.data) {
    if (error.response.data.errorMessage) {
      return extractErrorDto(error.response.data);
    }

    if (error.response.data.message) {
      return error.response.data.message;
    }

    if (error.response.data.data?.errorMessage) {
      return extractErrorDto(error.response.data.data);
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
