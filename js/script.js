{
   const doDevGreetings = () => {
      console.log("Greetings! JavaScript is working");
   };

   const swapCurrency = () => {
      const firstElement = document.querySelector(".js-firstInput");
      const secoundElemenet = document.querySelector(".js-secoundInput");
      const temp = secoundElemenet.value;
      secoundElemenet.value = firstElement.value;
      firstElement.value = temp;
   }

   const calculateCurrency = () => {
      const firstElement = document.querySelector(".js-firstInput").value;
      const secoundElemenet = document.querySelector(".js-secoundInput").value;
      const documentResult = document.querySelector(".js-documentResult");
      const writedAmount = document.querySelector(".js-valueCurrency").value;
      let submitLink = `https://open.er-api.com/v6/latest/${firstElement}`;

      fetch(submitLink)
         .then(Response => {
            return Response.json();
         })
         .then(data => {
            let currencySelected = data.rates[`${secoundElemenet}`];
            let result = (currencySelected) * (writedAmount)
            documentResult.value = result.toFixed(2);
         })
   };

   const inputCheck = () => {
      const firstElement = document.querySelector(".js-firstInput").value;
      const secoundElemenet = document.querySelector(".js-secoundInput").value;
      const writedAmount = document.querySelector(".js-valueCurrency").value;
      const documentResult = document.querySelector(".js-documentResult");

         if (firstElement === "" || secoundElemenet === "" || writedAmount === "") {
            documentResult.classList.add("form__field--error");
            documentResult.value = "Wypełninj trzy powyżesze pola!"
         } else {
            documentResult.classList.remove("form__field--error");
            calculateCurrency();
         }
         
   };

   const init = () => {
      doDevGreetings();
      const calculateButton = document.querySelector(".js-calculateButton");
      const swapButton = document.querySelector(".js-swapButton");

      swapButton.addEventListener("click", swapCurrency);
      calculateButton.addEventListener("click", inputCheck);
   };

   init();
   
}

// const inputCheck = () => {
//    const firstElement = document.querySelector(".js-firstInput").value;
//    const secoundElemenet = document.querySelector(".js-secoundInput").value;
//    const writedAmount = document.querySelector(".js-valueCurrency").value;

//       if (firstElement === "" || secoundElemenet === "") {

//       } else {
//          calculateCurrency();
//       }
// };