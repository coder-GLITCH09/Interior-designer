const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

function appointmentMsg(){
  const note = document.getElementById("apptNote");
  note.textContent = "✅ Appointment request received! We will contact you soon.";
}

function handleSubmit(e){
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "✅ Message sent successfully (demo).";
  e.target.reset();
  return false;
}
