function clozeCard(text,cloze){
    this.text = text;
    this.cloze = cloze;
};

var removeCloze = new clozeCard();


module.exports = ClozeCard;