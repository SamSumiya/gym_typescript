import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-3/5 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            deserunt reiciendis commodi, omnis mollitia nam aut hic fugit
            corporis suscipit labore adipisci laboriosam vitae maiores dolores
            eos ratione, rerum voluptatibus?
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>Links</h4>
					<p className='my-5'> Best Gym Ever </p>
					<p className='my-5'> Best Gym Ever </p>
					<p> Achieve your fitness goal</p>
				</div>
				<div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>Links</h4>
					<p className='my-5'> Best Gym Ever </p>
					<p className='my-5'> Best Gym Ever </p>
					<p> (123)456-789</p>
				</div>
      </div>
    </footer>
  )
}

export default Footer
