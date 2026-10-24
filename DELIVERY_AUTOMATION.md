# Ice Cream Lovers — Delivery pricing, invoice and WhatsApp automation

## Dispatch setup
Origin landmark: **Woodlands near Crossroads Shopping Mall, Lusaka, Zambia**.
This is a landmark, **not a validated physical collection address**. Obtain exact dispatch GPS coordinates/address from the business before quoting distances or booking drivers.

## Current working UI
- Visitors can use the browser's permission-based GPS location or paste a Google Maps link.
- With explicit optional consent, a delivery pin and delivery notes are remembered **only in localStorage on that browser/device**. It can be loaded or forgotten at checkout. It is not a CRM customer account, not cross-device, and is not secure for shared devices.
- Checkout creates a **WhatsApp draft** with itemized product subtotal and delivery quote pending. Customer must press Send. No automatic replies or saved orders exist yet.

## Backend workflow to implement
1. Verify customer phone via one-time code/login before exposing centrally saved addresses. Obtain consent, save addresses in `customer_addresses` and provide delete/edit. Never expose one customer's address to another.
2. Secure server accepts cart SKU/qty, *looks up prices server-side*, and creates a pending order. Never trust the browser subtotal.
3. Parse coordinates from permission-granted GPS or customer-adjusted map pin. Validate a real pickup pin for Woodlands near Crossroads.
4. Query a road-routing service / courier integration **from the dispatch pin to customer pin**, rather than using straight-line distance. Choose the courier's live fee or a configured base fee + per-km schedule with limits/rounding and an ice-cream cold-chain surcharge if explicitly set by owner. Until enabled, set quote status `pending`, show fee **To be confirmed**, and do not send a final payable total.
5. Save quoted delivery fee, expiry and route estimate. Customer accepts confirmed total = server product subtotal + delivery fee.
6. Generate sequential unique invoice number server-side and itemized invoice. Avoid duplicate billing with an idempotency key.
7. Business-initiated automatic WhatsApp messages require a Meta WhatsApp Business Platform API account, opt-in, approved templates outside the 24-hour customer-service window, a webhook endpoint and verified sender. A `wa.me` URL alone does not automate sending.
8. After customer accepts total, send invoice and business **verified** mobile-money/bank payment instructions. Prompt: "Once paid, reply with your transaction reference or a screenshot." Mark `awaiting_verification`. Screenshots alone are not payment proof.
9. Verify actual payment through authorized provider callbacks or staff reconciliation, **not image inspection alone**; then move to `paid` and dispatch. Keep payment audit trail and handle disputes/refunds.
10. Advance orders may be reserved for chosen date/time but availability, operating dates and lead time should be confirmed before taking advance payment. Store Africa/Lusaka timezone explicitly.

## Draft WhatsApp template (after full integration)
ICE CREAM LOVERS
Invoice {{invoice_number}}
{{itemized_products}}
Products: K{{subtotal}}
Delivery from Woodlands/Crossroads: K{{delivery_fee}}
TOTAL: K{{total}}
Delivery pin: {{customer_confirmed_location}}
Delivery date/time: {{delivery_schedule}}
Please pay only to our verified details: {{business_verified_payment_details}}.
After paying, reply with your transaction reference or screenshot. We verify payment before dispatch.
If you haven't paid yet, your order remains pending.

## Needed configuration (not supplied)
- Exact GPS pickup address for dispatch and courier coverage.
- Delivery rate table or courier/provider API and credentials.
- Business payment recipient name, mobile money merchant/till numbers, payment provider verification credentials.
- WhatsApp Business Platform sender/account/template approvals and webhook credentials.
- Database/CRM hosting, admin authentication, policies and operational privacy statement.
Do not substitute invented account numbers, fees or API keys.
