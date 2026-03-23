import axios from "axios";

const BASE_URL = "https://panda-market-api.vercel.app";
const RESOURCE = "/products";

export async function request(path, options = {}) {
  try {
    const res = await axios({
      baseURL: BASE_URL,
      url: `${RESOURCE}${path}`,
      method: options.method || "GET",
      data: options.body,
      params: options.params,
      headers: options.headers || {},
    });

    return res.data;
  } catch (err) {
    const { status, data } = err.response || {};

    const customError = new Error(
      data?.message || err.message || "Unknown error",
    );

    customError.status = status;
    customError.data = data;

    throw customError;
  }
}
