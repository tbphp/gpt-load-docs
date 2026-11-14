import NotFound from '@/components/NotFoundPage';
import LocaleEntry from '@/components/LocaleEntry';

export { generateMetadata } from '@/components/NotFoundPage';

/** 未匹配路由不经过语言根布局；Pages 的语言目录另有各自的静态 404。 */
export default function GlobalNotFound() {
  return <html lang="en"><body style={{ margin: 0 }}><LocaleEntry /><NotFound /></body></html>;
}
