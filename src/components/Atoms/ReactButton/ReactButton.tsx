import React from 'react';

interface Props {
  title: string;
  className: string;
}

const ReactButton: React.FC<Props> = ({ title, className }): JSX.Element => {
  return (
    <>
      <button type="button" className={className}>
        {title}
      </button>
    </>
  );
};

export default ReactButton;
