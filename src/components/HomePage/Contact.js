import React from 'react'

const Contact = () => {
  return (
	<div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
		<form method='POST' action="https://getform.io/f/d15e7544-56cd-479a-ac88-34364eec89e0" className='flex flex-col max-w-[600px] w-full'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
				<p className='text-gray-300 py-4'>Submit the form below</p>
			</div>
			<input className='my-4 p-2 bg-[#ccd6f6] rounded-sm' type="text" placeholder='Name' name='name' />
			<input className='my-4 p-2 bg-[#ccd6f6] rounded-sm' type="email" placeholder='Email' name='email' />
			<textarea className='my-4 bg-[#ccd6f6] p-2 rounded-sm' name="message" cols="30" rows="10" placeholder='Your message here ?'></textarea>
			<button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
		</form>

	</div>
  )
}

export default Contact