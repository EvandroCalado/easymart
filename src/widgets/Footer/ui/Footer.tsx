import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import { routePaths } from '@/shared/config';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles['column-title']}>{t('footer.about')}</h3>

            <ul className={styles['link-list']}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.ourBranches')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.changeLog')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles['column-title']}>{t('footer.quickLinks')}</h3>

            <ul className={styles['link-list']}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.faqs')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.recipes')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles['column-title']}>
              {t('footer.helpSupport')}
            </h3>

            <ul className={styles['link-list']}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.security')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles['column-title']}>{t('footer.company')}</h3>

            <ul className={styles['link-list']}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles['column-title']}>{t('footer.social')}</h3>

            <ul className={styles['link-list']}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.facebook')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.instagram')}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t('footer.x')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        {t('footer.copyright', {
          year: new Date().getFullYear(),
          company: 'EasyMart',
        })}
      </div>
    </footer>
  );
};
