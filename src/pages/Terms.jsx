import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">Legal</span>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-4 tracking-tight">Terms of Service</h1>
        <p className="text-muted mt-6 leading-relaxed">
          By ordering from Classic Ice Cream Lovers, you agree to the following terms.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Orders</h2>
        <p className="text-muted leading-relaxed">
          Orders are confirmed once we respond to your chat message with a price and delivery
          time. Availability of flavors and party packs may vary day to day.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Delivery</h2>
        <p className="text-muted leading-relaxed">
          We keep every order cold from our freezer to your door. Delivery windows are
          estimates and may shift slightly due to traffic or weather.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Payment</h2>
        <p className="text-muted leading-relaxed">
          Payment details are shared and confirmed directly in chat at the time of ordering.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10 mb-3">Contact</h2>
        <p className="text-muted leading-relaxed">
          Questions about these terms? Reach us at{' '}
          <a href="tel:+260970795947" className="text-primary-dark font-medium">+260 970 795 947</a>.
        </p>
      </div>
    </div>
  )
}
