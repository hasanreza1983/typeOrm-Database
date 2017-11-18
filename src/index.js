require("babel-polyfill");
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Photo} from "./entity/Post";
import {PhotoMetaData} from './entity/photoMetaData';
import {Author} from "./entity/author";

 createConnection({
    type: "sqlite",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "./test.sqlite",
    entities: [
        Photo,
        PhotoMetaData,
        Author
    ],
    synchronize: true,
    logging: false
}).then(async connection => {

   
    let photo = new Photo();
    photo.title = "Bear3";
    photo.text = "I am near polar bears";
     
    /**** Created a photo MetaData ****/
    let metadata = new PhotoMetaData(); 
    metadata.height = "640";
    metadata.width = "1000";
    metadata.Orientation = "Portrait";
    metadata.compressed = true;
    metadata.comment = "Easy as pie";
    metadata.photo = photo; // relaton created

     /* using async/await to save the Entity 
     await connection.manager.save(photo);
     //console.log("Photo has been saved");
     
     /* using Entity Manager to find Entities 
     let savedPhotos = await connection.manager.find(Photo);
     console.log("All Saved Photos are from the db:", savedPhotos); */
     
     /***** using Repositories ****/
     let photoRepository = connection.getRepository(Photo);
     await photoRepository.save(photo);
     let savedPhotos = await photoRepository.find();
     let secondPhoto = await photoRepository.findOneById(2);
     let TitlePhoto = await photoRepository.find({title: "Bear3"});
     let [allPhotos , photosCount] = await photoRepository.findAndCount();
     //console.log("All of the Saved photos are:", savedPhotos);
      //console.log("second one photo is:",secondPhoto);
      //console.log("Title is:",TitlePhoto);
      console.log("All photos:",allPhotos);
      //console.log("PhotosCount:",photosCount);
      //let photos = await photoRepository.find({relations: ["metadata"]});
      //console.log("Relation Made",photos);
     
     
     /************ updating Database **************/
     let photoToUpdate = await photoRepository.findOneById(5);
     photoToUpdate.title = "this is updated 5 title";
     let savedPhotos2 = await photoRepository.save(photoToUpdate);
     //console.log("updated content is:",savedPhotos2);
     
     /****** Removing from the Database 
     let photoToRemove = await photoRepository.findOneById(9);
     await photoRepository.remove(photoToRemove); ******/
     
     
     /****** get PhotoMetaData Repository *****/
     let photoMetaRespository = connection.getRepository(PhotoMetaData);
     await photoMetaRespository.save(metadata);
     let photoMetaSaved = await photoMetaRespository.find();
     //console.log("Relation b/w two created" , photoMetaSaved);
     
     /* let photosQuery = await connection.getRepository(Photo).createQueryBuilder("photo")
     .innerJoinAndSelect("photo.metadata","metadata").getMany(); 
     console.log('here is the Query:',photosQuery);  */
     
}).catch(error => console.log(error)); 
