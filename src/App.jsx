import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Snowflake,
  PartyPopper,
  IceCream,
  IceCream2,
  Package,
  Candy,
  Truck,
  Menu,
  X,
  Upload,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_LINK = 'https://wa.me/260970795947'
const PHONE_DISPLAY = '+260 970 795 947'
const PHONE_TEL = '+260970795947'
const EMAIL = 'hello@classicicecreamlovers.com'

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Flavors', href: '#services' },
  { label: 'Why Us', href: '#pillars' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: PartyPopper,
    title: 'Nuttichox Party Pack',
    text: 'Our signature vanilla ice cream swirled with chocolate and peanuts, coated bars bundled up for birthdays and get-togethers.',
  },
  {
    icon: IceCream2,
    title: 'Lolly Party Pack',
    text: 'Assorted classic ice lollies — orange, grape, raspberry, lime, pineapple and creme soda — packed together for sharing.',
  },
  {
    icon: Package,
    title: 'Cups Party Combo',
    text: 'Individual vanilla ice cream cups, ready to grab and enjoy. Perfect for schools, offices and family gatherings.',
  },
  {
    icon: IceCream,
    title: 'Classic Ice Lollies',
    text: 'Six fruity flavors made the classic way — real fruit taste in every lick, one stick at a time.',
  },
  {
    icon: Candy,
    title: 'Nuttichox Bars',
    text: 'Rich vanilla ice cream dipped in chocolate and studded with crunchy peanuts. A Classic favorite.',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    text: 'Chat with us and we bring your order straight to your door across Lusaka — still frozen solid.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-11 items-center justify-center rounded-2xl bg-white px-1.5 py-1 shadow-sm ring-1 ring-primary/15">
              <img src="/images/logo.png" alt="Classic Ice Cream Lovers" className="h-9 w-auto object-contain" />
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Order via Chat
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <img src="/images/logo.png" alt="Classic Ice Cream Lovers" className="h-10 w-auto object-contain" />
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Order via Chat
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
      gsap.from('.hero-card', { y: 30, opacity: 0, scale: 0.9, duration: 1, delay: 0.6, stagger: 0.15, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-deep">
      {/* Gradient wash background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep via-[#241541] to-primary-dark/30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 15%, rgba(212,175,55,0.22), transparent 55%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 8% 85%, rgba(107,63,166,0.5), transparent 55%)' }} />

      {/* Floating product cards */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="hero-card absolute top-[10%] right-[6%] w-36 lg:w-44 bg-white rounded-3xl p-2.5 shadow-2xl shadow-black/50 rotate-3 animate-float">
          <img src="/images/nuttichox-bar.jpg" alt="Nuttichox ice cream bar" className="w-full aspect-square object-contain rounded-xl" />
        </div>
        <div className="hero-card absolute top-[42%] right-[24%] w-28 lg:w-36 bg-white rounded-3xl p-2.5 shadow-2xl shadow-black/50 -rotate-2 animate-float" style={{ animationDelay: '1.5s' }}>
          <img src="/images/vanilla-cup.jpg" alt="Classic vanilla ice cream cup" className="w-full aspect-square object-contain rounded-xl" />
        </div>
        <div className="hero-card absolute top-[62%] right-[2%] w-24 lg:w-28 bg-white rounded-2xl p-2 shadow-xl shadow-black/50 rotate-2 animate-float" style={{ animationDelay: '3s' }}>
          <img src="/images/lolly-grape.jpg" alt="Classic grape ice lolly" className="w-full aspect-square object-contain rounded-lg" />
        </div>
      </div>

      {/* Decorative sparkle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[12%] h-1.5 w-1.5 rounded-full bg-accent/70 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] left-[20%] h-1 w-1 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[35%] left-[6%] h-1 w-1 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[100dvh] flex flex-col justify-end">
        <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-white/70 mb-6">
          Classic Ice Cream Lovers · Lusaka, Zambia
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] max-w-3xl">
          <span className="hero-line-1 block">Rich, Smooth,</span>
          <span className="hero-line-2 block font-serif italic font-medium text-accent">Unforgettable.</span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
          Handcrafted ice lollies, Nuttichox bars, vanilla tubs and party packs — made with real
          cream and real cocoa, delivered fresh across Lusaka.
          <span className="text-white"> Sweet moments are just a message away.</span>
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30"
          >
            Order via Chat <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hero-cta magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Flavor Shuffler
---------------------------------------------------------------- */
function FlavorShuffler() {
  const items = [
    { tag: 'Nuttichox', label: 'Vanilla, chocolate & peanuts', size: 'Bar', img: '/images/nuttichox-bar.jpg' },
    { tag: 'Ice Lolly', label: 'Six classic fruit flavors', size: 'Lolly', img: '/images/lolly-orange.jpg' },
    { tag: 'Party Combo', label: 'Vanilla cups for every guest', size: 'Cup', img: '/images/vanilla-cup-small.jpg' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.size}</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-14 w-14 shrink-0 rounded-2xl bg-background overflow-hidden flex items-center justify-center">
                <img src={item.img} alt={item.tag} className="h-full w-full object-contain" />
              </span>
              <div className="font-display text-base font-semibold text-ink leading-tight">
                {item.label}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Signature Scoop Animation
---------------------------------------------------------------- */
function Mascot({ id, x, scale, delay, expression = 'smile' }) {
  const clipId = `mascot-shirt-${id}`
  return (
    <div
      className="absolute bottom-2"
      style={{
        left: x,
        transform: `translateX(-50%) scale(${scale})`,
        transformOrigin: 'bottom center',
        animation: `mascot-bounce 1.8s ease-in-out ${delay} infinite`,
      }}
    >
      <svg width="46" height="64" viewBox="0 0 46 64">
        <path
          d="M8 22 Q8 2 23 2 Q38 2 38 22 L38 50 Q38 62 23 62 Q8 62 8 50 Z"
          fill="#FFFFFF"
          stroke="#E7E1F0"
          strokeWidth="2"
        />
        <circle cx="14" cy="13" r="1.6" fill="#D4AF37" />
        <circle cx="30" cy="9" r="1.3" fill="#D4AF37" />
        <circle cx="33" cy="19" r="1.5" fill="#D4AF37" />
        <circle cx="11" cy="23" r="1.3" fill="#D4AF37" />
        <defs>
          <clipPath id={clipId}>
            <path d="M8 40 L38 40 L38 50 Q38 62 23 62 Q8 62 8 50 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect x="8" y="40" width="30" height="22" fill="#6B3FA6" />
          {[11, 16, 21, 26, 31, 36].map((sx) => (
            <rect key={sx} x={sx} y="40" width="2" height="22" fill="#9B72CE" />
          ))}
        </g>
        {expression === 'wink' ? (
          <>
            <path d="M14 26 q2 -3 4 0" stroke="#241531" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <circle cx="29" cy="26" r="1.8" fill="#241531" />
          </>
        ) : (
          <>
            <circle cx="16" cy="26" r="1.8" fill="#241531" />
            <circle cx="29" cy="26" r="1.8" fill="#241531" />
          </>
        )}
        <path
          d={expression === 'laugh' ? 'M14 32 Q23 40 32 32' : 'M15 32 Q23 37 31 32'}
          stroke="#241531"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="11" cy="30" r="2" fill="#D4AF37" fillOpacity="0.35" />
        <circle cx="34" cy="30" r="2" fill="#D4AF37" fillOpacity="0.35" />
      </svg>
    </div>
  )
}

function NuttichoxFamily() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(6)

  const statuses = [
    { text: 'Always on a mission', label: 'Mission', tone: 'primary' },
    { text: 'Sharing a nutty smile', label: 'Nutty', tone: 'accent' },
    { text: 'Spreading happiness', label: 'Joy', tone: 'emerald' },
    { text: 'Family reunited!', label: 'Family', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Family') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const confetti = [
    { left: '10%', delay: '0.0s', dur: '2.6s', size: 8, kind: 'nut' },
    { left: '22%', delay: '1.3s', dur: '3.0s', size: 7, kind: 'ribbon' },
    { left: '68%', delay: '0.6s', dur: '2.8s', size: 8, kind: 'nut' },
    { left: '80%', delay: '1.8s', dur: '2.4s', size: 7, kind: 'ribbon' },
    { left: '90%', delay: '0.9s', dur: '3.1s', size: 8, kind: 'nut' },
    { left: '4%', delay: '2.0s', dur: '2.7s', size: 7, kind: 'ribbon' },
    { left: '55%', delay: '0.4s', dur: '2.9s', size: 8, kind: 'nut' },
  ]

  const ripples = [
    { left: '20%', delay: '0.2s' },
    { left: '50%', delay: '1.0s' },
    { left: '78%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-600' : status.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'
  const toneDot = status.tone === 'emerald' ? 'bg-emerald-500' : status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F0FB 70%, #ECE2F7 100%)' }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-primary-light/20 blur-xl" />

      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <svg className="h-3.5 w-3.5 text-primary-dark" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-6.7-4.3-9.3-8.6C.9 9.3 2.2 5.6 5.6 4.8c2-.5 4 .3 5.2 2 .1.1.3.1.4 0 1.2-1.7 3.2-2.5 5.2-2 3.4.8 4.7 4.5 2.9 7.6C18.7 16.7 12 21 12 21Z" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">Mission Happiness</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">{String(count).padStart(2, '0')}</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">smiles today</span>
        </div>
      </div>

      {/* Falling confetti */}
      <div className="absolute inset-x-0 top-10 bottom-11 overflow-hidden">
        {confetti.map((d, i) =>
          d.kind === 'nut' ? (
            <svg
              key={i}
              className="absolute top-0"
              style={{
                left: d.left,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
                filter: 'drop-shadow(0 1px 2px rgba(212,175,55,0.35))',
                transform: 'translateX(-50%)',
              }}
              viewBox="0 0 12 12"
            >
              <circle cx="6" cy="6" r="5" fill="#D4AF37" />
              <circle cx="4.5" cy="4.5" r="1.3" fill="#FCE9A8" />
            </svg>
          ) : (
            <svg
              key={i}
              className="absolute top-0"
              style={{
                left: d.left,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
                filter: 'drop-shadow(0 1px 2px rgba(107,63,166,0.35))',
                transform: 'translateX(-50%) rotate(20deg)',
              }}
              viewBox="0 0 12 12"
            >
              <rect x="2" y="4" width="8" height="4" rx="2" fill="#6B3FA6" />
            </svg>
          )
        )}
      </div>

      {/* Stage floor */}
      <svg className="absolute bottom-9 left-3 right-3 h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
        <path d="M 0,4 Q 12.5,1 25,4 T 50,4 T 75,4 T 100,4 T 125,4 T 150,4 T 175,4 T 200,4"
          fill="none" stroke="#9B72CE" strokeOpacity="0.4" strokeWidth="1.2" />
      </svg>

      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent-dark/50"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* The Nuttichox family, bouncing on the stage */}
      <Mascot id="baby" x="18%" scale={0.55} delay="0.3s" expression="laugh" />
      <Mascot id="mama" x="50%" scale={0.85} delay="0s" expression="smile" />
      <Mascot id="papa" x="80%" scale={0.7} delay="0.6s" expression="wink" />

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span key={status.text} className={`font-mono text-[10px] truncate ${toneText}`} style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 85px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mascot-bounce {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -6px; }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Order Scheduler
---------------------------------------------------------------- */
function OrderScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 4

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">This Week</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Delivery
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Delivery Booked' : 'Pick a Day'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#2A1B10" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Our Favorites',
      heading: 'Signature Range',
      sub: 'Bars, lollies & cups',
      text: 'From Nuttichox bars to fruity ice lollies to vanilla cups — a flavor for every craving, always made the classic way.',
      Component: FlavorShuffler,
    },
    {
      eyebrow: '02 / Meet the Family',
      heading: 'The Nuttichox Family',
      sub: 'Always on a mission for happiness',
      text: 'Meet Papa, Mama and baby Nuttichox — our nutty chocolate-coated mascots, always on a mission to make everyone happy.',
      Component: NuttichoxFamily,
    },
    {
      eyebrow: '03 / Ordering',
      heading: 'Party Delivery',
      sub: 'Book a day, we deliver',
      text: 'Planning a birthday or get-together? Chat with us, pick a day, and we will have your party pack ready and delivered.',
      Component: OrderScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ What we scoop</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three flavors of
            <span className="block font-serif italic font-medium text-primary-dark mt-1">pure delight.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.8} />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Flavors',
      target: 6,
      suffix: '+',
      label: 'signature flavors & packs',
      desc: 'From Nuttichox bars to six fruity ice lollies — a flavor for every mood, always made the classic way.',
    },
    {
      n: '02',
      title: 'Quality',
      target: 100,
      suffix: '%',
      label: 'real cream, real cocoa',
      desc: 'Rich, smooth, unforgettable flavors — no shortcuts, just proper ice cream in every single batch.',
    },
    {
      n: '03',
      title: 'Ordering',
      target: 24,
      suffix: '/7',
      label: 'order by chat',
      desc: 'Sweet moments are just a message away. Chat with us anytime for orders, flavor requests and deliveries.',
    },
  ]

  return (
    <section id="pillars" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">╱ Why us</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers behind
              <span className="block font-serif italic font-medium text-primary-dark">the sweetness.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three numbers that define how we scoop. Not marketing — just what we deliver, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{p.n} / {p.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Message Us',
      tagline: 'Tell us what you’re craving.',
      text: 'Chat with us on WhatsApp — pick your flavors, a party pack, or a custom order. No forms, no waiting on hold.',
      image: '/images/nuttichox-bar.jpg',
      alt: 'Classic Nuttichox ice cream bar',
      meta: 'Step 1 / Order',
    },
    {
      num: '02',
      title: 'We Prepare Fresh',
      tagline: 'Churned & packed to order.',
      text: 'Every cup, lolly and bar is prepared fresh from real cream and cocoa, then packed cold and ready to travel.',
      image: '/images/vanilla-tub.jpg',
      alt: 'Classic vanilla ice cream tub',
      meta: 'Step 2 / Prepare',
    },
    {
      num: '03',
      title: 'Delivered Cold',
      tagline: 'Straight to your door.',
      text: 'We deliver across Lusaka, still frozen solid — so every scoop is as rich and smooth as the moment it was made.',
      image: '/images/lolly-raspberry.jpg',
      alt: 'Classic assorted ice lollies',
      meta: 'Step 3 / Deliver',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ How it works</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                    Classic Protocol
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-gradient-to-br from-primary-light/20 via-background to-accent/10 flex items-center justify-center p-10">
                <img src={step.image} alt={step.alt} loading="lazy" className="max-h-[75%] max-w-[75%] object-contain drop-shadow-2xl" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-ink/50">
                  {step.num} / Classic Ice Cream Lovers
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Services Grid — 6 dark tiles
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">╱ Everything we make</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              The full lineup,
              <span className="block font-serif italic font-medium text-accent">one classic brand.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            From single lollies to full party packs — we cover every craving. Delivered fresh across Lusaka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-accent group-hover:text-deep" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Quality You Can Taste',
      text: 'Rich, smooth, unforgettable flavors in every batch — made with real cream and real cocoa.',
    },
    {
      Icon: Snowflake,
      title: 'Cold-Chain Delivery',
      text: 'Kept frozen from our freezer to your door, across Lusaka — every single time.',
    },
    {
      Icon: MessageCircle,
      title: 'Always In Reach',
      text: 'Chat with us anytime for orders, inquiries, flavor requests, and deliveries.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Why trust us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than just dessert.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Order via Chat <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Ready for something
              <span className="block font-serif italic font-medium text-primary-dark">sweet?</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Message us your order, party pack request, or question — sweet moments are just a message away.
            </p>

            <div className="mt-10 space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <MessageCircle className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Chat with us</span>
                  <span className="font-display font-semibold text-ink text-lg">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <a href={`mailto:${EMAIL}`} className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Email us</span>
                  <span className="font-display font-semibold text-ink text-lg">{EMAIL}</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Delivering across</span>
                  <span className="font-display font-semibold text-ink text-lg">Lusaka, Zambia</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Your Information</p>
              <p className="text-sm text-muted leading-relaxed">
                We only use your details to prepare and deliver your order. No spam, no third-party marketing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Phone Number" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Area / Suburb" value={form.area} onChange={(v) => setForm({ ...form, area: v })} />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">Your Order *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us your flavors, quantities, and preferred delivery time..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    ref={dropRef}
                    onDragOver={(e) => { e.preventDefault(); dropRef.current?.classList.add('!border-primary', '!bg-primary/5') }}
                    onDragLeave={() => dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')}
                    onDrop={(e) => { e.preventDefault(); dropRef.current?.classList.remove('!border-primary', '!bg-primary/5'); handleFiles(e.dataTransfer.files) }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach a reference photo</p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5 images)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We reply as fast as we can. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Order Request'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thanks — we'll be in touch!</h3>
                  <p className="text-muted max-w-md mx-auto">
                    Sweet moments are just a message away. We'll confirm your order shortly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Sweet moments,
            <span className="font-serif italic font-medium text-accent block">one scoop away.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Classic Ice Cream Lovers — rich, smooth, unforgettable flavors delivered fresh across Lusaka.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto"
            >
              Order Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5">
                <img src="/images/logo.png" alt="Classic Ice Cream Lovers" className="h-full w-full object-contain" />
              </span>
            </div>
            <p className="font-serif italic text-white/70 text-lg max-w-xs">
              Sweet moments are just a message away.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="relative h-2 w-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Orders Open</span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Party Packs</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-accent transition text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#pillars" className="text-white/65 hover:text-accent transition text-sm">Why Us</a></li>
              <li><a href="#process" className="text-white/65 hover:text-accent transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-accent transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href={`tel:${PHONE_TEL}`} className="text-white/65 hover:text-accent transition text-sm">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-white/65 hover:text-accent transition text-sm">{EMAIL}</a></li>
              <li className="text-white/65 text-sm">Lusaka, Zambia</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Orders Open · Ready to Deliver
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-accent transition">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition">Terms</Link>
            <span>© 2026 Classic Ice Cream Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
