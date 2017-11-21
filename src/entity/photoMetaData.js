import {Entity, Column , PrimaryGeneratedColumn , OneToOne ,JoinColumn} from "typeorm";
import {Photo} from './Post';

@Entity()
export class PhotoMetaData {
	
	@PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    height = "";

    @Column("varchar")
    width = "";
	 
	@Column("text")
    Orientation = ""; 
	 
	@Column("boolean")
    compressed = "";
	 
	@Column("text")
    comment = ""; 

	@OneToOne(type => Photo, photo => photo.metadata)
    @JoinColumn()
    photo= Photo;
	 

	 
	 
	 
}



