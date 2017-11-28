function ClozeNotFoundException(message){
    this.message = message;
    this.name = "ClozeNotFoundException";
    // TO PRINT THE EXCEPTION MESSAGE
    console.log(this.message);
}

function ClozeCard(text, cloze){
    if (this instanceof ClozeCard){

        this.fullText = text;
        this.cloze = cloze;

        var tokens = text.split(cloze);
        var partialText; 
        var index = text.indexOf(cloze);
        
        if(tokens.length <= 1){
//             throw new ClozeNotFoundException("Cloze is not found in the text".red);
        } else {
            if (index === 0){
                partialText = "...";
                for (var i = 0; i < tokens.length; i++){
                    partialText += tokens[i];
                }
            } else {
                partialText = tokens[0] + "..." + tokens[1];
            }
        }
        this.partial = partialText;
    }else{
        return new ClozeCard(text,cloze);
    }
};

module.exports = ClozeCard;
