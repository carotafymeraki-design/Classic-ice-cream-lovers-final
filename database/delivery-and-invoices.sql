-- Next phase: repeat delivery addresses, dispatch quotes and invoice tracking
-- Intended to run AFTER database/schema.sql
create table if not exists customer_addresses (
 id uuid primary key default gen_random_uuid(),
 customer_id uuid not null references customers(id) on delete cascade,
 label text not null default 'Home',
 location_url text not null,
 notes text,
 latitude double precision check(latitude between -90 and 90),
 longitude double precision check(longitude between -180 and 180),
 consented_to_save_at timestamptz not null default now(),
 created_at timestamptz not null default now()
);
create index if not exists customer_addresses_customer_idx on customer_addresses(customer_id);
create table if not exists delivery_quotes (
 id uuid primary key default gen_random_uuid(),
 order_id uuid not null references orders(id) on delete cascade,
 dispatch_label text not null default 'Woodlands near Crossroads Shopping Mall, Lusaka',
 road_distance_km numeric(9,2) check(road_distance_km>=0),
 fee_zmw numeric(12,2) check(fee_zmw>=0),
 quote_source text not null check(quote_source in ('manual','courier_api','configured_rate')),
 status text not null default 'pending' check(status in ('pending','quoted','accepted','expired')),
 expires_at timestamptz,
 created_at timestamptz not null default now()
);
create table if not exists invoices (
 id uuid primary key default gen_random_uuid(),
 order_id uuid not null references orders(id) on delete cascade,
 invoice_number text unique not null,
 product_subtotal_zmw numeric(12,2) not null check(product_subtotal_zmw>=0),
 delivery_fee_zmw numeric(12,2) not null check(delivery_fee_zmw>=0),
 total_zmw numeric(12,2) generated always as (product_subtotal_zmw + delivery_fee_zmw) stored,
 status text not null default 'issued' check(status in ('issued','void','paid')),
 payment_reference text,
 payment_verified_at timestamptz,
 created_at timestamptz not null default now()
);
alter table customer_addresses enable row level security;
alter table delivery_quotes enable row level security;
alter table invoices enable row level security;
-- No anonymous access policies. Use authenticated, role-checked server-side API.
