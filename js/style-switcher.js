/* ================================ Style Swap Toggle ==================================*/
const styleSwapToggle = document.querySelector(".style-swap-toggle");
styleSwapToggle.addEventListener("click", () =>{
    document.querySelector(".style-swap").classList.toggle("open");
})
/* ================================ hide button - scroll ==================================*/
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-swap").classList.contains("open"))
    {
        document.querySelector(".style-swap").classList.remove("open");
    }
})
/* ================================ color swap ==================================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        {
            style.setAttribute("disabled", "true")
        }
    })
}
