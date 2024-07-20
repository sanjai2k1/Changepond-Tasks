\i C:/Users/sanjai.j/Downloads/clubdata.sql/clubdata.sql

Retrieve everything from a table

select name,
CASE
    WHEN monthlymaintenance >100 THEN 'Expensive'
    ELSE 'cheap'
END from facilities;


select * from members where joindate :: date >= date '2012-09-01';


select distinct(surname) from members order by surname asc limit 10;



select surname from members union select name from facilities; 



select max(joindate) from members;


select firstname,surname,joindate from members where joindate = 
(select max(joindate) from members);



select starttime from bookings where memid = (select memid from members where  firstname = 'David' and surname = 'Farrell');


SELECT 
b.starttime,f.name
FROM facilities as f
inner join bookings as b using(facid) 
where f.name like 'Tennis%' and Date(b.starttime ::date) = '2012-09-21';





select firstname,surname from members where recommended by is not null;

select firstname,surname from members where memid in (select distinct(recommendedby) from members) order by surname,firstname;  

select m.firstname,m.surname,r.firstname,r.surname from members as m  join members as r on where m.memid = r.recommendedby;

SELECT m.firstname, m.surname, r.firstname AS recommender_firstname, r.surname AS recommender_surname
FROM members AS m
LEFT JOIN members AS r ON m.recommendedby = r.memid order by surname, firstname;



SELECT CONCAT(members.firstname, ' ', members.surname) AS name, facilities.name FROM members INNER JOIN bookings USING(memid) INNER JOIN facilities ON facilities.facid = bookings.facid 
WHERE facilities.name LIKE 'Tennis%';



select mems.firstname || ' ' || mems.surname as member, facs.name as facility, case when mems.memid = 0 then bks.slots*facs.guestcost else bks.slots*facs.membercost end as cost from cd.members mems inner join cd.bookings bks on mems.memid = bks.memid inner join cd.facilities facs on bks.facid = facs.facid where bks.starttime >= '2012-09-14' and bks.starttime < '2012-09-15' and ( (mems.memid = 0 and bks.slots*facs.guestcost > 30) or (mems.memid != 0 and bks.slots*facs.membercost > 30) ) order by cost desc;





SELECT CONCAT(m.firstname, ' ', m.surname) AS member_name, 
(SELECT CONCAT(r.firstname, ' ', r.surname) 
FROM members AS r 
WHERE r.memid = m.recommendedby) AS recommender_name
FROM members AS m order by member_name;

select firstname,(select facid from bookings as b where b.memid =  m.memid  ) from members an m;

select member, facility, cost from (
	select 
		mems.firstname || ' ' || mems.surname as member,
		facs.name as facility,
		case
			when mems.memid = 0 then
				bks.slots*facs.guestcost
			else
				bks.slots*facs.membercost
		end as cost
		from
			cd.members mems
			inner join cd.bookings bks
				on mems.memid = bks.memid
			inner join cd.facilities facs
				on bks.facid = facs.facid
		where
			bks.starttime >= '2012-09-14' and
			bks.starttime < '2012-09-15'
	) as bookings
	where cost > 30
order by cost desc; 





Insert into facilities values(9,'Spa',20,30,100000,800);

Insert into facilities values(9,'Spa',20,30,100000,800),
(10,'Squash Court 2',3.5,17.5,5000,80);



ALTER TABLE facilities ADD COLUMN new_facid SERIAL;
UPDATE facilities SET new_facid = facid;
ALTER TABLE facilities DROP COLUMN facid;
ALTER TABLE facilities RENAME COLUMN new_facid TO facid;




insert into cd.facilities (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance) select (select max(facid) from cd.facilities)+1, 'Spa', 20, 30, 100000, 800;

update facilities set initialoutlay = 10000 where facid = (

select facid from facilities where name like 'Tennis Court 2');



update cd.facilities
    set
        membercost = 6,
        guestcost = 30
    where facid in (0,1);  


update facilities set membercost = membercost+0.1*(select membercost from facilities where name = 'Tennis Court 1'),
guestcost = guestcost+0.1*(select membercost from facilities where name = 'Tennis Court 1') where name = 'Tennis Court 2';
 DELETE FROM bookings;






delete from members where memid = (select memid from members where memid not in
(select memid from bookings));


delete from members where memid In (select memid from members where memid not in
(select memid from bookings));




select count(*) from facilities;





select count(*) from facilities where guestcost >= 10 ;



select * from members order by recommendby;

select recommendedby,count(recommendedby) from members group by recommendedby  order by recommendedby;


select * from facilities order by facid;



select  facid ,count(facid) from bookings inner join facilities using (facid) group by facid order by facid ; 



SELECT facid ,count(facid)
FROM bookings 
WHERE starttime::date >= '2012-09-01' 
AND starttime::date < '2012-10-01' group by facid order by facid;


SELECT facid,EXTRACT(month FROM starttime ::date) AS month, sum(slots) from  bookings where EXTRACT(year FROM starttime :: date) = 2012 group by month,facid order by facid ;

select count(distinct(memid)) from bookings inner join facilities using(facid);


select facid , sum(slots) as tot from bookings group by facid having sum(slots) >1000 order by facid;\

select name,sum( slots *
case
 WHEN memid = 0 THEN guestcost 
    ELSE membercost

end
) as revenue

 from bookings inner join facilities using(facid) group by name,facid order by revenue;

select name,sum( slots *
case
 WHEN memid = 0 THEN guestcost 
    ELSE membercost

end
) as revenue

 from bookings inner join facilities using(facid)
 group by name,facid 
HAVING SUM(slots * 
CASE 
WHEN memid = 0 THEN guestcost 
ELSE membercost 
END) < 1000
order by revenue ;


select facid,sum( slots *
case
 WHEN memid = 0 THEN guestcost 
    ELSE membercost

end
) as revenue

 from bookings inner join facilities using(facid)
 group by name,facid 

order by revenue desc limit 1;






select facid ,extract(month FROM  starttime::date) as month ,sum(slots) from bookings where starttime >= '2012-01-01'
and starttime < '2013-01-01' 
group by rollup(facid ,month ) order by facid,month;






select facid,name,sum(slots)*0.5 from bookings inner join facilities using(facid) group by facid,name order by facid;



select firstname,surname,memid,(select starttime from bookings where starttime :: date  >= '2012-09-01' and m.memid= bookings.memid order by starttime limit 1) from members as m;





select (select count(*) from cd.members) as count, firstname, surname
	from cd.members
order by joindate;



select memid+1 as row_number,firstname,surname from members order by joindate;





select facid,sum(slots) from bookings group by facid order by sum(slots) desc limit 1;

select firstname,surname ,(select sum(slots) from bookings where bookings.memid = m.memid group by bookings.memid) as sl , row_number() over(order by (select sum(slots) from bookings where bookings.memid = m.memid group by bookings.memid) desc) as rank from members as m ;


select firstname, surname, hours, rank() over (order by hours desc) from
	(select firstname, surname,
		((sum(bks.slots)+10)/20)*10 as hours

		from cd.bookings bks
		inner join cd.members mems
			on bks.memid = mems.memid
		group by mems.memid
	) as subq
order by rank, surname, firstname;





select name, rank from (
	select facs.name as name, rank() over (order by sum(case
				when memid = 0 then slots * facs.guestcost
				else slots * membercost
			end) desc) as rank
		from cd.bookings bks
		inner join cd.facilities facs
			on bks.facid = facs.facid
		group by facs.name
	) as subq
	where rank <= 3
order by rank;


select name, case when class=1 then 'high'
		when class=2 then 'average'
		else 'low'
		end revenue
	from (
		select facs.name as name, ntile(3) over (order by sum(case
				when memid = 0 then slots * facs.guestcost
				else slots * membercost
			end) desc) as class
		from cd.bookings bks
		inner join cd.facilities facs
			on bks.facid = facs.facid
		group by facs.name
	) as subq
order by class, name;
select 	name, 
	initialoutlay / (monthlyrevenue - monthlymaintenance) as repaytime 
	from 
		(select facs.name as name, 
			facs.initialoutlay as initialoutlay,
			facs.monthlymaintenance as monthlymaintenance,
			sum(case
				when memid = 0 then slots * facs.guestcost
				else slots * membercost
			end)/3 as monthlyrevenue
		from cd.bookings bks
		inner join cd.facilities facs
			on bks.facid = facs.facid
		group by facs.facid
	) as subq
order by name;





select date, avgrev from (
	select  dategen.date as date,
		avg(revdata.rev) over(order by dategen.date rows 14 preceding) as avgrev
	from		
		(select
			cast(generate_series(timestamp '2012-07-10', '2012-08-31','1 day') as date) as date
		)  as dategen
		left outer join
			cd.dailyrevenue as revdata on dategen.date = revdata.date
		) as subq
	where date >= '2012-08-01'
order by date;




select '2012-08-31 01:00:00'::timestamp;


select '2012-08-31 01:00:00'::timestamp - '2012-07-30 01:00:00'::timestamp as interval;


select generate_series(timestamp '2012-10-01', timestamp '2012-10-31', interval '1 day') as ts;


select extract (day from date '2012-08-31' );

select floor(	extract(day from ts.int)*60*60*24 +
	extract(hour from ts.int)*60*60 + 
	extract(minute from ts.int)*60 +
	extract(second from ts.int))
	from
		(select timestamp '2012-09-02 00:00:00' - '2012-08-31 01:00:00' as int) ts;


select generate_series(timestamp '2012-01-01', timestamp '2012-12-31', interval '1 day') as ts,extract( group by  order by ts;

select 	extract(month from cal.month) as month,
	(cal.month + interval '1 month') - cal.month as length
	from
	(
		select generate_series(timestamp '2012-01-01', timestamp '2012-12-01', interval '1 month') as month
	) cal
order by month;

select (date_trunc('month',ts.testts) + interval '1 month') 
		- date_trunc('day', ts.testts) as remaining
	from (select timestamp '2012-02-11 01:00:00' as testts) ts ;


select starttime, starttime + slots*(interval '30 minutes') endtime
	from cd.bookings
	order by endtime desc, starttime desc
	limit 10;



select date_trunc('month', starttime) as month, count(*)
	from cd.bookings
	group by month
	order by month;


select name, month, 
	round((100*slots)/
		cast(
			25*(cast((month + interval '1 month') as date)
			- cast (month as date)) as numeric),1) as utilisation
	from  (
		select facs.name as name, date_trunc('month', starttime) as month, sum(slots) as slots
			from cd.bookings bks
			inner join cd.facilities facs
				on bks.facid = facs.facid
			group by facs.facid, month
	) as inn
order by name, month   ;




select surname || ',' || firstname from members;


select * from facilities where name like 'Tennis%';


select * from facilities where upper(name) like 'TENNIS%';



select memid, telephone from members where telephone ~ '[()]'; 

select lpad(cast(zipcode as char(5)),5,'0') zip from cd.members order by zip;


select substr (mems.surname,1,1) as letter, count(*) as count 
    from cd.members mems
    group by letter
    order by letter ;


select memid, translate(telephone, '-() ', '') as telephone
    from cd.members
    order by memid;    


with recursive recommenders(recommender) as (
	select recommendedby from cd.members where memid = 27
	union all
	select mems.recommendedby
		from recommenders recs
		inner join cd.members mems
			on mems.memid = recs.recommender
)
select recs.recommender, mems.firstname, mems.surname
	from recommenders recs
	inner join cd.members mems
		on recs.recommender = mems.memid
order by memid desc;


with recursive recommendeds(memid) as (
	select memid from cd.members where recommendedby = 1
	union all
	select mems.memid
		from recommendeds recs
		inner join cd.members mems
			on mems.recommendedby = recs.memid
)
select recs.memid, mems.firstname, mems.surname
	from recommendeds recs
	inner join cd.members mems
		on recs.memid = mems.memid
order by memid  ;



with recursive recommenders(recommender, member) as (
	select recommendedby, memid
		from cd.members
	union all
	select mems.recommendedby, recs.member
		from recommenders recs
		inner join cd.members mems
			on mems.memid = recs.recommender
)
select recs.member member, recs.recommender, mems.firstname, mems.surname
	from recommenders recs
	inner join cd.members mems		
		on recs.recommender = mems.memid
	where recs.member = 22 or recs.member = 12
order by recs.member asc, recs.recommender desc ;