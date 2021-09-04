async function bucketFormHandler(event){
    event.preventDefault();
    console.log(event.target.dataset.imdb)

            const response = await fetch('api/features/bucket', {
                method: 'POST',
                body: JSON.stringify({
                    imdb_id: event.target.dataset.imdb
                    
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(response)
        
}


var allBuckets = document.querySelectorAll('.bucketAddition')
allBuckets.forEach(bucket => {
    bucket.addEventListener('click', bucketFormHandler)
});


