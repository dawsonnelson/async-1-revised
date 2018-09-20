
drop table if exists items;

create table if not exists items (
    bin_id text,
    bin_name VARCHAR(200),
    bin_price DECIMAL,
    picture text,
    shelf_id text
);
