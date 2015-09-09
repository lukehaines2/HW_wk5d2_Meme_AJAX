drop table videos;

create table videos (
  id serial8 primary key,
  title varchar(255),
  url text,
  description text,
  genre varchar(255)
);

INSERT INTO videos (title, url, description, genre) VALUES ('Aerial Straps - Lo Mejor de Cirque Du Soleil', 'VUH1LJjy9qA', 'Official video - Cirque Du Soleil', 'entertainment',);

INSERT INTO videos (title, url, description, genre, url) VALUES ('End Love', 'V2fpgpanZAw', 'Official video', 'poprock');