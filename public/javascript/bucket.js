

async function bucketFormHandler(event){
    event.preventDefault();

    const bucketButton = document.querySelector('#addBucket').addEventListener('click', event => {
// {{imdbid}}
        if (bucketButton) {
            const response = await fetch('api/features/bucket', {
                method: 'post',
                body: JSON.stringify({
                    imdbID
                })
            }),
            // headers: { 'Content-Type': 'application/json' }
        }
    })



}