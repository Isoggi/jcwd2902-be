USE sakila;

INSERT INTO actor (first_name, last_name) VALUES ('JHONNY', 'DAVIS');

INSERT INTO actor (first_name, last_name) VALUES ('ADAM', 'DAVIS'),('JEREMY', 'DAVIS'),('CRAIG', 'DAVIS'),('STEVE', 'DAVIS');

SELECT COUNT(actor_id) FROM actor WHERE last_name = 'DAVIS'

DELETE FROM actor WHERE first_name = 'JENNIFER' AND last_name = 'DAVIS';

UPDATE  actor SET first_name = 'GEORGE' WHERE last_name = 'DAVIS';

SELECT actor.first_name, actor.last_name, COUNT(film_actor.film_id) FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id GROUP BY actor.actor_id ORDER BY COUNT(film_actor.film_id) DESC LIMIT 10 

SELECT title, description, `length`, rating, special_features from film WHERE special_features LIKE '%Deleted Scenes%' AND special_features LIKE '%Behind the Scenes%' ORDER BY `length` DESC; 

SELECT * from country JOIN customer WHERE country.country_id = customer.;