import { redirect, RedirectType } from 'next/navigation';

export default function NotFoundPage() {
  redirect('/', RedirectType.replace);
}
