import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeader } from './SectionHeader';
import { contactDetails } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Basic Package ($250)');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Web3Forms Access Key - Get yours free at https://web3forms.com
  const WEB3FORMS_KEY = '90113e6d-b70e-4222-8bd6-07ce84acdfca'; // Replace with your key

  // Paystack Configuration
  const PAYSTACK_KEY = 'pk_test_dbd6093bc496405e6d1dc2ca51ad16aa42dd93ab'; // REPLACE WITH YOUR PUBLIC KEY

  const getAmount = (selectedService: string) => {
    switch (selectedService) {
      case 'Basic Package ($250)':
        return 250 * 100; // $250 in cents
      case 'Advanced Package ($400)':
        return 400 * 100; // $400 in cents
      case 'Premium Package ($550)':
        return 550 * 100; // $550 in cents
      case 'Custom B2B Project':
        return 0; // Custom quote needed
      case 'Free Audit Request':
        return 0; // Free
      default:
        return 0;
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: getAmount(service),
    publicKey: PAYSTACK_KEY,
    currency: 'USD',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    resetFormState();
  };

  const onClose = () => {
    alert(
      'Payment process cancelled. We have received your message and will contact you shortly.',
    );
    resetFormState();
  };

  const resetFormState = () => {
    setEmail('');
    setName('');
    setMessage('');
    setService('Basic Package ($250)');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_KEY);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', `New ${service} Inquiry from ${name}`);
      formData.append(
        'message',
        `
Service Package: ${service}
From: ${name} (${email})

Message:
${message}

---
This inquiry was submitted via your portfolio contact form.
      `,
      );
      formData.append('redirect', 'false'); // Don't redirect, handle in JS

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        const amount = getAmount(service);
        if (amount > 0) {
          // Trigger Paystack for paid packages
          initializePayment({ onSuccess, onClose });
        } else {
          // Free or Custom
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
          resetFormState();
        }
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(
        'Failed to send message. Please try again or contact me directly on WhatsApp.',
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(contactDetails.whatsapp, '_blank');
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='contact'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='Ready to scale your business?'
          subtitle='Get In Touch'
        />

        <div className='mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24'>
          {/* Left Column: Contact Info */}
          <motion.div
            variants={fadeUp}
            className='space-y-8'
          >
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
                Let's start your project
              </h3>
              <p className='text-neutral-400 leading-relaxed text-lg'>
                I'm available for new projects. Whether you need a full store
                setup, an audit, or a custom B2B solution, I'm here to help.
              </p>
            </div>

            <div className='space-y-4'>
              <a
                href={`mailto:${contactDetails.email}`}
                className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group'
              >
                <div className='size-12 rounded-full bg-linear-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform'>
                  <Mail size={20} />
                </div>
                <div>
                  <p className='text-sm text-neutral-500'>Email Me</p>
                  <p className='text-white font-medium'>
                    {contactDetails.email}
                  </p>
                </div>
              </a>

              <button
                onClick={handleWhatsApp}
                className='w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group text-left'
              >
                <div className='size-12 rounded-full bg-linear-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform'>
                  <Phone size={20} />
                </div>
                <div>
                  <p className='text-sm text-neutral-500'>WhatsApp (Fastest)</p>
                  <p className='text-white font-medium'>
                    {contactDetails.phone}
                  </p>
                </div>
              </button>

              <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors'>
                <div className='size-12 rounded-full bg-linear-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-white'>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className='text-sm text-neutral-500'>Location</p>
                  <p className='text-white font-medium'>
                    {contactDetails.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={fadeUp}
            className='relative'
          >
            <div className='absolute inset-0 bg-linear-to-br from-green-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10' />
            <div className='bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'>
              {showSuccess ? (
                <div className='flex flex-col items-center justify-center py-12 space-y-4'>
                  <div className='size-16 rounded-full bg-green-500/20 flex items-center justify-center'>
                    <CheckCircle2 className='size-8 text-green-400' />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>
                    Message Sent!
                  </h3>
                  <p className='text-neutral-400 text-center'>
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-6'
                >
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='name'
                        className='text-sm text-neutral-400 ml-1'
                      >
                        Name
                      </label>
                      <div className='relative'>
                        <User
                          className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500'
                          size={18}
                        />
                        <input
                          type='text'
                          name='name'
                          id='name'
                          placeholder='Your Name'
                          className='w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all'
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm text-neutral-400 ml-1'
                      >
                        Email
                      </label>
                      <div className='relative'>
                        <Mail
                          className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500'
                          size={18}
                        />
                        <input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='name@example.com'
                          className='w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all'
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='service'
                      className='text-sm text-neutral-400 ml-1'
                    >
                      Interested Package
                    </label>
                    <select
                      name='service'
                      id='service'
                      className='w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all'
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option
                        className='bg-neutral-900'
                        value='Basic Package ($250)'
                      >
                        Basic Package ($250)
                      </option>
                      <option
                        className='bg-neutral-900'
                        value='Advanced Package ($400)'
                      >
                        Advanced Package ($400)
                      </option>
                      <option
                        className='bg-neutral-900'
                        value='Premium Package ($550)'
                      >
                        Premium Package ($550)
                      </option>
                      <option
                        className='bg-neutral-900'
                        value='Custom B2B Project'
                      >
                        Custom B2B Project
                      </option>
                      <option
                        className='bg-neutral-900'
                        value='Free Audit Request'
                      >
                        Free Audit Request
                      </option>
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm text-neutral-400 ml-1'
                    >
                      Message
                    </label>
                    <textarea
                      name='message'
                      id='message'
                      rows={4}
                      placeholder='Tell me about your store goals...'
                      className='w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all resize-none'
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    disabled={isSending}
                    className='w-full rounded-xl py-6 text-base font-semibold shadow-lg shadow-green-500/20 hover:bg-green-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSending ? (
                      <>
                        Sending...{' '}
                        <Loader2 className='ml-2 size-4 animate-spin' />
                      </>
                    ) : (
                      <>
                        Send Message <Send className='ml-2 size-4' />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
