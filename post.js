function Time(time){
	const newTime = {
		day:time.getDay(),
		date:time.getUTCDate(),
		month:time.getMonth()+1,
		year:time.getFullYear(),
		hours:time.getHours(),
		minutes:time.getMinutes(),
		seconds:time.getSeconds(),
		milliseconds:time.getMilliseconds(),
		timezone:time.getTimezoneOffset()
	};
	return newTime;
};
function formatDate(time) {
	return time.date+"/"+time.month+"/"+time.year+" "+time.hours+":"+time.minute+":"+time.second;
};

function writePost(){
		const input = document.querySelector("#file");
		input.oninput=function(event){
			let fileArr = Array.from(event.target.files);
			document.writeln('[');
			let apiArr = fileArr.forEach(function(item,index){
					let name = item.name.split(".")[0];
					if(index !== 0){
				    	document.writeln(`,{`);
				    }else{
				    	document.writeln(`<br/>&nbsp;&nbsp;{`);
				    }
				    write(6,"id",index);
				    write(6,"title",'"'+name+'"');
				    write(6,"alias",'"'+convertToAlias(name)+'"');
				    write(6,"image",'"/upload/'+item.name+'"');
				    write(6,"date",`"${formatDate(Time(new Date()))}"`);
				    write(6,"summary",'"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,"');
				    write(6,"content",'"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"');
					write(6,"auth",0,true);
				document.writeln(`<br/>&nbsp;&nbsp;}`);
			});
			document.writeln('<br/>]');
		}
};