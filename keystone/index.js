const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password, Integer, Color, Relationship, Float, Select, DateTime, CloudinaryImage, File } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'first-app';
const adapterConfig = { mongoUri: 'mongodb://localhost/first-app' };
const UserSchema = require('./models/Users');
const BaivietSchema = require('./models/Baiviet');
const ChitietdonhangSchema = require('./models/Chitietdonhang');
const DonhangSchema = require('./models/Donhang');
const GiohangSchema = require('./models/Giohang');
const ImgSchema = require('./models/Img');
const NhacungcapSchema = require('./models/Nhacungcap');
const PhanloaisachSchema = require('./models/Phanloaisach');
const PhieunhapsachSchema = require('./models/Phieunhapsach');
const SachSchema = require('./models/Sach');

const fileAdapter = new LocalFileAdapter({
  src: './file',
  path: './file',

});

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User', UserSchema);
keystone.createList('Baiviet', BaivietSchema);
keystone.createList('Chitietdonhang', ChitietdonhangSchema);
keystone.createList('Donhang', DonhangSchema);
keystone.createList('Giohang', GiohangSchema);
keystone.createList('IMG', ImgSchema);
keystone.createList('Nhacungcap', NhacungcapSchema);
keystone.createList('Phanloaisach', PhanloaisachSchema);
keystone.createList('Sach', SachSchema);
keystone.createList('Phieunhapsach', PhieunhapsachSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};

