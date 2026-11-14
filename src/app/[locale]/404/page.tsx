import NotFound, { generateMetadata as notFoundMetadata } from '@/components/NotFoundPage';
import { initLocale, type LocalizedPageProps } from '@/i18n/static-locale';

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return notFoundMetadata();
}

export default async function LocalizedNotFound({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <NotFound />;
}
