BEGIN;

DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS bathroom CASCADE;

DROP TABLE IF EXISTS review CASCADE;
--RUNME psql -d FindIt_development -f ddl.sql

CREATE TABLE users (
	user_id integer NOT NULL,
	pname text 
);

CREATE TABLE bathroom(
	bath_id integer NOT NULL,
	name text NOT NULL,
	location text NOT NULL,
	rating integer DEFAULT 1 CHECK (rating>0 AND rating<6)
); 

CREATE TABLE review(
	rev_id integer NOT NULL,
	user_id integer NOT NULL,
	bath_id integer NOT NULL,
	rating integer NOT NULL CHECK (rating>0 AND rating<6)
);





-- Change reading in data from stdin to actual file reading
-- make a csv for each respective table

COPY users(user_id,pname) FROM stdin;
12	"Frank"
13	"Maria"
14	"Hubert"
15	"Robert"
16	"Phillip"
\.

COPY bathroom(bath_id,name,location,rating) FROM stdin;
20	"McDonalds"	"Bronx"	1
21	"Starbucks"	"Manhattan"	3
22	"Alexander Park"	"Brooklyn"	4
\.

COPY review(rev_id,user_id,bath_id,rating) FROM stdin;
1	12	20	1
2	13	21	4
3	13	22	3
4	14	20	5
5	15	22	1
6	16	21	3
\.



ALTER TABLE ONLY users
	ADD CONSTRAINT users_pkey PRIMARY KEY(user_id);

ALTER TABLE ONLY bathroom 
	ADD CONSTRAINT buyers_pkey PRIMARY KEY(bath_id);

ALTER TABLE ONLY review
	ADD CONSTRAINT transactions_pkey PRIMARY KEY(rev_id);

-- this is for setting references 
ALTER TABLE ONLY review
	ADD CONSTRAINT review_user_id_fkey FOREIGN KEY(user_id)
       	REFERENCES users(user_id);

ALTER TABLE ONLY review
	ADD CONSTRAINT review_bath_id_fkey FOREIGN KEY(bath_id)
	REFERENCES bathroom(bath_id);

COMMIT;
ANALYZE users;
ANALYZE bathroom;
ANALYZE review;


