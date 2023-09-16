import { NextRequest, NextResponse } from './node_modules/next/server'
export async function middleware(req: NextRequest) {
  try {
    // If is in maintenance mode, point the url pathname to the maintenance page
    req.nextUrl.pathname = `/maintenance`

    // Rewrite to the url
    return NextResponse.rewrite(req.nextUrl)
  } catch (error) {
    // show the default page if EDGE_CONFIG env var is missing,
    // but log the error to the console
    console.error(error)
  }
}
