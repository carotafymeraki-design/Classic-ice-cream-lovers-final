import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">Legal</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-4 tracking-tight">Privacy Policy</h1>
        <p className="text-muted mt-6 leading-relaxed">
          Classic Ice Cream Lovers collects only the information you share with us directly —
          your name, phone number, delivery address, and order details — so we can prepare and
          deliver your ice cream. We never sell your information to third parties.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Information we collect</h2>
        <p className="text-muted leading-relaxed">
          When you message us to place an order or ask a question, we collect your contact
          details and order preferences purely to fulfil and follow up on your request.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">How we use it</h2>
        <p className="text-muted leading-relaxed">
          Your information is used to confirm orders, coordinate delivery, and respond to
          enquiries. We keep it only as long as needed to serve you.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Contact</h2>
        <p className="text-muted leading-relaxed">
          Questions about this policy? Reach us at{' '}
          <a href="tel:+260970795947" className="text-primary-dark font-medium">+260 970 795 947</a>.
        </p>
      </div>
    </div>
  )
}
