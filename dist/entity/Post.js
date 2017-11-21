"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photo = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _typeorm = require("typeorm");

var _photoMetaData = require("./photoMetaData");

var _author = require("./author");

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Photo = exports.Photo = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("text"), _dec5 = (0, _typeorm.OneToOne)(function (type) {
  return _photoMetaData.PhotoMetaData;
}, function (PhotoMetaData) {
  return PhotoMetaData.photo;
}), _dec(_class = (_class2 =

/* @ManyToOne(type => Author, author => author.photos)
@JoinColumn()
author = Author; */

function Photo() {
  _classCallCheck(this, Photo);

  _initDefineProp(this, "id", _descriptor, this);

  _initDefineProp(this, "title", _descriptor2, this);

  _initDefineProp(this, "text", _descriptor3, this);

  _initDefineProp(this, "metadata", _descriptor4, this);
}

//stored the photo in metadata
, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "metadata", [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return _photoMetaData.PhotoMetaData;
  }
})), _class2)) || _class);