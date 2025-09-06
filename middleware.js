import { NextResponse } from "next/server";

const rateLimit = 10; // requests
const timeWindow = 60; // seconds
const ipCache = new Map();

// Clean up old entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipCache.entries()) {
    if (now - data.timestamp > timeWindow * 1000) {
      ipCache.delete(ip);
    }
  }
}, 60000);

export async function middleware(request) {
  // No rate limiting needed since API endpoints are removed
  return NextResponse.next();
}

export const config = {
  matcher: [],
};