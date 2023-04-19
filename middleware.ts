import { NextRequest, NextResponse } from 'next/server';
const env = process.env.NODE_ENV;
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|500|examples|[\\w-]+\\.\\w+).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || 'localhost:3000';
  // const currentHost = env === 'development' ? 'localhost' : hostname;
  const currentHost = hostname.replace(':3000', '');
  //console.log(`${currentHost}${url.pathname}`);
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  //console.log(`/_sites/${currentHost}${url.pathname}`);
  return NextResponse.rewrite(url);
}
