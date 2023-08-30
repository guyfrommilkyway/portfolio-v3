// import packages below
import { ReactNode } from 'react';

interface Props {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
}

const Main = (props: Props) => {
  // destructure props
  const { children } = props;

  return (
    <main className='flex flex-col justify-center items-center w-full h-100 min-h-screen mx-auto px-2 border'>
      {children}
    </main>
  )
}

export default Main;