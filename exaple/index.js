const input= document.getElementById('input');

input.onkeyup = function(){
   const printBox= document.getElementById('printbox')
    const inputValue = input.value;
    const words = inputValue.split(" ");
    console.log("Words:", words);
    let result = "";
    let totalLetter= 0;
    wordCount=0;
    words.forEach(word => {
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
        const letterCount = cleanedWord.length;
        result += `${cleanedWord} - Letters: ${letterCount} <br/> `;
        totalLetter += letterCount;
        wordCount += 1;
      });
      const average= totalLetter/ wordCount;
   
      printBox.innerHTML=result +"<br/>"+"totalcound :"+totalLetter + "<br/>"+  "average: "+average

      console.log(result);
      console.log("totalCound :"+totalLetter);
      console.log("average: "+average);
      

}
