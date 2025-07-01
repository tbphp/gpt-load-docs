'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GitHubStarsContextType {
  stars: number | null;
  loading: boolean;
}

const GitHubStarsContext = createContext<GitHubStarsContextType | undefined>(undefined);

export const GitHubStarsProvider = ({ children }: { children: ReactNode }) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('/api/github-stars?repo=tbphp/gpt-load');
        const data = await response.json();
        if (response.ok) {
          setStars(data.stars);
        } else {
          console.error('Failed to fetch GitHub stars');
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);

  return (
    <GitHubStarsContext.Provider value={{ stars, loading }}>
      {children}
    </GitHubStarsContext.Provider>
  );
};

export const useGitHubStars = () => {
  const context = useContext(GitHubStarsContext);
  if (context === undefined) {
    throw new Error('useGitHubStars must be used within a GitHubStarsProvider');
  }
  return context;
};