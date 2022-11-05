import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002",
});

const fetcher = async (method: "get" | "post" | "patch" | "delete", url: string, ...rest: object[]) => {
  try {
    const { data } = await apiClient[method](url, ...rest);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("different error than axios");
  }
};

export default fetcher;
