import { CURRENT_VERSION, HOMEPAGE_URL } from 'lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={HOMEPAGE_URL}>
        <b>Still Code</b> {`v${CURRENT_VERSION}`}
      </a>
    </footer>
  );
}

export default Footer;
