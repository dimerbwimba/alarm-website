import axios from "axios";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const baseURL = "http://localhost:3000"; // Set your API base URL in your .env.local file

const axiosFetcher = axios.create({
  baseURL,
});

export const fetcher = async (url:string) => {
  try {
    const response = await axiosFetcher.get(url);
    return response.data;
  } catch (error:any) {
    console.error('Error fetching data:', error.message);
     throw error;
  }
};