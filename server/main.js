import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	if(Meteor.users.find().count() === 0){
		Accounts.createUser({
		    	username:"admin",
		        password: "admin",
		        profile:{
					visible:0,
		        	full_name: "admin",
		        	email: "admin@prospero.com",
		        	institution: "Prospero",
		       		telephone: "091 / 555 - 007"
		        }
		});
		console.log("ADMIN created");
	}
// start of dummy
	if(Prospero.find().count() === 0){
		console.log("no data found > generating dummy input");
		//pictures
		Prospero.insert({
				isPrivate:false,
			    type:"Pictures",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Picture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pictures",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Picture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pictures",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Picture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pictures",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Picture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//sculptures

		Prospero.insert({
				isPrivate:false,
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Sculpture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Sculpture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Sculpture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Sculpture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Architectural heritage 

		Prospero.insert({
				isPrivate:false,
			    type:"Architectural heritage",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Heritage Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Architectural heritage",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Heritage Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Architectural heritage",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Heritage Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Architectural heritage",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Heritage Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Archival object 

		Prospero.insert({
				isPrivate:false,
			    type:"Archival object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archival Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archival object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archival Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archival object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archival Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archival object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archival Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Archaeological object 

		Prospero.insert({
				isPrivate:false,
			    type:"Archaeological object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archaeological object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archaeological object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Archaeological object",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Materials 

		Prospero.insert({
				isPrivate:false,
			    type:"Pigment/dye/binder/varnish/reference materials",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pigment/dye/binder/varnish/reference materials",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pigment/dye/binder/varnish/reference materials",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Pigment/dye/binder/varnish/reference materials",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Other 

		Prospero.insert({
				isPrivate:false,
			    type:"Other",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Other Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Other",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Other Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Other",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Other Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		Prospero.insert({
				isPrivate:false,
			    type:"Other",
			    data:{
			      basic:{
			        front:"pic1.jpg",
			        back:"pic2.jpg",
			      	},
			    },
				basic:{
					author:"Other Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
	var count = Prospero.find().count();
	console.log("Inserted " + count + " dummy objects");
	}
// end of dummy

});
