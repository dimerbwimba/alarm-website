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

export const checkObjectIsEmpty = (obj:object) => {
  return Object.entries(obj).length === 0;
};

export const  formatDate = (dateString:Date) => {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', options as any);
}

export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diffMs / 1000);
  const diffMinutes = Math.round(diffSeconds / 60);
  const diffHours = Math.round(diffMinutes / 60);
  const diffDays = Math.round(diffHours / 24);
  const diffMonths = Math.round(diffDays / 30);
  
  if (diffMonths > 0) {
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  } else if (diffDays > 0) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return `${diffSeconds} ${diffSeconds === 1 ? 'second' : 'seconds'} ago`;
  }
};