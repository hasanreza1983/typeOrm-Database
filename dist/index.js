"use strict";

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _photoMetaData = require("./entity/photoMetaData");

var _author = require("./entity/author");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");


(0, _typeorm.createConnection)({
  type: "sqlite",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "./test.sqlite",
  entities: [_Post.Photo, _photoMetaData.PhotoMetaData, _author.Author],
  synchronize: true,
  logging: false
}).then(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(connection) {
    var photo, metadata, photoMetaData2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            /**** let photo = new Photo();
            photo.title = "Bear3";
            photo.text = "I am near polar bears";
             
             Created a photo MetaData ****/
            /* let metadata = new PhotoMetaData(); 
            metadata.height = "640";
            metadata.width = "1000";
            metadata.Orientation = "Portrait";
            metadata.compressed = true;
            metadata.comment = "Easy as pie";
            metadata.photo = photo; // relaton created
              using async/await to save the Entity 
             await connection.manager.save(photo);
             //console.log("Photo has been saved");
             
             /* using Entity Manager to find Entities 
             let savedPhotos = await connection.manager.find(Photo);
             console.log("All Saved Photos are from the db:", savedPhotos); */

            /***** using Repositoriess
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
            //let photoToUpdate = await photoRepository.findOneById(5);
            //photoToUpdate.title = "this is updated 5 title";
            //let savedPhotos2 = await photoRepository.save(photoToUpdate);
            //console.log("updated content is:",savedPhotos2);

            /****** Removing from the Database 
            let photoToRemove = await photoRepository.findOneById(9);
            await photoRepository.remove(photoToRemove); ******/

            /****** get PhotoMetaData Repository *****/
            // let photoMetaRespository = connection.getRepository(PhotoMetaData);
            // await photoMetaRespository.save(metadata);
            //let photoMetaSaved = await photoMetaRespository.find();
            //console.log("Relation b/w two created" , photoMetaSaved);

            /* let photosQuery = await connection.getRepository(Photo).createQueryBuilder("photo")
            .innerJoinAndSelect("photo.metadata","metadata").getMany(); 
            console.log('here is the Query:',photosQuery);  */

            // create a photo
            photo = new _Post.Photo();

            photo.title = "Me and Bears";
            photo.text = "I am near polar bears";

            // create a photo metadata
            metadata = new _photoMetaData.PhotoMetaData();

            metadata.height = 640;
            metadata.width = 480;
            metadata.compressed = true;
            metadata.comment = "cybershoot";
            metadata.orientation = "portait";
            metadata.photo = photo;

            // get entity repositories
            /* let photoRepository = connection.getRepository(Photo);
            let metadataRepository = connection.getRepository(PhotoMetaData); 
            await photoRepository.save(photo);
            await metadataRepository.save(metadata);
            
             
              let photos = await photoRepository.find({ relations: ["metadata"] });  
            let photoMetaData2 = await metadataRepository.find({ relations: ["photo"] });  
            //console.log(photos);
            console.log("This is MetaData",photoMetaData2); */

            _context.next = 12;
            return connection.getRepository(_photoMetaData.PhotoMetaData).createQueryBuilder("photometa").leftJoinAndSelect("photometa.photo", "photo").getMany();

          case 12:
            photoMetaData2 = _context.sent;

            console.log("This is MetaData", photoMetaData2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()).catch(function (error) {
  return console.log(error);
});