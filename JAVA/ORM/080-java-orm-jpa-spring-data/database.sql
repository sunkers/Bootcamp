create table product (
	id serial,
	sku varchar(10) not null,
	name varchar(50) not null,
	price decimal(5, 2) not null
);

create table item (
	id serial,
	order_id int not null,
	product_id int not null,
	quantity int not null,
	total decimal(5, 2) not null
);

create table address (
	id int not null,
	street varchar(255) not null,
	postal_code varchar(5) not null
);

create table customer (
	id serial,
	name varchar(20) not null,
	birth_date date not null
);

create table email_address (
	id serial,
	customer_id int not null,
	address varchar(255) not null
);

create table purchase_order (
	id serial,
	customer_id int not null,
	order_date date not null
);

ALTER TABLE product ADD PRIMARY KEY (id);
ALTER TABLE item ADD PRIMARY KEY (id);
ALTER TABLE address ADD PRIMARY KEY (id);
ALTER TABLE customer ADD PRIMARY KEY (id);
ALTER TABLE email_address ADD PRIMARY KEY (id);
ALTER TABLE purchase_order ADD PRIMARY KEY (id);

ALTER TABLE item ADD CONSTRAINT fk_item_product FOREIGN KEY (product_id) REFERENCES product (id);
ALTER TABLE item ADD CONSTRAINT fk_item_purchaseorder FOREIGN KEY (order_id) REFERENCES purchase_order (id);
ALTER TABLE address ADD CONSTRAINT fk_address_customer FOREIGN KEY (id) REFERENCES customer (id);
ALTER TABLE purchase_order ADD CONSTRAINT fk_purchaseorder_customer FOREIGN KEY (customer_id) REFERENCES customer (id);
ALTER TABLE email_address  ADD CONSTRAINT fk_emailaddress_customer FOREIGN KEY (customer_id) REFERENCES customer (id);

ALTER TABLE product ADD CONSTRAINT un_sku UNIQUE (sku);
ALTER TABLE item ADD CONSTRAINT un_item UNIQUE (order_id, product_id);

insert into product (name, sku, price) values ('Muffin', 'JdC-36-907', 48.37);
insert into product (name, sku, price) values ('Cabbage', '9cQ-38-222', 37.99);
insert into product (name, sku, price) values ('Ice Cream', '76G-21-610', 75.98);
insert into product (name, sku, price) values ('Pasta', '7np-26-555', 94.55);
insert into product (name, sku, price) values ('Jam', 'xua-26-935', 82.09);
insert into product (name, sku, price) values ('Soup', 'pbL-84-840', 66.3);
insert into product (name, sku, price) values ('Food Colouring', '1Yq-87-718', 80.53);
insert into product (name, sku, price) values ('Sugar', 'BLS-67-161', 45.36);
insert into product (name, sku, price) values ('Coffee', '3dh-58-403', 8.64);
insert into product (name, sku, price) values ('Beer', 'kyH-15-956', 8.26);

insert into customer (name, birth_date) values ('Cléopatre', '1991-08-13 08:27:47');
insert into customer (name, birth_date) values ('Adélie', '2000-09-07 20:58:33');
insert into customer (name, birth_date) values ('Loïc', '1991-11-04 20:29:14');
insert into customer (name, birth_date) values ('Mélodie', '1991-02-15 23:04:49');
insert into customer (name, birth_date) values ('Chloé', '1999-02-07 10:34:38');
insert into customer (name, birth_date) values ('Josée', '1980-06-03 11:49:19');
insert into customer (name, birth_date) values ('Daniel', '1987-11-27 23:57:52');
insert into customer (name, birth_date) values ('Eliot', '1988-01-17 03:42:22');
insert into customer (name, birth_date) values ('Rafael', '1985-03-26 11:26:46');
insert into customer (name, birth_date) values ('Pascal', '1997-05-09 16:05:12');

insert into address (id, street, postal_code) values (1, '8921 Place de la Madeleine', '00400');
insert into address (id, street, postal_code) values (2, '8253 rue des Dunes', '00520');
insert into address (id, street, postal_code) values (3, '5459 Place du Jeu de Paume', '00950');
insert into address (id, street, postal_code) values (4, '3598 rue Nationale', '00220');
insert into address (id, street, postal_code) values (5, '7785 rue Gustave Eiffel', '00380');
insert into address (id, street, postal_code) values (6, '1914 rue des Soeurs', '00900');
insert into address (id, street, postal_code) values (7, '8258 place Stanislas', '00540');
insert into address (id, street, postal_code) values (8, '3936 quai Saint-Nicolas', '00110');
insert into address (id, street, postal_code) values (9, '5069 Avenue des Près', '00430');
insert into address (id, street, postal_code) values (10, '1487 rue de Raymond Poincaré', '00480');

insert into email_address (customer_id, address) values (1, 'cleopatre@gmail.com');
insert into email_address (customer_id, address) values (1, 'cleopatre@microsoft.com');
insert into email_address (customer_id, address) values (2, 'adelie@amazon.com');
insert into email_address (customer_id, address) values (3, 'loic@microsoft.com');
insert into email_address (customer_id, address) values (4, 'chloe@microsoft.com');
insert into email_address (customer_id, address) values (5, 'josee@microsoft.com');

insert into purchase_order (customer_id, order_date) values (1, '2023-01-09 16:05:12');
insert into purchase_order (customer_id, order_date) values (2, '2021-01-09 16:05:12');

insert into item (order_id, product_id, quantity, total) values (1, 1, 1, 48.37);
insert into item (order_id, product_id, quantity, total) values (2, 2, 1, 37.99);

/*
** Exercice N°2
*/
/* Création d'une table de jointure nommée preferred product entre product et customer */
CREATE TABLE preferred_product (
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer (id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product (id)
);
