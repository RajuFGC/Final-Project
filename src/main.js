const username = 'RajuFGC'
const direction = 'desc'
const projectsContainer = document.querySelector('.projects--js')
import smallStar from './star-01 1.svg'
import boxIcon from './box.svg'
import gitHubIcon from './github.svg'


console.log('Hey wanna talk send me a message:holyordersol84@gmai.com 😎')

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
  for (let repository of response) {
    const {description, name, stargazers_count, topics, homepage, html_url} = repository; 
    let tags = ``;
    for (let tag of topics) {
        tag += `<li class="bg-gray-400/10 py-1 px-4 rounded font-bold text-sm">${tag}</li>`
    }
    const element = `<article class="rounded-rajuborder md:rounded-rajuborderXL overflow-clip bg-gradient-to-br from-white/10 to white/5 flex flex-col h-full">
    <div class=" h-11 p-4 flex gap-1.5 shadow-innerLight rounded-t-rajuBorder md:rounded-t-rajuborderXL bg-gradient-to-br from-white/10 to white/5 ring-1 ring-inset ring-bg ">
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
    </div>
    <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow ring-1 ring-inset ring-bg">
    <div>
    <header class="flex gap-4 items-center mb-4">
    <h3 class="font-bold text-2xl leading-none">${name}</h3>
    <p class="bg-gray-400/10 py-1 px-4 rounded font-medium leading-none flex items-center gap-0.5 "><img src="${smallStar}" alt="image of a star" class="w-4 h-4">${stargazers_count}</p>
    </header>
    <p class="text-gray-400 font-normal text-xl leading-6 mb-4">${description}</p>
    <ul class="flex gap-2 mb-10 flex-wrap">
    ${tags}
    </ul>
    </div>
    <div class="flex flex-col flex-wrap md:flex-row items-start gap-4">
    <a target ="_blank" rel="noreferrer nofollow" class="bg-bg border-gray-800 border-2 hover:border-rajuRed-500 transition-colors duration-500 text-rajuRed flex gap-3 rounded-xl font-bold text-base md:text-xl py-4 px-5 items-center"  href="${homepage}"><img src="${boxIcon}" class="w-6 h-6" width="24" height="24"  alt="">View demo</a>
    <a target ="_blank" rel="noreferrer nofollow" class="bg-bg border-gray-800 border-2 hover:border-rajuRed-500 transition-colors duration-500 text-rajuRed flex gap-3 rounded-xl font-bold text-base md:text-xl py-4 px-5 items-center" href="${html_url}"><img src="${gitHubIcon}" class="w-6 h-6" width="24" height="24" alt="">Source code</a>
</div>
</div>
</article>`;
if (homepage) projectsContainer.insertAdjacentHTML('afterbegin', element)
    }
}) 
.catch((e) => console.log(e))