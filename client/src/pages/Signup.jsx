
import { Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
      <Link
        to="/"
        className=" font-bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-purple-500 to-red-500 rounded-lg text-white">
          My
          </span>
        Project
      </Link>
      <p className='text-sm mt-5'>
        Sign up with your email address and password or with Google.
      </p>
      </div>
      {/* right */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div >
            <Label value=" Enter Your Name"/>
              <TextInput  type="text" placeholder="Username" id='username'/>
            
          </div>
          <div >
            <Label value=" Enter Your Email"/>
              <TextInput  type="text" placeholder="Email" id='email'/>
            
          </div>
          <div >
            <Label value=" Type Your Password"/>
              <TextInput  type="text" placeholder="Password" id='password'/>
            
          </div>
          <Button gradientDuoTone="purpleToPink" type='submit'>Sign Up</Button>

        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an accout?</span>
          <Link to="/sign-in" className='text-blue-500'>
            Sign In
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
