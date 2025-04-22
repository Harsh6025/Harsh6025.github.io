const results = {
    Maxwell: 7,
    Tenley: 6
  };

  document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const favCat = document.getElementById('favCat').value;

    if (favCat && name) {
      results[favCat]++;
      showResults();
      document.getElementById('pollForm').remove(); // Remove the form after voting
    }
  });

  function showResults() {
    const pollResults = document.getElementById('pollResults');
    pollResults.innerHTML = `
      <h5>Thank you for voting!</h5>
      <p><strong>Maxwell:</strong> ${results.Maxwell}</p>
      <p><strong>Tenley:</strong> ${results.Tenley}</p>
    `;
  }