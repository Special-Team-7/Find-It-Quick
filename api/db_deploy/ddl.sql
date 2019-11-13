BEGIN;



-- Change reading in data from stdin to actual file reading
-- make a csv for each respective table

COPY users(user_id,pname) FROM stdin;
"A1"	"Frank"	"f@gmail.com"
"A2"	"Maria"	"m@gmail.com"
"B1"	"Hubert"	"f@gmail.com"
\.

COPY bathroom(id,name,address,latitude,longitude,category) FROM stdin;
20	"McDonalds"	"1188 6th Ave, New York, NY 10036"	40.757561	-73.981667	


\.

COPY review(rev_id,user_id,bath_id,rating) FROM stdin;
1	12	20	1
2	13	21	4
3	13	22	3
4	14	20	5
5	15	22	1
6	16	21	3
\.




COMMIT;
ANALYZE users;
ANALYZE bathroom;
ANALYZE review;


