async function runSearch(event) {
    event.preventDefault();

    const searchText = document.querySelector('input[id="netflixID"]').value.trim();
    console.log(`
    
    in Runsearch`, searchText, `
    
    `);
    localStorage.setItem('service', 'netflix');
    localStorage.setItem('searchText', searchText);
    
    document.location.replace('/search');
};

document.getElementById('searchNetflixButton').addEventListener('click', runSearch);