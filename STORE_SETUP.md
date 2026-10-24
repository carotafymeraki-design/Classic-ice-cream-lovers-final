# Ice Cream Lovers — storefront and CRM foundation

## Current implementation
- Original website is preserved and linked to the new `/shop` route.
- Product catalogue includes the six agreed deals and editable quantities.
- Checkout collects name, phone, location / GPS map pin, delivery notes, delivery choice and future date/time.
- Checkout opens WhatsApp with a pre-filled order to +260970795947.
- **Not live order processing:** WhatsApp must actually be sent by the customer; there is no persistence yet.
- No actual payment collection or automated dispatch. Confirm delivery fees and payment instructions manually.
- `database/schema.sql` is a secure-deny-by-default relational CRM schema for product, customer and order history.

## Next integrations before launch as a CRM
1. Create Supabase project, run schema, configure staff login and role-based Row Level Security access.
2. Add a secure server-side order API with validation, idempotent creation, consent records, and rate limits. Save customer/order and return order reference *before* opening WhatsApp. Do not expose database administration secrets on the client.
3. Build protected staff dashboard to view customer order history, delivery queue and update statuses. Do not make customer data public.
4. Add consent and retention notices, opt-in-only promotions and account removal/export workflows consistent with applicable Zambian data-protection requirements.
5. Add verified mobile money/payment gateway with server-side payment callbacks and refund management, then delivery dispatch API integration if supported.
6. Add real product photos, branding/logo, inventory and pricing management in staff dashboard.
7. Test mobile checkout, geolocation permissions (HTTPS required), WhatsApp handoff, scheduled order timezone (Africa/Lusaka), data security and payment processes before production release.

Start locally with `npm install && npm run dev`, then visit `http://localhost:5173/shop`.

Prices are product subtotal only, exclusive of delivery fees. Future booking requests require manual availability confirmation. A requested delivery time does not itself reserve capacity.
