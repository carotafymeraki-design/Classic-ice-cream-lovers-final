-- Ice Cream Lovers CRM foundation. Apply to a secured Supabase project only after enabling Auth.
-- Never expose service-role credentials in Vite/browser code.
create extension if not exists pgcrypto;
create table if not exists products (
 id text primary key, name text not null, description text,
 price_zmw numeric(12,2) not null check(price_zmw>=0),
 image_path text, active boolean not null default true,
 stock_quantity integer check(stock_quantity>=0), created_at timestamptz default now()
);
create table if not exists customers (
 id uuid primary key default gen_random_uuid(),
 full_name text not null, phone text not null unique,
 marketing_opt_in boolean not null default false,
 created_at timestamptz not null default now()
);
create table if not exists orders (
 id uuid primary key default gen_random_uuid(),
 customer_id uuid not null references customers(id),
 status text not null default 'pending_confirmation'
 check(status in ('pending_confirmation','confirmed','preparing','out_for_delivery','delivered','cancelled')),
 delivery_mode text not null check(delivery_mode in ('asap','scheduled')),
 requested_delivery_at timestamptz,
 delivery_location text not null,
 delivery_notes text,
 subtotal_zmw numeric(12,2) not null check(subtotal_zmw>=0),
 delivery_fee_zmw numeric(12,2) check(delivery_fee_zmw>=0),
 payment_status text not null default 'unpaid'
 check(payment_status in ('unpaid','awaiting_verification','paid','refunded')),
 created_at timestamptz not null default now()
);
create table if not exists order_items (
 id uuid primary key default gen_random_uuid(),
 order_id uuid not null references orders(id) on delete cascade,
 product_id text references products(id),
 product_name text not null, quantity integer not null check(quantity>0),
 unit_price_zmw numeric(12,2) not null check(unit_price_zmw>=0)
);
create index if not exists orders_customer_idx on orders(customer_id,created_at desc);
create index if not exists orders_delivery_idx on orders(requested_delivery_at);
-- Access DENY by default for anon/authenticated API clients.
alter table products enable row level security;
alter table customers enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
-- Add explicit administrator policies and server-only order submission endpoint
-- after admin auth and verified identity are configured. No public read policies.
insert into products(id,name,description,price_zmw,image_path) values
 ('lolly12','Lolly Party Pack','12 assorted ice lollies',120,'/images/lolly-orange.jpg'),
 ('lolly24','Double Lolly Deal','24 assorted ice lollies',220,'/images/lolly-grape.jpg'),
 ('choc10','Nuttichox Pack','10 Nuttichox bars',150,'/images/nuttichox-bar.jpg'),
 ('choc20','Double Nuttichox Deal','20 Nuttichox bars',300,'/images/nuttichox-bar.jpg'),
 ('combo','Ultimate Ice Cream Combo','12 lollies and 10 Nuttichox bars',270,'/images/nuttichox-bar.jpg'),
 ('mansion','Mansion Deal','30 Nuttichox bars',450,'/images/nuttichox-bar.jpg')
on conflict(id) do nothing;
