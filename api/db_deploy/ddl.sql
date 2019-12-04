
--1. Enable force sync in api/app.js
--2. run database usng npm run dev
--3. disable force sync
--4. in terminal navigate to db_deploy in api folder
--5. Run "psql -d FindIt_development -f ddl.sql"
\COPY bathrooms FROM 'bathrooms.csv' WITH(FORMAT csv);
\COPY users FROM 'users.csv' WITH(FORMAT csv);
\COPY reviews FROM 'reviews.csv' WITH(FORMAT csv);

select * from bathrooms;
select * from users;
select * from reviews;






