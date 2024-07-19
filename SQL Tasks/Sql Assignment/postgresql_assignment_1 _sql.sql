-- psql -U postgres

DROP DATABASE IF EXISTS university_db;
CREATE DATABASE university_db;

-- \c university_db

create table students (

    student_id integer unique  primary key ,
    student_name varchar(100),
    age integer,
    email text,
    frontend_mark integer,
    backend_mark integer,
    status text
);

create table courses (
    course_id integer unique primary key,
    course_name varchar(100),
    credits integer 
);


create table enrollment (
    enrollment_id INTEGER UNIQUE PRIMARY KEY,
    student_id INTEGER,
    course_id INTEGER,
    constraint fk_student foreign key (student_id) REFERENCES students(student_id),
    constraint fk_course foreign key (course_id) REFERENCES courses(course_id)
);


Insert into students values(1,'Alice', 22 ,'alice@example.com' ,55, 57, NULL),
(2,'Bob', 22 ,'bob@example.com' ,34, 45, NULL),
(3,'Charlie', 22 ,'charlie@example.com' ,60, 59, NULL),
(4,'David', 22 ,'david@example.com' ,40, 49, NULL),
(5,'Eve', 22 ,'newemail@example.com' ,45, 34, NULL),
(6,'Rahim', 22 ,'rahim@gmail.com' ,46, 42, NULL);

insert into courses values (1,'Next.js',3),
(2,'React.js',4),
(3,'Databases',3),
(4,'Prisma',3);

insert into enrollment values (1,1,1),
(2,1,2),
(3,2,1),
(4,3,2);




insert into students values(7,'sanjai j',22,'sanjai2k1j@gmail.com',80,100,NULL);



select student_name from students where student_id in (
select student_id from enrollment  where course_id = ( 
select course_id from courses where course_name = 'Next.js'));

update students
set status = 'Awarded'
WHERE student_id = (
    SELECT student_id
    FROM students
    ORDER BY frontend_mark + backend_mark DESC
    LIMIT 1
);




select * from students limit 2 offset 2 rows;

select courses.course_name,COUNT(enrollment.student_id) from courses inner join enrollment using (course_id) group by courses.course_id order by courses.course_id;


SELECT courses.course_name, COUNT(enrollment.student_id) AS student_count
FROM courses
INNER JOIN enrollment ON courses.course_id = enrollment.course_id
GROUP BY courses.course_id;



delete from courses

where course_id not in (

select distinct(course_id) from courses inner join enrollment using(course_id))
;

select avg(age) as average_age from students;
select student_name from students where email like '%example.com';