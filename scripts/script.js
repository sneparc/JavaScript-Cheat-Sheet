
//Cheat Sheet

	/*Variables are declared with the var keyword. You must think of them in algebraic terms.
	They are used to define things in JavaScript. You can make a JavaScript library using them. */

	//Here are examples of variables.
	var x=10
	var y=20
	var myArr=["John", "Fred", "Michael"]

	//You can do basic algebraic equations with variables.
	var x=10
	var y=20
	console.log(x+y);

	//You can use JavaScript to debug your page. The most common ways to check for debugging are alerts, comments and using the console.

	/*Alerts:
	   They are used to see the output of your script.
	   Alerts are called by using alert("Content of your alert")*/

			//Alert Examples:
				//ex.1
				alert("Hi!");
				//ex.2
				alert("Hello World");
				//ex. 3
				var x=10
				var y=20
				alert(x+y);

	//Comments
		//Comments are used to help remind users and yourself what your JavaScript code means if you ever leave and then come back to it.
		     // This is a single line comment

		     /*This
		       is
		       a
		       multi-line
		       comment*/

	//JavaScript Console
		//The JavaScript console is used to test your script without seeing it directly on the browser. Arbitrary JavaScript can be run directly in the console line by line.
		//To bring up the the JavaScript Console in Chrome, use Command + Option + J
		//To log to the JavaScript console, use: console.log("This is logged to the console");

		//Console examples
			var x = 10;
			console.log(x*40);
			console.log(x+4);

			console.log("Hello World")

	//Data Types
		//There are different data types in JavaScript. The basic Data Types are Strings, Numbers, Booleans, and Undefined. An Array is a more complex data type!

			/*String Example:
				"Hello World"
				"This is an example of a sentence string"*/

			/*Number Examples:
				5
				10
				5.5*/

			/*Booleans:
				True
				False*/

			/*Undefined
				no value
				var with no value*/

			/*Identifying Data Types: Used to identify the type of a piece of data.
				You must use the type of JSfunction:*/
				 //Example of this:
				 	var yourData="This is my data";
					console.log(typeof(yourData));

	//Arrays
	  //Arrays are used to hold a collection of data, of any data type. 
	  	  /*Examples:
	  	 	 1)["Snoopy", "Charlie Brown", "Patty", "Violet"]
	  	 	 2)[11, 15, 25, 48, 79, "elephant"]; (They can hold multiple data types, as in this example)*/
	  //Arrays can be stored in variables.
	  	  /*Example:
	  	  	var class_names=["Julie", "Sophie", "Rob", "John"];


	  //You can access array items.
	  		//Accessing an array using an index.
	  			/*Example:*/
	  				var myArr=["Snoopy", "Charlie Brown", "Patty", "Violet"];
					console.log(myArr[3]);
					console.log(myArr[0]);
			//Accessing an array when you don't know an index number.
				/*Example:*/
					var snoopyPosition = myArr.indexOf("Snoopy");
					console.log(myArr[snoopyPosition]);
	  //An array can store other arrays. It is called a multi-dimensional array.
	  		//Ex.1
	  		var gods = ["Zeus", "Poseidon", "Hades"];
			var places = ["Mt. Olympus", "The Sea", "The Underworld"];
			var mythology = [gods, places];

			console.log(mythology [1][1]); //The Sea
			console.log(mythology [0][2]); //Hades
			
	//Testing
		//Testing is used to see if certain data types are equal and to compare numbers. Any test returns a boolean true or false.
		//Using three equal signs instead of two also checks the object type.
			//Examples:
				//Ex.1: Greater Than
					console.log(5<10); //true
				//Ex.2: Are the two strings equal to each other?
					var x ="snoopy"
					var y ="snoopy"
					console.log(x === y); //true
				//Ex.3: Does x and y equal each other when var x is changed to lucy? 
					var x = "lucy";
					console.log(x === y); //false
		//Use !== to test if two strings are NOT equal:
			//Example:
				var x ="dog"
				var y="cat"
				console.log(x !== y); //true
		//<,>, <=, >= are valid comparison operators.

	//Logic
		/*Logic is the control flow of your program.
		  You should think of logic as a river that branches off in a few different ways.
		  It allows you to make the computer do the thinking for you! 
		  You can achieve this river by using if/then,else, then*/

		 //If,then is used to implement gates into our program.
		 	//If, Then Examples:
		 		//Ex.1
		 			if(5>10){
					console.log("You'll never see this because 5 is not greater than 10")
					} else{
					console.log("You will see this because 5 is not greater than 10")
					}
				//Ex.2(Exercise 1 on Exercises for if,then from presentation for lesson 5)
					var myVar=5;
					if(myVar < 10){
						alert("Your variable is less than 10!")
					}else{alert("Your variable is "+myVar+" and it is greater than 10")
					}	
				//Ex.3 (Exercise 3 on Exercises for if,then from presentation for lesson 5)
				var x ="happy"
				var y ="sad"
				if(x === y){
				alert("string x is equal to string y")
				}else{
					alert("string x does not equal string y")
				}
			//￼If...Then...Else If...Then...Else...Then: Else if is another condition to evaluate in the case where if is not true and you have another condition to look at before else:
				//Example:
					if(5>10){
					console.log("You'll never see this because 5 is not greater than 10");
					}else if (5===5){
						console.log("Yes, 5 really is equal to 5.")
					} else{
					console.log("You will see this because 5 is not greater than 10")
					}

	//Functions
		//A function is a way to encapsulate code for later use.
		//It can take arguments, which are used as variables inside the function.
			//Example 1:
				function addTwo(x){
				return x+2;
				}
				console.log(addTwo(3));
				console.log(addTwo(10));
			//Example 2:Once a function is declared, it can be called later on(invoked) by calling its name and supplying it with any arguments.
				alert(addTwo(5));

//Write 3 different functions that take input and return something via the console or an alert.
	//Function 1:
		function alertName(somePersonsName){
		return alert(somePersonsName);
		}
		alertName("Alfredo");
	//Function 2:
		function noArgument(){
		return console.log("No argument has been declared");
		}
		noArgument("");
		noArgument();


	//Function 3:
		
		var answer= prompt("Pick a door 1, 2, or 3?")
				
		console.log(answer);

		function checkDoor(userAnswer){
			if(userAnswer == 1){
				alert("you won a prize")
			}else if(userAnswer==2){
				alert("Sorry, you lost!")
			}else if(userAnswer == 3){
				alert("Sorry, maybe next time!")
			}

		}

		checkDoor(answer)











