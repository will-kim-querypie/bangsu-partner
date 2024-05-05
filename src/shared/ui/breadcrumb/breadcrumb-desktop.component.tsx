import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HouseFill } from 'react-bootstrap-icons';
import styles from './breadcrumb-desktop.module.css';
import getSubRoutesViewModel, { getPageInfo } from '../../config/sub-routes';
import { Listbox } from '../listbox';

const subRoutes = getSubRoutesViewModel('breadcrumb-desktop');

export default function BreadcrumbDesktop() {
  const router = useRouter();
  const pathname = usePathname();
  const pageInfo = getPageInfo(pathname, subRoutes);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href="/" className={styles.homeButton}>
          <HouseFill size={18} />
        </Link>

        <Listbox
          className={styles.listbox}
          width={240}
          value={pageInfo.parent}
          onChange={parentRoute => {
            router.push(parentRoute.children[0].path);
          }}
          options={subRoutes.map(parentRoute => ({
            key: parentRoute.key,
            label: parentRoute.label,
            value: parentRoute,
          }))}
        />

        <Listbox
          className={styles.listbox}
          width={240}
          value={pageInfo.child}
          onChange={childRoute => {
            router.push(childRoute.path);
          }}
          options={pageInfo.parent.children.map(childRoute => ({
            key: childRoute.key,
            label: childRoute.label,
            value: childRoute,
          }))}
        />
      </div>
    </div>
  );
}
