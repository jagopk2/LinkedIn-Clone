drop database se;
create database se;
show databases;
use se;
drop table IF EXISTS user;
drop table IF EXISTS company;
drop table IF EXISTS skills;
drop table IF EXISTS jobskills;
drop table IF EXISTS education;
drop table IF EXISTS jobApplication;
drop table IF EXISTS jobposting;
drop table  IF EXISTS jobskills;
drop table IF EXISTS following;

CREATE
  TABLE user
  (
    id  INTEGER Primary Key AUTO_INCREMENT ,
    firstname        VARCHAR (250) NOT NULL ,
    lastname         VARCHAR (250) NOT NULL ,
    email            VARCHAR (250) NOT NULL UNIQUE ,
    password         VARCHAR (250) NOT NULL ,
    address         VARCHAR (250) NOT NULL,
    phoneNumber Integer not null,
    field            VARCHAR (250) NOT NULL,
    picture VARCHAR (250) NOT NULL,
    cv VARCHAR (250) NOT NULL,
    wallet Integer DEFAULT 0
  ) ;
  CREATE
  TABLE company 
  (
    id  INTEGER Primary Key AUTO_INCREMENT ,
    name        VARCHAR (250) NOT NULL ,
    email            VARCHAR (250) NOT NULL UNIQUE ,
    password         VARCHAR (250) NOT NULL ,
    address         VARCHAR (250) NOT NULL,
    phoneNumber Integer not null,
    website VARCHAR (250) NOT NULL,
    picture VARCHAR (250) NOT NULL
  ) ;
CREATE
  TABLE skills
  (
    user_id     INTEGER ,
    skill  varchar(250) not null,
    Foreign key (user_id) references user(id)
  );


CREATE
  TABLE education 
  (
    user_id     INTEGER ,
    education  varchar(250) not null,
    Foreign key (user_id) references user(id)
  );
CREATE
  TABLE jobposting
  (
    id                 INTEGER primary key AUTO_INCREMENT,
    company_id         INTEGER ,
    title               VARCHAR (250) ,
    description            VARCHAR (250) ,
    field              VARCHAR (250) ,
    status             VARCHAR (250) DEFAULT 'pending' ,
       Foreign key (company_id) references company(id)
  ) ;
CREATE
  TABLE jobApplication
  (
    user_id      INTEGER ,
    job_id       INTEGER ,
    status       VARCHAR (250) DEFAULT 'pending',
    reference       VARCHAR (250) DEFAULT '0',
    Foreign key (user_id) references user(id),
    Foreign key (job_id) references jobposting(id)
  ) ;



  CREATE
  TABLE jobskills
  (
    job_id     INTEGER ,
    skill  varchar(250) not null,
    Foreign key (job_id) references jobposting(id)
  );

CREATE
  TABLE following
  (
    user_id            INTEGER NOT NULL ,
    company_id         INTEGER NOT NULL ,
    status   VARCHAR (250) DEFAULT 'approved' ,
    Foreign key (company_id) references company(id),
    Foreign key (user_id) references user(id)
  );
create table userfollowing(
  user_id Integer not null,
  follower_id Integer not null,
    FOREIGN key (user_id) REFERENCES user(id),
    FOREIGN key (follower_id) REFERENCES user(id)
);





INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (1, 'Krystel', 'Bernier', 'bailee06@example.org', 'et', '2596 Angelita Inlet Suite 519\nOctaviaport, VT 77231-9005', 33, 'laborum','img (1).png','cv (1).png',11);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (2, 'Chasity', 'Mayer', 'mante.antonina@example.net', 'autem', '60991 Zulauf Extension Apt. 652\nNicklausville, GA 22916', 329388, 'a','img (2).png','cv (2).png',12);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (3, 'Hank', 'Thiel', 'cloyd.predovic@example.org', 'facere', '7031 Princess Loop\nLake Susannaland, CA 20704-1547', 107963, 'voluptatem','img (3).png','cv (3).png',13);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (4, 'Buford', 'Steuber', 'tyreek.schiller@example.com', 'est', '1895 Krista Courts Suite 903\nSouth Clement, NV 62005', 72622, 'aperiam','img (4).png','cv (4).png',14);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (5, 'Evan', 'Hartmann', 'dena71@example.org', 'in', '90210 Georgiana Plain\nHuelsfort, TX 42532', 817086, 'aut','img (5).png','cv (5).png',15);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (6, 'Rosalinda', 'Jaskolski', 'qschulist@example.net', 'doloribus', '28844 Raven Groves Apt. 319\nSouth Trudieville, SC 65024-8426', 432708, 'dolores','img (6).png','cv (6).png',16);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (7, 'Dillan', 'Feeney', 'cmarquardt@example.com', 'beatae', '23678 Rohan Walks\nTillmantown, DC 81977-1483', 90, 'a','img (7).png','cv (7).png',17);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (8, 'Jaylan', 'Mueller', 'ykilback@example.com', 'quisquam', '616 Wehner Extensions\nAddiemouth, OR 27528', 0, 'a','img (8).png','cv (8).png',18);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (9, 'Amber', 'Hettinger', 'omarquardt@example.com', 'atque', '0887 Darrion Lane Suite 356\nPort Havenstad, CT 48138-7193', 1, 'veritatis','img (9).png','cv (9).png',19);
INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `address`, `phoneNumber`, `field`,`picture`,`cv`,`wallet`) VALUES (10, 'Austin', 'Stanton', 'friesen.halie@example.net', 'incidunt', '211 Yessenia Ridge\nFeeneyville, CO 33253', 1, 'pariatur','img (10).png','cv (10).png',20);




INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (1, 'nesciunt', 'ardella.wyman@example.com', 'commodi', '715 Quigley Spurs\nNew Nelliechester, UT 10056', 1, 'http://www.bradtke.com/','cmp (1).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (2, 'voluptas', 'roxane13@example.org', 'doloremque', '660 Klein Trail\nNew Hailey, WI 12592', 1, 'http://muller.com/','cmp (2).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (3, 'velit', 'schamberger.mandy@example.com', 'facere', '12901 Lura Trail Apt. 825\nSouth Wyatt, NV 89156-2327', 0, 'http://kessler.com/','cmp (3).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (4, 'et', 'kay.walker@example.com', 'accusamus', '12585 Kautzer Vista Apt. 500\nLegrosland, VA 69113-5956', 1, 'http://heller.org/','cmp (4).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (5, 'inventore', 'tate72@example.net', 'voluptatibus', '9965 Muller Circle Suite 363\nNorth Rafaelaport, NJ 78049-8499', 156383, 'http://www.sipes.com/','cmp (5).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (6, 'qui', 'creinger@example.org', 'eum', '25176 Block Forest Apt. 691\nEast Katharina, MS 24752', 918, 'http://www.murphy.com/','cmp (6).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (7, 'cum', 'delaney.hickle@example.net', 'beatae', '9976 Sporer Valleys Suite 074\nKadeside, KY 90349-0213', 19, 'http://www.lang.com/','cmp (7).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (8, 'provident', 'pansy.spencer@example.org', 'praesentium', '816 Abernathy Valleys\nDexterborough, PA 36508', 1, 'http://www.stiedemann.biz/','cmp (8).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (9, 'autem', 'xhoppe@example.com', 'non', '7587 Keaton Mall Suite 341\nBogisichton, NM 28876-3716', 0, 'http://muller.com/','cmp (9).png');
INSERT INTO `company` (`id`, `name`, `email`, `password`, `address`, `phoneNumber`, `website`,`picture`) VALUES (10, 'quaerat', 'eloisa.balistreri@example.com', 'ratione', '8850 Ebert Prairie\nReingerborough, WI 51412', 0, 'http://will.com/','cmp (10).png');

INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (1, 1, 'ea', 'Laudantium quia nihil qui eligendi ut nobis. Ea ex veritatis voluptatum fugiat. In odio inventore tempora ipsam qui sint incidunt.', 'harum', 'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (2, 2, 'deserunt', 'Repellendus molestias quam doloribus illum incidunt nam. Delectus ad omnis et voluptatem velit nostrum ut. Vel fuga dicta dolorem. Numquam odio vero sapiente nihil eum tempora reprehenderit.', 'saepe', 'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (3, 3, 'quis', 'Praesentium velit sapiente eum id non quasi magni. Inventore officia aliquam alias quaerat quis magnam ut. Molestias hic excepturi voluptatem voluptatem dolor. Quae esse necessitatibus nihil occaecati.', 'voluptatem', 'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (4, 4, 'minima', 'Magni cupiditate id quia fugit aut alias dolorem. Inventore repudiandae molestiae eligendi omnis nesciunt facilis repellendus. Laboriosam sed voluptatem amet est provident explicabo. Doloremque natus aut aliquid in ipsam.', 'molestiae', 'approved');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (5, 5, 'quis', 'Ipsam quaerat nostrum voluptatem dolorem possimus facilis et. Doloremque harum deleniti accusantium ullam. Molestias dolorem adipisci et fuga expedita cumque in. Odio perferendis tempora consequatur voluptatem laboriosam perferendis sint non. Volupta', 'adipisci',  'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (6, 6, 'vero', 'Exercitationem dolorem ea voluptas id molestiae in ipsam consequatur. Aliquam et sapiente esse consequatur et hic autem deserunt. Eius aut consequuntur velit adipisci itaque.', 'temporibus',  'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (7, 7, 'officia', 'Error voluptatem magnam deserunt aut nisi sint vero voluptatibus. Provident consequatur eius a porro. Eum in et eveniet velit dolor fuga iure. Asperiores iusto nostrum labore sed doloribus ducimus quia. Perferendis sit dolore consectetur provident te', 'repellat',  'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (8, 8, 'reiciendis', 'Nostrum tenetur temporibus quae dicta. Quidem itaque animi in officia veritatis sint. Rerum quia asperiores rerum qui ducimus laudantium id. Debitis qui officia quibusdam non optio laborum.', 'et', 'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (9, 9, 'odio', 'Tenetur fugit eius molestiae odit doloribus. Eos vel blanditiis nostrum praesentium esse in soluta. Voluptatem commodi illum atque et eum.', 'libero', 'pending');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (10, 10, 'alias', 'Dicta aperiam quis eum. Quo maiores praesentium nemo modi corrupti vitae nulla. Ab aspernatur et sequi eos fugit.', 'exercitationem', 'dolores');
INSERT INTO `jobposting` (`id`, `company_id`, `title`, `description`, `field`, `status`) VALUES (11, 3, 'alcxzvcias', 'Diczvxcvcta aperiam quis eum. Quo maiores praesentium nemo modi corrupti vitae nulla. Ab aspernatur et sequi eos fugit.', 'exercitationem', 'pending');


INSERT INTO `education` (`user_id`, `education`) VALUES (1, 'est');
INSERT INTO `education` (`user_id`, `education`) VALUES (2, 'cumque');
INSERT INTO `education` (`user_id`, `education`) VALUES (3, 'eos');
INSERT INTO `education` (`user_id`, `education`) VALUES (4, 'voluptas');
INSERT INTO `education` (`user_id`, `education`) VALUES (5, 'ut');
INSERT INTO `education` (`user_id`, `education`) VALUES (6, 'in');
INSERT INTO `education` (`user_id`, `education`) VALUES (7, 'fugiat');
INSERT INTO `education` (`user_id`, `education`) VALUES (8, 'dolor');
INSERT INTO `education` (`user_id`, `education`) VALUES (9, 'veritatis');
INSERT INTO `education` (`user_id`, `education`) VALUES (10, 'reiciendis');
INSERT INTO `education` (`user_id`, `education`) VALUES (1, 'veniam');
INSERT INTO `education` (`user_id`, `education`) VALUES (2, 'amet');
INSERT INTO `education` (`user_id`, `education`) VALUES (3, 'dolore');
INSERT INTO `education` (`user_id`, `education`) VALUES (4, 'hic');
INSERT INTO `education` (`user_id`, `education`) VALUES (5, 'voluptas');
INSERT INTO `education` (`user_id`, `education`) VALUES (6, 'omnis');
INSERT INTO `education` (`user_id`, `education`) VALUES (7, 'numquam');
INSERT INTO `education` (`user_id`, `education`) VALUES (8, 'eos');
INSERT INTO `education` (`user_id`, `education`) VALUES (9, 'quia');
INSERT INTO `education` (`user_id`, `education`) VALUES (10, 'repudiandae');

INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (1, 1, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (2, 2, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (3, 3, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (4, 4, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (5, 5, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (6, 6, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (7, 7, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (8, 8, 'blocked');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (9, 9, 'approved');
INSERT INTO `following` (`user_id`, `company_id`, `status`) VALUES (10, 10, 'approved');


INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (1, 1, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (2, 2, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (3, 3, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (4, 4, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (5, 5,'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (6, 6, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (7, 7, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (8, 8, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (9, 9, 'pending');
INSERT INTO `jobApplication` (`user_id`, `job_id`, `status`) VALUES (10, 10, 'pending');


INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (1, 'voluptas');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (2, 'et');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (3, 'iusto');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (4, 'sint');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (5, 'dolorum');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (6, 'quis');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (7, 'laudantium');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (8, 'sequi');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (9, 'quis');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (10, 'animi');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (1, 'eum');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (2, 'reiciendis');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (3, 'aut');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (4, 'quasi');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (5, 'exercitationem');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (6, 'deleniti');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (7, 'quod');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (8, 'velit');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (9, 'molestiae');
INSERT INTO `jobskills` (`job_id`, `skill`) VALUES (10, 'veritatis');

INSERT INTO `skills` (`user_id`, `skill`) VALUES (1, 'nostrum');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (2, 'voluptas');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (3, 'ex');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (4, 'facere');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (5, 'est');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (6, 'quam');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (7, 'porro');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (8, 'fugiat');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (9, 'veniam');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (10, 'vitae');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (1, 'repellat');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (2, 'recusandae');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (3, 'omnis');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (4, 'maiores');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (5, 'quis');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (6, 'est');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (7, 'et');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (8, 'alias');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (9, 'quis');
INSERT INTO `skills` (`user_id`, `skill`) VALUES (10, 'alias');


insert into userfollowing (user_id,follower_id) VALUES (1,2);
insert into userfollowing (user_id,follower_id) VALUES (1,3);
insert into userfollowing (user_id,follower_id) VALUES (1,4);
insert into userfollowing (user_id,follower_id) VALUES (1,5);
insert into userfollowing (user_id,follower_id) VALUES (1,6);

insert into userfollowing (user_id,follower_id) VALUES (2,7);
insert into userfollowing (user_id,follower_id) VALUES (2,3);

insert into userfollowing (user_id,follower_id) VALUES (3,4);
insert into userfollowing (user_id,follower_id) VALUES (3,7);
insert into userfollowing (user_id,follower_id) VALUES (3,9);
insert into userfollowing (user_id,follower_id) VALUES (3,6);




  ALTER TABLE jobposting AUTO_INCREMENT = 12;
ALTER TABLE company AUTO_INCREMENT = 11;
ALTER TABLE user AUTO_INCREMENT = 11;
