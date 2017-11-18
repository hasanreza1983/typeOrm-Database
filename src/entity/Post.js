import {Entity, Column , PrimaryGeneratedColumn, OneToOne , JoinColumn , ManyToOne} from "typeorm";
import {PhotoMetaData} from "./photoMetaData";
import {Author} from "./author";

@Entity()
export class Photo  {
   @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    title = "";

    @Column("text")
    text = "";
     
   //stored the photo in metadata
    @OneToOne(type => PhotoMetaData, PhotoMetaData => PhotoMetaData.photo)
    metadata = PhotoMetaData;   
	
	@ManyToOne(type => Author, author => author.photos)
	author = Author;

}