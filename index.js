

    function newcolor(selectedColor) {
      document.body.style.backgroundColor = selectedColor;

      const backgroundClr = { color: selectedColor }; 
      sessionStorage.setItem("backgroundClr", JSON.stringify(backgroundClr));
    }

    window.onload = () => {
      const bgClr = sessionStorage.getItem("backgroundClr");
      if (bgClr) {
        const result = JSON.parse(bgClr);
        document.body.style.backgroundColor = result.color;
        document.getElementById("changecolor").value = result.color;
      }
    };


