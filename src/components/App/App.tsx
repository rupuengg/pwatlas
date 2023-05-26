/* eslint-disable react/function-component-definition */
import React from 'react';

export interface IAppProps {
  message: string,
  isCheck: boolean,
}

// autofix to function expression with type annotation
// [2, { "namedComponents": "function-expression" }]
export const App: React.FC<IAppProps> = (props: IAppProps) => {
  const { message, isCheck } = props;

  if (isCheck === true) return <div>Hello World</div>;
  return (
    <div>
      {message}
      {' '}
      App Controller
    </div>
  );
};
