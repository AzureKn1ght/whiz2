const gigsList = document.getElementById("gigsContainer");

const init = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/viewJobs";
  let elm = "";

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data.forEach((jobs) => {
      var date = moment(jobs.deadline).format("DD MMM YYYY");
      console.log(jobs);
    

      //Add to element
      elm += `
            <!-- TABLE ROW -->
            <div class="table-row small">
              <!-- TABLE COLUMN -->
              <div class="table-column">
                <!-- TABLE INFORMATION -->
                <div class="table-information">
                  <!-- TABLE TITLE -->
                  <p class="table-title"><a href="gig-info.html?gigId=${jobs._id}&bidding=true" >${jobs.title}</p></a>
                  <!-- /TABLE TITLE -->
                </div>
                <!-- /TABLE INFORMATION -->
              </div>
              <!-- /TABLE COLUMN -->
  
              <!-- TABLE COLUMN -->
              <div class="table-column">
                <!-- TABLE TITLE -->
                <p class="table-text">${jobs.description}</p>
                <!-- /TABLE TITLE -->
              </div>
              <!-- /TABLE COLUMN -->
  
              <!-- TABLE COLUMN -->
              <div class="table-column centered padded-left">
                <!-- TEXT STICKER -->
                <p class="text-sticker void">
                  <!-- TEXT STICKER ICON -->
                  $${jobs.budget}
                </p>
                <!-- /TEXT STICKER -->
              </div>
              <!-- /TABLE COLUMN -->
              <div class="table-column centered">
                <!-- PROGRESS STAT WRAP -->
                <p class="text-sticker void">
                ${date}
                </p>
  
              </div>
              <!-- /TABLE COLUMN -->
            </div>`;
    });

    gigsList.innerHTML = elm;
  } catch (error) {
    console.log(error.message);
  }
};

/* const sessStorage = async (e) => {
  console.log(e);
  onclick="sessStorage('${jobs._id.$oid}')"
  window.sessionStorage.setItem("gigId", e);
  window.location.href = "gig-info.html";
}; */

init();
