// this is identical
// data.data = data["data"]

let data = {
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "Hello From the one before the last one!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};

// get totalPages
// show self & first beside each other
// get the title of the data before the last one

// check if post id is less than 3 and type is articles - print "Pinned Article"

// check if totalPages is not equal to data length - print "inValid Data"

let len = data["data"].length;
let hamada = data["data"][len - 2];

// if ( data["data"][data.data.length - 2]["type"] == "articles" && data['data'][data.data.length - 2]['id'] > 3 ) {

// }

if (hamada["type"] == "articles") {
	if (hamada["id"] < 3) {
		console.log("Pinned Article");
	}
}

if (true && true) {
	// code to be excuted
}
if (true) {
	if (true) {
		// code to be excuted
	}
}

// console.log("article");
// let code = 1;
// if (true) {
// 	let code = 5;
// 	if (true) {
// 		let code = 10;
// 		console.log(code);
// 	}
// 	console.log("you are going to print: ", code);
// }
// console.log(code);
