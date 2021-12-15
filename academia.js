const main = (data) => {
  const zc_subform_rows = document.querySelectorAll(
    "table.zc-subformcontent tr.zc-grid-subform"
  );
  //   run a loop to iterate through each row
  for (const elem of zc_subform_rows) {
    //   run a loop to iterate through each column
    for (let i = 2; i <= elem.cells.length; i++) {
      //   get the element
      const optionElement = elem.querySelectorAll("td li.search-selected-val")[
        i
      ];
      //   if the element is not defined or is null, continue
      if (typeof optionElement == "undefined" || optionElement == null)
        continue;
      //   set the attribute
      optionElement.setAttribute("selvalue", "2727643000027208369");
      //   get the text
      const remarkText = "Poor";
      //   set the text
      optionElement.querySelector("span").innerHTML = remarkText;
      //   get the input
      const inputElement = optionElement.querySelector("input");
      //   set the value
      inputElement.setAttribute("value", "2727643000027208369");
    }
    //   get the element
    const feedback = elem.querySelector("td textarea.zc-gridsubform-input");
    //   if the element is not defined or is null, continue
    if (typeof feedback == "undefined" || feedback == null) continue;
    //   set the text
    feedback.innerHTML = data;
  }
};
//   run the function
main(feedbackValue);
