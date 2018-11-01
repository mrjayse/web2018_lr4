function LikesCounter(startValue = 0){
	this.counter = startValue;
}

LikesCounter.prototype.like = function (){
	this.counter++;
}

LikesCounter.prototype.dislike = function (){
	this.counter--;
}

var likeObj = new LikesCounter();