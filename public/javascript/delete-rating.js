// const deleteRatingHandler = async function (event) {
//     console.log("clicked", event)
//     event.preventDefault();
//     const ratingId = document.getElementById('post-id')

//     fetch("/api/post/" + ratingId.value, {
//         method: "delete"
//     })
//         .then(function () {
//             document.location.replace("/homepage");
//         })
//         .catch(err => console.log(err))
// }

// document.querySelector("#delete-btn").addEventListener("click", deleteRatingHandler);