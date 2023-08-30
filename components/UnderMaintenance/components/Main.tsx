const Main = (props) => {
  // destructure props
  const { children } = props;

  return (
    <main className='flex flex-col justify-center items-center w-full h-100 min-h-screen mx-auto px-2 border'>
      {children}
    </main>
  )
}

export default Main;