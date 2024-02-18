const Contact = () => {
  return (
    <div className='h-[100vh]'>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input
          type='text'
          placeholder='Name'
          className='border border-black p-2 m-2'
        />
        <input
          type='text'
          placeholder='message'
          className='border border-black p-2 m-2'
        />
        <button className='border border-black p-2 m-2 bg-green-200 rounded-xl'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
