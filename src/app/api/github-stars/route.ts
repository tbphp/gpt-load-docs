import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');

  if (!repo) {
    return NextResponse.json({ error: 'Repo parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: `Failed to fetch repository: ${errorData.message || 'Not Found'}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const stars = data.stargazers_count;

    return NextResponse.json({ stars });
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: `Internal Server Error: ${errorMessage}` }, { status: 500 });
  }
}