import React, { useState } from 'react';
import language from 'lib/language';
import styles from './styles';

const Faq = () => {
  const [items, setItems] = useState(
    language.faq.items.map((item) => Object.assign({}, item, { open: true })),
  );
  const toggleItem = (index) => {
    const newItems = items.slice();
    newItems[index].open = !newItems[index].open;
    setItems(newItems);
  };

  return (
    <div css={styles.root}>
      <div css={styles.title}>{language.faq.title}</div>
      <ul css={styles.items}>
        {items.map(({ title, body, open }, index) => (
          <li key={title} className={open ? '' : 'closed'}>
            <div role="button" onClick={() => toggleItem(index)}>
              <img
                src={`${process.env.assetPrefix}/images/Arrow CTA-1.svg`}
                alt={language.faq.arrow}
              />
              <div>{title}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
