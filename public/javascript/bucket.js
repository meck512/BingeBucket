async function bucketFormHandler(event) {
    event.preventDefault();
    console.log(event.target.dataset.imdb);
    console.log(event.target.dataset.originaltitle);

    const response = await fetch('api/features/bucket', {
        method: 'POST',
        body: JSON.stringify({
            imdb_id: event.target.dataset.imdb,
            originalTitle: event.target.dataset.originaltitle
        }),
        headers: { 'Content-Type': 'application/json' }
    })


}


var allBuckets = document.querySelectorAll('.bucketAddition')
allBuckets.forEach(bucket => {
    bucket.addEventListener('click', bucketFormHandler)
});


