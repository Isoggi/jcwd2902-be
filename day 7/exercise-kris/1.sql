USE world;
SELECT * FROM country limit 10

SELECT name FROM (SELECT Name FROM country  ORDER BY population DESC LImit 1) A
UNION
SELECT name  FROM (SELECT Name FROM country  ORDER BY population DESC LImit 1 OFFSET 1) B
UNION
SELECT name  FROM (SELECT Name FROM country   ORDER BY population ASC LImit 1) C
UNION
SELECT name  FROM (SELECT Name FROM country D  ORDER BY population ASC LImit 1 OFFSET 2) D
-- Find the largest continent by sum surface area with life expectancy more than 75
UNION
SELECT continent FROM (SELECT continent, SUM(surfacearea) sumsa, AVG(LifeExpectancy) avglf FROM country GROUP BY continent HAVING avglf >= 75 LIMIT 1) E

USE sakila;

CREATE VIEW InactiveCust AS 
select c.country, count(cu.customer_id) total_inactive_customer  from country c 
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id
join customer cu on cu.address_id = a.address_id and cu.active = 0 group by c.country order by total_inactive_customer desc;

SELECT * FROM inactivecust
