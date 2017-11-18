"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    var photo, metadata, photoRepository, savedPhotos, secondPhoto, TitlePhoto, _ref2, _ref3, allPhotos, photosCount, photoToUpdate, savedPhotos2, photoMetaRespository, photoMetaSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            photo = new _Post.Photo();

            photo.title = "Bear3";
            photo.text = "I am near polar bears";

            /**** Created a photo MetaData ****/
            metadata = new _photoMetaData.PhotoMetaData();

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
            photoRepository = connection.getRepository(_Post.Photo);
            _context.next = 13;
            return photoRepository.save(photo);

          case 13:
            _context.next = 15;
            return photoRepository.find();

          case 15:
            savedPhotos = _context.sent;
            _context.next = 18;
            return photoRepository.findOneById(2);

          case 18:
            secondPhoto = _context.sent;
            _context.next = 21;
            return photoRepository.find({ title: "Bear3" });

          case 21:
            TitlePhoto = _context.sent;
            _context.next = 24;
            return photoRepository.findAndCount();

          case 24:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            allPhotos = _ref3[0];
            photosCount = _ref3[1];

            //console.log("All of the Saved photos are:", savedPhotos);
            //console.log("second one photo is:",secondPhoto);
            //console.log("Title is:",TitlePhoto);
            console.log("All photos:", allPhotos);
            //console.log("PhotosCount:",photosCount);
            //let photos = await photoRepository.find({relations: ["metadata"]});
            //console.log("Relation Made",photos);


            /************ updating Database **************/
            _context.next = 31;
            return photoRepository.findOneById(5);

          case 31:
            photoToUpdate = _context.sent;

            photoToUpdate.title = "this is updated 5 title";
            _context.next = 35;
            return photoRepository.save(photoToUpdate);

          case 35:
            savedPhotos2 = _context.sent;

            //console.log("updated content is:",savedPhotos2);

            /****** Removing from the Database 
            let photoToRemove = await photoRepository.findOneById(9);
            await photoRepository.remove(photoToRemove); ******/

            /****** get PhotoMetaData Repository *****/
            photoMetaRespository = connection.getRepository(_photoMetaData.PhotoMetaData);
            _context.next = 39;
            return photoMetaRespository.save(metadata);

          case 39:
            _context.next = 41;
            return photoMetaRespository.find();

          case 41:
            photoMetaSaved = _context.sent;

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()
//console.log("Relation b/w two created" , photoMetaSaved);

/* let photosQuery = await connection.getRepository(Photo).createQueryBuilder("photo")
.innerJoinAndSelect("photo.metadata","metadata").getMany(); 
console.log('here is the Query:',photosQuery);  */

).catch(function (error) {
  return console.log(error);
});