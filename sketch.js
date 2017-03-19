function setup() {
	createCanvas(1200,800);
	//noLoop();

}

let startTime = 0//minute();
let start = new Date();
start = start.getMinutes();

let startHr = new Date();
startHr = startHr.getHours();

function draw() {
	
	background(0);
	let d2 = new Date();

	if(d2.getHours() <= startHr+1){

		//SUN
		fill(255);
		ellipse(52, 250, 100, 100);

		//Planets
		fill("#FEE4B4");
		ellipse(174, 250, 50, 50);

		fill("#DAA520");
		ellipse(296, 250, 50, 50);

		fill("#00BFFF");
		ellipse(418, 250, 50, 50);

		fill("#FFFACD");
		ellipse(540, 250, 50, 50);

		fill("#FFA500");
		ellipse(662, 250, 50, 50);

		fill("#FFE4B5");
		ellipse(784, 250, 50, 50);

		fill("#AFEEEE");
		ellipse(906, 250, 50, 50);

		fill("#00BFFF");
		ellipse(1028, 250, 50, 50);

		fill("#1E90FF");
		ellipse(1150, 250, 50, 50);


		let d = new Date();


		if( d.getMinutes() <= start) {

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,50,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,50,25,25)
			}
		}else if( d.getMinutes() <= start+4) {

			fill('red')
			ellipse(55,50,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,100,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,100,25,25)
			}
		}else if(d.getMinutes() <= start+8){
			
			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
		
		    if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,150,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,150,25,25)
			}

		}else if( d.getMinutes() <= start+12) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,200,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,200,25,25)
			}
		}else if( d.getMinutes() <= start+16) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,250,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,250,25,25)
			}
		
		}else if( d.getMinutes() <= start+20) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,300,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,300,25,25)
			}
		
		}else if( d.getMinutes() <= start+24) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,350,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,350,25,25)
			}
		
		}else if( d.getMinutes() <= start+28) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,400,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,400,25,25)
			}
		
		}else if( d.getMinutes() <= start+32) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,450,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,450,25,25)
			}
		
		}else if( d.getMinutes() <= start+36) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,500,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,500,25,25)
			}
		
		}else if( d.getMinutes() <= start+40) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,550,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,550,25,25)
			}
		
		}else if( d.getMinutes() <= start+44) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,600,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,600,25,25)
			}
		
		}else if( d.getMinutes() <= start+48) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,650,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,650,25,25)
			}
		
		}else if( d.getMinutes() <= start+52) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,700,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,700,25,25)
			}

		}else if( d.getMinutes() <= start+56) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,750,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,750,25,25)
			}
		
		}else if( d.getMinutes() <= start+60) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)
			ellipse(55,750,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,800,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,800,25,25)
			}
		
		}

	}else if(d2.getHours() <= startHr+2){

		fill(0)
		ellipse(55,50,25,25)
		ellipse(55,100,25,25)
		ellipse(55,150,25,25)
		ellipse(55,200,25,25)
		ellipse(55,250,25,25)
		ellipse(55,300,25,25)
		ellipse(55,350,25,25)
		ellipse(55,400,25,25)
		ellipse(55,450,25,25)
		ellipse(55,500,25,25)
		ellipse(55,550,25,25)
		ellipse(55,600,25,25)
		ellipse(55,650,25,25)
		ellipse(55,700,25,25)
		ellipse(55,750,25,25)

		//SUN
		fill('yellow');
		ellipse(52, 250, 100, 100);

		//Planets
		fill("#FEE4B4");
		ellipse(174, 250, 50, 50);

		fill("#DAA520");
		ellipse(296, 250, 50, 50);

		fill("#00BFFF");
		ellipse(418, 250, 50, 50);

		fill("#FFFACD");
		ellipse(540, 250, 50, 50);

		fill("#FFA500");
		ellipse(662, 250, 50, 50);

		fill("#FFE4B5");
		ellipse(784, 250, 50, 50);

		fill("#AFEEEE");
		ellipse(906, 250, 50, 50);

		fill("#00BFFF");
		ellipse(1028, 250, 50, 50);

		fill("#1E90FF");
		ellipse(1150, 250, 50, 50);


		let d = new Date();


		if( d.getMinutes() <= start) {

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,50,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,50,25,25)
			}
		}else if( d.getMinutes() <= start+4) {

			fill('red')
			ellipse(55,50,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,100,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,100,25,25)
			}
		}else if(d.getMinutes() <= start+8){
			
			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
		
		    if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,150,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,150,25,25)
			}

		}else if( d.getMinutes() <= start+12) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,200,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,200,25,25)
			}
		}else if( d.getMinutes() <= start+16) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,250,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,250,25,25)
			}
		
		}else if( d.getMinutes() <= start+20) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,300,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,300,25,25)
			}
		
		}else if( d.getMinutes() <= start+24) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,350,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,350,25,25)
			}
		
		}else if( d.getMinutes() <= start+28) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,400,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,400,25,25)
			}
		
		}else if( d.getMinutes() <= start+32) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,450,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,450,25,25)
			}
		
		}else if( d.getMinutes() <= start+36) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,500,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,500,25,25)
			}
		
		}else if( d.getMinutes() <= start+40) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,550,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,550,25,25)
			}
		
		}else if( d.getMinutes() <= start+44) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,600,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,600,25,25)
			}
		
		}else if( d.getMinutes() <= start+48) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,650,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,650,25,25)
			}
		
		}else if( d.getMinutes() <= start+52) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,700,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,700,25,25)
			}

		}else if( d.getMinutes() <= start+56) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,750,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,750,25,25)
			}
		
		}else if( d.getMinutes() <= start+60) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)
			ellipse(55,750,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,800,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,800,25,25)
			}
		
		}		

	}else if(d2.getHours() <= startHr+3){

		fill(0)
		ellipse(55,50,25,25)
		ellipse(55,100,25,25)
		ellipse(55,150,25,25)
		ellipse(55,200,25,25)
		ellipse(55,250,25,25)
		ellipse(55,300,25,25)
		ellipse(55,350,25,25)
		ellipse(55,400,25,25)
		ellipse(55,450,25,25)
		ellipse(55,500,25,25)
		ellipse(55,550,25,25)
		ellipse(55,600,25,25)
		ellipse(55,650,25,25)
		ellipse(55,700,25,25)
		ellipse(55,750,25,25)

		//SUN
		fill('orange');
		ellipse(52, 250, 100, 100);

		//Planets
		fill("#FEE4B4");
		ellipse(174, 250, 50, 50);

		fill("#DAA520");
		ellipse(296, 250, 50, 50);

		fill("#00BFFF");
		ellipse(418, 250, 50, 50);

		fill("#FFFACD");
		ellipse(540, 250, 50, 50);

		fill("#FFA500");
		ellipse(662, 250, 50, 50);

		fill("#FFE4B5");
		ellipse(784, 250, 50, 50);

		fill("#AFEEEE");
		ellipse(906, 250, 50, 50);

		fill("#00BFFF");
		ellipse(1028, 250, 50, 50);

		fill("#1E90FF");
		ellipse(1150, 250, 50, 50);


		let d = new Date();


		if( d.getMinutes() <= start) {

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,50,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,50,25,25)
			}
		}else if( d.getMinutes() <= start+4) {

			fill('red')
			ellipse(55,50,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,100,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,100,25,25)
			}
		}else if(d.getMinutes() <= start+8){
			
			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
		
		    if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,150,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,150,25,25)
			}

		}else if( d.getMinutes() <= start+12) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,200,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,200,25,25)
			}
		}else if( d.getMinutes() <= start+16) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,250,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,250,25,25)
			}
		
		}else if( d.getMinutes() <= start+20) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,300,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,300,25,25)
			}
		
		}else if( d.getMinutes() <= start+24) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,350,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,350,25,25)
			}
		
		}else if( d.getMinutes() <= start+28) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,400,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,400,25,25)
			}
		
		}else if( d.getMinutes() <= start+32) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,450,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,450,25,25)
			}
		
		}else if( d.getMinutes() <= start+36) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,500,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,500,25,25)
			}
		
		}else if( d.getMinutes() <= start+40) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,550,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,550,25,25)
			}
		
		}else if( d.getMinutes() <= start+44) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,600,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,600,25,25)
			}
		
		}else if( d.getMinutes() <= start+48) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,650,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,650,25,25)
			}
		
		}else if( d.getMinutes() <= start+52) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,700,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,700,25,25)
			}

		}else if( d.getMinutes() <= start+56) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,750,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,750,25,25)
			}
		
		}else if( d.getMinutes() <= start+60) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)
			ellipse(55,750,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,800,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,800,25,25)
			}
		
		}		

	}//hour 4
	else if(d2.getHours() <= startHr+4){

		fill(0)
		ellipse(55,50,25,25)
		ellipse(55,100,25,25)
		ellipse(55,150,25,25)
		ellipse(55,200,25,25)
		ellipse(55,250,25,25)
		ellipse(55,300,25,25)
		ellipse(55,350,25,25)
		ellipse(55,400,25,25)
		ellipse(55,450,25,25)
		ellipse(55,500,25,25)
		ellipse(55,550,25,25)
		ellipse(55,600,25,25)
		ellipse(55,650,25,25)
		ellipse(55,700,25,25)
		ellipse(55,750,25,25)

		//SUN
		fill('pink');
		ellipse(52, 250, 100, 100);

		//Planets
		fill("#FEE4B4");
		ellipse(174, 250, 50, 50);

		fill("#DAA520");
		ellipse(296, 250, 50, 50);

		fill("#00BFFF");
		ellipse(418, 250, 50, 50);

		fill("#FFFACD");
		ellipse(540, 250, 50, 50);

		fill("#FFA500");
		ellipse(662, 250, 50, 50);

		fill("#FFE4B5");
		ellipse(784, 250, 50, 50);

		fill("#AFEEEE");
		ellipse(906, 250, 50, 50);

		fill("#00BFFF");
		ellipse(1028, 250, 50, 50);

		fill("#1E90FF");
		ellipse(1150, 250, 50, 50);


		let d = new Date();


		if( d.getMinutes() <= start) {

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,50,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,50,25,25)
			}
		}else if( d.getMinutes() <= start+4) {

			fill('red')
			ellipse(55,50,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,100,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,100,25,25)
			}
		}else if(d.getMinutes() <= start+8){
			
			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
		
		    if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,150,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,150,25,25)
			}

		}else if( d.getMinutes() <= start+12) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,200,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,200,25,25)
			}
		}else if( d.getMinutes() <= start+16) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,250,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,250,25,25)
			}
		
		}else if( d.getMinutes() <= start+20) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,300,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,300,25,25)
			}
		
		}else if( d.getMinutes() <= start+24) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,350,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,350,25,25)
			}
		
		}else if( d.getMinutes() <= start+28) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,400,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,400,25,25)
			}
		
		}else if( d.getMinutes() <= start+32) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,450,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,450,25,25)
			}
		
		}else if( d.getMinutes() <= start+36) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,500,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,500,25,25)
			}
		
		}else if( d.getMinutes() <= start+40) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,550,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,550,25,25)
			}
		
		}else if( d.getMinutes() <= start+44) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,600,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,600,25,25)
			}
		
		}else if( d.getMinutes() <= start+48) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,650,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,650,25,25)
			}
		
		}else if( d.getMinutes() <= start+52) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,700,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,700,25,25)
			}

		}else if( d.getMinutes() <= start+56) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,750,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,750,25,25)
			}
		
		}else if( d.getMinutes() <= start+60) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)
			ellipse(55,750,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,800,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,800,25,25)
			}
		
		}		

	}// hour 5
	else if(d2.getHours() <= startHr+5){

		fill(0)
		ellipse(55,50,25,25)
		ellipse(55,100,25,25)
		ellipse(55,150,25,25)
		ellipse(55,200,25,25)
		ellipse(55,250,25,25)
		ellipse(55,300,25,25)
		ellipse(55,350,25,25)
		ellipse(55,400,25,25)
		ellipse(55,450,25,25)
		ellipse(55,500,25,25)
		ellipse(55,550,25,25)
		ellipse(55,600,25,25)
		ellipse(55,650,25,25)
		ellipse(55,700,25,25)
		ellipse(55,750,25,25)

		//SUN
		fill('red');
		ellipse(52, 250, 100, 100);

		//Planets
		fill("#FEE4B4");
		ellipse(174, 250, 50, 50);

		fill("#DAA520");
		ellipse(296, 250, 50, 50);

		fill("#00BFFF");
		ellipse(418, 250, 50, 50);

		fill("#FFFACD");
		ellipse(540, 250, 50, 50);

		fill("#FFA500");
		ellipse(662, 250, 50, 50);

		fill("#FFE4B5");
		ellipse(784, 250, 50, 50);

		fill("#AFEEEE");
		ellipse(906, 250, 50, 50);

		fill("#00BFFF");
		ellipse(1028, 250, 50, 50);

		fill("#1E90FF");
		ellipse(1150, 250, 50, 50);


		let d = new Date();


		if( d.getMinutes() <= start) {

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,50,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,50,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,50,25,25)
			}
		}else if( d.getMinutes() <= start+4) {

			fill('red')
			ellipse(55,50,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,100,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,100,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,100,25,25)
			}
		}else if(d.getMinutes() <= start+8){
			
			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
		
		    if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,150,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,150,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,150,25,25)
			}

		}else if( d.getMinutes() <= start+12) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,200,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,200,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,200,25,25)
			}
		}else if( d.getMinutes() <= start+16) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,250,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,250,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,250,25,25)
			}
		
		}else if( d.getMinutes() <= start+20) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,300,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,300,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,300,25,25)
			}
		
		}else if( d.getMinutes() <= start+24) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,350,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,350,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,350,25,25)
			}
		
		}else if( d.getMinutes() <= start+28) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,400,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,400,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,400,25,25)
			}
		
		}else if( d.getMinutes() <= start+32) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,450,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,450,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,450,25,25)
			}
		
		}else if( d.getMinutes() <= start+36) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,500,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,500,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,500,25,25)
			}
		
		}else if( d.getMinutes() <= start+40) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,550,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,550,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,550,25,25)
			}
		
		}else if( d.getMinutes() <= start+44) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,600,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,600,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,600,25,25)
			}
		
		}else if( d.getMinutes() <= start+48) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,650,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,650,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,650,25,25)
			}
		
		}else if( d.getMinutes() <= start+52) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,700,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,700,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,700,25,25)
			}

		}else if( d.getMinutes() <= start+56) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(secod(), 0, 60, 0, width/2)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,750,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				//pos1=map(second(), 0, 60, width,width/2)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,750,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				//pos1=map(second(), 0,60,width/2,0)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,750,25,25)
			}
		
		}else if( d.getMinutes() <= start+60) {

			fill('red')
			ellipse(55,50,25,25)
			ellipse(55,100,25,25)
			ellipse(55,150,25,25)
			ellipse(55,200,25,25)
			ellipse(55,250,25,25)
			ellipse(55,300,25,25)
			ellipse(55,350,25,25)
			ellipse(55,400,25,25)
			ellipse(55,450,25,25)
			ellipse(55,500,25,25)
			ellipse(55,550,25,25)
			ellipse(55,600,25,25)
			ellipse(55,650,25,25)
			ellipse(55,700,25,25)
			ellipse(55,750,25,25)
					

			if(minute() % 4 === 0) { 
		    	fill(255)
				pos1=map(second(), 0, 60, 0, width/2)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 1){
				fill(255)
				pos1=map(second(), 0, 60, width/2, width)
				ellipse(pos1,800,25,25)

			} else if(minute() % 4 === 2){
				fill(255)
				pos1=map(second(), 0, 60, width, width/2)
				ellipse(pos1,800,25,25)

			}else if(minute() % 4 === 3){
				fill(255)
				pos1=map(second(), 0, 60, width/2, 0)
				ellipse(pos1,800,25,25)
			}
		
		}		

	}
    
    
	
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}