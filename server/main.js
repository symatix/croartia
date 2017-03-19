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
		    type:"Painting",
		    data:{
		      basic:{
		        front:"/1front.jpg",
		        back:"/1back.jpg",
		        side:"/1side.jpg",
		        signature:"/1sig.jpg",
		      	},
		    },
			basic:{
				author:"Miroslav Kraljević",
				title:"The Satyr and the Peasant",
				date:"1910",
			    technique:"oil on canvas",
			  	dimensions_noFrame:"196; 199,9",
				dimensions_frame:"201,5; 207",
				currentOwner:"Academy of fine arts, Zagreb",
				currentLocation:"Council hall, Academy of fine arts, Ilica 85, Zagreb, Croatia",
			    inventoryNumber:"ALU: 191; OKIRU: 298",
			    investigated:"VIS, UVF, XRF",
			},
			materials:{
				original:{
					primingGround:"Chalk, glue, lead white pigment, linseed oil",
					pigmentsDyes:"lead white, vermilion, yellow ochre, burnt umber, red ochre, cobalt blue, black iron oxide, chrome oxide green, bone black",
					bendingMedium:"linseed oil, glue",
					underdrawingPentimento:"Visible, with graphite pen",
					supportStrainer:"canvas",
					support:"linen canvas",
					thickness:"4",
					notes:{
						artHistory:"Miroslava Kraljevića je kopija istoimene slike antwerpenskog slikara Jacoba Jordaensa iz 1620./1621. godine, koja prikazuje scenu iz jedne od Ezopovih priča. Slika je nastala na platnu dimenzija 196 x 199,9 cm i uokvirena je u secesijski okvir s umjetnom pozlatom. Budući da se radi o kopiji koja ikonografski gledano ne odstupa od originala, opis teme Kraljevićeve slike je u potpunosti istovjetan već opisu originala (vidi poglavlja priloženog diplomskog rada Mirne Međeral: 3. SATIR I SELJAK JACOBA JORDAENSA, 3.1. Opis slike i 3.2. Literarni izvor) Važno je napomenuti kako Kraljević nije bio upoznat s temom Jordaensove slike i pričom koja je poslužila kao literarni izvor te, samim time, njegova kopija ne nosi didaktičku poruku kakvu posjeduje original.",
						figureCaption:"Density of threads; Left canvas border; Detail of a preparatory drawing",
					},
				},
				interventions:{
					filler:"Lead white pigment + unknown binder",
					stretcher:"Jednostruki patentni klinasti podokvir, jelovina"
				},
				work:{
					executor:"Mirna Međeral",
					responsiblePerson:"Tamara Ukrainčik",
					investor:"Academy of fine arts, Zagreb, Ministry of culture, Croatia",
					duration:"7/2014-9/2015",
					notes:{
						figureCaption:"Painting before conservation/restoration works; painting after conservation/restoration works",
					}
				}
			},
			details:{
				methods:{
					vis:{
						experimentalParameters:"Black light, Canon EOS 80D, f4, 1/250",
						notes:{
							caption:"Painting before conservation/restoration works; painting after conservation/restoration works; ack view of the painting",
						},
						files:{
							visFiles1:"/vis1.jpg",
							visFiles2:"/vis2.jpg",
						}
					},
					uvf:{
						notes:{
							caption:"UVF photograph of the painting after removing dust and dirt",
						},
						files:{
							uvfFiles1:"/uvf1.jpg",
						}
					},
					xrf:{
						experimentalParameters:"Rh anode, 35 kV, 0,1 mA, acquisition time 100 s, 1,5 mm spot size, 7 mm source-target distance, 11 mm target-detector distance",
						pigmentsDyes:"lead white, vermilion, yellow ochre, burnt umber, red ochre, cobalt blue, black iron oxide, chrome oxide green, bone black",
						priming:"Chalk with lead white",
						files:{
							xrfFiles5:"/XRF-spectre.zip",
						}
					}
				}
			}
		});
		//sculptures
		Prospero.insert({
				isPrivate:false,
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"/dummy/sculpture2.jpg",
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
			        front:"/dummy/arch3.jpg",
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
			        front:"/dummy/script4.jpeg",
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
			        front:"/dummy/object4.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Pigment 
		Prospero.insert({
				isPrivate:false,
			    type:"Pigment/dye/binder/varnish/reference materials",
			    data:{
			      basic:{
			        front:"/dummy/pigment1.jpeg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Samples 
		Prospero.insert({
				isPrivate:false,
			    type:"Sample/cross-section",
			    data:{
			      basic:{
			        front:"/dummy/cross1.jpeg",
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
			        front:"/dummy/other3.jpeg",
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
