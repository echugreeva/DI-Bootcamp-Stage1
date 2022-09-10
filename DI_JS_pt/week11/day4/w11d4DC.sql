
-- create table items (
-- item_id serial primary key,
-- price int

-- )

-- insert into items values (
-- default, 5),
-- (
-- default, 10),
-- (
-- default, 1),
-- (
-- default, 2),
-- (
-- default, 4)


-- create table product_orders (
-- order_id int,
-- item_id int unique,
-- amount int not null,
-- 	constraint fk_item_id
-- 	foreign key (item_id) references items (item_id)
-- )

-- insert into product_orders values 
-- (1, 1, 3),
-- (1, 2, 2),
-- (2, 3, 1),
-- (2, 4, 5), 
-- (2, 5, 5)



-- create function order_price(order_id int)
-- returns int
-- language plpgsql
-- as
--  $$
--  declare
--  order_price integer;
--  begin
--  select sum (p.amount*i.price) as order_price 
--  into 
--  order_price
--  from product_orders p, items i where p.item_id = i.item_id and p.order_id = order_id;
 
--  return order_price;
--  end;
-- $$

-- select order_price(2)


--  select sum (p.amount * i.price) as order_price 
--  from product_orders p, items i
--  where p.item_id = i.item_id and p.order_id = 2


