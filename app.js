var employees = [];
			var employee1 = { 
				name: "john", 
				age: 24,
				salary: 30000, 
				address: { 
					city: "Bangalore", 
					state: "Karnataka", 
					pin: 560068 },
				}
            var employee2 = { 
				name: "Peter", 
				age: 26,
				salary: 0000, 
				address: { 
					city: "Kolkatta", 
					state: "West Bengal", 
					pin: 721304 },
				}
            var employee3 = { 
				name: "Hari", 
				age: 26,
				salary: 0000, 
				address: { 
					city: "Bangalore", 
					state: "Karnataka", 
					pin: 560068 },
				}
            var employee4 = { 
				name: "Sohan", 
				age: 26,
				salary: 250000, 
				address: { 
					city: "Hyderabad", 
					state: "Telangana", 
					pin: 500084 },
				}
            var employee5 = { 
				name: "Seema", 
				age: 29,
				salary: 2500000, 
				address: { 
					city: "Hyderabad", 
					state: "Telangana", 
					pin: 500084 },
				}
            employees=[employee1, employee2, employee3, employee4,employee5];
            for(var eachobj in employees)
            {
               console.log(employees[eachobj]);
            }