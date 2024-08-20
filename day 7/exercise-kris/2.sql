USE sakila;
SELECT c.country_id ,c.country FROM country c WHERE c.country  IN ('Bangladesh', 'China', 'India');
