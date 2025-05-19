create database electricity;
use electricity;

create table consumer(
    id int auto_increment primary key ,
    name varchar(255),
    address varchar(255),
    phone varchar(20)
)

create table billing(
    id int auto_increment primary key,
    consumer_id int unique not null,
    units int ,
    bill_amount decimal(10,2),
    bill_date date,
    foreign key(consumer_id) references consumer(id)
)