const loadAi = async() => {
const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
const data = await res.json();
const aiTools = data.data.tools;
console.log(aiTools);
displayAiTools(aiTools);
}


const displayAiTools = aiTools =>{
    // console.log(aiTools);

const aiToolsContainer = document.getElementById('aitools-container');

    aiTools.forEach(aiTool => {
        console.log(aiTool);
        // creating div
        const aiToolCard = document.createElement('div');
        aiToolCard.innerHTML = `<div class="card w-96 bg-gray-200 shadow-xl ">
        <figure><img src="${aiTool?.image}" alt="Coming soon" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p>${aiTool.features}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`;
aiToolsContainer.appendChild(aiToolCard);
    });
}





loadAi();