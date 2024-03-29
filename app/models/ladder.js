import DS from 'ember-data';

export default DS.Model.extend({
  entries: DS.hasMany('entry', { async: false }),
  name: DS.attr(),
  game: DS.attr()
});
