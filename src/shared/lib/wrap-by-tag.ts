import { JSX } from 'react';

interface TagWrapTarget {
  targetPhrase: string;
  tag: keyof JSX.IntrinsicElements;
  tagAttr?: Record<string, unknown>;
}

/**
 * @example
 * ```tsx
 * const result = wrapByTag('Hello, world!', [
 *   {
 *     targetPhrase: 'Hello',
 *     tag: 'strong',
 *   },
 *   {
 *     targetPhrase: 'world',
 *     tag: 'em',
 *     tagAttr: { className: 'highlight' },
 *   },
 * ]);
 *
 * result // => '<strong>Hello</strong>, <em className="highlight">world</em>!'
 * ```
 */
export default function wrapByTag(fullPhrase: string, targets: TagWrapTarget[]): string {
  return targets.reduce((result, { targetPhrase, tag, tagAttr }) => {
    const attrs = Object.entries(tagAttr ?? {}).reduce((acc, [key, value]) => `${acc} ${key}="${value}"`, '');
    const wrapped = `<${tag}${attrs}>${targetPhrase}</${tag}>`;
    return result.replace(targetPhrase, wrapped);
  }, fullPhrase);
}
