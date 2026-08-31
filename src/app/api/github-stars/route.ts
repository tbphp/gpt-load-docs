import { NextResponse } from 'next/server';

const REPOSITORY = 'tbphp/gpt-load';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');

  if (repo !== REPOSITORY) {
    return NextResponse.json({ error: 'Unsupported repository' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${REPOSITORY}`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: `Failed to fetch repository: ${errorData.message || 'Not Found'}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const stars = data.stargazers_count;

    return NextResponse.json(
      { stars },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: `Internal Server Error: ${errorMessage}` }, { status: 500 });
  }
}
