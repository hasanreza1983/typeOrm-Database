import {Entity, Column , PrimaryGeneratedColumn, OneToMany , JoinColumn} from "typeorm";
import {Photo} from "./Post";

@Entity()
export class Author {
 
	@PrimaryGeneratedColumn()
    id = undefined;

	@Column("text")
    name = "";
	
    @OneToMany(type => Photo, photo => photo.author) 
    photos = Author;
	 
}




 
	  
