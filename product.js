function writeProduct(){
function writeSpace(spaceInt){
	let space = "";
	for(let i = 0 ; i < spaceInt ; i++){
		space+="&nbsp;";
	}
	return space;
}
function writeln(value){
	document.writeln("<br/>",value);
}
function write(value){
	document.writeln(value);
}
const input = document.querySelector("#file");
		input.oninput=function(event){
			let fileArr = Array.from(event.target.files);
			write("[");
			fileArr.forEach(function(item,index){
					let name = item.name.split(".")[0];
					let rating = Math.random()*5;
					let price = Number.parseFloat(Math.random()*500 - 100).toFixed(2);
				    if(index !== 0){
				    	writeln(writeSpace(0)+",{");
				    }else{
				    	writeln(writeSpace(2)+"{");
				    }
				    writeln(writeSpace(4)+`"id":${index},`);
				    writeln(writeSpace(4)+`"title":"${name}",`);
				    writeln(writeSpace(4)+`"alias":"${convertToAlias(name)}",`);
				    writeln(writeSpace(4)+`"rating":${rating},`);
				    writeln(writeSpace(4)+`"content":"${"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"}",`);
				    writeln(writeSpace(4)+`"versions":[`);//mở array version
				    writeln(writeSpace(6)+"{");//mỏ array version item 1
				    	writeln(writeSpace(8)+`"id":0,`);				    	
				    	writeln(writeSpace(8)+`"title":"${"3GB-32GB"}",`);
				    	writeln(writeSpace(8)+`"alias":"${"3gb-32gb"}",`);
				    	writeln(writeSpace(8)+`"image":"/upload/${item.name}"`);
					    if(price > 0){
					    	let sale = Math.random();
					    	write(",");
					    	writeln(writeSpace(8)+`"price":${price}`);
					    	if(sale >= 0.2 && sale <= 0.5){
					    		let salePrice = Number.parseFloat((sale)*price).toFixed(2);
					    		write(",");
					    		writeln(writeSpace(8)+`"salePrice":${salePrice}`);
					    	}
					    };
					writeln(writeSpace(6)+"},{");//đóng array version item 1,mở item 2
					    writeln(writeSpace(8)+`"id":1,`);
					    writeln(writeSpace(8)+`"title":"4GB-64GB",`);
					    writeln(writeSpace(8)+`"alias":"4gb-64gb",`);
					    writeln(writeSpace(8)+`"image":"/upload/${item.name}"`);
					    if(price > 0){
					    	price = Number.parseFloat(price * 1.2).toFixed(2);
							let sale = Math.random();
							write(",");
					    	writeln(writeSpace(8)+`"price":${price}`);
					    	if(sale >= 0.2 && sale <= 0.5){
					    		let salePrice = Number.parseFloat((sale)*price).toFixed(2);
					    		write(",");
					    		writeln(writeSpace(8)+`"salePrice":${salePrice}`);
					    	}
					    };
				    writeln(writeSpace(6)+"}");;//đóng array version item 2
				    writeln(writeSpace(4)+"],");//đóng array version
				    writeln(writeSpace(6)+`"albums":[`);
				    	writeln(writeSpace(8)+"{");
				    		writeln(writeSpace(10)+`"image":"/upload/${item.name}"`);
				    	writeln(writeSpace(8)+"},");
				    	writeln(writeSpace(8)+"{");
				    		writeln(writeSpace(10)+`"image":"/upload/${item.name}"`);
				    	writeln(writeSpace(8)+"},");
				    	writeln(writeSpace(8)+"{");
				    		writeln(writeSpace(10)+`"image":"/upload/${item.name}"`);
				    	writeln(writeSpace(8)+"},");
				    	writeln(writeSpace(8)+"{");
				    		writeln(writeSpace(10)+`"image":"/upload/${item.name}"`);
				    	writeln(writeSpace(8)+"},");
				    	writeln(writeSpace(8)+"{");
				    		writeln(writeSpace(10)+`"image":"/upload/${item.name}"`);
				    	writeln(writeSpace(8)+"}");
				    writeln(writeSpace(6)+`]`);
				writeln(writeSpace(2)+"}");
			});
			writeln("]");
	}
};
