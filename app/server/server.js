Works = new Meteor.Collection("works");
PersonalProfile = new Meteor.Collection("personalProfile");
Contacts = new Meteor.Collection("contacts");

if (Meteor.isServer) {
  Meteor.startup(function () {
	if(Contacts.find().count() === 0){
		var contacts = [{
			className: 'mail',
			contactReference: 'mailto:melvrickgoh@hotmail.com',
			contactIcon: 'icon-mail',
			contactDisplayName: 'melvrickgoh@hotmail.com'
		},{
			className: 'mobile',
			contactReference: 'tel:+6596831930',
			contactIcon: 'icon-mobile',
			contactDisplayName: '+ 65 9683 1930'
		},{
			className: 'address',
			contactReference: 'https://www.google.com/maps/place/Blk+367/@1.4298803,103.841185,16z/data=!4m7!1m4!3m3!1s0x31da146ec123d73f:0x964e8da684d4c341!2sYishun+Ring+Rd!3b1!3m1!1s0x31da145d50b87c0d:0x6100fb6651bd7515',
			contactIcon: 'icon-address',
			contactDisplayName: 'Blk 367 Yishun Ring Road, 760367 Singapore'
		}];
		
		for (var i = 0; i < contacts.length; i++){
			//establish working details
			var contact = contacts[i];
			console.log(contact.className);
			Contacts.insert({
				className: contact.className,
				contactReference: contact.contactReference,
				contactIcon: contact.contactIcon,
				contactDisplayName: contact.contactDisplayName
			},function(err,id){
				console.log(err);
				console.log(id);
			});
		}
	}
  
	if(PersonalProfile.find().count() > 0){
		var ids = [];
		var cursor = PersonalProfile.find();
		
		cursor.forEach(function(para){
			ids.push(para._id);
		});
		
		for (var j in ids){
			PersonalProfile.remove(ids[j]);
		}
	}
	
	if(PersonalProfile.find().count() === 0){
		var paragraphs = [{
				paragraph:'Hi, I\'m Melvrick and my passion lies in the development of interactive experiences around systems, particularly those in the field of analytics. Designing applications with efficient back-end solutions and interesting front-end spatial purposes are instinctive to me, but I also enjoy the odd foray into the latest designs for unique user experiences'
			}];
			
		for (var i = 0; i < paragraphs.length; i++){
			//establish working details
			var para = paragraphs[i];
			PersonalProfile.insert({
				paragraph: para.paragraph
			},function(err,id){
			});
		}
	}
  
	if(Works.find().count() === 0){
		var works = [{
			projectName: 'Networked Risk',
			projectFolderTitle: 'internship-dbs',
			orderValue: 1,
			description: 'Banks deal with plenty of clients and not all are for legititmate reasons. Sometimes, companies are set up as shells from which to funnel dubious funds from one to another. By daisy chaining these shells together, money can be laundered across different banks. This project seeks to network company\'s stakeholders\' relationships across different companies based on their risk profile to discover and provide insights into customer risk profiles based on their relationships up to 3 degrees of separation. This was done together with the DBS Corporate Risk & Governance Group ',
			projectType: 'Analytics',
			sourceType: 'Internship',
			projectLink: 'undefined'
		},{
			projectName: 'Living Strong',
			projectFolderTitle: 'va-project',
			orderValue: 2,
			description: 'We believe that the types of diseases contracted reveal a certain social aspect of a person. For example, one who suffers from cholera must have encountered a poor sanitation source of water, food or likewise. This project extrapolates disease and healthcare support data from the World Bank to unveil trends in the quality of healthcare support and the corresponding impact of diseases worldwide.',
			projectType: 'Analytics',
			sourceType: 'School',
			projectLink: 'http://va-kckoh.rhcloud.com/'
		},{
			projectName: 'NAV',
			projectFolderTitle: 'fyp-project',
			orderValue: 3,
			description: 'NAV is a mobile and web application system built for A.C. Nielsen for my Final Year Project. One of the key operations for Nielsen is the census taking process for gathering data. Here, they required mobile survey application that helps employees navigate and track their coverage across a specified region. Supervisors are able to track their employees movements and surveying progress in real-time as well as download reports involving statistical calculations with reference to previous year\'s data. This system was successfully implemented and helped reduce the operation\'s cycle time from 4 weeks to 3 days. This project was executed across 7 months in conjunction with Nielsen\'s Measurement Science, Innovation and Data Acquisition teams, as well as their field offices in Bali and Singapore',
			projectType: 'Operations',
			sourceType: 'School',
			projectLink: 'http://123.255.200.214:5555/nav3/'
		}];
		for (var i = 0; i < works.length; i++){
			//establish working details
			var work = works[i];
			Works.insert({
				projectName: work.projectName,
				projectFolderTitle: work.projectFolderTitle,
				orderValue: work.orderValue,
				description: work.description,
				projectType: work.projectType,
				sourceType: work.sourceType,
				projectLink: work.projectLink
			},function(err,id){
			});
		}
	}
  });
}