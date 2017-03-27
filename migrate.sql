DROP DATABASE IF EXISTS php_message;

CREATE DATABASE php_message;
USE php_message;

CREATE TABLE users(
	uid		INT not null primary key auto_increment,
	uname	VARCHAR(128),
	pword	VARCHAR(128),
	INDEX(uname)
);

CREATE TABLE login(
	login_id	BIGINT not null primary key auto_increment,
	uid			INT not null,
	uname		VARCHAR(127),
	token		VARCHAR(255),
	INDEX(token)
);
