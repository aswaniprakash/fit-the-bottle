var canvas = document.getElementById('game_canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var cw = 15;
var speed = 2;  
var d = 'right';
var food;
var snake_array;
var score;
var color = "green";
var bottle_width = 60, bottle_height = 100, bottle_radius = 10;
var bottle_x = (w-bottle_width)/2, bottle_y = h-(bottle_height+30);
var move_bottle_x = w, move_bottle_y = h-(bottle_height+30);

function moveBottle()
{
	if(move_bottle_x == 0)
		move_bottle_x = w;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, w, h);

	drawBottle(bottle_x, bottle_y, 'white');
	drawBottle(move_bottle_x, move_bottle_y, 'maroon');
	move_bottle_x--;
}

function drawBottle(x, y, fillColor)
{
	width = bottle_width, height = bottle_height, radius = bottle_radius;
	ctx.fillStyle = fillColor;
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(x, y + radius);
	ctx.lineTo(x, y + height - radius);
	ctx.arcTo(x, y + height, x + radius, y + height, radius);
	ctx.lineTo(x + width - radius, y + height);
	ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
	ctx.lineTo(x + width, y + radius);
	ctx.quadraticCurveTo((x+width)-25, y-(height-25)+65,(x+width)-10, y-(height-40));
	ctx.quadraticCurveTo(x+(width/2), y-(height-35), x + 10, y-(height-40));
	ctx.quadraticCurveTo(x+25, y-(height-25)+65, x, y + radius + 1);
	/*ctx.lineTo(x + radius, y);
	ctx.arcTo(x, y, x, y + radius, radius); */
	ctx.stroke();
	ctx.fill();
}

function fitBottle()
{
	if(typeof game_loop != "undefined") clearInterval(game_loop);
	if(bottle_x == move_bottle_x)
		alert('You won');
	else
		alert('you lose');
}

function startOver()
{
	move_bottle_x = w, move_bottle_y = h-(bottle_height+30);
	if(typeof game_loop != "undefined") clearInterval(game_loop);
	game_loop = setInterval(moveBottle, speed);
}

startOver();