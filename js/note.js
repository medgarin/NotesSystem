Notes.Note = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  itscomplete: DS.attr('boolean')
});
Notes.Note.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
   isCompleted: false
 }
];