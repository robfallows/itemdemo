// /server/main.js

import { Meteor } from 'meteor/meteor';
import { Items } from '/imports/Items';

const NumberInt = (n) => {
  return n | 0;
}
Meteor.startup(() => {
  if (Items.find().count() === 0) {
    Items.insert({ 
      _id : 'SEAWRcioKoz2R8p2C', 
      name : 'Testing 1', 
      items : [
        {
          display : NumberInt(1), 
          require : NumberInt(1), 
          occupation : 'Anchor Points', 
          description : '1 Testing', 
          quantity : 35, 
          item : 'hrs', 
          rate : 5.54, 
          labour : 0.00, 
          _id : 'fsf342fdsfj3hj342', 
          deleted : true
        }, 
        {
          display : NumberInt(1), 
          require : NumberInt(1), 
          occupation : 'Asbestos', 
          description : '2 Testing eere', 
          quantity : 3, 
          item : 'visit', 
          rate : 1.04, 
          labour : 0.00, 
          _id : 'fea8394028df47cef0afcc51', 
          deleted : false
        }
      ], 
      deleted : false
    });
  }
});

Meteor.publish('items', function() {
  const cursor = Items.find({ 'items.description' : '1 Testing' }, { fields: { name: 1, items: { $elemMatch: { deleted: false } } } });
  console.log(JSON.stringify(cursor.fetch(), null, 2));
  return cursor;
});

