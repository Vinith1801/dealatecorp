import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', company:'', message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function handleSubmit(e){
    e.preventDefault()
    // In production, send to backend / serverless function. Here simulate:
    setStatus('Sending...')
    setTimeout(()=> setStatus('Thanks — we will respond within 24 hours.'), 900)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-heading font-bold">Contact Us</h1>
      <p className="text-sm text-gray-600 mt-2">We’ll respond within 24 hours.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700">Name</span>
            <input required name="name" value={form.name} onChange={handleChange} aria-label="Your name" className="mt-1 block w-full rounded-md border p-2" />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input required name="email" type="email" value={form.email} onChange={handleChange} aria-label="Email address" className="mt-1 block w-full rounded-md border p-2" />
          </label>
        </div>

        <label>
          <span className="text-sm text-gray-700">Company</span>
          <input name="company" value={form.company} onChange={handleChange} aria-label="Company" className="mt-1 block w-full rounded-md border p-2" />
        </label>

        <label>
          <span className="text-sm text-gray-700">Message</span>
          <textarea required name="message" value={form.message} onChange={handleChange} aria-label="Message" rows="6" className="mt-1 block w-full rounded-md border p-2"></textarea>
        </label>

        <div className="flex items-center gap-4">
          <button type="submit" className="px-5 py-2 bg-primary text-white rounded-md">Send Message</button>
          <div className="text-sm text-gray-600">{status}</div>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="font-semibold">Office</h3>
        <p className="text-sm text-gray-600">123 Business Road, City, Country</p>
        <div className="mt-4 w-full h-64 bg-gray-100 rounded-md overflow-hidden">
          <iframe title="Dealatecorp office location" src="https://www.google.com/maps/embed?pb=!1m18" className="w-full h-full border-0" loading="lazy" aria-hidden="false"></iframe>
        </div>
      </div>
    </div>
  )
}
