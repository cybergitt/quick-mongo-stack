db.createUser(
	{
		user	: "root",
		pwd		: "secret",
		roles	: [
			{
				role	: "readWrite",
				db		: "defaultdb"
			}
		],
		useUnifiedTopology: true
	}
)