// web ("/") / local ("index/index")
Template.mainGallery.helpers({
  galleryIndex: () => GalleryIndex,

  gallery:function(){
    return Prospero.find({}, {sort:Session.get("sortIndex"), limit:Session.get("siteLimit")});
  },
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
  pictures:function(){
    return Prospero.find({"type":"Pictures"}, {limit:4});
  },
  sculptures:function(){
    return Prospero.find({"type":"Sculpture"}, {limit:4});
  },
  heritage:function(){
    return Prospero.find({"type":"Architectural heritage"}, {limit:4});
  },
  archival:function(){
    return Prospero.find({"type":"Archival object"}, {limit:4});
  },
  archaeological:function(){
    return Prospero.find({"type":"Archaeological object"}, {limit:4});
  },
  material:function(){
    return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials"}, {limit:4});
  },
  other:function(){
    return Prospero.find({"type":"Other"}, {limit:4});
  }
})
