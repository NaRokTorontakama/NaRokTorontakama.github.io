const spanVice = document.getElementById(`spanVice`);
const spanVicePosition = spanVice.getBoundingClientRect();

const bannerVice = document.getElementById(`bannerVice`);
const bannerVicePosition = bannerVice.getBoundingClientRect();

console.log(spanVicePosition);
console.log(bannerVicePosition);

bannerVice.style.left = spanVicePosition.x + `px`;
bannerVice.style.top = spanVicePosition.y + `px`;
