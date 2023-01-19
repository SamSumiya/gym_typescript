import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (event: any) => {
    const isValid = await trigger()

    if (!isValid) {
      event.preventDefault()
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis mollitia corporis iure molestias est quo nulla. Sint
            porro nemo eaque delectus obcaecati, veniam quam repellendus
            doloribus laboriosam fugiat! Culpa, assumenda?
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/02860a6b2fa785d6b7521523ac10d888"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-pimary-500">
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' &&
                    'Input exceeds max length'}
                </p>
              )}
              <input
                className={inputStyle}
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-pimary-500">
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' && 'Invalid email address'}
                </p>
              )}
              <textarea
                className={inputStyle}
                // type="text"
                rows={4}
                cols={50}
                placeholder="MASSAGE"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-pimary-500">
                  {errors.message.type === 'required' &&
                    'This field is required'}
                  {errors.message.type === 'maxLength' &&
                    'Input exceeds max length'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                <p>Send</p>
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:flex md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='md:before:content-evolvetext before:absolute w-full before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic" className='w-full'/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
