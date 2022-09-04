
create table items (
item_id serial primary key,
price int

)

insert into items values (
default, 5),
(
default, 10),
(
default, 1),
(
default, 2),
(
default, 4)


create table product_orders (
order_id int,
item_id int unique,
amount int not null,
	constraint fk_item_id
	foreign key (item_id) references items (item_id)
)

insert into product_orders values 
(1, 1, 3),
(1, 2, 2),
(2, 3, 1),
(2, 4, 5), 
(2, 5, 5)



create function order_price_new1 (order_id int)
returns int
language plpgsql
as
 $$
 declare
 order_price_new1 integer;
 begin
 select (p.amount*i.price) as order_price_new1 from product_orders p, items i where p.item_id = i.item_id group by p.order_id;
 
 return order_price_new1;
 end;
$$

select order_price_new1(1)