// /client/main.js

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { Items } from '/imports/Items';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.subscribe('items');
});

Template.hello.helpers({
  items() {
    return Items.find();
  }
});
