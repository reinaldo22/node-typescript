create table artigos(
	id  int not null primary key auto_increment,
    title VARCHAR(250) NOT NULL,
    descricao TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);