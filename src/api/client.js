import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function request(url, options = {}) {
  try {
    const res = await axios({
      baseURL: BASE_URL,
      url,
      method: options.method || "GET",
      data: options.body,
      params: options.params,
      headers: options.headers || {},
    });

    return res.data;
  } catch (err) {
    const { status, data } = err.response || {};

    const customError = new Error(
      data?.error || err.message || "Unknown error",
    );

    customError.status = status;
    customError.data = data;

    throw customError;
  }
}
