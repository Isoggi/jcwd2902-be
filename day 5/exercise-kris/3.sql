USE sakila;

SELECT first_name, last_name FROM actor;
SELECT actor_id, first_name, last_name FROM actor WHERE first_name LIKE 'joe%';

SELECT address, district, city_id FROM address WHERE district = 'California' or district = 'Alberta' or district = 'Mekka';

SELECT COUNT(actor_id) FROM actor WHERE last_name LIKE 'wood';

 SELECT customer_id, SUM(amount), COUNT(customer_id) FROM payment GROUP BY customer_id HAVING COUNT(customer_id) > 20;

