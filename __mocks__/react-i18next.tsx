import React from "react";

const Trans = ({ children }: { children: JSX.Element[] }) => (
  <div>{children}</div>
);

module.exports = {
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () =>
          new Promise(() => {
            return;
          }),
      },
    };
  },
  Trans,
};
