document.addEventListener("DOMContentLoaded", function () {
    const inputEncode = document.getElementById("inputEncode");
    const outputEncode = document.getElementById("outputEncode");
    const encodeButton = document.getElementById("encodeButton");
  
    const inputDecode = document.getElementById("inputDecode");
    const outputDecode = document.getElementById("outputDecode");
    const decodeButton = document.getElementById("decodeButton");
  
    encodeButton.addEventListener("click", function () {
      const text = inputEncode.value;
      const encodedText = btoa(text); // Encode to Base64
      outputEncode.textContent = `Encoded: ${encodedText}`;
    });
  
    decodeButton.addEventListener("click", function () {
      const encodedText = inputDecode.value;
      try {
        const decodedText = atob(encodedText); // Decode from Base64
        outputDecode.textContent = `Decoded: ${decodedText}`;
      } catch (error) {
        outputDecode.textContent = "Invalid Base64 input";
      }
    });
  });
  