drop database if exists burgers;
create database burgers;

use burgers;

create table burgers(
    id integer auto increment not null,
    burger_name varchar,
    devoured boolean,
    primary key (id)
);