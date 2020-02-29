drop database if exists burgers;
create database burgers;

use burgers;

create table burgers(
    id integer auto_increment not null,
    burger_name varchar(255),
    devoured boolean,
    primary key (id)
);