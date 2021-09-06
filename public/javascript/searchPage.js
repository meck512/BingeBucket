async function runSearch(userService, UserSearchText) {

    function buildHTMLCard(streamData) {
        const headerCard = `
                <div class="col">
                <div class="card text-white bg-dark mb-3 my-3" style="max-width: 18rem;">
                <img src="` + streamData.posterURLs.original + `" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">` + streamData.originalTitle + `</h5>
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="descriptionButton accordion-button collapsed bg-light" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                            aria-controls="collapseOne">
                            Description
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse bg-secondary" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Bucket List Response Rating: ` + streamData.imdbVoteCount + `. IMDB Rating: ` + streamData.imdbRating + `. ` + streamData.overview + `
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="castButton accordion-button collapsed bg-light" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Cast
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse bg-secondary" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">` + streamData.cast + `</div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card-body d-grid gap-2">
                <button class="add2BucketButton btn btn-primary bucketAddition" data-imdb=`+ streamData.imdbID + ` type="button">Add to Bucket</button>
                `
        let serviceButton = ""
        // for (i = 0; i < streamData.streamingInfo.length; i++) {

        if (!(typeof streamData.streamingInfo.netflix === 'undefined')) {
            serviceButton = serviceButton +
                `
                    
                    <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.netflix.us.link + `">Watch on Netflix</button>
                    

            `
        };

        if (!(typeof streamData.streamingInfo.hulu === 'undefined')) {
            serviceButton = serviceButton +
                `
                
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.hulu.us.link + `">Watch on Hulu</button>
                    <
            `
        }

        if (!(typeof streamData.streamingInfo.prime === 'undefined')) {
            serviceButton = serviceButton +
                `
                    
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.prime.us.link + `">Watch on Prime</button>
                    
               
            `
        }

        if (!(typeof streamData.streamingInfo.showtime === 'undefined')) {
            serviceButton = serviceButton +
                `
                   
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.showtime.us.link + `">Watch on Showtime</button>
                  
            `
        }

        if (!(typeof streamData.streamingInfo.apple === 'undefined')) {
            serviceButton = serviceButton +
                `
                    
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.apple.us.link + `">Watch on Apple</button>
                   
            `
        }

        if (!(typeof streamData.streamingInfo.paramount === 'undefined')) {
            serviceButton = serviceButton +
                `
                    
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.paramount.us.link + `">Watch on Paramount</button>
                  
            `
        }

        if (!(typeof streamData.streamingInfo.disney === 'undefined')) {
            serviceButton = serviceButton +
                `
                  
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.disney.us.link + `">Watch on Disney</button>
                    
            `
        }

        if (!(typeof streamData.streamingInfo.hbo === 'undefined')) {
            serviceButton = serviceButton +
                `
         
                   
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.hbo.us.link + `">Watch on HBO</button>
                  
          
            `
        }

        if (!(typeof streamData.streamingInfo.peacock === 'undefined')) {
            serviceButton = serviceButton +
                `
           
                        <button class="platformLinkButton btn btn-primary" type="button" href="`+ streamData.streamingInfo.peacock.us.link + `">Watch on Peacock</button>
                  
            `
        }

        return headerCard + serviceButton + "</div> </div>";

    };

    const response = await fetch("/search", {
        method: 'POST',
        body: JSON.stringify({
            service: userService,
            searchText: UserSearchText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (data) {

        let cardHTML = "";
        for (i = 0; i < data.length; i++) {
            cardHTML = cardHTML + buildHTMLCard(data[i]);
            console.log()
        };

        var card = document.createElement("div");
       
        card.innerHTML = cardHTML;
        document.getElementById("start-cards").appendChild(card)
    })
};

const userService = localStorage.getItem('service');
const UserSearchText = localStorage.getItem('searchText');

runSearch(userService, UserSearchText);