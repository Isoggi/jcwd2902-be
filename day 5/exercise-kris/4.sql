USE sakila;

INSERT INTO actor (first_name, last_name) VALUES ('JHONNY', 'DAVIS');

INSERT INTO actor (first_name, last_name) VALUES ('ADAM', 'DAVIS'),('JEREMY', 'DAVIS'),('CRAIG', 'DAVIS'),('STEVE', 'DAVIS');

SELECT COUNT(actor_id) FROM actor WHERE last_name = 'DAVIS'

DELETE FROM actor WHERE first_name = 'JENNIFER' AND last_name = 'DAVIS';

UPDATE  actor SET first_name = 'GEORGE' WHERE last_name = 'DAVIS';

SELECT actor.first_name, actor.last_name, COUNT(film_actor.film_id) FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id GROUP BY actor.actor_id ORDER BY COUNT(film_actor.film_id) DESC LIMIT 10 

SELECT title, description, `length`, rating, special_features from film WHERE special_features LIKE '%Deleted Scenes%' AND special_features LIKE '%Behind the Scenes%' ORDER BY `length` DESC; 

select C.country, count(cu.customer_id) total_inactive_customer  from country C 
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id
join customer cu on cu.address_id = a.address_id and cu.active = 0
group by c.country
order by total_inactive_customer desc;