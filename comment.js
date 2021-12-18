function Time(time){
	const newTime = {
		day:time.getDay(),
		date:time.getUTCDate(),
		month:time.getMonth()+1,
		year:time.getFullYear(),
		hours:time.getHours(),
		seconds:time.getSeconds(),
		minutes:time.getMinutes(),
		milliseconds:time.getMilliseconds(),
		timezone:time.getTimezoneOffset()
	};
	return newTime;
};
function formatDate(time) {
	return time.date+"/"+time.month+"/"+time.year;
};
function writeComment(max,handle){
	const apiArr = []
	for(let i = 0 ; i <20 ; i++ ){
		apiArr.push(`{
			<br/>&nbsp;&nbsp;&nbsp;&nbsp;"id"	 	:${i},
			<br/>&nbsp;&nbsp;&nbsp;&nbsp;"position"	:"post",
			<br/>&nbsp;&nbsp;&nbsp;&nbsp;"positionId"	:${Math.round(Math.random()*max)},
		    <br/>&nbsp;&nbsp;&nbsp;&nbsp;"content"		:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
		    <br/>&nbsp;&nbsp;&nbsp;&nbsp;"user"	:1,
		    <br/>&nbsp;&nbsp;&nbsp;&nbsp;"date":"${formatDate(Time(new Date()))}"
		<br/>}`)
	};
	let apiJson = "["+apiArr.join()+"]";
	handle(apiJson);
}