
--enable force synce in App.js and then run this script
-- psql -d FindIt_development -f ddl.sql
\COPY bathrooms FROM 'bathrooms.csv' WITH(FORMAT csv);
\COPY users FROM 'users.csv' WITH(FORMAT csv);
\COPY reviews FROM 'reviews.csv' WITH(FORMAT csv);

select * from bathrooms;
select * from users;
select * from reviews;






