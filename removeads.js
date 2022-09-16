
let classes=[
'parallax1','GoogleActiveViewInnerContainer','GoogleActiveViewElement','detikads'
]

let ids=[
'adv-caption-lead','adv-caption-mr1','google_image_div'
]

function removeAds(){
	classes.forEach( function(c){
		try{
			document.getElementsByClassName(c)[0].remove();
		}catch(err){

		}
	});

	ids.forEach(function(id){
		let el=document.getElementById(id);
		if(el!=null){
			if(el.nextSibling!=null){
				el.nextSibling.remove();
				el.nextSibling.remove();
			}
		el.remove();
		}
	});

	let els=document.querySelectorAll('div[data-google-query-id]');
	els.forEach( function(el){
		try{
			el.remove();
			el.parent.remove();
			el.parent.parent.remove();
			el.parent.parent.parent.remove();
		}catch(err){

		}
	});

	let advTags=['p','div'];
	advTags.forEach(function(tag){
		removeByAdvText(tag);
	});
}

function removeByAdvText(tag){
	els=document.getElementsByTagName(tag);
	if(els==null){
		return;
	}
	for(let i=0;i<els.length;i++){
		el=els[i];
		console.log(el.innerHTML.trim());
		if(el.innerHTML.trim().toUpperCase()=='ADVERTISEMENT'){
			el.nextSibling.remove();
			el.remove();
		}
	}
	/*
	els.forEach( function(el){
		if(el.innerHTML.toUpperCase().includes('ADVERTISEMENT')){
			el.nextSibling.remove();
			el.remove();
		}
	});
	*/
}

removeAds();